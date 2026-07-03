"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import BrandLockup from "@/components/shared/BrandLockup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  const navItems = [
    { label: "Seguros", href: "/seguros" },
    { label: "Internacional", href: "/estudiantes-internacionales" },
    { label: "Sobre Karoline", href: "/quienes-somos" },
    { label: "Guías", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Top bar - desktop only */}
      <div className="hidden md:block bg-asisa-blue">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-6">
          <p className="text-[11px] font-medium text-white/90 tracking-wide">
            Karoline Mora · Agente de seguros exclusivo de ASISA · DGSFP {siteConfig.dgsfpCode}
          </p>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-sm" : "shadow-none"
        )}
      >
        <nav
          className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 md:h-[88px]"
          aria-label="Navegación principal"
        >
          {/* Brand */}
          <BrandLockup />

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-asisa-blue-light text-asisa-blue"
                      : "text-text-secondary hover:bg-surface-soft hover:text-text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Instagram subtle icon */}
            <a
              href="https://www.instagram.com/grupomoraseguros/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-pink-50 hover:text-pink-600"
              aria-label="Instagram @grupomoraseguros"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            {/* CTA principal */}
            <Link
              href="/contacto"
              className="btn-primary ml-2 h-10 px-5 text-sm"
              aria-label="Hablar con Karoline"
            >
              Hablar con Karoline
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-surface-soft lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 flex flex-col bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex-1 overflow-y-auto px-6 pb-8 pt-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-asisa-blue-light text-asisa-blue"
                        : "text-text-secondary hover:bg-surface-soft hover:text-text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href="/contacto"
                className="btn-primary flex h-12 w-full items-center justify-center text-base"
              >
                Hablar con Karoline
              </Link>
              <a
                href="https://www.instagram.com/grupomoraseguros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border-soft py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft"
                aria-label="Instagram @grupomoraseguros"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                @grupomoraseguros
              </a>
            </div>

            {/* Professional info in mobile menu */}
            <div className="mt-8 rounded-xl bg-surface-soft p-4">
              <p className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Karoline Mora</strong>
                <br />
                {siteConfig.professionalStatus}
                <br />
                DGSFP {siteConfig.dgsfpCode}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}