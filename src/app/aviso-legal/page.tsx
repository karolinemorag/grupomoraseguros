import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de Grupo Mora Seguros, marca comercial de Karoline Mora, agente de seguros exclusivo de ASISA.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero
        title="Aviso legal"
        subtitle="Información legal y términos de uso del sitio web de Grupo Mora Seguros."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">1. Datos identificativos</h2>
            <p className="mt-2">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y del Comercio Electrónico, se informa de los datos
              identificativos del titular del dominio web <strong>{siteConfig.domain}</strong>:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Titular:</strong> {siteConfig.ownerName}
              </li>
              <li>
                <strong>NIF:</strong> {siteConfig.ownerNif}
              </li>
              <li>
                <strong>Dirección profesional:</strong> {siteConfig.professionalAddress}
              </li>
              <li>
                <strong>Marca comercial:</strong> {siteConfig.brandName}
              </li>
              <li>
                <strong>Condición profesional:</strong> {siteConfig.professionalStatus}
              </li>
              <li>
                <strong>Clave de inscripción DGSFP:</strong> {siteConfig.dgsfpCode}
              </li>
              <li>
                <strong>Entidad aseguradora representada:</strong>{" "}
                {siteConfig.insurerLegalName}
              </li>
              <li>
                <strong>Teléfono:</strong> {siteConfig.telefono}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              2. Denominación comercial y relación con la entidad aseguradora
            </h2>
            <p className="mt-2">
              {siteConfig.brandName} es una denominación comercial utilizada por {siteConfig.ownerName}.
              Este sitio web no es el portal corporativo oficial de {siteConfig.insurerShortName}.
              Las referencias a {siteConfig.insurerShortName} identifican a la entidad aseguradora con
              la que {siteConfig.ownerName} mantiene su relación de agencia exclusiva.
            </p>
            <p className="mt-4">
              {siteConfig.insurerLegalName} actúa como entidad aseguradora y es una entidad tercera
              respecto de la titularidad de esta web. La contratación, disponibilidad, precio,
              coberturas, exclusiones y aceptación de cada seguro están sujetos a las condiciones
              de la póliza y a los criterios de la entidad aseguradora.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">3. Objeto</h2>
            <p className="mt-2">
              El sitio web tiene como finalidad informar sobre los servicios de mediación de seguros
              ofrecidos por {siteConfig.ownerName} en calidad de agente exclusivo de{" "}
              {siteConfig.insurerShortName}, así como facilitar el contacto para la solicitud de
              información y el asesoramiento personalizado.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">4. Condiciones de uso</h2>
            <p className="mt-2">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios
              ofrecidos a través del sitio web, con carácter enunciativo pero no limitativo, a no
              emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe
              y al orden público.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              5. Propiedad intelectual e industrial
            </h2>
            <p className="mt-2">
              Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, iconos y
              diseño gráfico, son propiedad de {siteConfig.ownerName} o de sus legítimos titulares,
              y están protegidos por las leyes de propiedad intelectual e industrial. Queda prohibida
              su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              6. Exclusión de responsabilidad
            </h2>
            <p className="mt-2">
              La información proporcionada en este sitio web tiene carácter orientativo y no
              constituye asesoramiento personalizado ni forma parte de un contrato de seguro.{" "}
              {siteConfig.ownerName} no se hace responsable de los daños o perjuicios que pudieran
              derivarse del uso incorrecto del sitio web ni de los contenidos o servicios de
              terceros a los que se pueda acceder a través de enlaces externos.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="mt-2">
              Las presentes condiciones se rigen por la legislación española. Para cualquier
              controversia que pudiera derivarse del acceso o uso del sitio web, las partes se
              someten a los juzgados y tribunales de Madrid, renunciando a cualquier otro fuero que
              pudiera corresponderles.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              8. Inscripción profesional
            </h2>
            <p className="mt-2">
              {siteConfig.ownerName} figura inscrita en el Registro administrativo de distribuidores
              de seguros y reaseguros de la Dirección General de Seguros y Fondos de Pensiones
              (DGSFP) con la clave {siteConfig.dgsfpCode}.
            </p>
            <p className="mt-2">
              <a
                href="https://www.dgsfp.mineco.gob.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-gold-dark"
              >
                Consultar inscripción profesional
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}