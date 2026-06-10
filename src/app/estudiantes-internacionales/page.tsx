"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { CTAWhatsApp, CTACall } from "@/components/shared/CTAButtons";
import { cn } from "@/lib/utils";

const internationalSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().optional(),
  pais_origen: z.string().min(2, "Indica tu país de origen"),
  tipo_tramite: z.enum(["visado_estudiante", "residencia_no_lucrativa", "otro"], {
    required_error: "Selecciona una opción",
  }),
  mensaje: z.string().optional(),
  privacidad: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

type InternationalFormValues = z.infer<typeof internationalSchema>;

const headerMetadata = {
  title: "Seguro para estudiantes internacionales en España | Grupo Mora",
  description:
    "Seguro de salud válido para solicitar residencia en España desde cualquier parte del mundo. Asesoramiento personalizado para estudiantes internacionales en Madrid.",
};

export default function EstudiantesInternacionalesPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InternationalFormValues>({
    resolver: zodResolver(internationalSchema),
    defaultValues: {
      tipo_tramite: undefined,
      privacidad: false as any,
    },
  });

  const onSubmit = async (data: InternationalFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const saberItems = [
    "El seguro debe estar activo antes de solicitar el visado o la residencia.",
    "Debe cubrir el territorio español durante toda tu estancia.",
    "Es un requisito obligatorio para muchos trámites de extranjería.",
    "En Grupo Mora te orientamos sobre las coberturas que se aceptan para este trámite.",
  ];

  const paraQuienItems = [
    "Estudiantes universitarios o de posgrado que van a estudiar en España.",
    "Personas que solicitan residencia no lucrativa o visado de estudiante.",
    "Familias que acompañan a un estudiante y necesitan cobertura sanitaria.",
    "Personas de cualquier nacionalidad que necesiten un seguro válido para extranjería.",
  ];

  const pasos = [
    {
      number: "01",
      title: "Nos escribes",
      description:
        "Por WhatsApp o rellenando el formulario. Cuéntanos tu situación y tu trámite.",
    },
    {
      number: "02",
      title: "Te explicamos",
      description:
        "Analizamos qué cobertura necesitas según tu tipo de trámite y país de origen.",
    },
    {
      number: "03",
      title: "Gestionamos tu póliza",
      description:
        "Te entregamos la documentación lista para presentar con tu solicitud.",
    },
  ];

  return (
    <>
      <PageHero
        title="Seguro para estudiantes internacionales en España"
        subtitle="Si vas a solicitar tu residencia en España desde el extranjero, necesitas un seguro de salud homologado. En Grupo Mora te lo gestionamos de forma rápida, clara y personalizada."
      />

      {/* ¿Qué necesitas saber? */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-navy text-center sm:text-4xl">
            ¿Qué necesitas saber?
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {saberItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl bg-gray-light p-6">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-gray-dark/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ¿Para quién es? */}
      <SectionWrapper background="light">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-navy text-center sm:text-4xl">
            ¿Para quién es este seguro?
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {paraQuienItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                    ✓
                  </span>
                  <p className="text-gray-dark/80">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ¿Cómo funciona? */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-playfair text-3xl font-bold text-navy text-center sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pasos.map((paso) => (
              <div key={paso.number} className="text-center">
                <span className="font-playfair text-5xl font-bold text-gold/60 sm:text-6xl">
                  {paso.number}
                </span>
                <h3 className="mt-4 font-playfair text-xl font-bold text-navy">
                  {paso.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-dark/70">
                  {paso.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Aviso importante */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-navy/5 border border-navy/10 p-8 text-center">
            <p className="text-sm text-navy/80 leading-relaxed">
              <strong className="text-navy">Aviso importante:</strong> La información de esta
              página es orientativa. Cada trámite de extranjería tiene requisitos
              específicos. Una persona de Grupo Mora revisará tu caso de forma
              personalizada antes de recomendar ninguna cobertura.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Formulario */}
      <SectionWrapper background="light">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-playfair text-2xl font-bold text-navy sm:text-3xl">
              Solicita información
            </h2>
            <p className="mt-2 text-gray-dark/70">
              Cuéntanos tu caso y te orientamos sin compromiso.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-trust/5 p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-[#25D366]" aria-hidden="true" />
                <h3 className="mt-4 font-playfair text-xl font-bold text-navy">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-gray-dark/70">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
              </div>
            ) : (
              <>
                {/* CTAs principales */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CTAWhatsApp className="flex-1" />
                  <CTACall className="flex-1" />
                </div>

                <div className="mt-8 border-t border-gray-100 pt-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-navy">
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          {...register("nombre")}
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Tu nombre"
                        />
                        {errors.nombre && <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="pais_origen" className="block text-sm font-medium text-navy">
                          País de origen <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="pais_origen"
                          type="text"
                          {...register("pais_origen")}
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Ej: Colombia, México, China..."
                        />
                        {errors.pais_origen && <p className="mt-1 text-xs text-red-500">{errors.pais_origen.message}</p>}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="tu@email.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-navy">
                          Teléfono (con código de país)
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          {...register("telefono")}
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Ej: +57 300 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy">
                        Tipo de trámite <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                          { value: "visado_estudiante", label: "Visado de estudiante" },
                          { value: "residencia_no_lucrativa", label: "Residencia no lucrativa" },
                          { value: "otro", label: "Otro" },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-navy transition-all has-[:checked]:border-gold has-[:checked]:bg-gold/5 has-[:checked]:ring-1 has-[:checked]:ring-gold"
                          >
                            <input
                              type="radio"
                              value={option.value}
                              {...register("tipo_tramite")}
                              className="sr-only"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                      {errors.tipo_tramite && (
                        <p className="mt-1 text-xs text-red-500">{errors.tipo_tramite.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-navy">
                        Mensaje (opcional)
                      </label>
                      <textarea
                        id="mensaje"
                        rows={3}
                        {...register("mensaje")}
                        className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                        placeholder="Cuéntanos más sobre tu situación..."
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          {...register("privacidad")}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                        />
                        <span className="text-sm text-gray-dark/80">
                          He leído y acepto la{" "}
                          <a href="/politica-de-privacidad" className="text-gold underline" target="_blank">
                            política de privacidad
                          </a>{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.privacidad && (
                        <p className="mt-1 text-xs text-red-500">{errors.privacidad.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-navy h-12 w-full text-base disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Enviar solicitud
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        Hubo un error al enviar. Inténtalo de nuevo.
                      </div>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}