"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const mainLinks = [
  { label: "Inicio", href: "/" },
  { label: "Seguros", href: "/seguros" },
  { label: "Estudiantes internacionales", href: "/estudiantes-internacionales" },
  { label: "Asistencia 24/7", href: "/asistencia-24h" },
  { label: "Asesor interactivo", href: "/asesor-interactivo" },
  { label: "Blog", href: "/blog" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Image
              src="/logo-grupo-mora.jpg"
              alt="Grupo Mora Seguros"
              width={200}
              height={50}
              className="h-[50px] w-auto object-contain brightness-0 invert"
            />
            <div className="mt-3 text-xs text-white/60 leading-relaxed">
              <span className="font-medium text-gold">Agente exclusiva de ASISA</span>
              <br />
              DGSFP {siteConfig.dgsfpCode}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.telefono}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                  aria-label={`Teléfono: ${siteConfig.telefono}`}
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  {siteConfig.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/grupomoraseguros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                  aria-label="Instagram @grupomoraseguros"
                >
                  <Instagram className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  @grupomoraseguros
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.professionalAddress}</span>
              </li>
            </ul>
          </div>

          {/* Main Links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">
              Enlaces
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">
              Información legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional identification */}
        <div className="mt-12 rounded-2xl bg-white/5 p-6 text-center">
          <p className="text-sm text-white/70">
            <strong>{siteConfig.brandName}</strong> es la denominación comercial
            utilizada por <strong>{siteConfig.ownerName}</strong>, NIF{" "}
            {siteConfig.ownerNif}, {siteConfig.professionalStatus}, inscrita en
            el Registro administrativo de distribuidores de seguros y reaseguros
            con clave <strong>{siteConfig.dgsfpCode}</strong>.
          </p>
          <p className="mt-2 text-sm text-white/50">
            {siteConfig.insurerLegalName} actúa como entidad aseguradora y es una
            entidad tercera respecto de la titularidad de esta web.
          </p>
          <p className="mt-2">
            <a
              href="https://www.dgsfp.mineco.gob.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold underline hover:text-gold-light"
            >
              Consultar inscripción profesional
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Grupo Mora. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}