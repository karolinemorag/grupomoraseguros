import HeroHome from "@/components/home/HeroHome";
import TrustStrip from "@/components/home/TrustStrip";
import NeedsNavigator from "@/components/home/NeedsNavigator";
import AdvisoryProcess from "@/components/home/AdvisoryProcess";
import InternationalFeature from "@/components/home/InternationalFeature";
import KarolineIntroduction from "@/components/home/KarolineIntroduction";
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
      <KarolineIntroduction />

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