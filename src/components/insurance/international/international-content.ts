export type InternationalProcedure = "estudios" | "residencia" | "familia" | "otro";

export const procedures = [
  {
    number: "01",
    title: "Voy a estudiar o realizar una actividad formativa en España.",
    description:
      "Para revisar duración, fecha de inicio, personas incluidas y documentación asociada al periodo de estudios.",
    value: "estudios" as InternationalProcedure,
  },
  {
    number: "02",
    title: "Estoy preparando una residencia no lucrativa u otro permiso.",
    description:
      "Para revisar una modalidad orientada a residencia, su vigencia y las condiciones exigidas para el procedimiento concreto.",
    value: "residencia" as InternationalProcedure,
  },
  {
    number: "03",
    title: "Vengo con familiares o necesito cobertura para varias personas.",
    description:
      "Para coordinar fechas, duración y documentación de cada solicitante.",
    value: "familia" as InternationalProcedure,
  },
  {
    number: "04",
    title: "Todavía no tengo claro qué modalidad necesito.",
    description:
      "Karoline puede ayudarte a identificar qué información conviene comprobar antes de contratar.",
    value: "otro" as InternationalProcedure,
  },
];

export const requirements = [
  { label: "Entidad aseguradora", desc: "Que esté autorizada para operar en España." },
  { label: "Alcance de la asistencia", desc: "Que las prestaciones respondan a lo exigido para el procedimiento." },
  { label: "Copagos, carencias y límites", desc: "Comprobar si la oficina competente exige expresamente que no existan." },
  { label: "Reembolso", desc: "Determinados consulados indican que no se admiten modalidades basadas en reembolso." },
  { label: "Vigencia", desc: "Que las fechas coincidan con el periodo que debe acreditarse." },
  { label: "Certificado", desc: "Que identifique correctamente a la persona asegurada, la modalidad y el periodo contratado." },
];

export const processSteps = [
  { n: "01", t: "Compartes el trámite", d: "Indicas si se trata de estudios, residencia, familiares u otra situación." },
  { n: "02", t: "Revisáis las fechas", d: "Se comprueban inicio previsto, duración y número de personas." },
  { n: "03", t: "Karoline explica las modalidades", d: "Revisa contigo las alternativas disponibles y sus condiciones principales." },
  { n: "04", t: "Se completa la contratación", d: "La entidad aseguradora valora y formaliza la contratación conforme a sus procedimientos." },
  { n: "05", t: "Recibes la documentación", d: "Se emite la documentación correspondiente al seguro contratado." },
];

export const faqItems = [
  { q: "¿Qué seguro se necesita para un visado de estudios?", a: "Para determinados visados puede exigirse un seguro de enfermedad contratado con una entidad autorizada para operar en España, válido durante el periodo correspondiente y con las condiciones requeridas para el procedimiento." },
  { q: "¿Qué diferencia hay entre Health Students y Health Residents?", a: "Son modalidades orientadas a distintos perfiles. La adecuación depende del trámite, las condiciones del producto y los requisitos de la autoridad competente." },
  { q: "¿El seguro puede tener copagos?", a: "Depende de la modalidad. Algunos consulados exigen expresamente ausencia de copagos y carencias. Debe comprobarse en cada caso." },
  { q: "¿Puede tener carencias?", a: "Es posible, según la modalidad. Conviene revisar si el procedimiento concreto admite periodos de carencia." },
  { q: "¿Desde qué fecha debe comenzar?", a: "La fecha de inicio debe coordinarse con el trámite y con las condiciones de contratación. No debe elegirse automáticamente." },
  { q: "¿Debe cubrir toda la estancia?", a: "La vigencia debe ajustarse al periodo que se pretende acreditar ante la autoridad competente." },
  { q: "¿Puedo incluir a familiares?", a: "Sí, es posible contratar una modalidad que contemple a varias personas. Las condiciones deben revisarse según el producto." },
  { q: "¿Qué documentación se recibe después de contratar?", a: "Póliza o condiciones particulares, certificado del seguro cuando proceda, recibo y documentación informativa del producto." },
  { q: "¿El seguro garantiza que concedan el visado?", a: "No. La contratación del seguro acredita únicamente el elemento asegurador correspondiente. La resolución del visado o autorización depende de la autoridad competente y del conjunto del expediente." },
  { q: "¿Puedo contratarlo antes de viajar a España?", a: "Sí, la contratación puede realizarse previamente. La fecha de efecto debe coordinarse con el inicio previsto del periodo que se desea asegurar." },
];

export function buildContactUrl(procedure: InternationalProcedure): string {
  return `/contacto?tipo=contratar&interes=internacional&procedimiento=${encodeURIComponent(procedure)}`;
}