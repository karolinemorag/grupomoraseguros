"use client";

import { CTAAdvice, CTAWhatsApp, CTAAppointment } from "@/components/shared/CTAButtons";

export default function HeroHome() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      aria-label="Hero principal"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534536281715-e28d76689b0e?q=80&w=2070&auto=format&fit=crop")',
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F1F3D]/80" aria-hidden="true" />

      {/* Content */}
      <div className="container-section relative z-10 w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-5xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl">
            Seguros con asistencia
            <br />
            personalizada 24/7
            <br />
            para ti y tu familia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            En Grupo Mora te ofrecemos un trato cercano, transparente y profesional.
            Te ayudamos a elegir el seguro que mejor se adapta a tus necesidades.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAAdvice size="lg" className="!border-white !text-white hover:!bg-white hover:!text-navy" />
            <CTAWhatsApp size="lg" />
            <CTAAppointment size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}