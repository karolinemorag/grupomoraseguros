import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro de vida",
  description:
    "Garantiza la estabilidad económica de tu familia con un seguro de vida en Madrid. Cobertura personalizada con el mejor asesoramiento.",
};

export default function VidaPage() {
  const coverageItems = [
    "Capital económico para tus beneficiarios en caso de fallecimiento",
    "Cobertura por invalidez absoluta y permanente",
    "Libertad de uso del capital: hipoteca, estudios, deudas",
    "Posibilidad de contratar coberturas adicionales",
    "Asistencia en viaje incluida en muchas pólizas",
    "Flexibilidad en la elección del capital asegurado",
  ];

  return (
    <>
      <PageHero
        title="Seguro de vida"
        subtitle="Garantiza la estabilidad económica de tu familia con un capital que les permita afrontar el futuro con tranquilidad."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Shield className="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-navy sm:text-3xl">
            Protege el futuro de los tuyos
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Un seguro de vida es la mejor manera de garantizar que tu familia
            estará protegida económicamente si tú faltas. El capital que elijas
            les permitirá mantener su calidad de vida y afrontar gastos
            importantes como la hipoteca, los estudios de tus hijos o cualquier
            otra necesidad.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Qué cubre un seguro de vida?
          </h3>
          <ul className="mt-4 space-y-3">
            {coverageItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-trust" />
                <span className="text-gray-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm defaultInterest="vida" title="¿Quieres saber más sobre el seguro de vida?" subtitle="Te asesoramos para encontrar la mejor opción para ti y tu familia." />
      </SectionWrapper>
    </>
  );
}