"use client";

const items = [
  { number: "01", text: "Atención directa" },
  { number: "02", text: "Inscripción verificable" },
  { number: "03", text: "Explicaciones claras" },
  { number: "04", text: "Acompañamiento durante el proceso" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border-soft bg-surface-soft" role="list" aria-label="Señales de confianza">
      <div className="container-section">
        <div className="grid grid-cols-2 divide-x divide-border-soft md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-center justify-center gap-1.5 px-4 py-7 text-center md:py-8"
              role="listitem"
            >
              <span className="text-sm font-semibold tracking-wider text-asisa-blue">
                {item.number}
              </span>
              <span className="text-[15px] font-semibold text-text-primary leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}