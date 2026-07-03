"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { procedures, buildContactUrl } from "./international-content";

export default function InternationalProcedureNavigator() {
  return (
    <div className="flex flex-col gap-12 md:flex-row" id="selector-tramite">
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
  );
}