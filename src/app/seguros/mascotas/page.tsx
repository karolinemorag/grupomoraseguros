import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro para mascotas",
  description:
    "Información sobre el seguro para mascotas. Conoce las coberturas disponibles y resuelve tus dudas con Karoline Mora.",
};

export default function MascotasPage() {
  return (
    <>
      <PageHero
        title="Seguro para mascotas"
        subtitle="Conoce qué aspectos pueden revisarse según la modalidad."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            ¿Qué es un seguro para mascotas?
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Un seguro para mascotas puede ayudar a cubrir gastos veterinarios y
            otros imprevistos relacionados con el cuidado del animal. Las
            coberturas disponibles varían según la modalidad y las condiciones
            contratadas.
          </p>

          <h3 className="mt-10 font-heading text-xl font-bold text-navy">
            Aspectos que pueden variar según la modalidad
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Asistencia veterinaria: consultas, análisis, cirugías",
              "Responsabilidad civil por daños a terceros",
              "Cobertura por pérdida o robo",
              "Defensa jurídica",
              "Servicios funerarios",
              "Desplazamiento a centros veterinarios",
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
                Personas que quieren estar preparadas ante imprevistos con su mascota.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-gray-dark/80">
                Familias que desean proteger económicamente a su compañero animal.
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
        <ContactForm defaultInterest="mascotas" title="¿Quieres proteger a tu mascota?" subtitle="Déjanos tus datos y te informamos sobre nuestros seguros para mascotas." />
      </SectionWrapper>
    </>
  );
}