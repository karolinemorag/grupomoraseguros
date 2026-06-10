"use client";

import { CTAWhatsApp, CTAAppointment } from "@/components/shared/CTAButtons";

export default function CTASection() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        ¿Tienes dudas sobre
        <br />
        qué seguro necesitas?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
        Cuéntanos tu situación y te orientamos sin compromiso.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <CTAWhatsApp size="lg" />
        <CTAAppointment size="lg" />
      </div>
    </div>
  );
}