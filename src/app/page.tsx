import HeroHome from "@/components/home/HeroHome";
import TrustStrip from "@/components/home/TrustStrip";
import NeedsNavigator from "@/components/home/NeedsNavigator";
import AdvisoryProcess from "@/components/home/AdvisoryProcess";
import InternationalFeature from "@/components/home/InternationalFeature";
import CTASection from "@/components/home/CTASection";
import ContactForm from "@/components/shared/ContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Navegador de necesidades */}
      <NeedsNavigator />

      {/* Proceso de atención */}
      <AdvisoryProcess />

      {/* Soluciones internacionales */}
      <InternationalFeature />

      {/* Sobre Karoline */}
      <SectionWrapper background="light" id="sobre-karoline">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            Una persona real al otro lado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-dark/70">
            Grupo Mora Seguros nace como la marca profesional de Karoline Mora,
            agente de seguros exclusivo de ASISA. Su trabajo consiste en escuchar
            cada caso, explicar las alternativas disponibles y acompañar al
            cliente durante el proceso de contratación.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-navy/5 px-4 py-2 text-sm text-navy/80">
              NIF {siteConfig.ownerNif}
            </span>
            <span className="rounded-full bg-navy/5 px-4 py-2 text-sm text-navy/80">
              DGSFP {siteConfig.dgsfpCode}
            </span>
            <span className="rounded-full bg-navy/5 px-4 py-2 text-sm text-navy/80">
              {siteConfig.professionalAddress}
            </span>
          </div>
          <div className="mt-8">
            <Link
              href="/quienes-somos"
              className="btn-outline-navy h-12 px-6"
            >
              Conocer más sobre Karoline
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA final */}
      <SectionWrapper background="navy" id="cta-final">
        <CTASection />
      </SectionWrapper>

      {/* Contacto */}
      <SectionWrapper background="light" id="contacto">
        <ContactForm />
      </SectionWrapper>
    </>
  );
}