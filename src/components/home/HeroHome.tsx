"use client";

import { CTAWhatsApp } from "@/components/shared/CTAButtons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 bg-[#0F1F3D]/85" aria-hidden="true" />

      {/* Content */}
      <div className="container-section relative z-10 w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium tracking-wider text-gold uppercase">
            Asesoramiento personal en seguros
          </span>
          <h1 className="mt-6 font-playfair text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Seguros claros para
            <br />
            proteger tus decisiones importantes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {siteConfig.ownerName} te ofrece atención directa para entender tus
            opciones, revisar las condiciones y encontrar una alternativa
            adaptada a tu situación.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAWhatsApp size="lg" />
            <Link
              href="/seguros"
              className="btn-outline-white h-12 px-8 text-sm"
            >
              Explorar seguros
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            {siteConfig.professionalStatus} &middot; DGSFP {siteConfig.dgsfpCode}
          </p>
        </div>
      </div>
    </section>
  );
}