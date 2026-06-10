import HeroHome from "@/components/home/HeroHome";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustBlock from "@/components/home/TrustBlock";
import AssistanceHighlight from "@/components/home/AssistanceHighlight";
import ContactForm from "@/components/shared/ContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      <SectionWrapper background="white" id="servicios">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nuestros seguros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-dark/80">
            Te ofrecemos soluciones de protección diseñadas para cuidar de ti y
            de tu familia en cada etapa de la vida.
          </p>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </SectionWrapper>

      <SectionWrapper background="light" id="confianza">
        <TrustBlock />
      </SectionWrapper>

      <SectionWrapper background="white" id="asistencia">
        <AssistanceHighlight />
      </SectionWrapper>

      <SectionWrapper background="light" id="contacto">
        <ContactForm />
      </SectionWrapper>
    </>
  );
}