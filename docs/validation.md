# Revisión de Home v1

26 de septiembre de 2026.

## Comprobaciones realizadas
- TypeScript: sin errores.
- Compilación de producción: Home prerenderizada, sin backend necesario.
- Revisión visual de portada, máquina y MM//WORLD en navegador desktop.
- Revisión visual de portada móvil (390 × 844).
- Sin desbordamiento horizontal en desktop, 390 px y 768 px.
- Nueve secciones y un único h1.
- Todas las anclas apuntan a elementos existentes.
- Detalle de Juan Domingo abre, atrapa el foco con diálogo nativo y cierra con Escape devolviendo el foco al botón de origen.
- El acordeón abre Webs & experiencias y expone correctamente aria-expanded.
- El artículo MM//BREAKDOWN abre y muestra el texto completo.
- El menú móvil abre, permite navegar y se cierra tras seleccionar destino.
- Enlaces mailto con destinatario, asunto y cuerpo codificados; no se accionó ningún cliente de correo ni se envió ningún mensaje.
- Sin errores de JavaScript observados. Se corrigió el aviso inicial de prioridad de carga del hero.
- La preferencia de movimiento reducido se respeta en CSS y en ambos efectos de Motion; no se alteraron las preferencias del sistema para comprobarla.

## Límites
Revisión local, no auditoría exhaustiva de accesibilidad ni medición de rendimiento en producción. GitHub y Vercel aún no están conectados. Los originales de marca y las evidencias de proyectos siguen pendientes. El prototipo permanece noindex.
