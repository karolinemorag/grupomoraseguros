"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, Instagram, HeartPulse, ShieldCheck, FileText, PawPrint, Plane, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import BrandLockup from "@/components/shared/BrandLockup";

const insuranceLinks = [
  { label: "Salud", href: "/seguros/salud", icon: HeartPulse, desc: "Modalidades, copagos, hospitalización y cuadro médico." },
  { label: "Vida", href: "/seguros/vida", icon: ShieldCheck, desc: "Capital, beneficiarios, duración y garantías." },
  { label: "Decesos", href: "/seguros/decesos", icon: FileText, desc: "Servicios, capitales y condiciones." },
  { label: "Mascotas", href: "/seguros/mascotas", icon: PawPrint, desc: "Asistencia veterinaria y responsabilidad civil." },
  { label: "Internacional", href: "/estudiantes-internacionales", icon: Plane, desc: "Seguro médico para estudiar o residir en España." },
];

const quickLinks = [
  { label: "Explorar todos los seguros", href: "/seguros" },
  { label: "Consultar cuadro médico oficial", href: "https://www.asisa.es/cuadro-medico", external: true },
  { label: "Ayuda y asistencia", href: "/asistencia-24h" },
  { label: "Guías", href: "/blog" },
  { label: "Ya tengo una póliza", href: "/contacto?tipo=poliza" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const segurosRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mega menu on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node) &&
          segurosRef.current && !segurosRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMegaEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  }, []);

  const handleMegaLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
  }, []);

  const navItems = [
    {
      label: "Seguros",
      href: "/seguros",
      hasMega: true,
    },
    { label: "Internacional", href: "/estudiantes-internacionales" },
    { label: "Sobre Karoline", href: "/quienes-somos" },
    { label: "Guías", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Level 1: Top bar — asisa-blue */}
      <div className="bg-asisa-blue">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-6">
          <p className="text-[11px] font-medium text-white/85 tracking-wide truncate">
            <span className="hidden sm:inline">Karoline Mora · {siteConfig.professionalStatus} · DGSFP {siteConfig.dgsfpCode}</span>
            <span className="sm:hidden">Agente exclusiva de ASISA</span>
          </p>
          <div className="flex items-center gap-3">
            <a href={`tel:${siteConfig.telefono}`} className="flex items-center gap-1 text-white/80 hover:text-white transition-colors" aria-label="Llamar">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[11px] font-medium hidden sm:inline">Llamar</span>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[11px] font-medium hidden sm:inline">WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/grupomoraseguros/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors" aria-label="Instagram @grupomoraseguros">
              <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[11px] font-medium hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Level 2: Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-sm" : "shadow-none"
        )}
      >
        <nav
          className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-6"
          aria-label="Navegación principal"
        >
          {/* Brand — larger presence */}
          <BrandLockup />

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              if (item.hasMega) {
                return (
                  <div key={item.href} className="relative">
                    <button
                      ref={segurosRef}
                      onMouseEnter={handleMegaEnter}
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-asisa-blue-light text-asisa-blue"
                          : "text-text-secondary hover:bg-surface-soft hover:text-text-primary"
                      )}
                      aria-expanded={megaOpen}
                      aria-controls="mega-menu"
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", megaOpen && "rotate-180")} aria-hidden="true" />
                    </button>
                  </div>
                );
              }
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-asisa-blue-light text-asisa-blue"
                      : "text-text-secondary hover:bg-surface-soft hover:text-text-primary"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA principal */}
            <Link
              href="/contacto"
              className="btn-primary ml-2 h-[42px] px-5 text-sm"
            >
              Hablar con Karoline
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-surface-soft xl:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega menu */}
        {megaOpen && (
          <div
            id="mega-menu"
            ref={megaRef}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
            className="absolute left-0 right-0 z-40 border-t-2 border-asisa-blue bg-white shadow-lg"
            role="menu"
            aria-label="Menú de seguros"
          >
            <div className="mx-auto max-w-6xl px-6 py-8">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Col 1: Soluciones */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-secondary/60 mb-4">SOLUCIONES</p>
                  <div className="space-y-1">
                    {insuranceLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-soft"
                          role="menuitem"
                        >
                          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-asisa-blue" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-medium text-text-primary transition-colors group-hover:text-asisa-blue">{link.label}</p>
                            <p className="text-xs text-text-secondary/70 leading-relaxed">{link.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Col 2: Accesos útiles */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-secondary/60 mb-4">ACCESOS ÚTILES</p>
                  <div className="space-y-1">
                    {quickLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                          role="menuitem"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                          role="menuitem"
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>

                {/* Col 3: Contacto */}
                <div className="rounded-xl bg-[#EFF6FC] p-6">
                  <p className="text-sm font-semibold text-text-primary">¿No sabes qué seguro necesitas?</p>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    Cuéntale a Karoline tu situación y podrá ayudarte a identificar las alternativas disponibles.
                  </p>
                  <Link
                    href="/contacto"
                    className="btn-primary mt-4 inline-flex h-10 items-center px-5 text-xs"
                    role="menuitem"
                  >
                    Contar mi situación
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 z-50 flex flex-col bg-white xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Drawer header */}
          <div className="flex h-[88px] items-center justify-between border-b border-border-soft px-6">
            <BrandLockup />
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-surface-soft"
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-32 pt-4">
            {/* Mobile accordion: Seguros */}
            <div className="mb-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-secondary/60 mb-2 px-2">SEGUROS</p>
              <div className="space-y-0.5">
                {insuranceLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4 text-asisa-blue" aria-hidden="true" />
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/seguros"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-asisa-blue transition-colors hover:bg-asisa-blue-light"
                  onClick={() => setIsOpen(false)}
                >
                  Ver todos los seguros
                </Link>
              </div>
            </div>

            <div className="h-px bg-border-soft my-4" />

            {/* Main nav items */}
            <div className="space-y-0.5">
              <Link
                href="/estudiantes-internacionales"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                Internacional
              </Link>
              <Link
                href="/quienes-somos"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre Karoline
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                Guías
              </Link>
              <Link
                href="/contacto"
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-text-secondary transition-colors hover:bg-surface-soft hover:text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>

            <div className="h-px bg-border-soft my-4" />

            {/* CTAs */}
            <div className="space-y-3">
              <Link
                href="/contacto"
                className="btn-primary flex h-12 w-full items-center justify-center text-base"
                onClick={() => setIsOpen(false)}
              >
                Hablar con Karoline
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border-soft py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.telefono}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-border-soft py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar
              </a>
              <a
                href="https://www.instagram.com/grupomoraseguros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border-soft py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-soft"
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                @grupomoraseguros
              </a>
            </div>

            {/* Professional info */}
            <div className="mt-6 rounded-xl bg-surface-soft p-4">
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