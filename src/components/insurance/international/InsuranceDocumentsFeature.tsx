"use client";

import { documents } from "./international-content";

export default function InsuranceDocumentsFeature() {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="eyebrow">DOCUMENTACIÓN</span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
        Qué documentación puede acompañar a la contratación.
      </h2>
      <div className="mt-10 space-y-3">
        {documents.map((item, i) => (
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
  );
}