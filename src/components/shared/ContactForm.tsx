"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z
  .object({
    nombre: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre es demasiado largo"),
    telefono: z.string().optional(),
    email: z.string().optional(),
    preferencia_contacto: z.enum(["whatsapp", "llamada", "email", "cita"], {
      required_error: "Selecciona una preferencia",
    }),
    interes: z.enum(["decesos", "vida", "mascotas", "no_se", "asistencia_poliza", "otra"], {
      required_error: "Selecciona una opción",
    }),
    mensaje: z.string().optional(),
    privacidad: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
    }),
    honeypot: z.string().max(0, "Bot detected").optional(),
  })
  .refine(
    (data) => {
      if (data.preferencia_contacto === "whatsapp" || data.preferencia_contacto === "llamada") {
        return data.telefono && data.telefono.length >= 6;
      }
      return true;
    },
    {
      message: "El teléfono es obligatorio para este canal de contacto",
      path: ["telefono"],
    }
  )
  .refine(
    (data) => {
      if (data.preferencia_contacto === "email") {
        return data.email && data.email.includes("@");
      }
      return true;
    },
    {
      message: "El email es obligatorio para contacto por email",
      path: ["email"],
    }
  );

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
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interes: (defaultInterest as any) || undefined,
      preferencia_contacto: undefined,
      privacidad: false as any,
    },
  });

  const preferencia = watch("preferencia_contacto");

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return; // Bot detected silently
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

  const interesOptions = [
    { value: "decesos", label: "Seguro de decesos" },
    { value: "vida", label: "Seguro de vida" },
    { value: "mascotas", label: "Seguro para mascotas" },
    { value: "no_se", label: "No lo sé todavía" },
    { value: "asistencia_poliza", label: "Asistencia con mi póliza" },
    { value: "otra", label: "Otra consulta" },
  ];

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-gray-dark/70">{subtitle}</p>

        {status === "success" ? (
          <div
            className="mt-8 rounded-xl bg-trust/5 p-8 text-center"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="mx-auto h-12 w-12 text-trust" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-xl font-bold text-trust">
              ¡Mensaje enviado!
            </h3>
            <p className="mt-2 text-gray-dark/70">
              Tu consulta se ha enviado correctamente. Karoline la revisará dentro del
              horario de atención.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
            noValidate
            aria-label="Formulario de contacto"
          >
            {/* Honeypot - invisible to users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="honeypot">No rellenar</label>
              <input
                id="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("honeypot")}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-navy">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register("nombre")}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  aria-invalid={errors.nombre ? "true" : "false"}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p id="nombre-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.nombre.message}
                  </p>
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
                  aria-describedby={errors.interes ? "interes-error" : undefined}
                  aria-invalid={errors.interes ? "true" : "false"}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Selecciona...</option>
                  {interesOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.interes && (
                  <p id="interes-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.interes.message}
                  </p>
                )}
              </div>
            </div>

            {/* Preferencia de contacto */}
            <div>
              <label className="block text-sm font-medium text-navy">
                ¿Cómo prefieres que te contactemos? <span className="text-red-500">*</span>
              </label>
              <div
                className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4"
                role="radiogroup"
                aria-label="Canal de contacto preferido"
              >
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
                <p className="mt-1 text-xs text-red-500" role="alert">
                  {errors.preferencia_contacto.message}
                </p>
              )}
            </div>

            {/* Contact details - conditional based on preference */}
            <div className="grid gap-6 sm:grid-cols-2">
              {(preferencia === "whatsapp" || preferencia === "llamada" || !preferencia) && (
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-navy">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    {...register("telefono")}
                    aria-describedby={errors.telefono ? "telefono-error" : undefined}
                    aria-invalid={errors.telefono ? "true" : "false"}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Ej: 612 345 678"
                  />
                  {errors.telefono && (
                    <p id="telefono-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
              )}
              {(preferencia === "email" || !preferencia) && (
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy">
                    Email{" "}
                    {preferencia === "email" && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={errors.email ? "true" : "false"}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy placeholder:text-gray-mid focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
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
                  aria-describedby={errors.privacidad ? "privacidad-error" : undefined}
                  aria-invalid={errors.privacidad ? "true" : "false"}
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
                <p id="privacidad-error" className="mt-1 text-xs text-red-500" role="alert">
                  {errors.privacidad.message}
                </p>
              )}
            </div>

            {/* Primera capa de privacidad */}
            <div className="rounded-lg bg-gray-light p-3 text-xs text-gray-dark/60 leading-relaxed">
              Responsable: Karoline Mora. Finalidad: atender tu solicitud de información y
              contacto. Legitimación: consentimiento. Cuando sea necesario para atender la
              consulta o tramitar una posible contratación, los datos podrán comunicarse a la
              entidad aseguradora correspondiente. Puedes ejercer tus derechos y consultar más
              información en la{" "}
              <a
                href="/politica-de-privacidad"
                className="text-gold underline hover:text-gold-dark"
                target="_blank"
              >
                Política de privacidad
              </a>
              .
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold h-12 w-full text-base disabled:opacity-50"
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Enviar mensaje
                </>
              )}
            </button>

            {status === "error" && (
              <div
                className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600"
                role="alert"
                aria-live="assertive"
              >
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