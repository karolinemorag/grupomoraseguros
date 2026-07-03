import type { Metadata } from "next";
import { Manrope, Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import CookieConsent from "@/components/shared/CookieConsent";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    locale: "es_ES",
    type: "website",
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-white font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileContactBar />
        <CookieConsent />
      </body>
    </html>
  );
}