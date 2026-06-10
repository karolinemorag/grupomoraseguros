import {
  QuienOption,
  QueProtegerOption,
  Recommendation,
} from "@/types/advisor";

export function getRecommendation(
  paraQuien: QuienOption,
  queProteger: QueProtegerOption
): Recommendation {
  // Logic to determine recommendation based on answers
  if (queProteger === "mascotas") {
    return {
      title: "Seguro para mascotas",
      description:
        "Protege a tu compañero de cuatro patas con un seguro adaptado a sus necesidades. Cubrimos asistencia veterinaria, responsabilidad civil y mucho más.",
      suggestedProducts: ["Seguro para mascotas"],
      ctaLabel: "Quiero información sobre seguros para mascotas",
      ctaHref: "/seguros/mascotas",
    };
  }

  if (paraQuien === "mis_padres" || queProteger === "gastos_funerarios") {
    return {
      title: "Seguro de decesos",
      description:
        "Un seguro de decesos bien planificado evita cargas económicas y burocráticas a tus seres queridos. Te explicamos todas las coberturas con total claridad.",
      suggestedProducts: ["Seguro de decesos"],
      ctaLabel: "Quiero información sobre seguros de decesos",
      ctaHref: "/seguros/decesos",
    };
  }

  if (paraQuien === "mis_hijos" || paraQuien === "mi_pareja") {
    return {
      title: "Seguro de vida familiar",
      description:
        "Proteger a tu familia es la decisión más importante. Un seguro de vida te garantiza que los tuyos estarán protegidos económicamente ante cualquier imprevisto.",
      suggestedProducts: ["Seguro de vida"],
      ctaLabel: "Quiero información sobre seguros de vida",
      ctaHref: "/seguros/vida",
    };
  }

  // Default: comprehensive recommendation
  return {
    title: "Combinación personalizada",
    description:
      "Según tus respuestas, te recomendamos una combinación de seguros que se adapta a tu situación personal. Nuestros asesores te guiarán para encontrar la mejor opción.",
    suggestedProducts: ["Seguro de vida", "Seguro de decesos"],
    ctaLabel: "Solicitar asesoramiento personalizado",
    ctaHref: "/contacto",
  };
}

export const quienOptions = [
  { value: "yo_mismo" as QuienOption, label: "Para mí mismo", icon: "👤" },
  { value: "mi_pareja" as QuienOption, label: "Mi pareja", icon: "💑" },
  { value: "mis_hijos" as QuienOption, label: "Mis hijos", icon: "👨‍👩‍👧‍👦" },
  { value: "mis_padres" as QuienOption, label: "Mis padres", icon: "👴👵" },
];

export const queProtegerOptions = [
  {
    value: "gastos_funerarios" as QueProtegerOption,
    label: "Gastos funerarios",
    description: "Evitar que mi familia tenga que asumir estos gastos",
    icon: "🕊️",
  },
  {
    value: "futuro_familia" as QueProtegerOption,
    label: "El futuro de mi familia",
    description: "Garantizar la estabilidad económica de los míos",
    icon: "🏠",
  },
  {
    value: "mascotas" as QueProtegerOption,
    label: "Mis mascotas",
    description: "Cuidar de mi compañero animal",
    icon: "🐾",
  },
  {
    value: "tranquilidad" as QueProtegerOption,
    label: "Tranquilidad general",
    description: "Vivir sin preocupaciones sabiendo que estoy protegido",
    icon: "😌",
  },
];