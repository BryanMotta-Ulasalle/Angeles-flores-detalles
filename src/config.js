// Seis pestañas públicas propias de Ángeles. La hoja no debe contener datos privados.
const sheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSLG5GQ5R348n5TBM0p_yrBP8vWpOw-WCc0IvjgR5r6K9WCnindnbMr0-hm0Kly1RxaLH9nYoqzB1la/pub'
const csv = gid => sheet + '?gid=' + gid + '&single=true&output=csv'
export const sources = {
  negocio: csv('1286177338'),
  portada: csv('1452837431'),
  categorias: csv('737551402'),
  productos: csv('1902616667'),
  informacion: csv('880392917'),
  preguntas: csv('917266024'),
}
export const refreshMs = 10 * 60 * 1000
export const timeoutMs = 8000
// Número de Bryan autorizado para pruebas. No envía pedidos al negocio.
export const testWhatsApp = '51964527152'
