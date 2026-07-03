"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type BrandLogoVariant = "header" | "mobile" | "footer" | "institutional";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
}

/**
 * BrandLogo component — centralized logo display.
 * Logo is a JPG with ~1.52:1 aspect ratio.
 * We set width and let height be auto via object-contain to preserve original proportions.
 */

const config: Record<
  BrandLogoVariant,
  { width: number; height: number; className: string; priority?: boolean }
> = {
  header: {
    width: 240,
    height: 158, // matches ~1.52:1 ratio
    className: "h-[56px] w-auto object-contain md:h-[64px]",
    priority: true,
  },
  mobile: {
    width: 180,
    height: 118,
    className: "h-[42px] w-auto object-contain",
    priority: true,
  },
  footer: {
    width: 280,
    height: 184,
    className: "h-[70px] w-auto object-contain",
  },
  institutional: {
    width: 320,
    height: 210,
    className: "h-[80px] w-auto object-contain",
  },
};

export default function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const cfg = config[variant];

  const img = (
    <Image
      src="/logo-grupo-mora.jpg"
      alt="Grupo Mora Seguros"
      width={cfg.width}
      height={cfg.height}
      className={cn(cfg.className, className)}
      priority={cfg.priority}
      loading={cfg.priority ? undefined : "lazy"}
      sizes={`(max-width: 768px) ${Math.round(cfg.width * 0.75)}px, ${cfg.width}px`}
    />
  );

  if (variant === "footer" || variant === "institutional") {
    return img;
  }

  return (
    <Link href="/" className="flex-shrink-0">
      {img}
    </Link>
  );
}