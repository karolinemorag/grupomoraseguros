"use client";

import Link from "next/link";

interface ArrivalDatePlannerProps {
  contactUrl: string;
}

export default function ArrivalDatePlanner({ contactUrl }: ArrivalDatePlannerProps) {
  const items = [
    { n: "01", t: "Presentación", d: "Fecha prevista de cita o presentación del trámite." },
    { n: "02", t: "Inicio", d: "Fecha prevista de entrada, comienzo de estudios o inicio del periodo solicitado." },
    { n: "03", t: "Final", d: "Fecha hasta la que debe mantenerse el seguro según el periodo que se necesita acreditar." },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <span className="eyebrow">PLANIFICACIÓN</span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Tres fechas que deben encajar.</h2>
      <div className="mt-10 space-y-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-5 border-t border-border-soft py-5 last:border-b">
            <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">{item.n}</span>
            <div>
              <h3 className="text-base font-semibold text-text-primary">{item.t}</h3>
              <p className="mt-1 text-sm text-text-secondary">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-secondary/60">
        La fecha de efecto no debe elegirse automáticamente. Debe coordinarse con el
        trámite y con las condiciones de contratación.
      </p>
      <div className="mt-6">
        <Link href={contactUrl} className="btn-primary h-11 px-6 text-sm">
          Revisar mis fechas con Karoline
        </Link>
      </div>
    </div>
  );
}