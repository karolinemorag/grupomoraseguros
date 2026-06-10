"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CTABar() {
  const whatsappUrl = siteConfig.whatsapp.startsWith("[")
    ? "#"
    : `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-gray-200 bg-white shadow-lg md:hidden">
      <a
        href={`tel:${siteConfig.telefono}`}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
        aria-label={`Llamar al ${siteConfig.telefono}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Llamar
      </a>
      <a
        href={whatsappUrl}
        target={whatsappUrl !== "#" ? "_blank" : undefined}
        rel={whatsappUrl !== "#" ? "noopener noreferrer" : undefined}
        className="flex flex-1 items-center justify-center gap-2 bg-trust py-3 text-sm font-medium text-white transition-colors hover:bg-trust-light"
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}