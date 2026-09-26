# MM WORKS — V2 / Authenticity Pass

Home con marca oficial, copy comercial en español y proyectos documentados. Mantiene las nueve secciones y las tres piezas centrales de V1.

V1 permanece bloqueada en `../mmworks/`, etiqueta `v1-golden-master`, commit `e83e33d1ec80fb82f84c0a7c94781f0f2e257493`. Los cambios de esta versión pertenecen a la rama `v2`. **Candidata a revisión:** comparación visual de escritorio y móvil pendiente por un bloqueo del navegador del entorno.

## Desarrollo local

Requiere Node.js 22 o posterior. Usar el puerto 3101 para V2; el 3100 queda reservado a V1. Dependencias y cachés independientes.

```sh
npm ci
npm run dev -- --port 3101
```

Abrir http://127.0.0.1:3101. Servidor limitado a la máquina local.

```sh
npm run typecheck
npm run build
npm start -- --port 3101
```

Detener el servidor de desarrollo de V2 antes de ejecutar `npm start` en el mismo puerto.

## Base técnica

- Next.js App Router, TypeScript estricto, Tailwind CSS 4 y Motion.
- Tipografías locales Barlow Condensed y Manrope; sin llamadas a Google Fonts.
- Next Image, carga diferida y preferencia de movimiento reducido.
- Navegación por anclas, acordeón y diálogos nativos.
- Logo y contacto abren un correo preparado y editable; la web no envía mensajes.
- Sin backend, seguimiento ni dependencia de servicios externos.

## Contenido

- `src/app/page.tsx`: estructura de las nueve secciones.
- `src/app/globals.css`: sistema visual y adaptación.
- `src/lib/content.ts`: proyectos, disciplinas, artículos y contacto.
- `src/components/interactive.tsx`: navegación, movimiento y detalles.
- `public/images/`: las dos imágenes conceptuales de V1, conservadas.
- `public/brand/`: firma oficial sin alterar el original.
- `public/projects/`: visual de Juan Domingo y captura real de BRKET.
- `public/world/`: portadas del archivo creativo de MM WORKS.

## Estado de los proyectos

- Juan Domingo: web en desarrollo, ADN Runner implementado y catálogo de demostración pendiente de validar.
- BRKET: arquitectura, sistema de diseño y componentes. La gestión de torneos no se presenta como terminada.
- TramiCalma: web pública de ayuda técnica, diagnósticos y guías.
- Hausfix: web de servicios locales en francés. Sin resultados SEO atribuidos ni publicación actual verificada.
- BuddyPadel: producto de reservas con piloto en preparación.

Las fichas indican alcance y estado. No incluyen métricas comerciales, testimonios ni clientes inventados. MM//WORLD diferencia piezas conceptuales de marca y proyectos.

## Registro de revisión

- `docs/v2-comparison.md`: cambios frente a V1 y decisión pendiente.
- `docs/authenticity-sources.md`: fuentes y límites de cada afirmación.
- `docs/authenticity-assets.json`: procedencia y huellas de los archivos incorporados.
- `docs/authenticity-validation.md`: comprobaciones de esta revisión.
- `docs/direction.md`, `docs/image-prompts.md` y `docs/validation.md`: documentos históricos de V1; sus pruebas visuales no validan V2.

## GitHub y Vercel

Incluye comprobación de tipos y compilación en GitHub Actions. No se ha creado ni conectado un repositorio remoto ni se ha desplegado.

Tras revisión y autorización expresa: preset Next.js, instalación `npm ci`, compilación `npm run build`, Node.js 22 y raíz del repositorio en la carpeta de la versión aprobada. No requiere variables de entorno. Si se sube una carpeta contenedora, adaptar Root Directory y el workflow.

Se conserva `noindex, nofollow`. Dominio definitivo, canonical, sitemap e indexación se resolverán cuando se autorice publicar.
