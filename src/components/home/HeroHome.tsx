"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/image-library";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroHome() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;
  const img = siteImages.homeMadrid;

  return (
    <section className="relative overflow-hidden bg-white pt-8 md:pt-10" aria-label="Hero principal">
      <div className="container-section">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          {/* Left column - Text (55%) */}
          <div className="w-full max-w-xl md:w-[55%]">
            <span className="eyebrow">ASESORAMIENTO PERSONAL EN SEGUROS</span>
            <h1 className="mt-4 text-display-xl text-text-primary">
              Seguros claros para proteger tus decisiones importantes.
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary leading-relaxed max-w-lg">
              {siteConfig.ownerName} te ayuda a entender las opciones disponibles,
              revisar las condiciones y encontrar una alternativa adaptada a tu
              situación.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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
            <div className="mt-8 border-l-2 border-mora-gold pl-4">
              <p className="text-sm font-semibold text-text-primary">
                {siteConfig.ownerName}
              </p>
              <p className="text-xs text-text-secondary">
                {siteConfig.professionalStatus}
              </p>
              <p className="text-xs text-text-secondary/60">
                DGSFP {siteConfig.dgsfpCode}
              </p>
            </div>
          </div>

          {/* Right column - Madrid hero image (45%) */}
          <div className="relative w-full md:w-[45%] md:self-stretch">
            <div className="relative h-[420px] overflow-hidden rounded-xl md:h-[560px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: img.objectPosition }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}