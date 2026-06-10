import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { Search, FileText, Users, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revisión personalizada",
  description:
    "Analizamos tu situación actual y te ayudamos a optimizar tu protección. Revisión gratuita y sin compromiso de tus seguros en Madrid.",
};

const steps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "1. Conocemos tu situación",
    description: "Hablamos contigo para entender tus necesidades y las de tu familia.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "2. Analizamos tu protección actual",
    description: "Revisamos tus seguros actuales para identificar carencias o duplicidades.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "3. Te proponemos soluciones",
    description: "Te presentamos las mejores opciones adaptadas a tu caso.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "4. Decides sin presión",
    description: "Tú tomas la decisión final, sin compromiso ni prisas.",
  },
];

export default function RevisionPage() {
  return (
    <>
      <PageHero
        title="Revisión personalizada"
        subtitle="Analizamos tu situación actual y te ayudamos a encontrar la protección que realmente necesitas."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Nuestro proceso es sencillo, transparente y sin compromiso.
            Te acompañamos en cada paso para que tomes la mejor decisión.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold">
                {step.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-dark/80">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm title="Solicita tu revisión gratuita" subtitle="Déjanos tus datos y nos pondremos en contacto contigo para empezar." />
      </SectionWrapper>
    </>
  );
}