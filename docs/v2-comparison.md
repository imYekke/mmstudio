# Comparación V2 frente al golden master

## Referencia fija

- V1: etiqueta `v1-golden-master`.
- Commit: `e83e33d1ec80fb82f84c0a7c94781f0f2e257493`.
- Copia V1: `../mmworks/`.
- Copia de trabajo V2: esta carpeta, rama `v2`.

## Estado inicial

V2 parte exactamente del código, contenido y assets de V1. Solo se han añadido instrucciones de trabajo y este registro. No hay cambios visuales o funcionales ni mejoras aceptadas todavía. No está autorizada la publicación.

## Registro por propuesta

Para cada propuesta, documentar:

1. Qué se quiere mejorar y por qué.
2. Cambios realizados exclusivamente en V2.
3. Comparación frente a V1 en las mismas condiciones: viewport, sección y estado de interacción. Guardar capturas cuando ayuden a evaluar la diferencia.
4. Efecto en concepto, identidad, jerarquía, copy, uso, accesibilidad y rendimiento relevante. No inventar mediciones.
5. Decisión: aceptar, revisar o descartar, con su motivo.

No dar por aceptada una propuesta porque funcione, compile o sea distinta. Si debilita el concepto, se descarta. La versión de producción requiere una superioridad clara respecto a V1 y confirmación expresa del usuario.

## Comparación de archivos

Desde esta copia de V2:

```sh
git diff v1-golden-master -- src public package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json
```

La comparación visual complementa la comparación de código; ninguna sustituye a la otra.
