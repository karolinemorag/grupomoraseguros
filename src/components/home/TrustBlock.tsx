"use client";

export default function TrustBlock() {
  const items = [
    {
      svg: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A3.8 3.8 0 0 1 7.8 6.5a4 4 0 0 1 4.2 1.5 4 4 0 0 1 4.2-1.5A3.8 3.8 0 0 1 20 10.2c0 7.3-8 11.8-8 11.8Z" />
        </svg>
      ),
      text: "Atención personalizada, no un call center.",
    },
    {
      svg: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A3.8 3.8 0 0 1 7.8 6.5a4 4 0 0 1 4.2 1.5 4 4 0 0 1 4.2-1.5A3.8 3.8 0 0 1 20 10.2c0 7.3-8 11.8-8 11.8Z" />
        </svg>
      ),
      text: "Te explicamos todo con claridad, sin letra pequeña.",
    },
    {
      svg: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      text: "Disponibles cuando más nos necesitas.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="font-playfair text-3xl font-bold text-navy text-center sm:text-4xl md:text-5xl">
        ¿Por qué elegir Grupo Mora?
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-3xl bg-white border border-gray-100 p-8 text-center shadow-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-navy">
              {item.svg}
            </div>
            <p className="mt-6 font-playfair text-lg font-bold text-navy leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}