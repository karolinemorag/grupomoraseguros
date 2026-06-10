"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Nos cuentas tu situación",
      description:
        "Sin formularios complicados. Solo una conversación para entender qué necesitas.",
    },
    {
      number: "02",
      title: "Te explicamos tus opciones",
      description:
        "Sin tecnicismos. Con calma y claridad. Te presentamos las alternativas que mejor se adaptan a ti.",
    },
    {
      number: "03",
      title: "Te acompañamos siempre",
      description:
        "Antes, durante y después de contratar. Estamos a tu lado en cada paso.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="font-playfair text-3xl font-bold text-navy text-center sm:text-4xl md:text-5xl">
        Así te acompañamos
        <br />
        en Grupo Mora
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <span className="font-playfair text-6xl font-bold text-gold/60 sm:text-7xl">
              {step.number}
            </span>
            <h3 className="mt-4 font-playfair text-xl font-bold text-navy sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-dark/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}