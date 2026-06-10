"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  decesos: "bg-navy/10 text-navy",
  vida: "bg-trust/10 text-trust",
  mascotas: "bg-gold/10 text-gold-dark",
  general: "bg-gray-100 text-gray-dark",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
      <div className="mb-4 flex items-center gap-3 text-xs text-gray-mid">
        <span
          className={cn(
            "rounded-full px-3 py-1 font-medium",
            categoryColors[post.category]
          )}
        >
          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" aria-hidden="true" />
          {new Date(post.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {post.readTime}
        </span>
      </div>
      <h3 className="font-heading text-xl font-bold text-navy transition-colors group-hover:text-gold">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-2 text-gray-dark/70">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
        aria-label={`Leer artículo: ${post.title}`}
      >
        Leer artículo
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}