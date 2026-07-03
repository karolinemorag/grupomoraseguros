"use client";

import { Clock, ShieldCheck, Ambulance, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function AssistanceHighlight() {
  return (
    <div className="rounded-2xl bg-navy p-8 text-white sm:p-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
            <Clock className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
            Asistencia cuando más la necesitas
          </h2>
          <p className="mt-4 text-white/80">
            Algunas pólizas incluyen canales de asistencia de la entidad
            aseguradora disponibles durante todo el año. Consulta la
            documentación de tu póliza o contacta con {siteConfig.ownerName}{" "}
            para identificar el canal correspondiente.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
              <Ambulance className="h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-sm font-medium">Asistencia médica urgente</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-sm font-medium">Asistencia en viaje</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
              <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
              <span className="text-sm font-medium">Canal de urgencias disponible</span>
            </div>
          </div>
          <Link
            href="/asistencia-24h"
            className="btn-gold mt-6 inline-flex h-12 items-center px-6"
            aria-label="Más información sobre asistencia"
          >
            Conocer más
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 p-8">
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="font-heading text-5xl font-bold text-gold">24 h</p>
                <p className="mt-2 text-lg text-white/60">
                  Canales de asistencia disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}