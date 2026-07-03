"use client";

import { cn } from "@/lib/utils";

export type SectionTone =
  | "white"
  | "blue-soft"
  | "blue-strong"
  | "blue"
  | "navy"
  | "warm";

export type SectionSize = "compact" | "default" | "spacious";

export interface SectionBandProps {
  tone?: SectionTone;
  size?: SectionSize;
  contained?: boolean;
  topBorder?: boolean;
  bottomBorder?: boolean;
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

const sizeStyles: Record<SectionSize, string> = {
  compact: "py-14 sm:py-16",
  default: "py-20 sm:py-24",
  spacious: "py-28 sm:py-32",
};

export default function SectionBand({
  tone = "white",
  size = "default",
  contained = true,
  topBorder = false,
  bottomBorder = false,
  id,
  className,
  children,
}: SectionBandProps) {
  return (
    <section
      id={id}
      className={cn(
        toneStyles[tone],
        sizeStyles[size],
        topBorder && "border-t border-black/5",
        bottomBorder && "border-b border-black/5",
        className
      )}
    >
      {contained ? (
        <div className="container-section">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}