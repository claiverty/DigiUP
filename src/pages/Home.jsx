import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";
import ChallengeSection from "../components/sections/ChallengeSection";
import ContactSection from "../components/sections/ContactSection";
import ConceptCasesSection from "../components/sections/ConceptCasesSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import MethodSection from "../components/sections/MethodSection";
import ServicesSection from "../components/sections/ServicesSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <HeroSection />
        <ChallengeSection />
        <ServicesSection />
        <ShowcaseSection />
        <ConceptCasesSection />
        <MethodSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
