export const siteConfig = {
  name: "Grupo Mora",
  tagline: "Agencia exclusiva de seguros",
  location: "Madrid",
  telefono: "+34 655 172 622",
  whatsapp: "+34655172622",
  email: "kmoragarcia@tuasesorasisa.es",
  direccion: "Avenida Miguel Delibes 15, Madrid, 28052",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grupomora.es",
  seo: {
    defaultTitle:
      "Grupo Mora | Seguros con asistencia personalizada 24/7 en Madrid",
    defaultDescription:
      "Agencia exclusiva de seguros en Madrid. Seguros de decesos, vida y mascotas con asesoramiento personalizado para familias y personas mayores.",
    keywords: [
      "agencia de seguros Madrid",
      "seguros de decesos Madrid",
      "seguro de vida familiar",
      "seguro para personas mayores",
      "seguro para mascotas",
      "asistencia personalizada seguros",
      "seguros para familias en Madrid",
      "Grupo Mora seguros",
      "asesoramiento en seguros Madrid",
    ],
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Seguros", href: "/seguros" },
    { label: "Estudiantes", href: "/estudiantes-internacionales" },
    { label: "Asistencia 24/7", href: "/asistencia-24h" },
    { label: "Asesor interactivo", href: "/asesor-interactivo" },
    { label: "Blog", href: "/blog" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Contacto", href: "/contacto" },
  ],
};