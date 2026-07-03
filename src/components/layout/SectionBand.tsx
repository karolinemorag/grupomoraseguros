"use client";

import { cn } from "@/lib/utils";

export type SectionTone =
  | "white"
  | "blue-soft"
  | "blue-strong"
  | "blue"
  | "navy"
  | "warm";

interface SectionBandProps {
  tone?: SectionTone;
  size?: "compact" | "default" | "spacious";
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const toneStyles: Record<SectionTone, string> = {
  white: "bg-white text-text-primary",
  "blue-soft": "bg-[#EFF6FC] text-text-primary",
  "blue-strong": "bg-[#E1EEF8] text-text-primary",
  blue: "bg-asisa-blue text-white",
  navy: "bg-mora-navy text-white",
  warm: "bg-surface-warm text-text-primary",
};

const sizeStyles = {
  compact: "py-14 sm:py-16",
  default: "py-20 sm:py-24",
  spacious: "py-28 sm:py-32",
};

export default function SectionBand({
  tone = "white",
  size = "default",
  id,
  className,
  children,
}: SectionBandProps) {
  return (
    <section
      id={id}
      className={cn(toneStyles[tone], sizeStyles[size], className)}
    >
      <div className="container-section">{children}</div>
    </section>
  );
}