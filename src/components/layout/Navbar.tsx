"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Instagram } from "lucide-react";
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
            alt="Grupo Mora - Agencia exclusiva de seguros"
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
          <a
            href="https://www.instagram.com/grupomoraseguros/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex h-10 items-center gap-1.5 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            aria-label="Instagram @grupomoraseguros"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @grupomoraseguros
          </a>
          <Link
            href="/contacto"
            className="btn-gold ml-3 h-10 px-5 text-sm"
            aria-label="Pedir cita"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Pedir cita
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
            <a
              href="https://www.instagram.com/grupomoraseguros/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
              aria-label="Instagram @grupomoraseguros"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              @grupomoraseguros
            </a>
            <Link
              href="/contacto"
              className="btn-gold mt-3 h-12 w-full text-base"
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