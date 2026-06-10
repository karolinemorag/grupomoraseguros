import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { Clock, Phone, Ambulance, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asistencia 24/7",
  description:
    "Servicio de asistencia permanente 24 horas, 365 días al año. Emergencias médicas, domésticas y más. Protección continua para tu familia.",
};

const features = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Atención telefónica 24/7",
    description: "Línea gratuita disponible todos los días del año, a cualquier hora.",
  },
  {
    icon: <Ambulance className="h-8 w-8" />,
    title: "Emergencias médicas",
    description: "Coordinación de servicios médicos urgentes en cualquier momento.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cobertura integral",
    description: "Asistencia en viaje, reparaciones urgentes y servicios domésticos.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Respuesta inmediata",
    description: "Protocolos de actuación rápida para garantizar tu tranquilidad.",
  },
];

export default function AsistenciaPage() {
  return (
    <>
      <PageHero
        title="Asistencia 24/7"
        subtitle="Estamos a tu lado siempre. Atención permanente los 365 días del año para ti y tu familia."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Siempre disponibles para ti
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Sabemos que las emergencias no entienden de horarios. Por eso, en
            Grupo Mora te ofrecemos un servicio de asistencia permanente para
            que tengas la tranquilidad de saber que siempre habrá alguien al
            otro lado del teléfono.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy/5 text-navy">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm title="¿Necesitas más información?" subtitle="Te explicamos todos los detalles de nuestro servicio de asistencia 24/7." />
      </SectionWrapper>
    </>
  );
}