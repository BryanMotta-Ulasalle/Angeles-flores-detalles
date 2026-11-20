# Revisión del avance

19 de noviembre de 2026.

- Compilación de producción completada y cinco pruebas automatizadas aprobadas.
- Revisión visual en navegador local a 1440 × 1000 y 390 × 844; comprobación adicional a 820 y 320 píxeles. Sin desbordamiento horizontal observado ni imágenes fallidas.
- Se corrigió el cruce de la leyenda inferior con la segunda fotografía de portada y se volvió a capturar.
- Catálogo de nueve productos; filtro de tulipanes devuelve tres; búsqueda de «naranjas» devuelve un arreglo.
- Consulta con producto y dedicatoria revisada en móvil. Destino comprobado: wa.me/51964527152. Mensaje identificado como prueba de propuesta Ángeles. No se abrió ni envió un mensaje real a WhatsApp.
- Formulario sin desbordamiento, controles etiquetados, foco visible, cierre del diálogo mediante Escape verificado. Las preferencias de movimiento reducido están contempladas.
- Capturas de portada de escritorio y móvil, catálogo móvil y mensaje guardadas en la carpeta de resultados `outputs/angeles-avance` junto al proyecto.
- Publicación privada en Sites. El acceso remoto pide iniciar sesión; la revisión visual se realizó sobre el mismo código en el navegador local, no detrás de la pantalla de acceso.
- Hoja de administración propia pendiente de configurar; fuentes CSV vacías. Imágenes de catálogo de resolución reducida: solicitar originales para el lanzamiento.

Esta revisión no sustituye la confirmación comercial de productos, precios, disponibilidad, horario y entregas por parte del negocio.

## Revisión de imágenes y logo

Se reemplazó el logo del navbar por una reconstrucción PNG transparente de 1774 × 887, sin texto HTML duplicado. Se verificó el canal alfa. Las nueve imágenes activas son referencias recreadas con IA a 1122 × 1402, servidas como WebP de 111–256 KB aproximadamente. Se revisaron visualmente las nueve imágenes, la portada y el catálogo a 1440 y 390 píxeles. Sin imágenes fallidas ni desbordamiento observado. Se verificó también la miniatura de la consulta. Capturas: escritorio-hd.jpg, movil-hd.jpg, catalogo-escritorio-hd.jpg y catalogo-movil-hd.jpg en outputs/angeles-avance.

## Conexión a Google Sheets, 20/11/2026

Se validaron los seis CSV públicos enviados por Bryan y se conectaron por sus cabeceras y claves. Filas: negocio 8, portada 8, categorias 3, productos 9, informacion 4, preguntas 3. Los nueve productos tienen disponible=NO y consultar_precio=SI en la fuente. Se conserva la hoja sin alterar sus datos. Verificación en navegador: nueve productos, nueve botones deshabilitados y ningún aviso de contenido de respaldo tras cargar. Caché y validación por sección comprobadas con seis pruebas automatizadas. WhatsApp sigue en modo de prueba. Captura en outputs/angeles-conexion/catalogo-conectado.jpg.

## WhatsApp del cliente, 20/11/2026

Activado por instrucción de Bryan: demoMode=false. La fuente negocio publica 51951263140 y coincide con el número de respaldo. Se retiraron la marca PRUEBA del mensaje y los textos que dirigían a Bryan. Verificado en navegador con Box de Rosas #1 a S/40, cantidad y subtotal: enlace wa.me/51951263140, mensaje sin prefijo de prueba. No se abrió WhatsApp ni se envió ningún mensaje. Compilación y seis pruebas aprobadas.
