"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  version: number;
}

const COOKIE_KEY = "cookie_consent_v2";
const CURRENT_VERSION = 1;

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (parsed.version !== CURRENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function setStoredPreferences(prefs: CookiePreferences): void {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    // Only show banner if consent is required (analytics/marketing enabled)
    if (!siteConfig.cookieConfig.consentRequired) return;
    const stored = getStoredPreferences();
    if (!stored) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    setStoredPreferences({ necessary: true, analytics: true, version: CURRENT_VERSION });
    setShowBanner(false);
    setShowConfig(false);
  }, []);

  const rejectAll = useCallback(() => {
    setStoredPreferences({ necessary: true, analytics: false, version: CURRENT_VERSION });
    setShowBanner(false);
    setShowConfig(false);
  }, []);

  const savePreferences = useCallback(() => {
    setStoredPreferences({ necessary: true, analytics, version: CURRENT_VERSION });
    setShowBanner(false);
    setShowConfig(false);
  }, [analytics]);

  const openConfig = useCallback(() => {
    setShowBanner(false);
    setShowConfig(true);
  }, []);

  // No consent required — don't show banner
  if (!siteConfig.cookieConfig.consentRequired) return null;
  if (!showBanner && !showConfig) return null;

  if (showConfig) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-6 shadow-lg"
        role="dialog"
        aria-label="Configuración de cookies"
        aria-modal="true"
      >
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-navy">
              Configurar cookies
            </h3>
            <button
              onClick={() => { setShowConfig(false); setShowBanner(true); }}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-mid hover:bg-gray-100"
              aria-label="Volver"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between rounded-lg bg-gray-light p-4">
              <div>
                <span className="font-medium text-navy">Necesarias</span>
                <p className="text-xs text-gray-dark/60">Imprescindibles para el funcionamiento básico del sitio.</p>
              </div>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-gold" />
            </label>
            <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-light p-4">
              <div>
                <span className="font-medium text-navy">Analíticas</span>
                <p className="text-xs text-gray-dark/60">Ayudan a mejorar el sitio mediante datos anónimos de uso.</p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-gold"
              />
            </label>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={rejectAll}
              className="flex-1 rounded-lg border border-gray-300 py-3 text-sm font-medium text-navy transition-colors hover:bg-gray-50"
            >
              Rechazar todas
            </button>
            <button
              onClick={savePreferences}
              className="flex-1 rounded-lg bg-navy py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg md:p-6"
      role="dialog"
      aria-label="Aviso de cookies"
      aria-modal="false"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-dark/80">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia.
          Puedes aceptarlas todas, rechazarlas o configurarlas.
        </p>
        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <button
            onClick={rejectAll}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray-50"
          >
            Rechazar todas
          </button>
          <button
            onClick={openConfig}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray-50"
          >
            Configurar
          </button>
          <button
            onClick={acceptAll}
            className="rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}