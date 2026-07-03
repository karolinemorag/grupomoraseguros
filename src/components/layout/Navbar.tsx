"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100",
        scrolled && "shadow-sm"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Grupo Mora - Inicio"
        >
          <Image
            src="/logo-grupo-mora.jpg"
            alt="Grupo Mora Seguros - Karoline Mora"
            width={160}
            height={48}
            className="h-[38px] w-auto object-contain md:h-[48px]"
            priority
          />
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
                    ? "bg-navy/10 text-navy"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Instagram icon subtle */}
          <a
            href="https://www.instagram.com/grupomoraseguros/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg text-navy/50 transition-colors hover:bg-pink-50 hover:text-pink-600"
            aria-label="Instagram @grupomoraseguros"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          {/* CTA principal */}
          <Link
            href="/contacto"
            className="btn-navy ml-2 h-10 px-5 text-sm"
            aria-label="Solicitar una llamada"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Hablar con Karoline
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-navy/5 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-white border-t border-gray-100 lg:hidden"
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
                    "rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                    isActive
                      ? "bg-navy/10 text-navy"
                      : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Instagram in mobile menu */}
            <a
              href="https://www.instagram.com/grupomoraseguros/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-navy/70 transition-colors hover:bg-pink-50 hover:text-pink-600"
              aria-label="Instagram @grupomoraseguros"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              @grupomoraseguros
            </a>
            <Link
              href="/contacto"
              className="btn-navy mt-3 h-12 w-full text-base"
              aria-label="Solicitar una llamada"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Hablar con Karoline
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}