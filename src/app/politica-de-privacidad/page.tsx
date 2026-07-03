import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Grupo Mora Seguros. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        title="Política de privacidad"
        subtitle="Información sobre el tratamiento de tus datos personales."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              1. Responsable del tratamiento
            </h2>
            <p className="mt-2">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica
              3/2018 de Protección de Datos Personales y garantía de los derechos digitales, te
              informamos de los datos del responsable del tratamiento:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Responsable:</strong> {siteConfig.ownerName}
              </li>
              <li>
                <strong>NIF:</strong> {siteConfig.ownerNif}
              </li>
              <li>
                <strong>Dirección:</strong> {siteConfig.professionalAddress}
              </li>
              <li>
                <strong>Teléfono:</strong> {siteConfig.telefono}
              </li>
              <li>
                <strong>DGSFP:</strong> {siteConfig.dgsfpCode}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              2. Finalidad del tratamiento de datos
            </h2>
            <p className="mt-2">
              En Grupo Mora Seguros tratamos la información que nos facilitas con las siguientes
              finalidades:
            </p>
            <ul className="mt-4 space-y-2">
              <li>Gestionar y responder a las solicitudes de información recibidas a través del formulario de contacto.</li>
              <li>Orientar sobre productos aseguradores distribuidos por {siteConfig.ownerName} en calidad de agente exclusivo de {siteConfig.insurerShortName}.</li>
              <li>Cuando resulte necesario para gestionar una solicitud de contratación, comunicar los datos a la entidad aseguradora para su valoración.</li>
              <li>Cumplir con las obligaciones legales aplicables a la actividad de distribución de seguros.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              3. Legitimación para el tratamiento
            </h2>
            <p className="mt-2">
              La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al
              aceptar la presente política de privacidad y al enviar tus datos a través de nuestros
              formularios. El tratamiento de datos necesarios para la ejecución de un contrato de
              seguro o la aplicación de medidas precontractuales también constituye una base legítima.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              4. Conservación de los datos
            </h2>
            <p className="mt-2">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación
              comercial o durante el tiempo necesario para cumplir con las obligaciones legales
              aplicables a la actividad de distribución de seguros. Una vez finalizada dicha
              relación, los datos se conservarán bloqueados durante los plazos legales establecidos.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              5. Destinatarios de los datos
            </h2>
            <p className="mt-2">
              No se cederán datos a terceros salvo obligación legal. Los datos podrán ser comunicados
              a {siteConfig.insurerLegalName} cuando resulte necesario para atender una solicitud de
              información sobre productos aseguradores o para tramitar una contratación solicitada
              por el usuario.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              6. Derechos del interesado
            </h2>
            <p className="mt-2">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación,
              portabilidad y oposición dirigiéndote a la dirección profesional indicada,
              adjuntando copia de tu documento de identidad. También tienes derecho a presentar
              una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              7. Decisiones automatizadas
            </h2>
            <p className="mt-2">
              No se toman decisiones automatizadas ni se elaboran perfiles con los datos personales
              recogidos a través de este sitio web.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}