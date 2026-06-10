import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Grupo Mora. Cumplimiento del RGPD y normativa española de protección de datos.",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero title="Política de privacidad" subtitle="Información sobre el tratamiento de tus datos personales en Grupo Mora." />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">1. Responsable del tratamiento</h2>
            <p className="mt-2">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales, te informamos de los siguientes datos del responsable del tratamiento:
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Responsable:</strong> [Nombre completo de la empresa]</li>
              <li><strong>NIF/CIF:</strong> [NIF/CIF]</li>
              <li><strong>Domicilio:</strong> [Dirección completa]</li>
              <li><strong>Email:</strong> [Email de contacto]</li>
              <li><strong>Teléfono:</strong> [Teléfono de contacto]</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">2. Finalidad del tratamiento de datos</h2>
            <p className="mt-2">
              En Grupo Mora tratamos la información que nos facilitas con las siguientes finalidades:
            </p>
            <ul className="mt-4 space-y-2">
              <li>Gestionar y responder a las solicitudes de información recibidas a través del formulario de contacto.</li>
              <li>Ofrecer un presupuesto personalizado de los productos y servicios solicitados.</li>
              <li>Mantener una comunicación comercial sobre nuestros productos y servicios, siempre que nos hayas autorizado expresamente.</li>
              <li>Cumplir con las obligaciones legales aplicables a nuestra actividad.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">3. Legitimación para el tratamiento</h2>
            <p className="mt-2">
              La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al aceptar la presente política de privacidad y al enviar tus datos a través de nuestros formularios. El tratamiento de datos necesarios para la ejecución de un contrato o la aplicación de medidas precontractuales también constituye una base legítima.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">4. Conservación de los datos</h2>
            <p className="mt-2">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales aplicables. Una vez finalizada dicha relación, los datos se conservarán bloqueados durante los plazos legales establecidos.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">5. Destinatarios de los datos</h2>
            <p className="mt-2">
              No se cederán datos a terceros salvo obligación legal. Los datos podrán ser comunicados a las entidades aseguradoras con las que trabajamos para la tramitación de las solicitudes de seguro que nos hayas solicitado.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">6. Derechos del interesado</h2>
            <p className="mt-2">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndote a [Email de contacto], adjuntando copia de tu documento de identidad. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </div>

          <div className="rounded-lg bg-gray-light p-4 text-sm">
            <p>
              <strong>Última actualización:</strong> [Fecha de actualización]<br />
              <strong>Datos a completar:</strong> Los campos marcados entre corchetes deben ser completados con los datos reales antes de la publicación.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}