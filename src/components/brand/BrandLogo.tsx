"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type BrandLogoVariant = "header" | "mobile" | "footer" | "institutional";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
}

const config: Record<BrandLogoVariant, { width: number; height: number; className: string; priority?: boolean }> = {
  header: {
    width: 260,
    height: 72,
    className: "h-[62px] w-auto object-contain md:h-[72px]",
    priority: true,
  },
  mobile: {
    width: 200,
    height: 52,
    className: "h-[44px] w-auto object-contain",
    priority: true,
  },
  footer: {
    width: 300,
    height: 78,
    className: "h-[70px] w-auto object-contain",
  },
  institutional: {
    width: 340,
    height: 88,
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
      sizes={`(max-width: 768px) ${cfg.width * 0.75}px, ${cfg.width}px`}
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