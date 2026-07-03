import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import ContactForm from "@/components/shared/ContactForm";
import SectionBand from "@/components/layout/SectionBand";

export const metadata: Metadata = {
  title: "Sobre Karoline Mora | Grupo Mora Seguros",
  description:
    "Conoce a Karoline Mora, agente de seguros exclusivo de ASISA y titular de Grupo Mora Seguros. Atención directa y orientación profesional en seguros.",
};

const processSteps = [
  {
    number: "01",
    title: "Conocer tu situación",
    description:
      "Karoline comienza por entender qué necesitas, a quién quieres proteger y qué aspectos son importantes para ti.",
  },
  {
    number: "02",
    title: "Revisar alternativas",
    description:
      "Examina contigo las modalidades disponibles y las diferencias relevantes entre ellas.",
  },
  {
    number: "03",
    title: "Aclarar las condiciones",
    description:
      "Podrás revisar coberturas, límites, exclusiones, precio y proceso de contratación.",
  },
  {
    number: "04",
    title: "Acompañar la contratación",
    description:
      "Karoline permanece como punto de contacto para orientarte durante el proceso y ayudarte a localizar los canales correspondientes.",
  },
];

const expectations = [
  "Hablar directamente con la profesional responsable de Grupo Mora Seguros.",
  "Recibir una explicación de las modalidades disponibles.",
  "Revisar condiciones importantes antes de contratar.",
  "Conocer los pasos y documentación necesarios.",
  "Disponer de un punto de contacto durante el proceso.",
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero editorial asimétrico — white with surface-blue visual */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[500px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            {/* Left - Content (54%) */}
            <div className="w-full md:w-[54%] md:py-20">
              <span className="eyebrow">GRUPO MORA SEGUROS</span>
              <h1 className="mt-6 text-display-lg text-text-primary">
                Conoce a Karoline Mora.
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
                Karoline atiende personalmente las consultas de Grupo Mora Seguros
                y acompaña a cada cliente durante la revisión y contratación de las
                alternativas disponibles.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-12 px-7 text-sm"
                >
                  Hablar con Karoline
                </a>
                <a
                  href="https://www.dgsfp.mineco.gob.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue"
                >
                  Consultar inscripción profesional &rarr;
                </a>
              </div>
            </div>

            {/* Right - Visual (46%) */}
            <div className="relative w-full md:w-[46%] md:self-stretch">
              <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-asisa-blue-light md:min-h-[400px]">
                {siteConfig.karolinePortrait ? (
                  <img
                    src={siteConfig.karolinePortrait}
                    alt="Karoline Mora"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 p-10 text-center">
                    <BrandLogo variant="institutional" />
                    <div className="h-px w-16 bg-mora-gold/50" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-asisa-blue">KAROLINE MORA</p>
                      <p className="text-xs font-medium uppercase tracking-wider text-text-secondary/70">
                        AGENTE DE SEGUROS EXCLUSIVO
                      </p>
                      <p className="mt-1 text-[10px] font-mono text-text-secondary/50">
                        DGSFP {siteConfig.dgsfpCode}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabaja — warm (proceso editorial) */}
      <SectionBand tone="warm" size="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            Una atención directa, de principio a fin.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-xl mx-auto">
            Cada consulta comienza comprendiendo la situación concreta y revisando
            qué aspectos resultan relevantes antes de contratar.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border-soft">
          {processSteps.map((step) => (
            <div key={step.number} className="flex items-start gap-5 py-6">
              <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionBand>

      {/* Credencial Profesional — navy */}
      <section className="bg-mora-navy py-16 sm:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-playfair text-2xl font-bold text-white sm:text-3xl">
              Datos profesionales
            </h2>
            <div className="mt-8 space-y-4 divide-y divide-white/10">
              {[
                { label: "Nombre", value: "Karoline Mora" },
                { label: "Condición", value: "Agente de seguros exclusivo de ASISA" },
                { label: "DGSFP", value: "C046161415773T" },
                { label: "NIF", value: "61415773T" },
                { label: "Dirección", value: "Avenida Miguel Delibes, 15, 28052" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-sm text-white/50">{row.label}</span>
                  <span className="text-sm font-medium text-white text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://www.dgsfp.mineco.gob.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold underline hover:text-gold-light"
              >
                Consultar inscripción profesional &rarr;
              </a>
            </div>
            <p className="mt-6 text-xs text-white/40 leading-relaxed">
              {siteConfig.brandName} es la marca profesional utilizada por{" "}
              {siteConfig.ownerName}. {siteConfig.insurerShortName} actúa como
              entidad aseguradora y es una entidad tercera respecto de la titularidad
              de esta web.
            </p>
          </div>
        </div>
      </section>

      {/* Relación con ASISA — blue-soft */}
      <SectionBand tone="blue-soft" size="default">
        <div className="mx-auto max-w-3xl">
          <div className="border-l-4 border-asisa-blue pl-6">
            <h2 className="font-playfair text-2xl font-bold text-text-primary sm:text-3xl">
              La relación profesional con ASISA.
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {siteConfig.ownerName} desarrolla su actividad como agente de seguros
              exclusivo de {siteConfig.insurerShortName}. Esto significa que participa
              en la distribución de seguros ofrecidos por dicha entidad, sujetos a sus
              condiciones y criterios de aceptación.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              La disponibilidad, el precio, las coberturas y la contratación dependen
              de la modalidad y de las condiciones establecidas por la entidad
              aseguradora.
            </p>
          </div>
        </div>
      </SectionBand>

      {/* Qué puedes esperar — white */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-playfair text-2xl font-bold text-text-primary sm:text-3xl">
              Qué puedes esperar cuando contactas con Karoline.
            </h2>
            <ul className="mt-8 space-y-4">
              {expectations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mora-gold" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cierre — asisa-blue */}
      <section className="bg-asisa-blue py-16 text-white sm:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl">
              Hablemos de tu situación.
            </h2>
            <p className="mt-4 text-white/70">
              Cuéntale a Karoline qué necesitas y recibe una primera orientación sobre
              las alternativas disponibles.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-trust h-12 px-8 text-sm"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="btn-outline-white h-12 px-8 text-sm"
              >
                Enviar una consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}