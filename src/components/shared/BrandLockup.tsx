"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLockupProps {
  variant?: "header" | "footer" | "compact";
}

export default function BrandLockup({ variant = "header" }: BrandLockupProps) {
  if (variant === "footer") {
    return (
      <div className="flex flex-col gap-3">
        <Link href="/" className="inline-flex">
          <Image
            src="/logo-grupo-mora.jpg"
            alt="Grupo Mora Seguros"
            width={200}
            height={50}
            className="h-[50px] w-auto object-contain brightness-0 invert"
          />
        </Link>
        <div className="text-xs text-white/60 leading-relaxed">
          <span className="font-medium text-gold">Agente exclusiva de ASISA</span>
          <br />
          DGSFP C046161415773T
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo-grupo-mora.jpg"
          alt="Grupo Mora Seguros"
          width={160}
          height={44}
          className="h-[38px] w-auto object-contain md:h-[44px]"
          priority
        />
      </Link>
      <div className="hidden h-8 w-px bg-border-soft md:block" aria-hidden="true" />
      <div className="hidden md:block">
        <p className="text-[10px] font-medium uppercase tracking-wider text-text-secondary">
          Agente exclusiva de
        </p>
        <p className="text-sm font-semibold text-asisa-blue">ASISA</p>
      </div>
    </div>
  );
}