import HeroHome from "@/components/home/HeroHome";
import TrustStrip from "@/components/home/TrustStrip";
import NeedsNavigator from "@/components/home/NeedsNavigator";
import AdvisoryProcess from "@/components/home/AdvisoryProcess";
import InternationalFeature from "@/components/home/InternationalFeature";
import KarolineIntroduction from "@/components/home/KarolineIntroduction";
import ContactExperience from "@/components/home/ContactExperience";
import SectionBand from "@/components/layout/SectionBand";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Trust Strip — blue-soft surface */}
      <TrustStrip />

      {/* Navegador de necesidades — white */}
      <NeedsNavigator />

      {/* Proceso de atención — navy band */}
      <SectionBand tone="navy" size="spacious">
        <AdvisoryProcess />
      </SectionBand>

      {/* Soluciones internacionales — blue-soft band */}
      <SectionBand tone="blue-soft" size="spacious">
        <InternationalFeature />
      </SectionBand>

      {/* Sobre Karoline — warm band */}
      <SectionBand tone="warm" size="default">
        <KarolineIntroduction />
      </SectionBand>

      {/* Contacto — white */}
      <ContactExperience />
    </>
  );
}