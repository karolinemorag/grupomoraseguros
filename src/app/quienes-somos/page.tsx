import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Karoline Mora",
  description:
    "Conoce a Karoline Mora, agente de seguros exclusivo de ASISA en Madrid. Asesoramiento personalizado con el respaldo de una entidad aseguradora líder.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        title="Sobre Karoline Mora"
        subtitle="Una persona real al otro lado del teléfono, con el respaldo de una entidad aseguradora de confianza."
      />

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Karoline Mora
          </h2>
          <p className="mt-2 text-lg font-medium text-gold">
            {siteConfig.professionalStatus}
          </p>
          <div className="mx-auto mt-2 inline-block rounded-full bg-navy/5 px-4 py-1 text-sm text-navy/70">
            DGSFP: {siteConfig.dgsfpCode} ·{" "}
            <a
              href="https://www.dgsfp.mineco.gob.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-gold-dark"
            >
              Consultar inscripción
            </a>
          </div>
          <p className="mt-8 text-lg text-gray-dark/80 leading-relaxed">
            Grupo Mora Seguros es la marca profesional de {siteConfig.ownerName},{" "}
            {siteConfig.professionalStatus}. Su trabajo consiste en escuchar cada
            caso, explicar las alternativas disponibles y acompañar al cliente
            durante el proceso de contratación.
          </p>
          <p className="mt-4 text-lg text-gray-dark/80 leading-relaxed">
            Con despacho profesional en {siteConfig.professionalAddress}, ofrece
            una atención cercana y personalizada, orientada a que cada persona
            entienda las coberturas que contrata y tome decisiones informadas.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Cómo trabaja
          </h2>
          <p className="mt-4 text-lg text-gray-dark/80">
            Su enfoque se basa en tres principios:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              number: "1",
              title: "Escucha",
              desc: "Entiende tu situación, tus necesidades y lo que buscas proteger.",
            },
            {
              number: "2",
              title: "Explica",
              desc: "Te presenta las opciones disponibles con claridad, sin tecnicismos ni letra pequeña comercial.",
            },
            {
              number: "3",
              title: "Acompaña",
              desc: "Te guía durante todo el proceso, desde la consulta hasta la contratación.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-xl font-bold text-gold">
                {item.number}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-dark/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Datos profesionales
          </h2>
          <div className="mt-8 grid gap-4 text-left">
            {[
              { label: "Nombre", value: siteConfig.ownerName },
              { label: "NIF", value: siteConfig.ownerNif },
              { label: "Condición", value: siteConfig.professionalStatus },
              {
                label: "Entidad aseguradora",
                value: siteConfig.insurerLegalName,
              },
              { label: "Clave DGSFP", value: siteConfig.dgsfpCode },
              { label: "Dirección", value: siteConfig.professionalAddress },
              { label: "Teléfono", value: siteConfig.telefono },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-3"
              >
                <span className="text-sm font-medium text-navy">
                  {item.label}
                </span>
                <span className="text-sm text-gray-dark/80">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-6">
            <a
              href="https://www.dgsfp.mineco.gob.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold underline hover:text-gold-dark"
            >
              Consultar inscripción profesional en la DGSFP
            </a>
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm
          title="¿Quieres hablar con Karoline?"
          subtitle="Cuéntale tu situación y recibirás una orientación inicial sin compromiso de contratación."
        />
      </SectionWrapper>
    </>
  );
}