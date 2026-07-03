"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NeedItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

const needs: NeedItem[] = [
  {
    number: "01",
    title: "Quiero revisar un seguro de salud.",
    description:
      "Comprende las modalidades disponibles, sus posibles copagos, carencias, servicios y condiciones de contratación.",
    href: "/contacto",
  },
  {
    number: "02",
    title: "Quiero proteger económicamente a mi familia.",
    description:
      "Revisa capitales, beneficiarios, duración y situaciones cubiertas antes de elegir una modalidad.",
    href: "/seguros/vida",
  },
  {
    number: "03",
    title: "Quiero anticipar los gastos y gestiones de un fallecimiento.",
    description:
      "Conoce cómo funcionan los servicios y capitales contratados y qué aspectos conviene comparar.",
    href: "/seguros/decesos",
  },
  {
    number: "04",
    title: "Voy a estudiar o residir en España.",
    description:
      "Revisa la duración, fecha de inicio y características del seguro según el trámite que estés preparando.",
    href: "/estudiantes-internacionales",
  },
  {
    number: "05",
    title: "Quiero revisar opciones para proteger a mi mascota.",
    description:
      "Valora las garantías disponibles, sus límites y las diferencias entre modalidades.",
    href: "/seguros/mascotas",
  },
];

export default function NeedsNavigator() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-section">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Left column (35%) */}
          <div className="md:w-[35%] md:sticky md:top-32 md:self-start">
            <span className="eyebrow">ORIENTACIÓN SEGÚN TU SITUACIÓN</span>
            <h2 className="mt-6 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Empecemos por lo que necesitas resolver.
            </h2>
            <div className="mt-4 h-px w-12 bg-mora-gold" aria-hidden="true" />
            <p className="mt-6 text-text-secondary leading-relaxed max-w-sm">
              Cada situación requiere revisar aspectos distintos. Elige la que más se
              acerca a tu caso y conoce qué puede ayudarte a valorar Karoline.
            </p>
          </div>

          {/* Right column (65%) */}
          <div className="md:w-[65%]">
            <div className="divide-y divide-border-soft">
              {needs.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="group flex items-start gap-6 py-5 transition-colors hover:bg-asisa-blue-light/30 focus-visible:outline-2 focus-visible:outline-asisa-blue focus-visible:outline-offset-2 sm:py-6"
                >
                  <span className="flex-shrink-0 text-sm font-semibold text-mora-gold transition-colors group-hover:text-asisa-blue">
                    {item.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-asisa-blue sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed max-w-prose">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-text-secondary transition-all group-hover:translate-x-1 group-hover:text-asisa-blue" aria-hidden="true" />
                </Link>
              ))}
            </div>

            {/* "No sé qué opción necesito" */}
            <div className="mt-8 border-t border-border-soft pt-6">
              <Link
                href="/contacto"
                className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-asisa-blue"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-soft text-sm font-medium">
                  ?
                </span>
                <span className="text-sm font-medium">No sé qué opción necesito</span>
                <ArrowRight className="ml-auto h-4 w-4 transition-all group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}