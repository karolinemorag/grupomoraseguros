import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight, ExternalLink, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro de salud: qué conviene comparar",
  description:
    "Karoline Mora te ayuda a revisar modalidades de seguro de salud, copagos, carencias, hospitalización y cuadro médico antes de contratar.",
};

const healthNeeds = [
  {
    number: "01",
    title: "Consultas y especialistas para el día a día.",
    description:
      "Para quienes quieren revisar opciones de asistencia ambulatoria, medicina general, especialistas y pruebas diagnósticas.",
  },
  {
    number: "02",
    title: "Una modalidad que contemple hospitalización.",
    description:
      "Para valorar opciones que puedan incorporar ingreso hospitalario e intervenciones, según las condiciones contratadas.",
  },
  {
    number: "03",
    title: "Controlar cuánto se paga al utilizar el seguro.",
    description:
      "Para comparar modalidades con copago, sin copago o con estructuras económicas diferentes.",
  },
  {
    number: "04",
    title: "Revisar opciones para varias personas.",
    description:
      "Para estudiar la incorporación de pareja, hijos u otros asegurados dentro de una misma contratación.",
  },
  {
    number: "05",
    title: "Poder acudir a profesionales fuera del cuadro médico.",
    description:
      "Para conocer si existen modalidades con sistemas de reembolso y bajo qué condiciones.",
  },
];

const comparisonItems = [
  {
    title: "Tipo de asistencia",
    desc: "Comprueba si la modalidad se limita a servicios ambulatorios o si puede incorporar hospitalización.",
  },
  {
    title: "Copagos",
    desc: "Revisa si se abona una cantidad adicional al utilizar determinados servicios y cómo se calcula.",
  },
  {
    title: "Carencias",
    desc: "Determinadas prestaciones pueden requerir que transcurra un plazo desde el inicio de la póliza.",
  },
  {
    title: "Cuadro médico",
    desc: "Comprueba qué profesionales, centros y hospitales están disponibles en tu provincia y para la modalidad concreta.",
  },
  {
    title: "Preexistencias y cuestionario",
    desc: "La contratación puede requerir información sobre el estado de salud y estar sujeta a valoración.",
  },
  {
    title: "Reembolso",
    desc: "Algunas modalidades pueden permitir acudir fuera del cuadro médico y solicitar el reembolso de parte del gasto dentro de sus límites.",
  },
  {
    title: "Límites y autorizaciones",
    desc: "Revisa posibles límites, requisitos de autorización y condiciones aplicables a pruebas o tratamientos.",
  },
  {
    title: "Precio y renovación",
    desc: "La prima puede depender de edad, provincia, modalidad, número de asegurados y otros factores.",
  },
];

const faqItems = [
  {
    q: "¿Qué diferencia hay entre un seguro con copago y uno sin copago?",
    a: "En las modalidades con copago, el asegurado abona una cantidad adicional al utilizar determinados servicios. El importe y los servicios afectados varían según el producto contratado.",
  },
  {
    q: "¿Todas las modalidades incluyen hospitalización?",
    a: "No. Algunas modalidades pueden centrarse en servicios ambulatorios. La cobertura de hospitalización depende del producto concreto.",
  },
  {
    q: "¿Qué es un periodo de carencia?",
    a: "Es el plazo que debe transcurrir desde el alta en la póliza antes de poder acceder a determinadas prestaciones. Su existencia y duración dependen del producto y la prestación.",
  },
  {
    q: "¿Cómo puedo comprobar si un médico está incluido?",
    a: "El cuadro médico oficial de la entidad aseguradora está disponible en su buscador online. Se recomienda consultarlo antes de contratar.",
  },
  {
    q: "¿Puedo incluir a varias personas en la misma modalidad?",
    a: "Depende del producto. Algunas modalidades permiten incluir cónyuge, hijos u otros familiares dentro de la misma contratación.",
  },
  {
    q: "¿Es necesario completar un cuestionario de salud?",
    a: "Sí, en la mayoría de los casos la entidad aseguradora requiere una declaración de salud que puede influir en las condiciones de contratación.",
  },
  {
    q: "¿El precio es igual para todas las personas?",
    a: "No. La prima puede variar en función de la edad, provincia, modalidad, coberturas contratadas y otras circunstancias.",
  },
];

export default function SaludPage() {
  return (
    <>
      {/* Hero editorial 56/44 */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[520px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            <div className="w-full md:w-[56%] md:py-20">
              {/* Breadcrumb */}
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
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-12 px-7 text-sm"
                >
                  Consultar mi situación
                </a>
                <a
                  href="#que-comparar"
                  className="btn-outline h-12 px-7 text-sm"
                >
                  Ver qué conviene comparar
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                Atención directa con {siteConfig.ownerName}, {siteConfig.professionalStatus}.
              </p>
            </div>
            <div className="relative w-full md:w-[44%] md:self-stretch">
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
        </div>
      </section>

      {/* HealthNeedsNavigator */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-section">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
              <span className="eyebrow">TU SITUACIÓN</span>
              <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
                ¿Qué estás buscando?
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
                No necesitas conocer el nombre de una póliza. Empieza por explicar qué te
                gustaría resolver.
              </p>
            </div>
            <div className="md:w-[65%]">
              <div className="divide-y divide-border-soft">
                {healthNeeds.map((item) => (
                  <div
                    key={item.number}
                    className="group flex items-start gap-6 py-5 transition-colors hover:bg-asisa-blue-light/30 sm:py-6"
                  >
                    <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.number}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{item.title}</h3>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HealthComparisonGuide */}
      <section className="bg-surface-soft py-20 sm:py-28" id="que-comparar">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">QUÉ CONVIENE COMPARAR</span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Una póliza es más que una lista de coberturas.
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
              Revisa estos aspectos antes de decidir. No todos se aplican de la misma
              manera en todas las modalidades.
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
      </section>

      {/* Copago y carencia */}
      <section className="bg-mora-navy py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
              DOS CONCEPTOS CLAVE
            </span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">
              Copago y carencia no significan lo mismo.
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="text-xl font-bold text-white">Qué es un copago</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Es una cantidad que puede abonarse cuando se utiliza un servicio incluido
                  en determinadas pólizas. El importe y los servicios afectados dependen de
                  la modalidad.
                </p>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  Una prima mensual más reducida puede estar asociada a pagos adicionales
                  por uso, pero la comparación debe hacerse revisando el conjunto de condiciones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Qué es una carencia</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Es el periodo que debe transcurrir desde el alta antes de poder utilizar
                  determinadas prestaciones contempladas en la póliza.
                </p>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  Su existencia y duración dependen del producto, la prestación y las
                  circunstancias de contratación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuadro médico */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-section">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="w-full md:w-[55%]">
              <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
                Comprueba médicos y centros antes de contratar.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                El cuadro médico puede variar según la provincia y la modalidad. Consulta
                siempre el buscador oficial y actualizado de ASISA para revisar profesionales,
                clínicas y hospitales.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.asisa.es/buscador-de-profesionales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-11 px-6 text-sm"
                >
                  Consultar cuadro médico oficial
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue"
                >
                  Preguntar a Karoline &rarr;
                </a>
              </div>
              <p className="mt-4 text-xs text-text-secondary/50">
                La disponibilidad de un profesional o centro debe comprobarse para la
                modalidad y fecha concretas.
              </p>
            </div>
            <div className="w-full md:w-[45%]">
              <div className="flex h-64 items-center justify-center rounded-2xl bg-asisa-blue-light">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-asisa-blue">
                    BUSCADOR OFICIAL
                  </p>
                  <div className="mx-auto mt-3 h-px w-8 bg-mora-gold/50" aria-hidden="true" />
                  <p className="mt-3 text-xs text-text-secondary/60">asisa.es</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo orienta Karoline */}
      <section className="bg-surface-soft py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Una recomendación empieza por conocer tu caso.
            </h2>
            <div className="mt-10 divide-y divide-border-soft">
              {[
                { n: "01", t: "Quién necesita cobertura", d: "Edad, provincia, número de asegurados y relación entre ellos." },
                { n: "02", t: "Qué uso se espera", d: "Consultas habituales, especialistas, hospitalización, viajes u otras necesidades relevantes." },
                { n: "03", t: "Qué estructura se prefiere", d: "Con copagos, sin copagos, asistencia ambulatoria, hospitalización o posible reembolso." },
                { n: "04", t: "Qué condiciones deben revisarse", d: "Carencias, cuestionario de salud, fecha de inicio, precio y documentación." },
              ].map((item) => (
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

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">PREGUNTAS FRECUENTES</span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Resuelve tus dudas sobre el seguro de salud.
            </h2>
            <div className="mt-10 space-y-0 divide-y divide-border-soft">
              {faqItems.map((item, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-text-primary transition-colors hover:text-asisa-blue list-none">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 text-xs text-mora-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed pr-8">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-surface-soft py-16 sm:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-playfair text-2xl font-bold text-text-primary sm:text-3xl text-center">
              Revisa tus opciones de salud con Karoline.
            </h2>
            <p className="mt-2 text-sm text-text-secondary text-center">
              Cuéntale quién necesita cobertura y qué aspectos son importantes para ti.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hola, Karoline. Quiero información sobre un seguro de salud y necesito orientación para elegir una modalidad.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-8 text-sm"
              >
                Consultar mi situación
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue"
              >
                Hablar por WhatsApp &rarr;
              </a>
            </div>
            <p className="mt-6 text-xs text-text-secondary/50 text-center">
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-asisa-blue"
                >
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