"use client";

const items = [
  "Atención directa",
  "Inscripción verificable",
  "Explicaciones claras",
  "Acompañamiento durante el proceso",
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border-soft bg-surface-soft">
      <div className="container-section">
        <div className="flex flex-col py-5 md:flex-row">
          {items.map((text, i) => (
            <div
              key={text}
              className="flex items-center gap-3 border-b border-border-soft/50 py-3 last:border-b-0 md:border-b-0 md:border-r md:border-border-soft/50 md:px-6 md:py-0 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs font-semibold tracking-widest text-asisa-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-text-primary">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}