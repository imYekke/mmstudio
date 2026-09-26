# V2 — Authenticity Pass frente al golden master

Revisión: 26 de septiembre de 2026.

## Referencia fija

- V1: `../mmworks/`, rama `main`, etiqueta `v1-golden-master`.
- Commit protegido: `e83e33d1ec80fb82f84c0a7c94781f0f2e257493`.
- V2: esta carpeta, rama `v2`; servidor local en el puerto 3101.
- V1 sigue sin cambios. Ninguna publicación, operación remota ni modificación de servicios externos.

## Cambios concretos

| Área | V1 | V2 |
| --- | --- | --- |
| Marca | Firma tipográfica provisional | Archivo oficial con Rhino amarillo, MM WORKS y MAKE IDEAS WORK.™. Header, footer y favicon. Logo enlazado a un correo preparado y editable. |
| Idioma | Algunos rótulos comerciales en inglés | Rótulos y explicaciones en español. Se conservan la firma y los nombres de conceptos, principios de marca y series editoriales. |
| Juan Domingo | Póster naranja conceptual y descripción general | Visual empleado en su proyecto, «No corres solo», alcance de ADN Runner y aviso concreto sobre el catálogo de demostración. |
| BRKET | Póster violeta conceptual «Next Match» | Amarillo y gris del proyecto, captura real del sistema de diseño y alcance limitado a la fase actual. |
| Otros proyectos | Descripciones de territorio | TramiCalma, Hausfix y BuddyPadel con trabajo y estado documentados. Solo TramiCalma enlaza a una web pública verificada. |
| MM//WORLD | Composiciones de ejemplo | Portadas originales «Que se adapte la web» y «Colores que trabajan», más el proceso conceptual de la Home. |
| PROOF | Texto sobre futuras pruebas | Hechos verificables de TramiCalma, Juan Domingo y BRKET, sin cifras, testimonios o resultados inventados. |
| Detalles | Diálogo genérico | Alcance, fase, imágenes disponibles y enlace verificado de cada proyecto. |
| Adaptación | Marca provisional pequeña; menú a 600 px | Tamaños del logo oficial, proporción 4:5 de portadas, imágenes fluidas en detalle y menú desde 800 px para dejar espacio a la nueva firma. |

## Núcleo conservado

Orden intacto: BREAK THE FORMAT → THE IDEA MACHINE → NOTHING TO SHOW YET → proyectos → disciplinas → mindset → MM//WORLD → PROOF → CTA.

Las imágenes originales del hero y la máquina son idénticas a V1. Se mantienen sus titulares, composición y comportamiento, igual que la transición azul con sello amarillo. En estas primeras piezas solo se traduce texto auxiliar y se elimina un símbolo de registro no acreditado. Continúan la paleta general oscura/azul/hueso, las tipografías, la escala editorial, el ritmo asimétrico y la navegación de V1.

## Comparación y decisión

**Comprobado:** contraste de archivos contra la etiqueta fija, fuentes de contenido, integridad de imágenes, revisión de código adaptable, comprobación de tipos y compilación. El contenido presenta ahora proyectos y material propios; los límites de cada fase quedan explícitos.

**Pendiente:** comparación visual V1/V2 a 1440 × 900 y 390 × 844, con una pasada adicional de cabecera a 800 px. Debe comprobarse el encuadre completo del logo, fuerza de los dos pósteres, lectura de portadas, ausencia de desbordamientos y uso de menú, acordeones y diálogos con teclado. El navegador no pudo verificar la política de seguridad del entorno en los dos intentos; no se ha eludido ese control. No se aportan capturas ni mediciones de V2 que no se hayan realizado.

**Decisión: REVISAR.** Candidata implementada y compilada. No se declara que V2 supere visualmente a V1 ni se acepta el cambio para producción hasta completar esa comparación. Presentar este conjunto antes de continuar con nuevas modificaciones. Si una composición pierde fuerza, ajustar o descartar únicamente ese cambio en V2.

## Consulta local

```sh
git diff v1-golden-master -- src public
```

Fuentes en `authenticity-sources.md`; comprobaciones en `authenticity-validation.md`.
