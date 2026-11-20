import test from 'node:test'
import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { backup, images, valuesOf, demoMode } from '../src/data.js'
import { sources, testWhatsApp } from '../src/config.js'
import { validateSection, parseSection, loadSection, resolveItems, orderMessage, whatsappLink } from '../src/content.js'

test('las seis secciones cumplen el contrato del catálogo y se pueden importar como CSV', () => {
  for (const [section, rows] of Object.entries(backup)) {
    const quote = value => '"' + String(value).replaceAll('"', '""') + '"'
    const headers = Object.keys(rows[0])
    const csv = [headers.join(','), ...rows.map(row => headers.map(key => quote(row[key])).join(','))].join('\n')
    assert.deepEqual(parseSection(section, csv), validateSection(section, rows))
  }
})
test('las seis secciones cargan y almacenan únicamente la hoja propia de Ángeles', async () => {
  const cache = new Map()
  for (const section of Object.keys(backup)) {
    const url = new URL(sources[section])
    assert.equal(url.hostname, 'docs.google.com')
    assert.ok(url.pathname.includes('2PACX-1vSLG5GQ5R348n5TBM0p_yrBP8vWpOw-WCc0IvjgR5r6K9WCnindnbMr0-hm0Kly1RxaLH9nYoqzB1la'))
    const quote = value => '"' + String(value).replaceAll('"', '""') + '"'
    const headers = Object.keys(backup[section][0])
    const csv = [headers.join(','), ...backup[section].map(row => headers.map(key => quote(row[key])).join(','))].join('\n')
    const storage = () => ({ getItem: key => cache.get(key), setItem: (key, value) => cache.set(key, value) })
    const result = await loadSection(section, { storage, fetcher: async actualUrl => {
      assert.equal(actualUrl, sources[section])
      return { ok: true, text: async () => csv }
    } })
    assert.equal(result.source, 'sheets')
    assert.equal(result.stale, false)
    assert.deepEqual(result.rows, validateSection(section, backup[section]))
    const cached = await loadSection(section, { storage, fetcher: () => { throw Error('No debe consultar otra vez una caché vigente') } })
    assert.equal(cached.source, 'cache')
  }
})
test('un CSV inválido no reemplaza la sección de respaldo', async () => {
  const result = await loadSection('productos', { storage: () => ({ getItem: () => null }), fetcher: async () => ({ ok: true, text: async () => '<html>Acceso denegado</html>' }) })
  assert.equal(result.source, 'backup')
  assert.equal(result.stale, true)
  assert.equal(result.rows, backup.productos)
})
test('productos enlazados a categorías e imágenes, sin precios o stock comercial inventados', async () => {
  const categories = new Set(backup.categorias.map(row => row.id))
  assert.equal(new Set(backup.productos.map(row => row.id)).size, backup.productos.length)
  for (const product of backup.productos) {
    assert.ok(categories.has(product.categoria))
    assert.equal(product.precio, '')
    assert.equal(product.consultar_precio, 'SI')
    const asset = images[product.imagen]
    assert.ok(asset)
    const [x, y, w, h] = asset.crop
    assert.ok(x >= 0 && y >= 0 && x + w <= asset.size[0] && y + h <= asset.size[1])
    await access(new URL('../public' + asset.src, import.meta.url))
  }
})
test('la consulta conserva cantidades y dedicatoria, usa Bryan y no envía automáticamente', () => {
  assert.equal(demoMode, true)
  const business = valuesOf(backup.negocio)
  assert.notEqual(testWhatsApp, business.whatsapp)
  const items = resolveItems({ 'box-rosas-1': 2 }, backup.productos)
  const message = orderMessage(business, items, { modalidad: 'Delivery', fecha: '2026-12-01', dedicatoria: 'Para ti & para mí 🌹', notas: '' })
  const url = new URL(whatsappLink(testWhatsApp, message))
  assert.equal(url.pathname, '/51964527152')
  assert.equal(url.searchParams.get('text'), message)
  assert.ok(message.includes('2 × Box de Rosas #1 · por cotizar'))
  assert.ok(message.includes('Para ti & para mí 🌹'))
  assert.ok(!message.includes('S/'))
})
test('un arreglo retirado queda excluido del mensaje', () => {
  const old = backup.productos[0]
  const items = resolveItems({ [old.id]: 1 }, [], new Map([[old.id, old]]))
  assert.equal(items[0].excluded, true)
  assert.ok(!orderMessage(valuesOf(backup.negocio), items, { modalidad: 'Delivery' }).includes(old.nombre))
})
