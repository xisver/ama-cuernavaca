export const contact = {
  phone: "777 257 9799",
  telephone: "tel:+527772579799",
  whatsapp: "https://wa.me/5217772579799",
  email: "amaescuela.mor@gmail.com",
  map: "https://www.google.com/maps/search/?api=1&query=18.944230%2C-99.242560",
};

export function whatsappLink(
  message = "Hola, AMA. Me gustaría recibir información sobre sus cursos de manejo en Cuernavaca.",
) {
  return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const courses = [
  {
    id: "basico",
    number: "01",
    name: "Básico",
    tagline: "Tu primera vez al volante.",
    description:
      "Empieza desde cero y conoce las bases para conducir con seguridad.",
    duration: "10 horas",
    schedule: "2 horas diarias · lunes a viernes",
    features: [
      "Clases teórico-prácticas",
      "Educación vial los sábados",
      "Auto con doble control",
    ],
    recommended: true,
  },
  {
    id: "intensivo",
    number: "02",
    name: "Intensivo",
    tagline: "Tu fin de semana, en marcha.",
    description:
      "Una opción para aprender cuando tu semana está llena de compromisos.",
    duration: "Fin de semana",
    schedule: "4 h el sábado + 4 h el domingo",
    features: [
      "Clases teórico-prácticas",
      "Educación vial los sábados",
      "Auto con doble control",
    ],
  },
  {
    id: "perfeccionamiento",
    number: "03",
    name: "Perfeccionamiento",
    tagline: "Retoma el camino con confianza.",
    description:
      "Para quienes ya manejan y quieren reforzar sus habilidades al volante.",
    duration: "4 horas",
    automaticDuration: "Duración a consultar",
    schedule: "Consulta los horarios disponibles",
    features: [
      "Refuerzo de habilidades",
      "Educación vial los sábados",
      "Auto con doble control",
    ],
  },
];

export const faqs = [
  [
    "¿Puedo tomar clases si me da miedo manejar?",
    "Sí. AMA se especializa en la atención a personas nerviosas. Cuéntanos cómo te sientes y qué experiencia tienes para orientarte sobre el curso más adecuado.",
  ],
  [
    "¿Puedo elegir entre estándar y automático?",
    "Sí. Los cursos básico, intensivo y de perfeccionamiento se ofrecen en ambas transmisiones. Pregunta por la disponibilidad de autos y horarios antes de reservar.",
  ],
  [
    "¿Las clases incluyen educación vial?",
    "Sí. De acuerdo con la información de AMA, todos los cursos incluyen clases de educación vial los sábados. Confirma el horario al solicitar información.",
  ],
  [
    "¿Cuánto cuesta un curso y cómo lo reservo?",
    "Escríbenos por WhatsApp o llámanos para conocer el precio vigente, las formas de pago y la disponibilidad. Te ayudaremos a elegir tu curso antes de reservar.",
  ],
];
