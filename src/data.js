// Propuesta privada. Productos transcritos del catálogo público del negocio.
const fields = object => Object.entries(object).map(([clave, valor]) => ({ clave, valor, ayuda: '' }))
export const backup = {
  negocio: fields({ nombre: 'Ángeles', descriptor: 'Flores & Detalles', presentacion: 'Rosas, tulipanes, girasoles y detalles para acompañar tus momentos especiales.', whatsapp: '51951263140', mensaje_inicial: 'Hola Ángeles, quisiera consultar por estos arreglos:', instagram: 'https://www.instagram.com/floresydetallesangeles/', direccion: 'Av. San Martín 105, Miraflores', ciudad: 'Arequipa, Perú' }),
  portada: fields({ etiqueta: 'FLORES & DETALLES · AREQUIPA', titulo: 'Para decirlo', acento: 'con el corazón.', descripcion: 'Hay detalles que dicen más que mil palabras. Encuentra flores para celebrar, agradecer y sorprender a esa persona especial.', boton: 'Explorar los arreglos', nota: 'Un detalle que habla por ti.', historia_titulo: 'Cada ocasión merece un detalle especial.', historia_texto: 'Desde un ramo de tulipanes hasta un box de rosas: descubre las propuestas de Ángeles para regalar flores en Arequipa. Elige una idea y conversa sobre los colores, la dedicatoria y los detalles que te gustaría incluir.' }),
  categorias: ['Rosas', 'Tulipanes', 'Girasoles'].map((nombre, i) => ({ id: nombre.toLowerCase(), nombre, visible: 'SI', orden: i + 1 })),
  productos: [
    ['box-rosas-1', 'Box de Rosas #1', '6 rosas rojas acompañadas de claveles rosados.', 'rosas', 'rosas1'],
    ['tulipanes-florero', 'Tulipanes en Florero', '10 tulipanes en un florero de vidrio.', 'tulipanes', 'tulipanes2'],
    ['box-giramor', 'Box Giramor', '4 rosas amarillas y 4 girasoles en una composición llena de color.', 'girasoles', 'girasoles1'],
    ['calido-amor', 'Cálido Amor', '8 rosas rojas y lilium aromático.', 'rosas', 'rosas4'],
    ['tulipanes-naranjas', 'Ramo de Tulipán #3', '14 tulipanes naranjas, envueltos para regalar.', 'tulipanes', 'tulipanes4'],
    ['nautica', 'Náutica', '4 girasoles grandes y 5 rosas rojas en un box.', 'girasoles', 'girasoles3'],
    ['encantada', 'Encantada', '12 rosas con un peluche de amor en un box de cartera.', 'rosas', 'rosas6'],
    ['tulipanes-colores', 'Ramo de Tulipanes', '12 tulipanes de colores para sorprender.', 'tulipanes', 'tulipanes6'],
    ['florero-girasoles', 'Florero con Girasoles', '3 girasoles y follaje en un florero de vidrio.', 'girasoles', 'girasoles6'],
  ].map(([id, nombre, descripcion, categoria, imagen], i) => ({ id, nombre, descripcion, precio: '', categoria, disponible: 'SI', visible: 'SI', destacado: i < 3 ? 'SI' : 'NO', orden: i + 1, imagen, consultar_precio: 'SI' })),
  informacion: fields({ horario: 'Horario de atención por confirmar.', reparto: 'Consulta la zona de entrega, la fecha y el costo de reparto antes de confirmar tu arreglo.', anticipacion: 'Indica la fecha que tienes en mente. La florería debe confirmar disponibilidad y tiempo de preparación.', personalizacion: 'Puedes escribir una dedicatoria en tu consulta. Los cambios de flores, colores y complementos se coordinan con la florería.' }),
  preguntas: [
    { id: 'precio', pregunta: '¿Cómo puedo conocer el precio?', respuesta: 'Agrega el arreglo que te interesa y prepara tu consulta. La florería confirma el precio y la disponibilidad antes de cerrar el pedido.', visible: 'SI', orden: 1 },
    { id: 'entrega', pregunta: '¿Puedo solicitar entrega a domicilio?', respuesta: 'Selecciona delivery e indica la fecha deseada en tu consulta. La cobertura, el horario y el costo de entrega están pendientes de confirmación.', visible: 'SI', orden: 2 },
    { id: 'personalizado', pregunta: '¿Puedo pedir un detalle personalizado?', respuesta: 'El catálogo publicado incluye regalos personalizados. Cuéntanos la ocasión y tu idea en las notas de la consulta para coordinar las opciones.', visible: 'SI', orden: 3 },
  ],
}

// Encuadres de fotografías integradas en las láminas originales, sin alterar los archivos.
export const images = {}
for (const [group, height, top, bottom] of [['rosas', 800, 155, 477], ['tulipanes', 795, 153, 475], ['girasoles', 849, 152, 474]]) {
  for (let i = 0; i < 6; i++) images[group + (i + 1)] = { src: '/media/catalogo-' + group + '.jpg', size: [606, height], crop: [[45, 222, 401][i % 3], i < 3 ? top : bottom, 163, 194] }
}
// Fotografías de referencia reconstruidas con IA, no recortes ampliados del catálogo.
for (const key of ['rosas1','rosas4','rosas6','tulipanes2','tulipanes4','tulipanes6','girasoles1','girasoles3','girasoles6']) images[key] = { src: '/media/' + key + '-hd.webp', size: [1122,1402], crop: [0,0,1122,1402] }
export const imageFor = key => images[key]?.src ?? '/media/pendiente.svg'
export const valuesOf = rows => Object.fromEntries(rows.map(row => [row.clave, row.valor]))
export const demoMode = true
