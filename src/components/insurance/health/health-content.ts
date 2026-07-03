export const healthNeeds = [
  {
    number: "01",
    title: "Consultas y especialistas para el día a día.",
    description:
      "Para quienes quieren revisar opciones de asistencia ambulatoria, medicina general, especialistas y pruebas diagnósticas.",
    need: "ambulatoria" as HealthNeed,
  },
  {
    number: "02",
    title: "Una modalidad que contemple hospitalización.",
    description:
      "Para valorar opciones que puedan incorporar ingreso hospitalario e intervenciones, según las condiciones contratadas.",
    need: "hospitalizacion" as HealthNeed,
  },
  {
    number: "03",
    title: "Controlar cuánto se paga al utilizar el seguro.",
    description:
      "Para comparar modalidades con copago, sin copago o con estructuras económicas diferentes.",
    need: "copagos" as HealthNeed,
  },
  {
    number: "04",
    title: "Revisar opciones para varias personas.",
    description:
      "Para estudiar la incorporación de pareja, hijos u otros asegurados dentro de una misma contratación.",
    need: "familia" as HealthNeed,
  },
  {
    number: "05",
    title: "Poder acudir a profesionales fuera del cuadro médico.",
    description:
      "Para conocer si existen modalidades con sistemas de reembolso y bajo qué condiciones.",
    need: "reembolso" as HealthNeed,
  },
];

export type HealthNeed = "ambulatoria" | "hospitalizacion" | "copagos" | "familia" | "reembolso";

export const comparisonItems = [
  {
    title: "Tipo de asistencia",
    desc: "Comprueba si la modalidad se limita a servicios ambulatorios o si puede incorporar hospitalización.",
  },
  {
    title: "Copagos",
    desc: "Revisa si se abona una cantidad adicional al utilizar determinados servicios y cómo se calcula.",
  },
  {
    title: "Carencias",
    desc: "Determinadas prestaciones pueden requerir que transcurra un plazo desde el inicio de la póliza.",
  },
  {
    title: "Cuadro médico",
    desc: "Comprueba qué profesionales, centros y hospitales están disponibles en tu provincia y para la modalidad concreta.",
  },
  {
    title: "Preexistencias y cuestionario",
    desc: "La contratación puede requerir información sobre el estado de salud y estar sujeta a valoración.",
  },
  {
    title: "Reembolso",
    desc: "Algunas modalidades pueden permitir acudir fuera del cuadro médico y solicitar el reembolso de parte del gasto dentro de sus límites.",
  },
  {
    title: "Límites y autorizaciones",
    desc: "Revisa posibles límites, requisitos de autorización y condiciones aplicables a pruebas o tratamientos.",
  },
  {
    title: "Precio y renovación",
    desc: "La prima puede depender de edad, provincia, modalidad, número de asegurados y otros factores.",
  },
];

export const faqItems = [
  {
    q: "¿Qué diferencia hay entre un seguro con copago y uno sin copago?",
    a: "En las modalidades con copago, el asegurado abona una cantidad adicional al utilizar determinados servicios. El importe y los servicios afectados varían según el producto contratado.",
  },
  {
    q: "¿Todas las modalidades incluyen hospitalización?",
    a: "No. Algunas modalidades pueden centrarse en servicios ambulatorios. La cobertura de hospitalización depende del producto concreto.",
  },
  {
    q: "¿Qué es un periodo de carencia?",
    a: "Es el plazo que debe transcurrir desde el alta en la póliza antes de poder acceder a determinadas prestaciones. Su existencia y duración dependen del producto y la prestación.",
  },
  {
    q: "¿Cómo puedo comprobar si un médico está incluido?",
    a: "El cuadro médico oficial de la entidad aseguradora está disponible en su buscador online. Se recomienda consultarlo antes de contratar.",
  },
  {
    q: "¿Puedo incluir a varias personas en la misma modalidad?",
    a: "Depende del producto. Algunas modalidades permiten incluir cónyuge, hijos u otros familiares dentro de la misma contratación.",
  },
  {
    q: "¿Es necesario completar un cuestionario de salud?",
    a: "La contratación de las modalidades de salud puede requerir que cada asegurado cumplimente un cuestionario de salud para que la entidad aseguradora valore el riesgo y determine las condiciones aplicables.",
  },
  {
    q: "¿El precio es igual para todas las personas?",
    a: "No. La prima puede variar en función de la edad, provincia, modalidad, coberturas contratadas y otras circunstancias.",
  },
];

export function buildContactUrl(need: HealthNeed): string {
  const base = `/contacto?tipo=contratar&interes=salud`;
  return `${base}&necesidad=${encodeURIComponent(need)}`;
}