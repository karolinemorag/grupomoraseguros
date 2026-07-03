import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { healthNeeds, comparisonItems, faqItems, buildContactUrl } from "@/components/insurance/health/health-content";
import SectionBand from "@/components/layout/SectionBand";

export const metadata: Metadata = {
  title: "Seguro de salud: qué conviene comparar",
  description:
    "Karoline Mora te ayuda a revisar modalidades de seguro de salud, copagos, carencias, hospitalización y cuadro médico antes de contratar.",
};

export default function SaludPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;
  const whatsappMsg = encodeURIComponent("Hola, Karoline. Quiero información sobre un seguro de salud y necesito orientación para elegir una modalidad.");
  const contactUrl = `/contacto?tipo=contratar&interes=salud`;

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* Hero editorial 56/44 — white */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[520px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            <div className="w-full md:w-[56%] md:py-20">
              <nav className="text-xs text-text-secondary/50 mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-asisa-blue">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/seguros" className="hover:text-asisa-blue">Seguros</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-text-primary font-medium">Salud</li>
                </ol>
              </nav>
              <span className="eyebrow">SEGURO DE SALUD</span>
              <h1 className="mt-6 text-display-lg text-text-primary">
                Entender las diferencias antes de elegir.
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
                {siteConfig.ownerName} te ayuda a revisar las modalidades disponibles,
                comprender cómo funcionan y valorar qué aspectos pueden resultar
                importantes para ti o tu familia.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={contactUrl} className="btn-primary h-12 px-7 text-sm">
                  Consultar mi situación
                </Link>
                <a
                  href={`${whatsappUrl}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline h-12 px-7 text-sm"
                >
                  Hablar por WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                Atención directa con {siteConfig.ownerName}, {siteConfig.professionalStatus}.
              </p>
            </div>
            <div className="relative w-full md:w-[44%] md:self-stretch">
              <HealthDecisionVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Introducción — warm */}
      <SectionBand tone="warm" size="default">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">EL PUNTO DE PARTIDA</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            No todos los seguros de salud funcionan igual.
          </h2>
          <div className="mt-4 h-px w-12 bg-mora-gold" aria-hidden="true" />
          <p className="mt-6 text-text-secondary leading-relaxed">
            Algunas modalidades se centran en la asistencia ambulatoria, otras pueden
            incorporar hospitalización y determinadas opciones incluyen copagos o sistemas
            de reembolso. Las condiciones concretas dependen del producto contratado.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Antes de comparar precios conviene entender qué uso esperas hacer del seguro
            y qué servicios quieres revisar.
          </p>
        </div>
      </SectionBand>

      {/* HealthNeedsNavigator — white */}
      <HealthNeedsNavigator />

      {/* HealthComparisonGuide — blue-soft (herramienta de comparación) */}
      <SectionBand tone="blue-soft" size="spacious">
        <HealthComparisonGuide />
      </SectionBand>

      {/* Copago y carencia — navy */}
      <HealthConcepts />

      {/* Cuadro médico — blue-soft con borde lateral asisa-blue */}
      <section className="bg-[#EFF6FC] py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            <div className="relative border-l-4 border-asisa-blue pl-6">
              <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Comprueba médicos y centros antes de contratar.</h2>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
                El cuadro médico puede variar según la provincia y la modalidad. Consulta siempre el buscador oficial y actualizado de ASISA para revisar profesionales, clínicas y hospitales.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.asisa.es/cuadro-medico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-11 px-6 text-sm"
                >
                  Consultar cuadro médico oficial
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={`${whatsappUrl}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue">
                  Preguntar a Karoline &rarr;
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                La disponibilidad de un profesional o centro debe comprobarse para la modalidad y fecha concretas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo orienta Karoline — white */}
      <KarolineGuidance />

      {/* FAQ — warm (evita terminar con secciones blancas) */}
      <SectionBand tone="warm" size="default">
        <HealthFaqSection />
      </SectionBand>

      {/* CTA final — asisa-blue */}
      <section className="bg-asisa-blue py-20 sm:py-28 text-white">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl">
              Revisa tus opciones de salud con Karoline.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Cuéntale quién necesita cobertura y qué aspectos son importantes para ti.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={contactUrl} className="bg-white text-asisa-blue hover:bg-white/90 inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold transition-colors">
                Consultar mi situación
              </Link>
              <a
                href={`${whatsappUrl}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Hablar por WhatsApp &rarr;
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">
              La información médica necesaria para una posible contratación se solicitará,
              cuando proceda, mediante los canales correspondientes de la entidad aseguradora.
            </p>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-white py-12 border-t border-border-soft">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary/50">Otras situaciones que puedes revisar</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                { label: "Seguro de vida", href: "/seguros/vida" },
                { label: "Seguro de decesos", href: "/seguros/decesos" },
                { label: "Seguro para mascotas", href: "/seguros/mascotas" },
                { label: "Soluciones internacionales", href: "/estudiantes-internacionales" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-text-secondary transition-colors hover:text-asisa-blue">
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HealthDecisionVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-asisa-blue-light md:min-h-[400px]">
      <div className="grid grid-cols-2 gap-6 p-8">
        {["MODALIDAD", "COPAGOS", "HOSPITALIZACIÓN", "CUADRO MÉDICO"].map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-2">
            <span className="text-xs font-light text-asisa-blue/40">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold text-text-primary text-center">{item}</span>
            <div className="h-px w-6 bg-mora-gold/50" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthNeedsNavigator() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
            <span className="eyebrow">TU SITUACIÓN</span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">¿Qué estás buscando?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
              No necesitas conocer el nombre de una póliza. Empieza por explicar qué te gustaría resolver.
            </p>
          </div>
          <div className="md:w-[65%]">
            <div className="divide-y divide-border-soft">
              {healthNeeds.map((item) => (
                <Link
                  key={item.number}
                  href={buildContactUrl(item.need)}
                  className="group flex items-start gap-6 py-5 transition-colors hover:bg-asisa-blue-light/30 focus-visible:outline-2 focus-visible:outline-asisa-blue focus-visible:outline-offset-2 sm:py-6"
                >
                  <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.number}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-text-secondary transition-all group-hover:translate-x-1 group-hover:text-asisa-blue" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HealthComparisonGuide() {
  return (
    <div>
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">QUÉ CONVIENE COMPARAR</span>
        <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Una póliza es más que una lista de coberturas.</h2>
        <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
          Revisa estos aspectos antes de decidir. No todos se aplican de la misma manera en todas las modalidades.
        </p>
        <div className="mt-10 grid gap-0 divide-y divide-border-soft md:grid-cols-2 md:divide-x md:divide-y-0">
          {comparisonItems.map((item, i) => (
            <div key={i} className="py-6 pr-0 md:odd:pr-8 md:even:pl-8">
              <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthConcepts() {
  return (
    <section className="bg-mora-navy py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-4xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">DOS CONCEPTOS CLAVE</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">Copago y carencia no significan lo mismo.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-xl font-bold text-white">Qué es un copago</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                Es una cantidad que puede abonarse cuando se utiliza un servicio incluido en determinadas pólizas. El importe y los servicios afectados dependen de la modalidad.
              </p>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                Una prima mensual más reducida puede estar asociada a pagos adicionales por uso, pero la comparación debe hacerse revisando el conjunto de condiciones.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Qué es una carencia</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                Es el periodo que debe transcurrir desde el alta antes de poder utilizar determinadas prestaciones contempladas en la póliza.
              </p>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                Su existencia y duración dependen del producto, la prestación y las circunstancias de contratación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KarolineGuidance() {
  const steps = [
    { n: "01", t: "Quién necesita cobertura", d: "Edad, provincia, número de asegurados y relación entre ellos." },
    { n: "02", t: "Qué uso se espera", d: "Consultas habituales, especialistas, hospitalización, viajes u otras necesidades relevantes." },
    { n: "03", t: "Qué estructura se prefiere", d: "Con copagos, sin copagos, asistencia ambulatoria, hospitalización o posible reembolso." },
    { n: "04", t: "Qué condiciones deben revisarse", d: "Carencias, cuestionario de salud, fecha de inicio, precio y documentación." },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Una recomendación empieza por conocer tu caso.</h2>
          <div className="mt-10 divide-y divide-border-soft">
            {steps.map((item) => (
              <div key={item.n} className="flex items-start gap-5 py-5">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{item.t}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HealthFaqSection() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">PREGUNTAS FRECUENTES</span>
        <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Resuelve tus dudas sobre el seguro de salud.</h2>
        <div className="mt-10 space-y-0 divide-y divide-border-soft">
          {faqItems.map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-text-primary transition-colors hover:text-asisa-blue list-none">
                {item.q}
                <span className="ml-4 flex-shrink-0 text-xs text-mora-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed pr-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}