import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Grupo Mora, agencia exclusiva de seguros en Madrid.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero title="Aviso legal" subtitle="Información legal y términos de uso del sitio web de Grupo Mora." />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">1. Datos identificativos</h2>
            <p className="mt-2">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se recogen los datos identificativos de la entidad titular del dominio web <strong>grupomora.es</strong>:
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Denominación social:</strong> [Nombre completo de la empresa]</li>
              <li><strong>NIF/CIF:</strong> [NIF/CIF de la empresa]</li>
              <li><strong>Domicilio social:</strong> [Dirección completa]</li>
              <li><strong>Teléfono:</strong> [Teléfono de contacto]</li>
              <li><strong>Email:</strong> [Email de contacto]</li>
              <li><strong>Registro Mercantil:</strong> [Datos de inscripción registral, si procede]</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">2. Objeto</h2>
            <p className="mt-2">
              El sitio web tiene como finalidad informar sobre los servicios de mediación de seguros ofrecidos por Grupo Mora, así como facilitar el contacto con la entidad para la solicitud de información y presupuestos personalizados.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">3. Condiciones de uso</h2>
            <p className="mt-2">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web, con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">4. Propiedad intelectual e industrial</h2>
            <p className="mt-2">
              Todos los contenidos del sitio web, incluyendo但不限于 textos, imágenes, logotipos, iconos y diseño gráfico, son propiedad de Grupo Mora o de sus legítimos titulares, y están protegidos por las leyes de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">5. Exclusión de responsabilidad</h2>
            <p className="mt-2">
              Grupo Mora no se hace responsable de los daños o perjuicios que pudieran derivarse del uso incorrecto del sitio web, ni de los contenidos o servicios de terceros a los que se pueda acceder a través de enlaces externos. La información proporcionada tiene carácter orientativo y no constituye asesoramiento personalizado.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">6. Legislación aplicable y jurisdicción</h2>
            <p className="mt-2">
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Madrid, renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

          <div className="rounded-lg bg-gray-light p-4 text-sm">
            <p>
              <strong>Última actualización:</strong> [Fecha de actualización]<br />
              <strong>Datos a completar:</strong> Los campos marcados entre corchetes deben ser completados con los datos reales de la entidad antes de la publicación del sitio web.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}