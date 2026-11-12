# Primera propuesta de diseño y navegación

AMA Cuernavaca · Versión 01 · 12 de noviembre de 2026.

Referencia: [sitio actual](https://www.amacuernavaca.com/). Consulta también la [auditoría](AUDITORIA.md) y las [fuentes de imágenes](ASSETS.md).

## Objetivo

Ayudar a una persona que quiere aprender a manejar a reconocer su necesidad, comparar cursos y ponerse en contacto con AMA. La atención a personas nerviosas guía el tono: mensajes breves, cercanos y orientados a dar el primer paso.

## Dirección visual

La propuesta conserva el emblema AMA y el amarillo como acento reconocible. El fondo crema aporta calma; el verde oscuro da contraste a títulos, botones y bloques de contenido. DM Sans facilita la lectura y DM Serif Display en cursiva destaca frases centrales.

La fotografía del encabezado mantiene una referencia visual del sitio actual. Una segunda imagen muestra un automóvil publicado por AMA. Los espacios amplios, los encabezados cortos y las llamadas a la acción consistentes organizan la lectura.

## Mejoras frente a la página actual

| Situación observada                                         | Propuesta implementada                                                 |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| Introducción extensa antes de comparar la oferta            | Un beneficio central y acceso inmediato a cursos y WhatsApp            |
| Listas separadas para cada transmisión                      | Tres modalidades comparables y un selector estándar/automático         |
| Duraciones incompletas                                      | Mostrar los datos disponibles y pedir consulta donde falta información |
| Mensaje de WhatsApp que menciona ADN                        | Mensajes que identifican a AMA y el curso o servicio elegido           |
| Servicios complementarios mezclados con la oferta principal | Bloque secundario después del proceso para empezar                     |
| Dudas sin una ruta específica                               | Preguntas frecuentes y orientación breve para elegir un curso          |

## Ruta de navegación

El menú principal contiene **Cursos de manejo**, **Por qué AMA**, **Cómo empezar** y **Contacto**. El logotipo regresa al inicio. La navegación permanece visible al desplazarse y se convierte en un menú desplegable en móvil.

La página sigue esta secuencia:

1. **Inicio:** beneficio, acompañamiento y entrada a cursos o contacto.
2. **Cursos:** modalidad, duración publicada, características y consulta personalizada.
3. **Por qué AMA:** paciencia, doble control y experiencia anunciados por la escuela.
4. **Cómo empezar:** conversación inicial, elección del curso y comienzo de clases.
5. **Servicios complementarios:** licencia federal, permiso internacional, taller y grúas.
6. **Preguntas frecuentes:** nervios, transmisión, educación vial, precio y reserva.
7. **Contacto:** WhatsApp, llamada, correo, dirección, horarios y enlace a Maps.

Las acciones de curso preparan el mensaje con la modalidad y transmisión seleccionadas. La guía «No sé qué curso elegir» orienta con dos preguntas; la disponibilidad real siempre se confirma con AMA.

## Experiencia móvil y accesibilidad

En pantallas pequeñas los cursos se muestran en una columna. Se conservan las acciones de contacto, el control del menú anuncia su estado y Escape permite cerrarlo. El diálogo utiliza el comportamiento modal nativo del navegador. Las preguntas se construyen con `details` y `summary`.

La propuesta incluye navegación por teclado, foco visible, texto alternativo, enlace para saltar al contenido y una variante sin desplazamiento animado cuando el sistema solicita movimiento reducido. Esto establece una base de accesibilidad; no equivale a una certificación ni sustituye una auditoría completa.

## Siguiente iteración

Validar con AMA la vigencia de los datos y las imágenes, completar duraciones y requisitos, y confirmar precios y disponibilidad. Con esa información podrá ajustarse el contenido de las tarjetas y la orientación de cursos.

Para un lanzamiento oficial conviene definir la plataforma de publicación, revisar SEO y metadatos, y retirar `noindex` únicamente cuando la versión pública esté aprobada. Si se incorpora un formulario o reservas, deberá desarrollarse su integración y la información de privacidad antes de recopilar datos.

La versión actual no cambia el sitio oficial ni envía mensajes por cuenta del visitante.
