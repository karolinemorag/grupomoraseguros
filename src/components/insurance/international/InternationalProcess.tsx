"use client";

import { processSteps } from "./international-content";

export default function InternationalProcess() {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="eyebrow">CÓMO TRABAJA KAROLINE</span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
        Un recorrido claro para tu llegada a España.
      </h2>
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
  );
}