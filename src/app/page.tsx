import HeroHome from "@/components/home/HeroHome";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustBlock from "@/components/home/TrustBlock";
import CTASection from "@/components/home/CTASection";
import ContactForm from "@/components/shared/ContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Cómo funciona */}
      <SectionWrapper background="white">
        <HowItWorks />
      </SectionWrapper>

      {/* Nuestros seguros */}
      <SectionWrapper background="light" id="servicios">
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            Nuestros seguros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-dark/70">
            Te ofrecemos soluciones de protección diseñadas para cuidar de ti y
            de tu familia en cada etapa de la vida.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </SectionWrapper>

      {/* Confianza */}
      <SectionWrapper background="white" id="confianza">
        <TrustBlock />
      </SectionWrapper>

      {/* Nuevo servicio destacado */}
      <SectionWrapper background="white" id="estudiantes">
        <Link
          href="/estudiantes-internacionales"
          className="group block overflow-hidden rounded-3xl border border-navy/10 bg-navy/5 p-8 transition-all duration-300 hover:shadow-lg sm:p-12"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
              <GraduationCap className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-dark mb-3">
                Nuevo servicio
              </span>
              <h3 className="font-playfair text-2xl font-bold text-navy sm:text-3xl">
                Seguro para estudiantes internacionales
              </h3>
              <p className="mt-2 text-gray-dark/70">
                ¿Vienes a estudiar a España? Necesitas un seguro de salud homologado
                para tu visado o residencia. Te lo gestionamos de forma rápida y personalizada.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-all group-hover:text-gold group-hover:gap-2">
                Más información →
              </span>
            </div>
          </div>
        </Link>
      </SectionWrapper>

      {/* CTA final oscuro */}
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