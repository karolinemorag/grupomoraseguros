"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  telefono: z.string().optional(),
  email: z.string().email("Introduce un email válido"),
  interes: z.enum(["decesos", "vida", "mascotas", "no_se"], {
    required_error: "Selecciona una opción",
  }),
  preferencia_contacto: z.enum(["whatsapp", "llamada", "email", "cita"], {
    required_error: "Selecciona una preferencia",
  }),
  mensaje: z.string().optional(),
  privacidad: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultInterest?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactForm({
  defaultInterest,
  title = "¿Hablamos? Cuéntanos qué necesitas",
  subtitle = "Déjanos tus datos y te llamamos sin compromiso",
  className,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interes: (defaultInterest as any) || undefined,
      preferencia_contacto: undefined,
      privacidad: false as any,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
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

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-gray-dark/70">{subtitle}</p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl bg-trust/5 p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-trust" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-xl font-bold text-trust">
              ¡Mensaje enviado!
            </h3>
            <p className="mt-2 text-gray-dark/70">
              Gracias por contactarnos. Te responderemos lo antes posible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-navy">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register("nombre")}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-navy">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  {...register("telefono")}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Ej: 612 345 678"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Interés */}
              <div>
                <label htmlFor="interes" className="block text-sm font-medium text-navy">
                  ¿Qué te interesa? <span className="text-red-500">*</span>
                </label>
                <select
                  id="interes"
                  {...register("interes")}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Selecciona...</option>
                  <option value="decesos">Seguro de decesos</option>
                  <option value="vida">Seguro de vida</option>
                  <option value="mascotas">Seguro para mascotas</option>
                  <option value="no_se">No lo sé todavía</option>
                </select>
                {errors.interes && (
                  <p className="mt-1 text-xs text-red-500">{errors.interes.message}</p>
                )}
              </div>
            </div>

            {/* Preferencia de contacto */}
            <div>
              <label className="block text-sm font-medium text-navy">
                ¿Cómo prefieres que te contactemos? <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { value: "whatsapp", label: "WhatsApp" },
                  { value: "llamada", label: "Llamada" },
                  { value: "email", label: "Email" },
                  { value: "cita", label: "Cita presencial" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-3 py-3 text-sm font-medium text-navy transition-all has-[:checked]:border-gold has-[:checked]:bg-gold/5 has-[:checked]:ring-1 has-[:checked]:ring-gold"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register("preferencia_contacto")}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {errors.preferencia_contacto && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.preferencia_contacto.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-navy">
                Mensaje (opcional)
              </label>
              <textarea
                id="mensaje"
                rows={4}
                {...register("mensaje")}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>

            {/* Privacidad */}
            <div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register("privacidad")}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                />
                <span className="text-sm text-gray-dark/80">
                  He leído y acepto la{" "}
                  <a
                    href="/politica-de-privacidad"
                    className="text-gold underline hover:text-gold-dark"
                    target="_blank"
                  >
                    política de privacidad
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.privacidad && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.privacidad.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold h-12 w-full text-base disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enviar mensaje
                </>
              )}
            </button>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                Hubo un error al enviar el mensaje. Inténtalo de nuevo.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}