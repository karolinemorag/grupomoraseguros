"use client";

import TrustBadges from "@/components/shared/TrustBadges";

export default function TrustBlock() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
          Te explicamos cada opción con claridad, sin letra pequeña
        </h2>
        <p className="mt-4 text-lg text-gray-dark/80">
          En Grupo Mora creemos que la confianza se construye con transparencia.
          Por eso te explicamos cada cobertura en detalle, para que tomes la
          decisión más acertada para ti y tu familia.
        </p>
      </div>
      <TrustBadges />
    </div>
  );
}