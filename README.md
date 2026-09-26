# MM WORKS — Home v1

Primera versión navegable de la web propia de MM WORKS. Desktop primero, contenido comercial en español y nueve secciones en el orden aprobado.

## Desarrollo local

Requiere Node.js 22 o posterior.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:3100. El servidor se limita a la máquina local.

```sh
npm run typecheck
npm run build
npm start
```

`npm start` utiliza el mismo puerto que desarrollo; detener primero `npm run dev` si está activo.

## Base técnica

- Next.js App Router y TypeScript estricto.
- Tailwind CSS 4 y tokens visuales propios.
- Motion para movimiento ligado al scroll, con preferencia de movimiento reducido.
- Tipografías locales: Barlow Condensed y Manrope; sin peticiones a Google Fonts.
- Imágenes optimizadas con Next Image. La imagen de portada carga inmediatamente; las demás, bajo demanda.
- Navegación por anclas, acordeón accesible y diálogos nativos con Escape y retorno de foco.
- Correo preparado y editable en todos los enlaces de contacto. No se envía nada desde la web.
- Sin backend, formularios de envío, cookies de seguimiento ni dependencias de servicios externos.

## Contenido y diseño

- `src/app/page.tsx`: estructura de las nueve secciones.
- `src/app/globals.css`: sistema visual y adaptación a pantallas.
- `src/lib/content.ts`: proyectos, disciplinas, artículos y contacto.
- `src/components/interactive.tsx`: navegación, movimiento y detalles.
- `docs/direction.md`: dirección creativa y copy inicial.
- `docs/image-prompts.md`: prompts y procedencia de las imágenes.
- `public/images/`: los dos assets generados para esta versión.

## Pendiente de contenido definitivo

El original de Rhino/logo no estaba adjunto. La firma tipográfica es provisional. Juan Domingo y BRKET se muestran mediante composiciones conceptuales claramente identificadas; el archivo incluye también TramiCalma, Hausfix y BuddyPádel. Los detalles describen territorios del proyecto, no entregables verificados. Sustituirlos por material original y casos aprobados antes de publicar. PROOF no inventa métricas, testimonios ni resultados.

## GitHub y Vercel

El código está preparado para un repositorio propio cuya raíz sea esta carpeta. Incluye comprobación de tipos y compilación en GitHub Actions. No se ha creado ni conectado ningún repositorio remoto.

Tras autorización, subir el repositorio a GitHub y conectarlo a Vercel usando el preset Next.js, instalación `npm ci`, compilación `npm run build` y Node.js 22. No requiere variables de entorno. Si se sube la carpeta contenedora, seleccionar `mmworks` como Root Directory y adaptar el workflow a esa ubicación.

La versión actual incluye `noindex, nofollow`. Al aprobar la publicación definitiva, reemplazarlo y añadir el dominio confirmado, canonical y sitemap. La compilación de producción se ha validado localmente; no se ha desplegado.

Referencias técnicas: [Next.js](https://nextjs.org/docs/app/getting-started/installation), [Motion y movimiento reducido](https://motion.dev/docs/react-use-reduced-motion).
