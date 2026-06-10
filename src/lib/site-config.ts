export const siteConfig = {
  name: "Grupo Mora",
  tagline: "Agencia exclusiva de seguros",
  location: "Madrid",
  telefono: process.env.NEXT_PUBLIC_TELEFONO ?? "[Teléfono]",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "[WhatsApp]",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "[Email]",
  direccion: process.env.NEXT_PUBLIC_DIRECCION ?? "[Dirección en Madrid]",
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