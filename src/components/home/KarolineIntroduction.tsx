"use client";

import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import { siteConfig } from "@/lib/site-config";

export default function KarolineIntroduction() {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Left column - Visual (46%) */}
          <div className="md:w-[46%]">
            <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-asisa-blue-light md:min-h-[400px]">
              {/* Brand composition fallback (while karolinePortrait is null) */}
              <div className="flex flex-col items-center gap-6 p-10 text-center">
                <div className="opacity-90">
                  <BrandLogo variant="institutional" />
                </div>
                <div className="h-px w-16 bg-mora-gold/50" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-asisa-blue">KAROLINE MORA</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-text-secondary/70">
                    AGENTE DE SEGUROS EXCLUSIVO
                  </p>
                  <p className="mt-1 text-[10px] font-mono text-text-secondary/50">
                    DGSFP {siteConfig.dgsfpCode}
                  </p>
                </div>
              </div>
              {/* Future: replace with <Image src={siteConfig.karolinePortrait} ... when available */}
            </div>
          </div>

          {/* Right column - Content (54%) */}
          <div className="md:w-[54%] md:self-center">
            <span className="eyebrow">SOBRE KAROLINE</span>
            <h2 className="mt-6 font-playfair text-3xl font-bold text-text-primary sm:text-4xl">
              Una persona real al otro lado.
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              {siteConfig.brandName} es la marca profesional de {siteConfig.ownerName},{" "}
              {siteConfig.professionalStatus}. Karoline atiende directamente cada consulta,
              explica las alternativas disponibles y acompaña al cliente durante el proceso
              de contratación.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Su función es ayudarte a comprender las condiciones, diferencias y pasos de
              cada opción antes de tomar una decisión.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/quienes-somos"
                className="btn-primary h-11 px-6 text-sm"
              >
                Conocer a Karoline
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors hover:text-asisa-blue"
              >
                Hablar con Karoline &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
