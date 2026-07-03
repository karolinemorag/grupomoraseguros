import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro de vida",
  description:
    "Información sobre el seguro de vida. Conoce cómo funciona y resuelve tus dudas con Karoline Mora.",
};

export default function VidaPage() {
  return (
    <>
      <PageHero
        title="Seguro de vida"
        subtitle="Conoce cómo funciona y para quién puede ser adecuado."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            ¿Qué es un seguro de vida?
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Un seguro de vida puede ayudar a proteger económicamente a las
            personas designadas cuando se produce alguna de las situaciones
            cubiertas en la póliza. El capital contratado se entrega a los
            beneficiarios para que puedan destinarlo a sus necesidades.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            Aspectos que suelen revisarse
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Capital asegurado y forma de cobro",
              "Designación de beneficiarios",
              "Duración de la cobertura",
              "Declaración de salud",
              "Coberturas opcionales disponibles",
              "Exclusiones y limitaciones",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-gray-dark/80">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Para quién puede ser adecuado?
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Personas con cargas familiares que quieren dejar protección económica.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Familias con hipoteca u otras obligaciones financieras.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Personas que desean complementar su protección actual.
              </span>
            </li>
          </ul>

          {/* Aviso contractual */}
          <div className="mt-10 rounded-lg bg-gray-light p-4 text-sm text-gray-dark/60">
            La información de esta página es orientativa y no sustituye las
            condiciones generales, particulares y especiales de la póliza. La
            disponibilidad, precio, coberturas y contratación están sujetos a
            las condiciones y criterios de aceptación de la entidad aseguradora.
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm defaultInterest="vida" title="¿Quieres saber más sobre el seguro de vida?" subtitle="Te asesoramos para encontrar la opción que mejor se adapte a tu caso." />
      </SectionWrapper>
    </>
  );
}