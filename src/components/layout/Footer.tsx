"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const mainLinks = [
  { label: "Inicio", href: "/" },
  { label: "Seguros", href: "/seguros" },
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
      <div className="container-section py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-tight">
              <span className="font-heading text-2xl font-bold text-white">
                Grupo Mora
              </span>
              <span className="text-sm text-white/60">
                Agencia exclusiva de seguros · Madrid
              </span>
            </Link>
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
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                  aria-label={`Email: ${siteConfig.email}`}
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.direccion}</span>
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

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg bg-white/5 p-6 text-center">
          <p className="text-sm text-white/60">
            La información publicada en esta web tiene carácter orientativo.
            Cada caso debe ser analizado de forma personalizada por un
            profesional de Grupo Mora.
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