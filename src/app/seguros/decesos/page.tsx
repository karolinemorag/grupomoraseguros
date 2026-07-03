import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro de decesos",
  description:
    "Información sobre el seguro de decesos. Conoce sus coberturas y resuelve tus dudas con Karoline Mora.",
};

export default function DecesosPage() {
  return (
    <>
      <PageHero
        title="Seguro de decesos"
        subtitle="Conoce qué cubre y para quién puede ser adecuado."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            ¿Qué es un seguro de decesos?
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Un seguro de decesos puede incluir la organización y prestación del
            servicio funerario dentro de los límites y condiciones contratados.
            Su objetivo es liberar a la familia de la carga económica y
            burocrática en un momento de duelo.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Para quién puede ser adecuado?
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Personas que quieren dejar organizados los gastos y trámites funerarios.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Familias que desean evitar que sus allegados asuman cargas imprevistas.
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
            Aspectos que suelen revisarse
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Capital asegurado o servicios contratados",
              "Cobertura de traslados nacionales e internacionales",
              "Gestión de documentación y trámites legales",
              "Servicios funerarios incluidos",
              "Asistencia adicional disponible",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-gray-dark/80">{item}</span>
              </li>
            ))}
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
        <ContactForm defaultInterest="decesos" title="¿Quieres saber más sobre el seguro de decesos?" subtitle="Te explicamos los detalles sin compromiso." />
      </SectionWrapper>
    </>
  );
}