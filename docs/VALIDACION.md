# Validación de la propuesta 01

Revisión del 12 de noviembre de 2026 en Windows, Node.js 24.20.0 y npm 11.19.0.

## Comprobaciones realizadas

- `npm run build`: compilación estática correcta con Vite 8.3.8.
- `npm install`: auditoría de dependencias sin vulnerabilidades reportadas en la instalación.
- Respuesta HTTP 200 del servidor local; revisión adicional de la compilación con `npm run preview`.
- Navegación por anclas: todos los destinos internos existen; acceso desde inicio a cursos y desde el menú móvil a contacto.
- Selector estándar/automático: actualiza transmisión, mensaje de WhatsApp y duración pendiente de perfeccionamiento automático.
- Orientación de cursos: se comprobaron los resultados básico, intensivo y perfeccionamiento, incluida la consulta de disponibilidad de fin de semana. El resultado se oculta al cambiar respuestas o volver a abrir la guía.
- Menú móvil: apertura, foco en el primer enlace, cierre al elegir sección y cierre con Escape devolviendo el foco al botón.
- Preguntas frecuentes: apertura nativa mediante `details` / `summary`.
- Anchuras revisadas: 320, 390, 768 y escritorio predeterminado de 1280 píxeles; sin desbordamiento horizontal observado.
- Logotipo, encabezado y fotografía de vehículo cargados correctamente al visitar sus secciones.
- Revisión del código por un segundo agente: se corrigieron el recorrido de foco móvil, los colores secundarios señalados y el respeto a movimiento reducido en el orientador.

## Alcance de estas pruebas

La revisión visual se hizo en el navegador integrado de Codex. No se ejecutó una auditoría WCAG completa ni se probaron dispositivos físicos, Safari o todos los navegadores. Se mantuvieron capturas de ventanas representativas en `docs/previews/`; la captura automática de página completa no estuvo disponible.

Los enlaces externos se inspeccionaron sin enviar mensajes, realizar llamadas ni tramitar solicitudes. No se verificó la titularidad de la cuenta de WhatsApp ni la vigencia comercial de horarios, cursos o vehículos.

La versión es local y no sustituye al sitio oficial. No tiene backend, reservas ni cobros. Los datos comerciales pendientes y las fuentes están en `AUDITORIA.md` y `ASSETS.md`.

## Ejecutar de nuevo

```powershell
npm ci
npm run build
npm run dev
```

Desarrollo: `http://127.0.0.1:3000/`. Para revisar `dist/`, usar `npm run preview` en `http://127.0.0.1:3001/`. Los servidores se detienen con `Ctrl+C`.
