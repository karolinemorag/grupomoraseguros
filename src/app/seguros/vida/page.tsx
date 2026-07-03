import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lifeNeeds, policyConcepts, faqItems, buildContactUrl } from "@/components/insurance/life/life-content";

export const metadata: Metadata = {
  title: "Seguro de vida: capital, beneficiarios y garantías",
  description:
    "Karoline Mora te ayuda a revisar capital, beneficiarios, duración y garantías antes de contratar un seguro de vida.",
};

export default function VidaPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;
  const whatsappMsg = encodeURIComponent("Hola, Karoline. Quiero revisar un seguro de vida y necesito orientación sobre el capital y las garantías.");
  const contactUrl = `/contacto?tipo=contratar&interes=vida`;

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

      {/* Hero 56/44 */}
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
                  <li className="text-text-primary font-medium">Vida</li>
                </ol>
              </nav>
              <span className="eyebrow">SEGURO DE VIDA</span>
              <h1 className="mt-6 text-display-lg text-text-primary">
                Decidir el capital empieza por entender qué depende de ti.
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
                {siteConfig.ownerName} te ayuda a revisar tus responsabilidades económicas,
                las personas que quieres proteger y las condiciones de las modalidades
                disponibles.
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                El objetivo no es elegir una cifra al azar, sino comprender qué necesidades
                debería ayudar a cubrir el seguro.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={contactUrl} className="btn-primary h-12 px-7 text-sm">
                  Revisar mi situación
                </Link>
                <a href="#capital" className="btn-outline h-12 px-7 text-sm">
                  Ver qué conviene calcular
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                Atención directa con {siteConfig.ownerName}, {siteConfig.professionalStatus}.
              </p>
            </div>
            <div className="relative w-full md:w-[44%] md:self-stretch">
              <LifeResponsibilityVisual />
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
              El seguro de vida no empieza por una póliza.
            </h2>
            <div className="mt-4 h-px w-12 bg-mora-gold" aria-hidden="true" />
            <p className="mt-6 text-text-secondary leading-relaxed">
              Empieza por identificar qué personas, pagos y proyectos dependen de tus ingresos.
              A partir de ahí pueden revisarse el capital, la duración y las garantías que ofrece
              cada modalidad.
            </p>
            <p className="mt-4 text-sm text-text-secondary/70">
              La contratación y sus condiciones están sujetas a la valoración de la entidad
              aseguradora.
            </p>
          </div>
        </div>
      </section>

      {/* LifeNeedsNavigator */}
      <LifeNeedsNavigator />

      {/* Dos enfoques */}
      <LifeProtectionPaths />

      {/* Conceptos fundamentales */}
      <LifePolicyConcepts />

      {/* Capital Planning Guide */}
      <CapitalPlanningGuide />

      {/* Garantía principal y opcionales */}
      <LifeCoverageStructure />

      {/* Beneficiarios */}
      <BeneficiarySection />

      {/* Valoración */}
      <UnderwritingSection />

      {/* Cómo orienta Karoline */}
      <KarolineLifeGuidance />

      {/* FAQ */}
      <LifeFaqSection />

      {/* CTA final */}
      <section className="bg-surface-soft py-16 sm:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold text-center block">
              HABLAR CON KAROLINE
            </span>
            <h2 className="mt-4 font-playfair text-2xl font-bold text-text-primary sm:text-3xl text-center">
              Ordenemos primero qué necesitas proteger.
            </h2>
            <p className="mt-2 text-sm text-text-secondary text-center">
              Cuéntale a Karoline qué responsabilidades quieres revisar y podrá ayudarte a
              entender las modalidades disponibles y los siguientes pasos.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={contactUrl} className="btn-primary h-12 px-8 text-sm">
                Revisar mi situación
              </Link>
              <a
                href={`${whatsappUrl}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue"
              >
                Hablar por WhatsApp &rarr;
              </a>
            </div>
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
                { label: "Seguro de salud", href: "/seguros/salud" },
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

function LifeResponsibilityVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-surface-warm md:min-h-[400px] border border-border-soft">
      <div className="grid grid-cols-2 gap-5 p-8">
        {["CAPITAL", "BENEFICIARIOS", "DURACIÓN", "RESPONSABILIDADES"].map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-2">
            <span className="text-xs font-light text-text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold text-text-primary text-center">{item}</span>
            <div className="h-px w-6 bg-mora-gold/50" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LifeNeedsNavigator() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
            <span className="eyebrow">TU SITUACIÓN</span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">¿Qué responsabilidad quieres revisar?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
              No necesitas saber todavía qué producto o capital elegir. Empieza por aquello que te preocupa proteger.
            </p>
          </div>
          <div className="md:w-[65%]">
            <div className="divide-y divide-border-soft">
              {lifeNeeds.map((item) => (
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

function LifeProtectionPaths() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">DOS ENFOQUES</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Dos puntos de partida diferentes.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border border-border-soft rounded-2xl p-8 bg-white">
              <h3 className="text-lg font-bold text-text-primary">Protección vinculada a responsabilidades personales</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Permite revisar un capital destinado a las personas beneficiarias y valorar
                garantías adicionales según la modalidad contratada.
              </p>
            </div>
            <div className="border border-border-soft rounded-2xl p-8 bg-white">
              <h3 className="text-lg font-bold text-text-primary">Protección relacionada con un préstamo hipotecario</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Permite estudiar una modalidad orientada a la deuda hipotecaria, revisando
                capital, duración, beneficiarios y funcionamiento concreto.
              </p>
              <p className="mt-3 text-xs text-text-secondary/60">
                Las condiciones concretas deben comprobarse en la documentación del producto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifePolicyConcepts() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">CONCEPTOS</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Seis conceptos que conviene distinguir.</h2>
          <div className="mt-10 divide-y divide-border-soft">
            {policyConcepts.map((c, i) => (
              <div key={i} className="flex items-start gap-5 py-5">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{c.term}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{c.def}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapitalPlanningGuide() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28" id="capital">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">CAPITAL ASEGURADO</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Una cifra debe responder a necesidades concretas.</h2>
          <div className="mt-10 space-y-4">
            {[
              { letter: "A", label: "Deudas pendientes", desc: "Hipoteca, préstamos u otras obligaciones que se quieran tener en cuenta." },
              { letter: "B", label: "Periodo de sustitución de ingresos", desc: "Tiempo durante el que las personas dependientes podrían necesitar apoyo económico." },
              { letter: "C", label: "Compromisos futuros", desc: "Estudios, cuidados, vivienda u otros gastos previstos." },
              { letter: "D", label: "Recursos ya disponibles", desc: "Ahorros, patrimonio y otras protecciones existentes que convenga considerar." },
            ].map((item) => (
              <div key={item.letter} className="flex items-start gap-4 border border-border-soft rounded-xl bg-white p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-mora-navy text-sm font-bold text-white">{item.letter}</span>
                <div>
                  <span className="text-sm font-semibold text-text-primary">{item.letter}. {item.label}</span>
                  <p className="mt-0.5 text-xs text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-lg font-bold text-text-primary">
            <span>A</span><span className="text-mora-gold">+</span><span>B</span><span className="text-mora-gold">+</span><span>C</span><span className="text-mora-gold">−</span><span>D</span>
          </div>
          <p className="mt-4 text-xs text-text-secondary/60 text-center">
            Este esquema es orientativo y no constituye asesoramiento financiero ni determina por sí solo el capital adecuado.
          </p>
          <div className="mt-6 text-center">
            <Link href={buildContactUrl("capital")} className="btn-primary h-11 px-6 text-sm">
              Revisar estas cifras con Karoline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifeCoverageStructure() {
  return (
    <section className="bg-mora-navy py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">ESTRUCTURA DE LA PROTECCIÓN</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">No todas las garantías funcionan igual.</h2>
          <div className="mt-10 space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-white">Garantía principal</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                En determinadas modalidades, la garantía principal contempla el pago del capital
                asegurado a las personas beneficiarias cuando se produce el fallecimiento del
                asegurado en las circunstancias previstas en la póliza.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Garantías opcionales</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Puede contratarse como garantía opcional, según producto, condiciones y aceptación:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Incapacidad permanente absoluta por cualquier causa.",
                  "Fallecimiento por accidente.",
                  "Garantías relacionadas con accidente de circulación.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mora-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeneficiarySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">La designación de beneficiarios merece una revisión clara.</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Es importante revisar quién figura como beneficiario, si existe uno o varios, el
            porcentaje o reparto cuando proceda y mantener la designación actualizada según
            las circunstancias personales.
          </p>
          <p className="mt-3 text-sm text-text-secondary/70">
            Las consecuencias jurídicas y fiscales pueden depender de las circunstancias
            personales. Cuando sea necesario, conviene consultar a un profesional especializado.
          </p>
        </div>
      </div>
    </section>
  );
}

function UnderwritingSection() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">VALORACIÓN</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Qué puede influir en la contratación.</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            La entidad aseguradora puede solicitar información para valorar el riesgo y
            determinar si acepta la contratación y bajo qué condiciones.
          </p>
          <div className="mt-8 divide-y divide-border-soft">
            {["Edad.", "Capital solicitado.", "Estado de salud declarado.", "Profesión y actividades.", "Garantías seleccionadas."].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary/60">
            La información debe facilitarse mediante los formularios y canales correspondientes
            de la entidad aseguradora.
          </p>
        </div>
      </div>
    </section>
  );
}

function KarolineLifeGuidance() {
  const steps = [
    { n: "01", t: "Comprender las responsabilidades", d: "Identificar personas dependientes, deudas y compromisos futuros." },
    { n: "02", t: "Ordenar las necesidades", d: "Separar protección familiar, necesidades hipotecarias y posibles garantías adicionales." },
    { n: "03", t: "Revisar modalidades", d: "Comparar capital, duración, garantías, exclusiones y condiciones de contratación." },
    { n: "04", t: "Acompañar el proceso", d: "Facilitar los siguientes pasos y ayudar a localizar la documentación y canales correspondientes." },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">ORIENTACIÓN PERSONAL</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Qué hace Karoline durante el proceso.</h2>
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

function LifeFaqSection() {
  return (
    <section className="bg-surface-soft py-20 sm:py-28">
      <div className="container-section">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">PREGUNTAS FRECUENTES</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Resuelve tus dudas sobre el seguro de vida.</h2>
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