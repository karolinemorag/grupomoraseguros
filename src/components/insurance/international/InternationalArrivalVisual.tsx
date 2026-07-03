"use client";

import Image from "next/image";
import { siteImages } from "@/lib/image-library";

export default function InternationalArrivalVisual() {
  const img = siteImages.internationalMadrid;

  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl md:min-h-[400px]">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 43vw"
        className="object-cover"
        style={{ objectPosition: img.objectPosition }}
        priority
      />
      <div className="absolute bottom-4 left-4 space-y-0.5">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80">MADRID</span>
        <br />
        <span className="text-[10px] font-light tracking-wider text-white/50">40.4168° N · 3.7038° W</span>
        <br />
        <span className="text-[10px] font-light tracking-wider text-white/40">START DATE / DURATION / DOCUMENTS</span>
      </div>
    </div>
  );
}
