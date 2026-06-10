"use client";

import { CTAAdvice, CTAWhatsApp, CTAAppointment } from "@/components/shared/CTAButtons";

export default function HeroHome() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light px-4 pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
      aria-label="Hero principal"
    >
      <div className="container-section relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Seguros con asistencia personalizada 24/7 para ti y tu familia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            En Grupo Mora te ofrecemos un trato cercano, transparente y profesional.
            Te ayudamos a elegir el seguro que mejor se adapta a tus necesidades y a
            las de tu familia, con el respaldo de una atención disponible todos los
            días del año.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAAdvice size="lg" className="!border-white !text-white hover:!bg-white hover:!text-navy" />
            <CTAWhatsApp size="lg" />
            <CTAAppointment size="lg" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-light to-transparent" />
    </section>
  );
}