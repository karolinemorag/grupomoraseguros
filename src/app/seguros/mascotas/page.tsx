import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";
import { PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro para mascotas",
  description:
    "Protege a tu mascota con un seguro en Madrid. Asistencia veterinaria, responsabilidad civil y mucho más. Asesoramiento personalizado.",
};

export default function MascotasPage() {
  const coverageItems = [
    "Asistencia veterinaria: consultas, análisis, cirugías",
    "Responsabilidad civil por daños a terceros",
    "Cobertura por pérdida o robo",
    "Defensa jurídica ante reclamaciones",
    "Servicios funerarios para mascotas",
    "Desplazamiento a centros veterinarios",
  ];

  return (
    <>
      <PageHero
        title="Seguro para mascotas"
        subtitle="Cuida de tu compañero de cuatro patas con la mejor protección. Asistencia veterinaria y tranquilidad para toda la familia."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <PawPrint className="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-navy sm:text-3xl">
            Las mascotas también son familia
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Cada vez más familias consideran a sus mascotas un miembro más del
            hogar. Un seguro para mascotas te permite ofrecerles la mejor
            atención veterinaria sin preocuparte por los costes, además de
            protegerte ante posibles imprevistos.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            ¿Qué cubre nuestro seguro para mascotas?
          </h3>
          <ul className="mt-4 space-y-3">
            {coverageItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-gray-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm defaultInterest="mascotas" title="¿Quieres proteger a tu mascota?" subtitle="Déjanos tus datos y te informamos sobre nuestros seguros para mascotas." />
      </SectionWrapper>
    </>
  );
}