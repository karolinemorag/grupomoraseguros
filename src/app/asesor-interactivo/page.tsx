import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import AdvisorWizard from "@/components/advisor/AdvisorWizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asesor interactivo",
  description:
    "Descubre qué seguro se adapta mejor a ti con nuestro asesor interactivo. Responde unas preguntas y te recomendamos la mejor opción.",
};

export default function AsesorPage() {
  return (
    <>
      <PageHero
        title="Asesor interactivo"
        subtitle="Descubre en menos de 2 minutos qué seguro se adapta mejor a tus necesidades."
      />

      <SectionWrapper background="white">
        <AdvisorWizard />
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="mx-auto max-w-3xl rounded-xl bg-navy p-8 text-center text-white sm:p-12">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            ¿Prefieres hablar con una persona?
          </h2>
          <p className="mt-4 text-white/80">
            Si lo prefieres, puedes contactar directamente con nuestro equipo
            para recibir atención personalizada.
          </p>
          <a
            href="/contacto"
            className="btn-gold mt-6 inline-flex h-12 items-center px-8"
            aria-label="Contactar con nuestro equipo"
          >
            Contacta con nosotros
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}