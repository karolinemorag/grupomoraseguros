"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2",
        className
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 leading-relaxed text-gray-dark/70">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-all hover:text-gold hover:gap-2"
        aria-label={`Saber más sobre ${title}`}
      >
        Más información →
      </Link>
    </article>
  );
}