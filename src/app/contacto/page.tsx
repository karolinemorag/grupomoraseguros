import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import SectionBand from "@/components/layout/SectionBand";
import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Grupo Mora, tu agencia de seguros en Madrid. Teléfono, WhatsApp, email y visita presencial. Te atendemos sin compromiso.",
};

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Teléfono",
    value: siteConfig.telefono,
    href: `tel:${siteConfig.telefono}`,
    label: "Llamar ahora",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,
    label: "Escribir por WhatsApp",
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    title: "Instagram",
    value: "@grupomoraseguros",
    href: "https://www.instagram.com/grupomoraseguros/",
    label: "Seguir en Instagram",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Dirección",
    value: siteConfig.professionalAddress,
    href: "#",
    label: "Ver en mapa",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero — white */}
      <PageHero
        title="Contacto"
        subtitle="Estamos aquí para ayudarte. Elige el canal que prefieras y te atenderemos lo antes posible."
      />

      {/* Franja introductoria — surface-blue */}
      <SectionBand tone="blue-soft" size="compact">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Methods */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-text-primary sm:text-3xl">
              Información de contacto
            </h2>
            <p className="mt-2 text-text-secondary/70">
              Puedes contactarnos a través de cualquiera de estos medios.
            </p>

            <div className="mt-8 space-y-6">
              {contactMethods.map((method) => (
                <div key={method.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-asisa-blue/10 text-asisa-blue">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{method.title}</h3>
                    <p className="text-sm text-text-secondary/70">{method.value}</p>
                    {method.href !== "#" && (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-asisa-blue hover:text-asisa-blue-dark"
                        aria-label={`${method.label} - ${method.title}`}
                      >
                        {method.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-asisa-blue/10 text-asisa-blue">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">Horario de atención</h3>
                <p className="text-sm text-text-secondary/70">
                  Lunes a viernes: 9:00 - 19:00
                </p>
                <p className="text-sm text-text-secondary/70">
                  Asistencia urgente: 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm
              title="Envíanos un mensaje"
              subtitle="Te responderemos en menos de 24 horas."
            />
          </div>
        </div>
      </SectionBand>
    </>
  );
}