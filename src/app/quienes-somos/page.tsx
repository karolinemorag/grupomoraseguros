import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import TrustBadges from "@/components/shared/TrustBadges";
import { Shield, Heart, Users, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce a Grupo Mora, agencia exclusiva de seguros en Madrid. Más de [X] años de experiencia ofreciendo protección y tranquilidad a familias madrileñas.",
};

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Cercanía",
    description: "Te tratamos como a uno más de la familia, con calidez y respeto.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Transparencia",
    description: "Te explicamos cada detalle con claridad, sin letra pequeña ni sorpresas.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Compromiso",
    description: "Estamos contigo en cada paso, antes y después de contratar.",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Profesionalidad",
    description: "Nuestro equipo está formado por expertos en seguros con años de experiencia.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        title="Quiénes somos"
        subtitle="Conoce a Grupo Mora, tu agencia de confianza en Madrid para proteger lo que más importa."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nuestra historia
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Grupo Mora nace con la vocación de ofrecer un servicio de seguros
            diferente, basado en la confianza, la cercanía y el trato
            personalizado. Creemos que cada persona y cada familia merecen una
            atención exclusiva y un asesoramiento adaptado a sus necesidades
            reales.
          </p>
          <p className="mt-4 text-lg text-gray-dark/80">
            Como agencia exclusiva de [Nombre de la aseguradora] en Madrid,
            trabajamos para ofrecerte la mejor protección con el respaldo de una
            compañía líder, pero con el trato cercano de siempre.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nuestros valores
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Son los pilares que guían nuestro trabajo cada día.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy/5 text-navy">
                {value.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-dark/80">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Por qué confiar en nosotros
          </h2>
          <div className="mt-8">
            <TrustBadges variant="light" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm title="¿Quieres conocernos mejor?" subtitle="Estaremos encantados de atenderte y resolver todas tus dudas." />
      </SectionWrapper>
    </>
  );
}