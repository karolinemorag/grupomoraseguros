"use client";

import { Heart, Users, PawPrint, Shield } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Seguro de decesos",
    description:
      "Cobertura completa de gastos funerarios y trámites. Protege a tu familia de cargas económicas inesperadas en los momentos más difíciles.",
    href: "/seguros/decesos",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Seguro de vida",
    description:
      "Garantiza la estabilidad económica de tu familia con un capital que les permita afrontar el futuro con tranquilidad y seguridad.",
    href: "/seguros/vida",
  },
  {
    icon: <PawPrint className="h-6 w-6" />,
    title: "Seguro para mascotas",
    description:
      "Cuida de tu compañero de cuatro patas con asistencia veterinaria, responsabilidad civil y la mejor protección para tu mascota.",
    href: "/seguros/mascotas",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.href} {...service} />
      ))}
    </div>
  );
}