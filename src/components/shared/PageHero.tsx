"use client";

import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-navy to-navy-light px-4 pt-28 pb-16 text-white sm:pt-36 sm:pb-20",
        className
      )}
      aria-label="Encabezado de página"
    >
      <div className="mx-auto max-w-6xl px-6 relative z-10 text-center">
        <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
          {subtitle}
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08),transparent_50%)]" />
    </section>
  );
}