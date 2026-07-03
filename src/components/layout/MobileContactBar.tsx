"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MobileContactBar() {
  const whatsappUrl = siteConfig.whatsapp.startsWith("[")
    ? "#"
    : `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-border-soft bg-white shadow-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={`tel:${siteConfig.telefono}`}
        className="flex flex-1 items-center justify-center gap-2 bg-asisa-blue py-4 text-sm font-semibold text-white transition-colors hover:bg-asisa-blue-dark"
        aria-label={`Llamar al ${siteConfig.telefono}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Llamar
      </a>
      <a
        href={whatsappUrl}
        target={whatsappUrl !== "#" ? "_blank" : undefined}
        rel={whatsappUrl !== "#" ? "noopener noreferrer" : undefined}
        className="flex flex-1 items-center justify-center gap-2 bg-trust py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1DA851]"
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}