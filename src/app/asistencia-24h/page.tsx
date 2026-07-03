import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, MessageCircle, MapPin, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayuda y asistencia",
  description:
    "Ayuda y asistencia con Karoline Mora. Consulta sobre tu póliza, orientación sobre canales de la entidad aseguradora.",
};

export default function AsistenciaPage() {
  return (
    <>
      <PageHero
        title="Ayuda y asistencia"
        subtitle="Te ayudamos a encontrar la información y el canal que necesitas."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contactar con Karoline */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-heading text-xl font-bold text-navy">
                Contactar con Karoline
              </h2>
              <p className="mt-3 text-gray-dark/70">
                Karoline puede ayudarte con:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-dark/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  Consultas sobre una póliza
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-dark/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  Ayuda para localizar documentación
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-dark/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  Orientación sobre el canal correspondiente
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-dark/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  Seguimiento y consultas dentro del horario de atención
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.telefono}`}
                  className="btn-navy h-11 px-5 text-sm"
                  aria-label={`Llamar al ${siteConfig.telefono}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar ahora
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-trust h-11 px-5 text-sm"
                  aria-label="Escribir por WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs text-gray-dark/50">
                Horario de atención: {siteConfig.horario}
              </p>
            </div>

            {/* Canales de la entidad aseguradora */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-heading text-xl font-bold text-navy">
                Canales de la entidad aseguradora
              </h2>
              <p className="mt-3 text-gray-dark/70">
                Algunas pólizas incluyen canales de asistencia operativos fuera
                del horario profesional de Karoline. Los servicios, teléfonos y
                horarios dependen del producto contratado y aparecen en la
                documentación de la póliza.
              </p>
              <div className="mt-4 flex items-start gap-3 rounded-lg bg-red-50 p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <p className="text-xs text-red-700">
                  En caso de emergencia médica, contacta con el 112 o utiliza el
                  canal de urgencias indicado en tu póliza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm
          title="¿Necesitas ayuda con tu póliza?"
          subtitle="Cuéntanos tu situación y te orientaremos sobre el siguiente paso."
        />
      </SectionWrapper>
    </>
  );
}