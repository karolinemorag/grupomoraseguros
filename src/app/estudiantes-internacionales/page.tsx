import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { procedures, requirements, processSteps, faqItems, buildContactUrl } from "@/components/insurance/international/international-content";

export const metadata: Metadata = {
  title: "Seguro médico para estudiar o residir en España",
  description:
    "Karoline Mora te ayuda a revisar el seguro médico, las fechas y la documentación necesaria para estudiar o residir en España.",
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

      {/* Hero 57/43 */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[520px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            <div className="w-full md:w-[57%] md:py-20">
              <nav className="text-xs text-text-secondary/50 mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-asisa-blue">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-text-primary font-medium">Internacional</li>
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
                Estudiantes, residentes y familiares pueden necesitar condiciones y periodos
                diferentes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={contactUrl} className="btn-primary h-12 px-7 text-sm">
                  Preparar mi caso
                </Link>
                <a href="#selector-tramite" className="btn-outline h-12 px-7 text-sm">
                  Elegir mi trámite
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

      {/* Introducción */}
      <section className="bg-surface-warm py-16 sm:py-20">
        <div className="container-section">
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
        </div>
      </section>

      {/* Selector de trámite */}
      <InternationalProcedureNavigator />

      {/* Dos modalidades */}
      <InternationalProductPaths />

      {/* Planificador de fechas */}
      <ArrivalDatePlanner contactUrl={contactUrl} />

      {/* Checklist de requisitos */}
      <RequirementsChecklist />

      {/* Recorrido con Karoline */}
      <InternationalProcessSection />

      {/* Documentación */}
      <InsuranceDocumentsFeature />

      {/* Qué información necesita Karoline */}
      <DataNeededSection contactUrl={contactUrl} />

      {/* FAQ */}
      <InternationalFaqSection />

      {/* CTA final */}
      <section className="bg-mora-navy py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
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
              <Link href={contactUrl} className="btn-outline-white h-12 px-8 text-sm">
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

function InternationalArrivalVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl md:min-h-[400px]">
      <Image
        src="/international-feature.jpg"
        alt="Llegada a una ciudad contemporánea"
        fill
        sizes="(max-width: 768px) 100vw, 43vw"
        className="object-cover"
        priority
      />
      <div className="absolute bottom-4 left-4 space-y-0.5">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80">MADRID</span>
        <br />
        <span className="text-[10px] font-light tracking-wider text-white/50">40.4168° N · 3.7038° W</span>
        <br />
        <span className="text-[10px] font-light tracking-wider text-white/40">ARRIVAL / START DATE / DURATION</span>
      </div>
    </div>
  );
}

function InternationalProcedureNavigator() {
  return (
    <section className="bg-white py-20 sm:py-28" id="selector-tramite">
      <div className="container-section">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
            <span className="eyebrow">TU TRÁMITE</span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">¿Qué estás preparando?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
              Cada procedimiento puede requerir condiciones diferentes. Selecciona el que
              más se acerca a tu situación.
            </p>
          </div>
          <div className="md:w-[65%]">
            <div className="divide-y divide-border-soft">
              {procedures.map((p) => (
                <Link
                  key={p.value}
                  href={buildContactUrl(p.value)}
                  className="group flex items-start gap-6 py-5 transition-colors hover:bg-asisa-blue-light/30 focus-visible:outline-2 focus-visible:outline-asisa-blue focus-visible:outline-offset-2 sm:py-6"
                >
                  <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{p.number}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{p.description}</p>
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

function InternationalProductPaths() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">DOS MODALIDADES</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Dos recorridos que no deben confundirse.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border border-border-soft rounded-2xl p-8 bg-white">
              <h3 className="text-lg font-bold text-text-primary">ASISA Health Students</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Orientado a estudiantes internacionales y determinados perfiles formativos.
                Puede utilizarse para procedimientos de estudios cuando se cumplen las
                condiciones correspondientes.
              </p>
              <div className="mt-6">
                <Link href={buildContactUrl("estudios")} className="text-sm font-medium text-asisa-blue hover:underline">
                  Revisar mi caso de estudios &rarr;
                </Link>
              </div>
            </div>
            <div className="border border-border-soft rounded-2xl p-8 bg-white">
              <h3 className="text-lg font-bold text-text-primary">ASISA Health Residents</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Orientado a personas extranjeras que preparan determinados visados o
                permisos de residencia. Debe revisarse según el procedimiento y
                documentación requerida.
              </p>
              <div className="mt-6">
                <Link href={buildContactUrl("residencia")} className="text-sm font-medium text-asisa-blue hover:underline">
                  Revisar mi caso de residencia &rarr;
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-text-secondary/60 text-center max-w-2xl mx-auto">
            El nombre del producto no determina por sí solo que sea válido para cualquier
            procedimiento. Deben revisarse las condiciones del seguro y los requisitos de
            la autoridad competente.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrivalDatePlanner({ contactUrl }: { contactUrl: string }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">PLANIFICACIÓN</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Tres fechas que deben encajar.</h2>
          <div className="mt-10 space-y-0">
            {[
              { n: "01", t: "Presentación del trámite", d: "Fecha prevista de cita o presentación ante el consulado u oficina correspondiente." },
              { n: "02", t: "Entrada o inicio de la actividad", d: "Fecha prevista de llegada, comienzo de estudios o inicio del periodo solicitado." },
              { n: "03", t: "Fin de la cobertura", d: "Fecha hasta la que debe mantenerse el seguro según el periodo que se pretende acreditar." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 border-t border-border-soft py-5 last:border-b">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{item.t}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary/60">
            La fecha de inicio no debe elegirse automáticamente. Debe coordinarse con el
            trámite y con las condiciones de contratación.
          </p>
          <div className="mt-6">
            <Link href={contactUrl} className="btn-primary h-11 px-6 text-sm">
              Revisar mis fechas con Karoline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequirementsChecklist() {
  return (
    <section className="bg-mora-navy py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">ANTES DE CONTRATAR</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">Qué conviene comprobar en la documentación oficial.</h2>
          <div className="mt-10 divide-y divide-white/10">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-5 py-5">
                <span className="flex-shrink-0 text-xs font-light text-mora-gold/60">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-semibold text-white">{req.label}</h3>
                  <p className="mt-1 text-sm text-white/50">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/30 leading-relaxed">
            Los requisitos concretos pueden variar según el procedimiento, la oficina
            consular, la normativa aplicable y las circunstancias de la persona solicitante.
          </p>
        </div>
      </div>
    </section>
  );
}

function InternationalProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">CÓMO TRABAJA KAROLINE</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Un recorrido claro para tu llegada a España.</h2>
          <div className="mt-10 divide-y divide-border-soft">
            {processSteps.map((step) => (
              <div key={step.n} className="flex items-start gap-5 py-5">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{step.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{step.t}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsuranceDocumentsFeature() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">DOCUMENTACIÓN</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Qué documentación puede acompañar a la contratación.</h2>
          <div className="mt-10 space-y-3">
            {["Póliza o condiciones particulares.", "Certificado del seguro, cuando proceda.", "Recibo o justificante correspondiente.", "Documentación informativa del producto."].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border border-border-soft rounded-xl bg-white p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-mora-navy text-xs font-bold text-white">{i + 1}</span>
                <span className="text-sm text-text-secondary self-center">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary/60">
            Los documentos concretos dependen de la modalidad contratada y de los
            procedimientos de la entidad aseguradora.
          </p>
        </div>
      </div>
    </section>
  );
}

function DataNeededSection({ contactUrl }: { contactUrl: string }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Cinco datos permiten empezar a revisar el caso.</h2>
          <div className="mt-8 space-y-3">
            {[
              "Tipo de trámite.",
              "Oficina consular o lugar donde se presentará.",
              "Fecha prevista de inicio.",
              "Duración.",
              "Número de personas y edades aproximadas.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-t border-border-soft py-3">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-text-secondary">{item}</span>
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
      </div>
    </section>
  );
}

function InternationalFaqSection() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">PREGUNTAS FRECUENTES</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Resuelve tus dudas sobre el seguro para llegar a España.</h2>
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
    </section>
  );
}