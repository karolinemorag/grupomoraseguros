"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const contactSchema = z
  .object({
    consulta_tipo: z.enum(["contratar", "poliza"], {
      required_error: "Selecciona una opción",
    }),
    nombre: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre es demasiado largo"),
    interes: z.string().optional(),
    motivo_poliza: z.string().optional(),
    preferencia_contacto: z.enum(["whatsapp", "llamada", "email"], {
      required_error: "Selecciona una preferencia",
    }),
    telefono: z.string().optional(),
    email: z.string().optional(),
    mensaje: z.string().optional(),
    privacidad: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
    }),
    honeypot: z.string().max(0).optional(),
  })
  .refine(
    (data) => {
      if (data.preferencia_contacto === "whatsapp" || data.preferencia_contacto === "llamada") {
        return data.telefono && data.telefono.length >= 6;
      }
      return true;
    },
    {
      message: "El teléfono es obligatorio para este canal",
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

export default function ContactExperience() {
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
      consulta_tipo: undefined,
      preferencia_contacto: undefined,
      privacidad: false as any,
    },
  });

  const consultaTipo = watch("consulta_tipo");
  const preferencia = watch("preferencia_contacto");

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return;
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
    { value: "salud", label: "Seguro de salud" },
    { value: "vida", label: "Seguro de vida" },
    { value: "decesos", label: "Seguro de decesos" },
    { value: "mascotas", label: "Seguro para mascotas" },
    { value: "internacional", label: "Seguro para estudiar o residir en España" },
    { value: "no_se", label: "Todavía no sé qué necesito" },
    { value: "otra", label: "Otra consulta" },
  ];

  const motivoPolizaOptions = [
    { value: "localizar_canal", label: "Localizar un teléfono o canal de asistencia" },
    { value: "documentacion", label: "Duda sobre documentación" },
    { value: "modificacion", label: "Consultar una modificación" },
    { value: "recibo", label: "Orientación sobre un recibo" },
    { value: "incidencia", label: "Comunicar una incidencia" },
    { value: "otra", label: "Otra consulta" },
  ];

  const whatsappUrl = siteConfig.whatsapp.startsWith("[")
    ? "#"
    : `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="bg-white py-16 sm:py-20" id="contacto">
      <div className="container-section">
        <div className="flex flex-col overflow-hidden rounded-2xl md:flex-row">
          {/* Left - Info (42%) */}
          <div className="bg-mora-navy p-8 text-white md:w-[42%] md:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mora-gold">
              HABLEMOS
            </span>
            <h2 className="mt-4 font-playfair text-2xl font-bold text-white sm:text-3xl">
              Cuéntale a Karoline qué necesitas.
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Explica brevemente tu situación y Karoline podrá orientarte sobre las
              alternativas disponibles y los siguientes pasos.
            </p>
            <p className="mt-3 text-sm text-white/50">
              No necesitas tener claro qué seguro buscas antes de contactar.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-white">Escribir por WhatsApp</p>
                    <p className="text-xs text-white/60">
                      Para una primera consulta o para compartir brevemente tu situación.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-white">Solicitar una llamada</p>
                    <p className="text-xs text-white/60">
                      Indica tu teléfono y Karoline podrá ponerse en contacto dentro de su horario de atención.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-white">{siteConfig.ownerName}</p>
              <p className="text-xs text-white/50">{siteConfig.professionalStatus}</p>
              <p className="text-xs text-white/40">DGSFP {siteConfig.dgsfpCode}</p>
            </div>
          </div>

          {/* Right - Form (58%) */}
          <div className="bg-white p-8 md:w-[58%] md:p-12">
            <h3 className="font-playfair text-xl font-bold text-text-primary">
              Enviar consulta
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              Completa los datos básicos y elige cómo prefieres que contacte contigo.
            </p>

            {/* Emergency note */}
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs text-red-700">
              En una emergencia médica, llama al <strong>112</strong> o utiliza el teléfono de urgencias indicado en tu póliza.
            </div>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-trust/5 p-8 text-center" role="status" aria-live="polite">
                <CheckCircle className="mx-auto h-12 w-12 text-trust" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-bold text-trust">Consulta enviada</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Tu consulta se ha enviado correctamente. Karoline la revisará dentro de su horario de atención.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-5"
                noValidate
                aria-label="Formulario de contacto"
              >
                {/* Honeypot - completamente invisible */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
                  <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                </div>

                {/* Tipo de consulta */}
                <fieldset>
                  <legend className="text-sm font-medium text-text-primary">
                    ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                  </legend>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { value: "contratar", label: "Quiero información para contratar", desc: "Para conocer las modalidades disponibles y valorar una posible contratación." },
                      { value: "poliza", label: "Ya tengo una póliza y necesito orientación", desc: "Para localizar información, documentación o el canal de atención correspondiente." },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={cn(
                          "flex cursor-pointer flex-col gap-1 rounded-xl border p-4 text-sm transition-colors",
                          consultaTipo === opt.value
                            ? "border-asisa-blue bg-asisa-blue-light/50"
                            : "border-border-soft hover:border-asisa-blue/30"
                        )}
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          {...register("consulta_tipo")}
                          className="sr-only"
                        />
                        <span className="font-medium text-text-primary">{opt.label}</span>
                        <span className="text-xs text-text-secondary">{opt.desc}</span>
                      </label>
                    ))}
                  </div>
                  {errors.consulta_tipo && (
                    <p className="mt-1 text-xs text-red-500" role="alert">{errors.consulta_tipo.message}</p>
                  )}
                </fieldset>

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-text-primary">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    {...register("nombre")}
                    aria-describedby={errors.nombre ? "nombre-error" : undefined}
                    aria-invalid={errors.nombre ? "true" : "false"}
                    className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p id="nombre-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Interés o motivo según tipo */}
                {consultaTipo === "contratar" && (
                  <div>
                    <label htmlFor="interes" className="block text-sm font-medium text-text-primary">
                      ¿Qué te interesa? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interes"
                      {...register("interes")}
                      className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
                    >
                      <option value="">Selecciona...</option>
                      {interesOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                )}

                {consultaTipo === "poliza" && (
                  <div>
                    <label htmlFor="motivo_poliza" className="block text-sm font-medium text-text-primary">
                      ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="motivo_poliza"
                      {...register("motivo_poliza")}
                      className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
                    >
                      <option value="">Selecciona...</option>
                      {motivoPolizaOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                )}

                {consultaTipo === "poliza" && (
                  <div className="rounded-lg bg-asisa-blue-light/50 p-3 text-xs text-text-secondary leading-relaxed">
                    Karoline puede ayudarte a identificar el canal adecuado. Las urgencias, autorizaciones, prestaciones y siniestros pueden requerir contacto directo con la entidad aseguradora mediante los datos indicados en la póliza.
                  </div>
                )}

                {/* Canal preferido */}
                <fieldset>
                  <legend className="text-sm font-medium text-text-primary">
                    ¿Cómo prefieres que te contactemos? <span className="text-red-500">*</span>
                  </legend>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {[
                      { value: "whatsapp", label: "WhatsApp" },
                      { value: "llamada", label: "Llamada" },
                      { value: "email", label: "Email" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={cn(
                          "flex cursor-pointer items-center justify-center rounded-[10px] border px-3 py-3 text-sm font-medium transition-colors",
                          preferencia === opt.value
                            ? "border-asisa-blue bg-asisa-blue-light/50 text-asisa-blue"
                            : "border-border-soft text-text-secondary hover:border-asisa-blue/30"
                        )}
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          {...register("preferencia_contacto")}
                          className="sr-only"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  {errors.preferencia_contacto && (
                    <p className="mt-1 text-xs text-red-500" role="alert">{errors.preferencia_contacto.message}</p>
                  )}
                </fieldset>

                {/* Teléfono / Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {(preferencia === "whatsapp" || preferencia === "llamada" || !preferencia) && (
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-text-primary">
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        {...register("telefono")}
                        aria-describedby={errors.telefono ? "telefono-error" : undefined}
                        aria-invalid={errors.telefono ? "true" : "false"}
                        className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
                        placeholder="Ej: 612 345 678"
                      />
                      {errors.telefono && (
                        <p id="telefono-error" className="mt-1 text-xs text-red-500" role="alert">{errors.telefono.message}</p>
                      )}
                    </div>
                  )}
                  {(preferencia === "email" || !preferencia) && (
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                        Email {preferencia === "email" && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={errors.email ? "true" : "false"}
                        className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-text-primary">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    {...register("mensaje")}
                    className="mt-1 block w-full rounded-[10px] border border-border-soft px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-asisa-blue focus:outline-none focus:ring-2 focus:ring-asisa-blue/20"
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
                      className="mt-1 h-4 w-4 rounded border-border-soft text-asisa-blue focus:ring-asisa-blue"
                    />
                    <span className="text-xs text-text-secondary leading-relaxed">
                      He leído y acepto la{" "}
                      <a href="/politica-de-privacidad" className="text-asisa-blue underline hover:text-asisa-blue-dark" target="_blank">
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

                {/* Privacy first layer */}
                <div className="rounded-lg bg-surface-soft p-3 text-xs text-text-secondary/60 leading-relaxed">
                  Responsable: {siteConfig.ownerName}. Finalidad: atender tu solicitud de información y contacto.
                  Legitimación: consentimiento. Cuando resulte necesario para atender la consulta o tramitar una posible
                  contratación, los datos podrán comunicarse a la entidad aseguradora correspondiente. Consulta más
                  información en la{" "}
                  <a href="/politica-de-privacidad" className="text-asisa-blue underline hover:text-asisa-blue-dark" target="_blank">
                    Política de privacidad
                  </a>.
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary h-12 w-full text-sm"
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Enviando consulta...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" aria-hidden="true" />
                      Enviar consulta
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600" role="alert" aria-live="assertive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    No hemos podido enviar la consulta. Revisa los datos o utiliza WhatsApp para contactar con Karoline.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}