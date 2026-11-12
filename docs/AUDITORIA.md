# AMA Cuernavaca: auditoría y primera propuesta

Fecha de revisión: 12 de noviembre de 2026.

Fuente principal: [sitio actual de AMA](https://www.amacuernavaca.com/). Se revisaron su contenido público, HTML, enlaces y estructura. Esta auditoría no incluye mediciones de rendimiento, analítica, pruebas de envío del formulario ni una evaluación completa de accesibilidad del sitio original.

## Diagnóstico

La propuesta debe facilitar una decisión: elegir un curso y ponerse en contacto. El orden recomendado da prioridad a esa tarea y después desarrolla la presentación institucional.

| Prioridad | Hallazgo en el sitio actual                                | Mejora propuesta                                                                           |
| --------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Alta      | La oferta se presenta en listas separadas por transmisión. | Reunir las modalidades en tarjetas comparables y permitir elegir estándar o automático.    |
| Alta      | Existen datos de duración incompletos.                     | Mostrar únicamente información explícita; solicitar confirmación de los campos pendientes. |
| Alta      | El mensaje de WhatsApp menciona otra marca: ADN.           | Preparar un mensaje que identifique AMA y el curso elegido.                                |
| Media     | La introducción acumula párrafos extensos.                 | Usar un título breve, un beneficio central y una acción visible.                           |
| Media     | Se mezclan servicios complementarios con el aprendizaje.   | Darles una sección secundaria para mantener clara la ruta principal.                       |
| Media     | Aparece el rótulo inglés «Contact Us».                     | Unificar la experiencia en español y usar etiquetas de acción concretas.                   |

El menú actual contiene cuatro anclas. Conviene conservar su sencillez y revisar etiquetas y orden.

## Arquitectura propuesta

1. **Inicio:** beneficio central, fotografía de la escuela y acceso a cursos/contacto.
2. **Cursos:** comparación de modalidades y selector de transmisión.
3. **Por qué AMA:** explicación breve del acompañamiento y la experiencia de aprendizaje.
4. **Preguntas:** dudas para orientar la selección, sin inventar políticas comerciales.
5. **Contacto:** teléfono, WhatsApp, dirección, horario y enlace a indicaciones.

Los servicios complementarios pueden permanecer cerca del cierre, con una consulta directa. En móvil, conviene un menú compacto, botones táctiles cómodos y contacto fácil de encontrar.

## Datos publicados que pueden conservarse

Estos datos fueron encontrados en el sitio; no constituyen una comprobación independiente de la operación del negocio.

| Dato              | Contenido publicado                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Teléfono          | 777 257 9799                                                                             |
| Correo            | amaescuela.mor@gmail.com                                                                 |
| Dirección         | Emiliano Zapata 218, Tlaltenango, Cuernavaca, Morelos, 62170                             |
| Atención          | Lunes a viernes 09:00–18:30; sábado 09:00–15:00; domingo cerrado                         |
| Básico            | 10 horas, en estándar y automático                                                       |
| Perfeccionamiento | Estándar: 4 horas; automático: duración omitida                                          |
| Intensivo         | Se publican 4 horas el sábado y 4 el domingo; el campo de duración total está incompleto |

El sitio anuncia atención a personas nerviosas, trayectoria y doble control: son **afirmaciones comerciales pendientes de validación con AMA**. Tampoco se verificaron disponibilidad, precios ni condiciones.

## Enlaces de contacto existentes

- [WhatsApp publicado](https://wa.me/5217772579799): se comprobó el destino del enlace, sin enviar mensajes ni comprobar la titularidad de la cuenta.
- [Ubicación publicada en Google Maps](https://maps.google.com/maps?q=18.944230%2c+-99.242560): destino extraído del sitio.
- Teléfono para enlazar: `tel:+527772579799`.
- Correo para enlazar: `mailto:amaescuela.mor@gmail.com`.

## Criterios de la primera versión

- Mantener una identidad reconocible, con tipografía legible, contraste suficiente y espacio entre bloques.
- Crear una jerarquía coherente de encabezados y navegación por teclado.
- Adaptar el diseño a pantallas pequeñas sin desplazamiento horizontal.
- Hacer que cada acción lleve a un destino real; evitar formularios que aparenten enviar sin integración.
- Indicar expresamente los datos pendientes de confirmación.
- No añadir reseñas, resultados garantizados, precios, certificaciones o políticas sin respaldo.

## Validaciones antes de publicar como sitio oficial

Confirmar con AMA las duraciones incompletas, precios, disponibilidad, requisitos de inscripción, alcance de servicios complementarios y derechos de las fotografías. Si posteriormente se capturan datos personales, definir el aviso de privacidad y el tratamiento correspondiente antes de habilitar el formulario.
