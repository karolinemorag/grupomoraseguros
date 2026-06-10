import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro de decesos",
  description:
    "Protege a tu familia con un seguro de decesos en Madrid. Cubrimos gastos funerarios, trámites y asistencia. Asesoramiento personalizado en Grupo Mora.",
};

export default function DecesosPage() {
  return (
    <>
      <PageHero
        title="Seguro de decesos"
        subtitle="Protege a tu familia de las cargas económicas y burocráticas en los momentos más difíciles."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            ¿Qué es un seguro de decesos?
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Un seguro de decesos cubre los gastos y trámites asociados al
            fallecimiento de una persona asegurada. Su objetivo es liberar a la
            familia de la carga económica y burocrática en un momento de duelo,
            permitiendo que puedan centrarse en lo realmente importante.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Para quién está recomendado?
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Personas mayores que quieren aliviar a sus hijos de cualquier carga.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Familias con recursos limitados que no podrían afrontar un gasto imprevisto.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Cualquier persona que quiera dejar todo planificado.
              </span>
            </li>
          </ul>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Qué cubre?
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Gastos de tanatorio y servicios funerarios básicos",
              "Traslado del fallecido (nacional e internacional)",
              "Gestión de documentación y trámites legales",
              "Gastos de cementerio o crematorio",
              "Servicio funerario completo",
              "Asistencia psicológica para la familia",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-gray-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm defaultInterest="decesos" title="¿Quieres saber más sobre el seguro de decesos?" subtitle="Te explicamos todos los detalles sin compromiso." />
      </SectionWrapper>
    </>
  );
}