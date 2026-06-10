"use client";

import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CTACall({ size = "md", className }: CTAButtonProps) {
  return (
    <a
      href={`tel:${siteConfig.telefono}`}
      className={cn(
        "btn-navy inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        className
      )}
      aria-label={`Llamar al ${siteConfig.telefono}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      Llamar ahora
    </a>
  );
}

export function CTAWhatsApp({ size = "md", className }: CTAButtonProps) {
  const whatsappUrl = siteConfig.whatsapp.startsWith("[")
    ? "#"
    : `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target={whatsappUrl !== "#" ? "_blank" : undefined}
      rel={whatsappUrl !== "#" ? "noopener noreferrer" : undefined}
      className={cn(
        "btn-trust inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        className
      )}
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Escribir por WhatsApp
    </a>
  );
}

export function CTAAppointment({ size = "md", className }: CTAButtonProps) {
  return (
    <a
      href="/contacto"
      className={cn(
        "btn-gold inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        className
      )}
      aria-label="Pedir cita"
    >
      <Calendar className="h-5 w-5" aria-hidden="true" />
      Pedir cita
    </a>
  );
}

export function CTAAdvice({ size = "md", className }: CTAButtonProps) {
  return (
    <a
      href="/contacto"
      className={cn(
        "btn-outline-navy inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        className
      )}
      aria-label="Solicitar asesoramiento"
    >
      Solicitar asesoramiento
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

export function CTAAdviceWhite({ size = "md", className }: CTAButtonProps) {
  return (
    <a
      href="/contacto"
      className={cn(
        "btn-outline-white inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        className
      )}
      aria-label="Solicitar asesoramiento"
    >
      Solicitar asesoramiento
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}