"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const routes = [
  {
    number: "01",
    title: "Estudios en España",
    description:
      "Revisión de duración, fecha de inicio y características del seguro según el periodo formativo.",
  },
  {
    number: "02",
    title: "Residencia no lucrativa",
    description:
      "Orientación sobre las modalidades disponibles y los aspectos que conviene comprobar antes de contratar.",
  },
  {
    number: "03",
    title: "Familiares y otros supuestos",
    description:
      "Revisión individual cuando varias personas necesitan cobertura o el procedimiento presenta circunstancias particulares.",
  },
];

const checklist = [
  "Fecha de inicio",
  "Duración de la cobertura",
  "Copagos y carencias",
  "Documentación del seguro",
];

export default function InternationalFeature() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="bg-surface-warm py-20 sm:py-28">
      <div className="container-section">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Left column - Visual (58%) */}
          <div className="md:w-[58%]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/international-feature.jpg"
                alt="Edificio emblemático de Madrid con arquitectura contemporánea"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Editorial detail */}
              <div className="absolute bottom-4 left-4 space-y-0.5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80">
                  MADRID
                </span>
                <br />
                <span className="text-[10px] font-light tracking-wider text-white/50">
                  40.4168° N · 3.7038° W
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Content (42%) */}
          <div className="md:w-[42%]">
            <span className="eyebrow">SOLUCIONES INTERNACIONALES</span>
            <h2 className="mt-6 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Llegar a España con cada detalle bien preparado.
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              Karoline te orienta sobre las opciones de seguro médico disponibles para
              estudiantes, residentes y familiares que están preparando su llegada a España.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              La duración, la fecha de inicio, las condiciones del seguro y la documentación
              deben revisarse según el trámite y la situación personal de cada solicitante.
            </p>

            {/* Routes */}
            <div className="mt-8 divide-y divide-border-soft">
              {routes.map((route) => (
                <div
                  key={route.number}
                  className="group flex items-start gap-4 py-4 transition-colors hover:bg-asisa-blue-light/20"
                >
                  <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">
                    {route.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {route.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-text-secondary leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-text-secondary/50 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-text-primary">Aspectos que conviene revisar</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-mora-gold flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-text-secondary/60 leading-relaxed">
                Los requisitos pueden variar según el procedimiento, el consulado, la
                oficina competente y las circunstancias personales del solicitante.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/estudiantes-internacionales"
                className="btn-primary h-11 px-6 text-sm"
              >
                Revisar mi situación
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-asisa-blue"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Hablar con Karoline por WhatsApp
              </a>
            </div>

            {/* Attribution */}
            <p className="mt-6 text-[10px] text-text-secondary/40">
              Atención directa con {siteConfig.ownerName}, {siteConfig.professionalStatus}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}