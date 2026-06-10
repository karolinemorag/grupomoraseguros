"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "navy";
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-20",
        background === "light" && "bg-gray-light",
        background === "navy" && "bg-navy text-white",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}