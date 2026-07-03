export type LifeNeed = "ingresos" | "hipoteca" | "dependientes" | "autonomo" | "incapacidad" | "capital";

export const lifeNeeds = [
  {
    number: "01",
    title: "Hay personas que dependen de mis ingresos.",
    description:
      "Para revisar cuánto tiempo necesitarían apoyo económico y qué gastos deberían poder mantener.",
    need: "ingresos" as LifeNeed,
  },
  {
    number: "02",
    title: "Quiero revisar una deuda o préstamo hipotecario.",
    description:
      "Para valorar cómo se relacionan el capital asegurado, la deuda pendiente y la duración de la protección.",
    need: "hipoteca" as LifeNeed,
  },
  {
    number: "03",
    title: "Quiero contemplar estudios y gastos futuros.",
    description:
      "Para identificar compromisos económicos que continuarían durante varios años.",
    need: "dependientes" as LifeNeed,
  },
  {
    number: "04",
    title: "Mis ingresos dependen principalmente de mi trabajo.",
    description:
      "Para revisar el impacto económico que podrían tener determinadas situaciones sobre el asegurado o su entorno.",
    need: "autonomo" as LifeNeed,
  },
  {
    number: "05",
    title: "Quiero conocer las garantías relacionadas con incapacidad.",
    description:
      "Para revisar qué garantías opcionales pueden existir y cómo se definen en cada modalidad.",
    need: "incapacidad" as LifeNeed,
  },
];

export const policyConcepts = [
  { term: "Tomador", def: "Persona que contrata la póliza y asume las obligaciones que correspondan." },
  { term: "Asegurado", def: "Persona sobre cuya vida o situación se establece el riesgo asegurado." },
  { term: "Beneficiario", def: "Persona o personas designadas para recibir la prestación cuando se produce el supuesto contemplado." },
  { term: "Capital asegurado", def: "Importe establecido para cada garantía en las condiciones de la póliza." },
  { term: "Garantía", def: "Situación concreta que puede dar lugar a una prestación cuando se cumplen sus condiciones." },
  { term: "Duración", def: "Periodo durante el cual se mantiene la protección, sujeto a las condiciones y renovación de la póliza." },
];

export const faqItems = [
  { q: "¿Qué es un seguro de vida riesgo?", a: "Es una modalidad en la que el asegurador se compromete a entregar un capital a las personas designadas cuando se produce alguna de las situaciones cubiertas en la póliza, dentro de sus condiciones." },
  { q: "¿Cómo se decide el capital asegurado?", a: "No existe una cifra universal. Conviene revisar las deudas pendientes, el tiempo de apoyo a personas dependientes, los gastos futuros y los recursos ya disponibles." },
  { q: "¿Quién puede figurar como beneficiario?", a: "Pueden designarse una o varias personas. La designación puede especificar porcentajes y debe mantenerse actualizada según las circunstancias personales." },
  { q: "¿Qué diferencia hay entre tomador, asegurado y beneficiario?", a: "El tomador contrata la póliza, el asegurado es la persona sobre la que se establece el riesgo y el beneficiario recibe la prestación. Pueden ser personas distintas." },
  { q: "¿La incapacidad está siempre incluida?", a: "No. La cobertura por incapacidad suele ser una garantía opcional que puede contratarse según el producto y las condiciones de aceptación." },
  { q: "¿Qué información puede solicitar la aseguradora?", a: "La entidad puede requerir información sobre edad, capital, estado de salud, profesión y actividades para valorar el riesgo." },
  { q: "¿Cómo se relaciona un seguro de vida con una hipoteca?", a: "Existen modalidades orientadas al capital pendiente de un préstamo hipotecario. Las condiciones concretas deben revisarse en la documentación del producto." },
  { q: "¿El precio es igual para todas las personas?", a: "No. La prima puede variar en función de la edad, capital, duración, garantías seleccionadas y otros factores determinados por la entidad aseguradora." },
];

export function buildContactUrl(need: LifeNeed): string {
  return `/contacto?tipo=contratar&interes=vida&necesidad=${encodeURIComponent(need)}`;
}