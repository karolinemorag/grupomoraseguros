import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Grupo Mora Seguros. Información sobre el uso de cookies en nuestro sitio web.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Política de cookies"
        subtitle="Información sobre el uso de cookies en el sitio web."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl space-y-8 text-gray-dark/80">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">1. ¿Qué son las cookies?</h2>
            <p className="mt-2">
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando
              visitas un sitio web. Su finalidad es recordar tus preferencias y mejorar tu
              experiencia de navegación.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              2. Cookies utilizadas en este sitio web
            </h2>

            <h3 className="mt-6 font-semibold text-navy">2.1. Cookies técnicas (necesarias)</h3>
            <p className="mt-2">
              Son aquellas indispensables para el funcionamiento básico del sitio web. Permiten la
              navegación y el acceso a sus funcionalidades esenciales, como recordar tus
              preferencias de consentimiento de cookies. No requieren consentimiento del usuario.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-navy">Cookie</th>
                    <th className="text-left py-2 pr-4 font-semibold text-navy">Tipo</th>
                    <th className="text-left py-2 pr-4 font-semibold text-navy">Duración</th>
                    <th className="text-left py-2 font-semibold text-navy">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono text-xs">cookie_consent</td>
                    <td className="py-2 pr-4">Técnica</td>
                    <td className="py-2 pr-4">6 meses</td>
                    <td className="py-2">Registrar las preferencias de consentimiento de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-6 font-semibold text-navy">2.2. Cookies de terceros</h3>
            <p className="mt-2">
              Este sitio web no utiliza cookies de análisis, publicitarias ni de redes sociales en
              su estado actual. En caso de incorporarse en el futuro, se solicitará el
              consentimiento expreso del usuario antes de su instalación.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              3. Gestión de cookies
            </h2>
            <p className="mt-2">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
              configuración de las opciones de tu navegador:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Google Chrome:</strong>{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:text-gold-dark"
                >
                  Configuración de cookies en Chrome
                </a>
              </li>
              <li>
                <strong>Mozilla Firefox:</strong>{" "}
                <a
                  href="https://support.mozilla.org/kb/cookies-information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:text-gold-dark"
                >
                  Configuración de cookies en Firefox
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:text-gold-dark"
                >
                  Configuración de cookies en Safari
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>{" "}
                <a
                  href="https://support.microsoft.com/help/4468242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:text-gold-dark"
                >
                  Configuración de cookies en Edge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">4. Consentimiento</h2>
            <p className="mt-2">
              Al hacer clic en "Aceptar todas" en nuestro banner de cookies, consientes el uso de
              todas las cookies. Puedes rechazar las cookies no esenciales o configurar tus
              preferencias mediante el botón "Configurar". La información sobre el uso de cookies
              se almacena en tu navegador para recordar tu elección en futuras visitas.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-navy">
              5. Actualización de la política de cookies
            </h2>
            <p className="mt-2">
              Esta política de cookies puede ser actualizada periódicamente para reflejar cambios
              en las cookies utilizadas o por requisitos legales. Te recomendamos revisar esta
              página con regularidad.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}