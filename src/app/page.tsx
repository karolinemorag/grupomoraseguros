import HeroHome from "@/components/home/HeroHome";
import TrustStrip from "@/components/home/TrustStrip";
import NeedsNavigator from "@/components/home/NeedsNavigator";
import AdvisoryProcess from "@/components/home/AdvisoryProcess";
import InternationalFeature from "@/components/home/InternationalFeature";
import KarolineIntroduction from "@/components/home/KarolineIntroduction";
import ContactExperience from "@/components/home/ContactExperience";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Navegador de necesidades */}
      <NeedsNavigator />

      {/* Proceso de atención */}
      <AdvisoryProcess />

      {/* Soluciones internacionales */}
      <InternationalFeature />

      {/* Sobre Karoline */}
      <KarolineIntroduction />

      {/* Contacto */}
      <ContactExperience />
    </>
  );
}