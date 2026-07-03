"use client";

import BrandLogo from "@/components/brand/BrandLogo";

interface BrandLockupProps {
  variant?: "header" | "footer";
}

export default function BrandLockup({ variant = "header" }: BrandLockupProps) {
  if (variant === "footer") {
    return (
      <div className="flex flex-col gap-3">
        <div className="inline-flex rounded-xl bg-white p-3">
          <BrandLogo variant="footer" />
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          <span className="font-medium text-gold">Agente exclusiva de ASISA</span>
          <br />
          DGSFP C046161415773T
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <BrandLogo variant="header" />
      <div className="hidden h-10 w-px bg-border-soft md:block xl:block" aria-hidden="true" />
      <div className="hidden md:block xl:block">
        <p className="text-[9px] font-medium uppercase tracking-wider text-text-secondary">
          Agente exclusiva de
        </p>
        <p className="text-xs font-semibold text-asisa-blue">ASISA</p>
      </div>
    </div>
  );
}