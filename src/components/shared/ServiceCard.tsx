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
        "group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 text-gray-dark/80">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
        aria-label={`Saber más sobre ${title}`}
      >
        Saber más
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}