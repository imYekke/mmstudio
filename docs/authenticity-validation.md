# V2 — validación del Authenticity Pass

26 de septiembre de 2026. Esta revisión solo valida V2; no sustituye la aceptación visual frente a V1.

## Comprobaciones realizadas

- `npm run typecheck`: correcto.
- `npm run build`: correcto tras el último ajuste. Next.js compila, comprueba TypeScript y genera la Home estática.
- Servidor de desarrollo V2 en `http://127.0.0.1:3101/`: respuesta HTTP 200.
- HTML generado: nueve secciones en el orden aprobado, un H1, idioma español y 31 identificadores únicos. Todas las anclas locales tienen destino.
- Nueve imágenes del HTML inicial: archivos locales existentes y atributo alternativo presente; las decorativas mantienen texto vacío intencionadamente.
- Cinco enlaces mailto: dirección, asunto y cuerpo en español verificados. Ambos logos son enlaces con nombre accesible. No se ha enviado ningún correo.
- Cinco archivos incorporados: sus SHA-256 coinciden con los originales. Hero y máquina idénticos a V1; funciones de movimiento del hero y la transición sin cambios.
- Revisión del código adaptable: logo con tamaños propios, menú a 800 px, imágenes fluidas en detalles y portadas 4:5. Esto no certifica el resultado visual.
- V1: árbol limpio, mismo HEAD que el golden master y sin diferencias de contenido contra la etiqueta protegida.
- `git diff --check`: correcto.

Resultados estructurados en `authenticity-checks.json`; procedencia y huellas en `authenticity-assets.json`.

## Bloqueo de navegador

Se intentó abrir V2 dos veces mediante el navegador permitido. Ambos intentos fallaron porque no se pudo verificar una política de seguridad impuesta por el entorno. No se desactivó ni se rodeó ese control, ni se utilizó otro motor para sustituirlo.

Por tanto, **no están realizadas en V2** las pruebas visuales de escritorio/móvil, la comprobación real de desbordamientos, la consola del navegador ni la interacción de menú, acordeones y diálogos. Las verificaciones visuales históricas de V1 no se atribuyen a V2. No hay capturas nuevas de la página.

## Revisión que falta

Comparar V1 y V2 en el mismo navegador a 1440 × 900 y 390 × 844; revisar además la cabecera a 800 px. Comprobar logo completo, lectura y fuerza editorial de proyectos y MM//WORLD, navegación, foco y cierre con Escape, desplazamiento natural y movimiento reducido. La candidata queda en **REVISAR**, sin aceptación de superioridad frente a V1 ni autorización de producción.
