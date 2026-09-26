# MM WORKS — V2 / golden master protegido

## Regla de proyecto aprobada por el usuario

- V1 es la baseline bloqueada: `../mmworks/`, rama `main`, etiqueta `v1-golden-master`, commit `e83e33d1ec80fb82f84c0a7c94781f0f2e257493`.
- No modificar archivos de V1. No mover, sustituir ni eliminar la etiqueta `v1-golden-master`. No avanzar `main` como parte del trabajo de V2.
- Todos los cambios se hacen exclusivamente en esta copia, `mmworks-v2/`, rama `v2`, o en ramas de trabajo derivadas de V2 dentro de su propia copia.
- Antes de editar, comprobar la carpeta, la rama y el estado de Git. No trabajar en la copia de V1 por comodidad.
- Antes de aceptar una mejora, comparar con `v1-golden-master`: concepto, jerarquía, copy, composición, navegación, respuesta en móvil y comportamiento. Una mejora técnica aislada no justifica degradar la identidad.
- Registrar el cambio, la comparación y la decisión en `docs/v2-comparison.md`. Separar observaciones comprobadas de hipótesis.
- Si algo empeora el concepto, descartar ese cambio solo en V2 sin sobrescribir trabajo ajeno. Mantener V1 intacta como referencia.
- Producción solo cuando V2 supere claramente a la base y el usuario confirme explícitamente la publicación. No crear ni modificar repositorios remotos, servicios externos o despliegues sin autorización.
- Para comparar ambas versiones a la vez, usar V1 en el puerto 3100 y V2 en un puerto distinto, por ejemplo `npm run dev -- --port 3101`. Mantener dependencias y cachés de compilación independientes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
