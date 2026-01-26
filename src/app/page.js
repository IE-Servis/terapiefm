import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { RevealObserver } from "../components/RevealObserver";
import { LandingHero } from "../components/LandingHero";
import { LandingHowItWorks } from "../components/LandingHowItWorks";
import { LandingProfiles } from "../components/LandingProfiles";
import { LandingLocation } from "../components/LandingLocation";
import { profiles } from "../data/profiles";

export const metadata = {
  title: "Terapie FM | Psychologické poradenství",
  description: "Psychologické poradenství a krizová intervence. Profesionální a empatická péče."
};

export default function HomePage() {
  const landingItems = [
    { label: "Jak to funguje", href: "#jak" },
    { label: "Medailonky", href: "#medailonky" },
    { label: "Kontakt", href: "#kontakt" }
  ];

  return (
    <div className="relative overflow-hidden">
      <Menu items={landingItems} />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="section-spacing">
          <LandingHero />
          <LandingHowItWorks />
          <LandingProfiles profiles={profiles} />
          <LandingLocation />
        </div>
      </main>
      <Footer />
      <ScrollTop />
      <RevealObserver />
    </div>
  );
}
