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
  social: {
    instagram: "https://www.instagram.com/grupomoraseguros/",
  },
  whatsappMessages: {
    default:
      "Hola, Karoline. He visitado la web de Grupo Mora Seguros y quisiera recibir información.",
    decesos:
      "Hola, Karoline. He visitado la página de seguro de decesos de Grupo Mora Seguros y quisiera recibir información.",
    vida:
      "Hola, Karoline. Quisiera revisar opciones de seguro de vida.",
    mascotas:
      "Hola, Karoline. Quiero información sobre el seguro para mascotas.",
    internacional:
      "Hola, Karoline. Necesito orientación sobre un seguro médico para estudiar o residir en España.",
    revision:
      "Hola, Karoline. Me gustaría solicitar una revisión personalizada de mis seguros.",
  },
  seo: {
    defaultTitle:
      "Grupo Mora Seguros | Asesoramiento personal en seguros en Madrid",
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
    { label: "Soluciones internacionales", href: "/estudiantes-internacionales" },
    { label: "Asistencia", href: "/asistencia-24h" },
    { label: "Sobre Karoline", href: "/quienes-somos" },
    { label: "Recursos", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};