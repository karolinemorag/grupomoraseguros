export const siteConfig = {
  brandName: "Grupo Mora Seguros",
  ownerName: "Karoline Mora",
  ownerNif: "61415773T",
  professionalAddress: "Avenida Miguel Delibes, 15, 28052",
  professionalStatus: "Agente de seguros exclusivo de ASISA",
  dgsfpCode: "C046161415773T",
  insurerShortName: "ASISA",
  insurerLegalName:
    "ASISA, Asistencia Sanitaria Interprovincial de Seguros, S.A.U.",
  domain: "https://grupomoraseguros.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grupomoraseguros.com",
  telefono: "+34 655 172 622",
  whatsapp: "+34655172622",
  location: "Madrid",
  horario: "Lunes a viernes: 9:00 - 19:00",
  // Email pendiente de confirmación
  contactEmail: "",
  privacyEmail: "",
  social: {
    instagram: "https://www.instagram.com/grupomoraseguros/",
  },
  cookieConfig: {
    consentRequired: false,
    categories: {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    },
  },
  whatsappMessages: {
    default:
      "Hola, Karoline. He visitado la web de Grupo Mora Seguros y quisiera recibir información.",
    homepage:
      "Hola, Karoline. Me gustaría recibir orientación sobre seguros.",
    salud:
      "Hola, Karoline. Quiero información sobre seguros de salud.",
    decesos:
      "Hola, Karoline. He visitado la página de seguro de decesos y quisiera recibir información.",
    vida:
      "Hola, Karoline. Quisiera revisar opciones de seguro de vida.",
    mascotas:
      "Hola, Karoline. Quiero información sobre el seguro para mascotas.",
    accidentes:
      "Hola, Karoline. Quiero información sobre seguro de accidentes.",
    internacional:
      "Hola, Karoline. Necesito orientación sobre un seguro médico para estudiar o residir en España. Mi tipo de trámite es: [completar].",
    asistencia_poliza:
      "Hola, Karoline. Necesito ayuda con una póliza.",
  },
  seo: {
    defaultTitle:
      "Grupo Mora Seguros | Asesoramiento personal con Karoline Mora",
    defaultDescription:
      "Karoline Mora, agente de seguros exclusivo de ASISA, te ofrece asesoramiento cercano y profesional para encontrar la protección adecuada para ti, tu familia o tu estancia en España.",
    keywords: [
      "agencia de seguros Madrid",
      "Karoline Mora",
      "agente exclusivo ASISA",
      "seguros de decesos Madrid",
      "seguro de vida familiar",
      "seguro para mascotas",
      "seguro estudiantes internacionales",
      "asesoramiento personalizado seguros",
      "seguros para familias en Madrid",
      "Grupo Mora seguros",
    ],
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Seguros", href: "/seguros" },
    { label: "Internacional", href: "/estudiantes-internacionales" },
    { label: "Sobre Karoline", href: "/quienes-somos" },
    { label: "Guías", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};