"use client";

import { Shield, CheckCircle, FileText, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: <Shield className="h-4 w-4" aria-hidden="true" />,
    text: "Atención directa con Karoline",
  },
  {
    icon: <CheckCircle className="h-4 w-4" aria-hidden="true" />,
    text: "Inscripción profesional verificable",
  },
  {
    icon: <FileText className="h-4 w-4" aria-hidden="true" />,
    text: "Explicaciones claras antes de contratar",
  },
  {
    icon: <HeartHandshake className="h-4 w-4" aria-hidden="true" />,
    text: "Acompañamiento durante el proceso",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border-soft bg-surface-soft">
      <div className="container-section">
        <div className="flex flex-col gap-0 py-6 md:flex-row md:py-5">
          {items.map((item, i) => (
            <div
              key={item.text}
              className="flex items-center gap-3 border-b border-border-soft/50 py-3 last:border-b-0 md:border-b-0 md:border-r md:border-border-soft/50 md:px-6 md:py-0 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-asisa-blue/10 text-asisa-blue">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-text-primary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}