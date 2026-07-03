"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroHome() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-white" aria-label="Hero principal">
      <div className="container-section">
        <div className="flex min-h-[620px] flex-col items-center gap-12 py-20 md:flex-row md:py-0">
          {/* Left column - Text (55%) */}
          <div className="w-full max-w-xl md:w-[55%] md:py-24">
            <span className="eyebrow">ASESORAMIENTO PERSONAL EN SEGUROS</span>
            <h1 className="mt-6 text-display-xl text-text-primary">
              Seguros claros para proteger tus decisiones importantes.
            </h1>
            <p className="mt-6 text-body-lg text-text-secondary leading-relaxed max-w-lg">
              {siteConfig.ownerName} te ayuda a entender las opciones disponibles,
              revisar las condiciones y encontrar una alternativa adaptada a tu
              situación.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-7 text-sm"
                aria-label="Hablar por WhatsApp con Karoline"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Hablar por WhatsApp
              </a>
              <Link
                href="/seguros"
                className="btn-outline h-12 px-7 text-sm"
              >
                Explorar seguros
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            {/* Professional seal */}
            <div className="mt-10 border-l-2 border-mora-gold pl-4">
              <p className="text-sm font-medium text-text-primary">
                {siteConfig.ownerName}
              </p>
              <p className="text-xs text-text-secondary">
                {siteConfig.professionalStatus}
              </p>
              <p className="text-xs text-text-secondary/70">
                DGSFP {siteConfig.dgsfpCode}
              </p>
            </div>
          </div>

          {/* Right column - Editorial image (45%) */}
          <div className="relative w-full md:w-[45%] md:self-stretch">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl md:rounded-none md:rounded-bl-[40px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
                }}
                aria-hidden="true"
              />
              {/* Decorative gold corner */}
              <div className="absolute bottom-0 right-0 h-24 w-24 bg-mora-gold/20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}