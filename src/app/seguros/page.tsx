import { Heart, Users, PawPrint } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ServiceCard from "@/components/shared/ServiceCard";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguros",
  description:
    "Descubre nuestros seguros de decesos, vida y mascotas en Madrid. Protege a tu familia con la mejor cobertura y atención personalizada.",
};

const services = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Seguro de decesos",
    description:
      "Cobertura completa de gastos funerarios y trámites. Protege a tu familia de cargas económicas inesperadas en los momentos más difíciles. Incluye servicio de tanatorio, traslados, documentación y asistencia psicológica.",
    href: "/seguros/decesos",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Seguro de vida",
    description:
      "Garantiza la estabilidad económica de tu familia con un capital que les permita afrontar el futuro con tranquilidad. Elige entre distintas modalidades según tus necesidades y las de los tuyos.",
    href: "/seguros/vida",
  },
  {
    icon: <PawPrint className="h-6 w-6" />,
    title: "Seguro para mascotas",
    description:
      "Cuida de tu compañero de cuatro patas con asistencia veterinaria, responsabilidad civil y protección ante pérdida o robo. Tu mascota merece la mejor protección.",
    href: "/seguros/mascotas",
  },
];

export default function SegurosPage() {
  return (
    <>
      <PageHero
        title="Seguros"
        subtitle="Protege lo que más importa con nuestras soluciones de seguros diseñadas para ti y tu familia."
      />

      <SectionWrapper background="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            ¿No sabes qué seguro elegir?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-dark/80">
            Te ayudamos a encontrar la mejor opción para ti. Nuestro equipo de
            expertos te asesorará sin compromiso.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm title="Te ayudamos a decidir" subtitle="Déjanos tus datos y te orientamos sobre la mejor opción para ti." />
        </div>
      </SectionWrapper>
    </>
  );
}