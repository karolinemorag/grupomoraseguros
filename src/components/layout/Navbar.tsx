"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-section flex h-16 items-center justify-between sm:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight"
          aria-label="Grupo Mora - Inicio"
        >
          <span
            className={cn(
              "font-heading text-xl font-bold transition-colors sm:text-2xl",
              scrolled ? "text-navy" : "text-white"
            )}
          >
            Grupo Mora
          </span>
          <span
            className={cn(
              "text-xs transition-colors",
              scrolled ? "text-navy/60" : "text-white/70"
            )}
          >
            Agencia exclusiva de seguros · Madrid
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? scrolled
                      ? "bg-navy/10 text-navy"
                      : "bg-white/20 text-white"
                    : scrolled
                    ? "text-navy/70 hover:bg-navy/5 hover:text-navy"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="btn-gold ml-4 h-10 px-5 text-sm"
            aria-label="Pedir cita"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Pedir cita
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            scrolled
              ? "text-navy hover:bg-navy/5"
              : "text-white hover:bg-white/10"
          )}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-navy/95 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex flex-col gap-2 p-6 pt-8">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              className="btn-gold mt-4 h-12 w-full text-base"
              aria-label="Pedir cita"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Pedir cita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}