"use client";

import { faqItems } from "./international-content";

export default function InternationalFaq() {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="eyebrow">PREGUNTAS FRECUENTES</span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
        Resuelve tus dudas sobre el seguro para llegar a España.
      </h2>
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
  );
}