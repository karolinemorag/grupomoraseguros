"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    title: "Cuéntale tu situación.",
    description:
      "Una primera conversación permite conocer qué necesitas, a quién quieres proteger y qué aspectos son importantes para ti.",
  },
  {
    number: "02",
    title: "Revisa las alternativas disponibles.",
    description:
      "Karoline identifica las modalidades que pueden encajar con tu caso, sujetas a las condiciones de la entidad aseguradora.",
  },
  {
    number: "03",
    title: "Comprende condiciones y diferencias.",
    description:
      "Antes de decidir, podrás revisar coberturas, límites, exclusiones, precio y proceso de contratación.",
  },
  {
    number: "04",
    title: "Recibe acompañamiento durante el proceso.",
    description:
      "Karoline permanece como punto de contacto para orientarte y ayudarte a localizar los canales correspondientes.",
  },
];

export default function AdvisoryProcess() {
  return (
    <div>
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Left column (40%) */}
        <div className="md:w-[40%]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
            CÓMO TRABAJA KAROLINE
          </span>
          <h2 className="mt-6 font-playfair text-3xl font-bold text-white sm:text-4xl">
            Una conversación clara antes de tomar una decisión.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-sm">
            {siteConfig.ownerName} te acompaña personalmente para que conozcas las
            alternativas disponibles y entiendas qué estás contratando.
          </p>
          <Link
            href="/contacto"
            className="btn-outline-white mt-8 inline-flex h-11 px-6 text-sm"
          >
            Hablar con Karoline
          </Link>
        </div>

        {/* Right column (60%) - Process steps */}
        <div className="md:w-[60%]">
          <div className="relative space-y-0">
            {/* Vertical connecting line */}
            <div
              className="absolute left-[11px] top-3 bottom-3 w-px bg-white/10 md:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Number */}
                <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center">
                  <span className="text-sm font-light text-mora-gold/60">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-0">
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}