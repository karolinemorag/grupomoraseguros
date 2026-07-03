"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgesProps {
  className?: string;
  variant?: "light" | "dark";
}

const badges = [
  "Atención directa con Karoline",
  "Acompañamiento durante el proceso",
  "Trato cercano y profesional",
  "Inscripción profesional verificable",
];

export default function TrustBadges({
  className,
  variant = "light",
}: TrustBadgesProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        className
      )}
      role="list"
      aria-label="Valores diferenciales"
    >
      {badges.map((badge) => (
        <div
          key={badge}
          className={cn(
            "flex items-center gap-3 rounded-2xl p-4",
            variant === "light"
              ? "bg-navy/5 text-navy"
              : "bg-white/10 text-white"
          )}
          role="listitem"
        >
          <div
            className={cn(
              "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
              variant === "light" ? "bg-trust/10 text-[#25D366]" : "bg-gold/20 text-gold"
            )}
          >
            <Check className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-sm font-medium">{badge}</span>
        </div>
      ))}
    </div>
  );
}