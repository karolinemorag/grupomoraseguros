import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionBand from "@/components/layout/SectionBand";

export const metadata: Metadata = {
  title: "Seguros y soluciones de protección",
  description:
    "Conoce las soluciones de salud, vida, decesos, mascotas e internacional sobre las que Karoline Mora puede orientarte de forma personal.",
};

const solutions = [
  {
    number: "01",
    category: "Salud",
    title: "Acceder a atención sanitaria privada.",
    description:
      "Revisa modalidades, copagos, carencias, servicios, cuadro médico y condiciones de contratación.",
    href: "/seguros/salud",
  },
  {
    number: "02",
    category: "Vida",
    title: "Proteger económicamente a las personas que dependen de ti.",
    description:
      "Valora capital, beneficiarios, duración, situaciones cubiertas y declaración de salud.",
    href: "/seguros/vida",
  },
  {
    number: "03",
    category: "Decesos",
    title: "Preparar los servicios y gestiones asociados a un fallecimiento.",
    description:
      "Comprende cómo funcionan el servicio funerario, el capital contratado y las garantías adicionales.",
    href: "/seguros/decesos",
  },
  {
    number: "04",
    category: "Mascotas",
    title: "Revisar opciones de asistencia y protección para tu mascota.",
    description:
      "Compara servicios veterinarios, responsabilidad civil, límites y garantías según la modalidad.",
    href: "/seguros/mascotas",
  },
  {
    number: "05",
    category: "Internacional",
    title: "Preparar un seguro médico para estudiar o residir en España.",
    description:
      "Revisa fecha de inicio, duración, copagos, carencias y documentación según el trámite.",
    href: "/estudiantes-internacionales",
  },
];

const reviewAspects = [
  {
    number: "01",
    title: "Alcance",
    desc: "Qué situaciones, servicios o prestaciones contempla la modalidad.",
  },
  {
    number: "02",
    title: "Límites",
    desc: "Importes, número de servicios, periodos o condiciones máximas aplicables.",
  },
  {
    number: "03",
    title: "Exclusiones",
    desc: "Situaciones que no se encuentran incluidas en la póliza.",
  },
  {
    number: "04",
    title: "Carencias y copagos",
    desc: "Cuándo comienzan determinadas prestaciones y qué costes puede asumir el asegurado.",
  },
  {
    number: "05",
    title: "Criterios de contratación",
    desc: "Edad, cuestionarios, provincia, documentación y aceptación de la entidad aseguradora.",
  },
];

export default function SegurosPage() {
  return (
    <>
      {/* Hero editorial — white + blue-soft visual */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-section">
          <div className="flex min-h-[500px] flex-col items-center gap-12 py-16 md:flex-row md:py-0">
            <div className="w-full md:w-[58%] md:py-20">
              <span className="eyebrow">SOLUCIONES DE SEGURO</span>
              <h1 className="mt-6 text-display-lg text-text-primary">
                Una protección distinta para cada momento.
              </h1>
              <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
                {siteConfig.ownerName} te ayuda a revisar las alternativas disponibles,
                entender sus diferencias y valorar qué opción puede adaptarse a tu situación.
              </p>
              <p className="mt-4 text-sm text-text-secondary">
                Empieza por la necesidad que quieres resolver.
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
                  href="#directorio"
                  className="btn-outline h-12 px-7 text-sm"
                >
                  Explorar soluciones
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative w-full md:w-[42%] md:self-stretch">
              <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-asisa-blue-light md:min-h-[400px]">
                <div className="p-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asisa-blue">
                    SALUD &middot; VIDA &middot; FAMILIA &middot; FUTURO
                  </p>
                  <div className="mx-auto mt-6 h-px w-12 bg-mora-gold/50" aria-hidden="true" />
                  <p className="mt-6 text-sm text-text-secondary/60 max-w-xs mx-auto">
                    Cada situación requiere una revisión distinta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción editorial — warm */}
      <SectionBand tone="warm" size="default">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">EL PUNTO DE PARTIDA</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            No empieces por el nombre del seguro.
          </h2>
          <div className="mt-4 h-px w-12 bg-mora-gold" aria-hidden="true" />
          <p className="mt-6 text-text-secondary leading-relaxed">
            Empieza por aquello que quieres proteger, el riesgo que te preocupa o la
            situación que necesitas preparar. {siteConfig.ownerName} podrá ayudarte a
            revisar las modalidades disponibles y sus condiciones.
          </p>
        </div>
      </SectionBand>

      {/* Directorio de soluciones — white */}
      <section className="bg-white py-20 sm:py-28" id="directorio">
        <div className="container-section">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
              <span className="eyebrow">EXPLORA LAS SOLUCIONES</span>
              <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
                ¿Qué necesitas proteger?
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
                Cada modalidad responde a una necesidad diferente. Revisa el punto de
                partida que más se acerca a tu situación.
              </p>
            </div>
            <div className="md:w-[65%]">
              <div className="divide-y divide-border-soft">
                {solutions.map((sol) => (
                  <Link
                    key={sol.number}
                    href={sol.href}
                    className="group flex items-start gap-6 py-5 transition-colors hover:bg-asisa-blue-light/30 focus-visible:outline-2 focus-visible:outline-asisa-blue focus-visible:outline-offset-2 sm:py-6"
                  >
                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-mora-gold transition-colors group-hover:text-asisa-blue">
                      {sol.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-asisa-blue sm:text-xl">
                        {sol.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed max-w-prose">
                        {sol.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-text-secondary transition-all group-hover:translate-x-1 group-hover:text-asisa-blue" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspectos a revisar — navy */}
      <section className="bg-mora-navy py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
              ANTES DE CONTRATAR
            </span>
            <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">
              Una póliza es más que una lista de coberturas.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Antes de contratar conviene comprender las condiciones que determinan cómo
              funciona realmente cada modalidad.
            </p>
            <div className="mt-10 space-y-0 divide-y divide-white/10">
              {reviewAspects.map((item) => (
                <div key={item.number} className="flex items-start gap-5 py-5">
                  <span className="flex-shrink-0 text-xs font-light text-mora-gold/60">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Papel de Karoline — blue-soft (orientación) */}
      <SectionBand tone="blue-soft" size="default">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">ORIENTACIÓN PERSONAL</span>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
            Qué hace Karoline durante el proceso.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Su función no es entregarte una lista de productos, sino ayudarte a comprender
            las alternativas disponibles y los aspectos que conviene revisar.
          </p>
          <div className="mt-10 flex flex-col gap-0">
            {[
              "Escuchar la situación.",
              "Identificar las modalidades disponibles.",
              "Explicar diferencias y condiciones.",
              "Acompañar la contratación.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-t border-border-soft py-4 last:border-b">
                <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* CTA final — asisa-blue band */}
      <section className="bg-asisa-blue py-20 sm:py-28 text-white">
        <div className="container-section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl">
              ¿Todavía no sabes por dónde empezar?
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              No necesitas conocer el nombre de la póliza. Cuéntale a Karoline qué
              quieres proteger y podrá ayudarte a identificar las alternativas que
              conviene revisar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-asisa-blue transition-colors hover:bg-white/90"
              >
                Contar mi situación
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hola, Karoline. Quiero orientación sobre qué tipo de seguro puede adaptarse a mi situación.")}`}
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