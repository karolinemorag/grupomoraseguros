import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Grupo Mora. Información sobre el uso de cookies en nuestro sitio web.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Política de cookies" subtitle="Información sobre el uso de cookies en el sitio web de Grupo Mora." />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">1. ¿Qué son las cookies?</h2>
            <p className="mt-2">
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Su finalidad es recordar tus preferencias y mejorar tu experiencia de navegación.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">2. Tipos de cookies utilizadas</h2>
            <p className="mt-2">En este sitio web utilizamos los siguientes tipos de cookies:</p>

            <h3 className="mt-6 font-semibold text-navy">2.1. Cookies propias</h3>
            <p className="mt-2">
              Son aquellas que se envían a tu equipo desde nuestros propios equipos o dominios. Se utilizan para garantizar el funcionamiento básico del sitio web y recordar tus preferencias de navegación.
            </p>

            <h3 className="mt-6 font-semibold text-navy">2.2. Cookies analíticas</h3>
            <p className="mt-2">
              Utilizamos cookies analíticas para recopilar información anónima sobre cómo los usuarios navegan por nuestro sitio web, qué páginas visitan con más frecuencia y cómo mejoran su experiencia. Esta información nos ayuda a optimizar el sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">3. Desactivación y eliminación de cookies</h2>
            <p className="mt-2">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador. A continuación, te indicamos los enlaces a las páginas de configuración de los navegadores más comunes:
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Google Chrome:</strong> [Enlace a la configuración de cookies de Chrome]</li>
              <li><strong>Mozilla Firefox:</strong> [Enlace a la configuración de cookies de Firefox]</li>
              <li><strong>Safari:</strong> [Enlace a la configuración de cookies de Safari]</li>
              <li><strong>Microsoft Edge:</strong> [Enlace a la configuración de cookies de Edge]</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">4. Consentimiento</h2>
            <p className="mt-2">
              Al continuar navegando por nuestro sitio web, aceptas el uso de las cookies descritas en esta política. Si no estás de acuerdo, puedes configurar tu navegador para rechazarlas, aunque esto podría afectar al funcionamiento de algunas partes del sitio.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">5. Actualización de la política de cookies</h2>
            <p className="mt-2">
              Esta política de cookies puede ser actualizada periódicamente para reflejar cambios en las cookies utilizadas o por requisitos legales. Te recomendamos revisar esta página con regularidad.
            </p>
          </div>

          <div className="rounded-lg bg-gray-light p-4 text-sm">
            <p>
              <strong>Última actualización:</strong> [Fecha de actualización]<br />
              <strong>Datos a completar:</strong> Los campos marcados entre corchetes deben ser completados con la información real correspondiente.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}