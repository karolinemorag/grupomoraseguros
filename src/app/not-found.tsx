import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABar from "@/components/layout/CTABar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-28 pb-20">
        <div className="mx-auto max-w-lg text-center">
          <span className="font-heading text-8xl font-bold text-navy/10">404</span>
          <h1 className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
            No hemos encontrado esta página
          </h1>
          <p className="mt-4 text-gray-dark/70">
            Puede que el enlace haya cambiado o que la dirección no sea correcta.
            Puedes volver al inicio o contactar con Karoline para recibir orientación.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn-navy h-12 px-8">
              Volver al inicio
            </Link>
            <Link href="/seguros" className="btn-outline-navy h-12 px-8">
              Ver seguros
            </Link>
            <Link href="/contacto" className="btn-gold h-12 px-8">
              Contactar con Karoline
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CTABar />
    </>
  );
}