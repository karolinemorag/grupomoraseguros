"use client";

import Link from "next/link";
import { buildContactUrl } from "./international-content";

export default function InternationalProductPaths() {
  return (
    <div className="mx-auto max-w-4xl">
      <span className="eyebrow">DOS MODALIDADES</span>
      <h2 className="mt-4 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">Dos recorridos que no deben confundirse.</h2>
      <div className="mt-10 gap-0 md:flex md:divide-x md:divide-border-soft">
        <div className="flex-1 pb-6 md:pb-0 md:pr-10 border-b md:border-b-0 border-border-soft">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">01</span>
            <div>
              <h3 className="text-base font-semibold text-text-primary">Health Students</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Orientado a determinados perfiles de estudios y formación.
                Las fechas y la duración deben revisarse según el procedimiento.
                La contratación está sujeta a condiciones y aceptación de la entidad aseguradora.
              </p>
              <div className="mt-4">
                <Link href={buildContactUrl("estudios")} className="text-sm font-medium text-asisa-blue hover:underline">
                  Revisar mi caso de estudios &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-6 md:pt-0 md:pl-10">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 text-xs font-semibold text-mora-gold">02</span>
            <div>
              <h3 className="text-base font-semibold text-text-primary">Health Residents</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Orientado a determinados procedimientos de residencia.
                Deben revisarse vigencia, requisitos y documentación según el trámite.
                La contratación está sujeta a condiciones y aceptación de la entidad aseguradora.
              </p>
              <div className="mt-4">
                <Link href={buildContactUrl("residencia")} className="text-sm font-medium text-asisa-blue hover:underline">
                  Revisar mi caso de residencia &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-text-secondary/60 text-center max-w-2xl mx-auto">
        El nombre de una modalidad no determina por sí solo su validez para cualquier
        procedimiento. Deben comprobarse las condiciones y los requisitos de la autoridad
        correspondiente.
      </p>
    </div>
  );
}