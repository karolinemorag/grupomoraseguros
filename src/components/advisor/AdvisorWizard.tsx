"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  quienOptions,
  queProtegerOptions,
  getRecommendation,
} from "@/lib/advisor-logic";
import { QuienOption, QueProtegerOption, Recommendation } from "@/types/advisor";
import ContactForm from "@/components/shared/ContactForm";

export default function AdvisorWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [paraQuien, setParaQuien] = useState<QuienOption | null>(null);
  const [queProteger, setQueProteger] = useState<QueProtegerOption | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const progress = ((step - 1) / 3) * 100;

  const handleSelectQuien = (value: QuienOption) => {
    setParaQuien(value);
  };

  const handleSelectQueProteger = (value: QueProtegerOption) => {
    setQueProteger(value);
  };

  const handleNext = () => {
    if (step === 1 && paraQuien) {
      setStep(2);
    } else if (step === 2 && queProteger) {
      const rec = getRecommendation(paraQuien!, queProteger);
      setRecommendation(rec);
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  };

  const canProceed =
    (step === 1 && paraQuien) || (step === 2 && queProteger) || step === 3;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-mid">
          <span>Paso {step} de 4</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Step 1: ¿Para quién? */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <h2 className="font-heading text-2xl font-bold text-navy">
            ¿Para quién estás buscando un seguro?
          </h2>
          <p className="mt-2 text-gray-dark/70">
            Selecciona la opción que mejor describa tu situación.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {quienOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectQuien(option.value)}
                className={cn(
                  "flex items-center gap-4 rounded-xl border-2 p-6 text-left transition-all duration-200",
                  paraQuien === option.value
                    ? "border-gold bg-gold/5"
                    : "border-gray-200 bg-white hover:border-gold/50"
                )}
                aria-pressed={paraQuien === option.value}
              >
                <span className="text-3xl" aria-hidden="true">{option.icon}</span>
                <span className="font-heading text-lg font-bold text-navy">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: ¿Qué proteger? */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="font-heading text-2xl font-bold text-navy">
            ¿Qué te gustaría proteger?
          </h2>
          <p className="mt-2 text-gray-dark/70">
            Cuéntanos tu principal preocupación para recomendarte la mejor opción.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {queProtegerOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectQueProteger(option.value)}
                className={cn(
                  "flex flex-col rounded-xl border-2 p-6 text-left transition-all duration-200",
                  queProteger === option.value
                    ? "border-gold bg-gold/5"
                    : "border-gray-200 bg-white hover:border-gold/50"
                )}
                aria-pressed={queProteger === option.value}
              >
                <span className="text-3xl" aria-hidden="true">{option.icon}</span>
                <span className="mt-3 font-heading text-lg font-bold text-navy">
                  {option.label}
                </span>
                <span className="mt-1 text-sm text-gray-dark/70">
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Recomendación */}
      {step === 3 && recommendation && (
        <div className="animate-fadeIn">
          <div className="rounded-2xl border-2 border-gold bg-gold/5 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
              <Check className="h-8 w-8 text-gold" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold text-navy">
              {recommendation.title}
            </h2>
            <p className="mt-4 text-gray-dark/80">{recommendation.description}</p>
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-mid">Productos sugeridos:</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {recommendation.suggestedProducts.map((product) => (
                  <span
                    key={product}
                    className="rounded-full bg-navy/10 px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl bg-gray-light p-4 text-center">
            <p className="text-xs text-gray-mid">
              Esta recomendación es orientativa y no constituye un asesoramiento
              personalizado. Para obtener un análisis completo de tu situación, te
              recomendamos solicitar una revisión personalizada.
            </p>
          </div>
        </div>
      )}

      {/* Step 4: Formulario */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <ContactForm
            title="Déjanos tus datos y te ayudamos"
            subtitle="Te contactaremos para resolver tus dudas y ofrecerte la mejor opción."
          />
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="flex h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
            aria-label="Paso anterior"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Atrás
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className="btn-gold h-12 px-8 disabled:opacity-40"
            aria-label={step === 3 ? "Solicitar asesoramiento" : "Siguiente paso"}
          >
            {step === 3 ? "Solicitar asesoramiento" : "Siguiente"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {/* Footer disclaimer */}
      {step < 4 && (
        <p className="mt-8 text-center text-xs text-gray-mid">
          Esta herramienta tiene fines orientativos. Para una recomendación
          personalizada, contacta con nuestro equipo.
        </p>
      )}
    </div>
  );
}