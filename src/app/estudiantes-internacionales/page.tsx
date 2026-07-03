import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import SectionBand from "@/components/layout/SectionBand";
import InternationalArrivalVisual from "@/components/insurance/international/InternationalArrivalVisual";
import InternationalProcedureNavigator from "@/components/insurance/international/InternationalProcedureNavigator";
import InternationalProductPaths from "@/components/insurance/international/InternationalProductPaths";
import ArrivalDatePlanner from "@/components/insurance/international/ArrivalDatePlanner";
import InternationalRequirements from "@/components/insurance/international/InternationalRequirements";
import InternationalProcess from "@/components/insurance/international/InternationalProcess";
import InsuranceDocumentsFeature from "@/components/insurance/international/InsuranceDocumentsFeature";
import InternationalFaq from "@/components/insurance/international/InternationalFaq";
import { faqItems } from "@/components/insurance/international/international-content";

export const metadata: Metadata = {
  title: "Seguro médico para estudiar o residir en España",
  description:
    "Karoline Mora te ayuda a revisar el seguro médico, las fechas y la documentación necesaria para estudiar o residir en España.",
  alternates: {
    canonical: "https://grupomoraseguros.com/estudiantes-internacionales",
  },
  openGraph: {
    title: "Seguro médico para estudiar o residir en España | Grupo Mora Seguros",
    description:
      "Karoline Mora te ayuda a revisar el seguro médico, las fechas y la documentación necesaria para estudiar o residir en España.",
  },
};

export default function InternacionalPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;
  const whatsappMsg = encodeURIComponent("Hola, Karoline. Estoy preparando un trámite para venir a España y necesito revisar el seguro médico, las fechas y la documentación.");
  const contactUrl = `/contacto?tipo=contratar&interes=internacional`;

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

      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://grupomoraseguros.com/" },
              { "@type": "ListItem", position: 2, name: "Internacional", item: "https://grupomoraseguros.com/estudiantes-internacionales" },
            ],
          }),
        }}
      />

      {/* Hero — white */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[520px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            <div className="w-full md:w-[57%] md:py-20">
              <nav className="text-xs text-text-secondary/50 mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-asisa-blue">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-text-primary font-medium" aria-current="page">Internacional</li>
                </ol>
              </nav>
              <span className="eyebrow">SEGUROS PARA LLEGAR A ESPAÑA</span>
              <h1 className="mt-6 text-display-lg text-text-primary">
                Tu seguro empieza en la fecha correcta.
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
                {siteConfig.ownerName} te ayuda a revisar la modalidad, la duración y la
                documentación del seguro médico según el trámite que estás preparando para
                venir a España.
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                Estudios, residencia y solicitudes familiares pueden requerir periodos y
                condiciones diferentes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={contactUrl} className="btn-primary h-12 px-7 text-sm">
                  Preparar mi caso
                </Link>
                <a href="#selector-tramite" className="btn-outline h-12 px-7 text-sm">
                  Elegir mi trámite
                  <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                Atención directa con {siteConfig.ownerName}, {siteConfig.professionalStatus}.
              </p>
            </div>
            <div className="relative w-full md:w-[43%] md:self-stretch">
              <InternationalArrivalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Introducción — warm */}
      <SectionBand tone="warm" size="default">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">EL PUNTO DE PARTIDA</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            Cada trámite tiene sus condiciones.
          </h2>
          <div className="mt-4 h-px w-12 bg-mora-gold" aria-hidden="true" />
          <p className="mt-6 text-text-secondary leading-relaxed">
            Para determinados visados y autorizaciones puede exigirse un seguro de
            enfermedad contratado con una entidad autorizada para operar en España,
            válido durante el periodo correspondiente y con las condiciones requeridas
            para el procedimiento.
          </p>
          <p className="mt-4 text-sm text-text-secondary/70">
            La decisión sobre la validez y suficiencia de la documentación corresponde
            a la autoridad competente.
          </p>
        </div>
      </SectionBand>

      {/* Selector de procedimiento — blue-soft */}
      <SectionBand tone="blue-soft" size="default">
        <InternationalProcedureNavigator />
      </SectionBand>

      {/* Modalidades — white */}
      <SectionBand tone="white" size="default">
        <InternationalProductPaths />
      </SectionBand>

      {/* Fechas — warm */}
      <SectionBand tone="warm" size="default">
        <ArrivalDatePlanner contactUrl={contactUrl} />
      </SectionBand>

      {/* Requisitos — navy */}
      <section className="bg-mora-navy py-20 sm:py-28">
        <div className="container-section">
          <InternationalRequirements />
        </div>
      </section>

      {/* Proceso — white */}
      <SectionBand tone="white" size="default">
        <InternationalProcess />
      </SectionBand>

      {/* Documentación — blue-soft */}
      <SectionBand tone="blue-soft" size="default">
        <InsuranceDocumentsFeature />
      </SectionBand>

      {/* Información necesaria — warm */}
      <SectionBand tone="warm" size="default">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">DATOS INICIALES</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            Cinco datos permiten empezar a revisar el caso.
          </h2>
          <div className="mt-8 space-y-3">
            {[
              { n: "01", d: "Tipo de trámite." },
              { n: "02", d: "Oficina consular o lugar donde se presentará." },
              { n: "03", d: "Fecha prevista de inicio." },
              { n: "04", d: "Duración aproximada." },
              { n: "05", d: "Número de personas y edades aproximadas." },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-4 border-t border-border-soft py-3">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.n}</span>
                <span className="text-sm text-text-secondary">{item.d}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary/60">
            Puede añadirse la provincia española donde se residirá.
          </p>
          <div className="mt-6">
            <Link href={contactUrl} className="btn-primary h-11 px-6 text-sm">
              Empezar con estos datos
            </Link>
          </div>
        </div>
      </SectionBand>

      {/* FAQ — white */}
      <SectionBand tone="white" size="default">
        <InternationalFaq />
      </SectionBand>

      {/* CTA final — asisa-blue */}
      <section className="bg-asisa-blue py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
              PREPARAR LA LLEGADA
            </span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">
              Revisemos las fechas antes de contratar.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Cuéntale a Karoline qué trámite estás preparando, cuándo comenzará y cuánto
              tiempo necesitas acreditar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={contactUrl}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-asisa-blue transition-colors hover:bg-white/90"
              >
                Preparar mi caso
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
          </div>
        </div>
      </section>
    </>
  );
}