"use client";

import { requirements } from "./international-content";

export default function InternationalRequirements() {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
        ANTES DE CONTRATAR
      </span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-white sm:text-4xl">
        Qué conviene comprobar en la documentación oficial.
      </h2>
      <div className="mt-10 divide-y divide-white/10">
        {requirements.map((req, i) => (
          <div key={i} className="flex items-start gap-5 py-5">
            <span className="flex-shrink-0 text-xs font-light text-mora-gold/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">{req.label}</h3>
              <p className="mt-1 text-sm text-white/50">{req.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-white/30 leading-relaxed">
        Los requisitos concretos pueden variar según el procedimiento, la normativa, la oficina
        consular y las circunstancias de la persona solicitante.
      </p>
    </div>
  );
}