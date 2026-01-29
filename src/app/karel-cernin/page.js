import { Menu } from "../../components/Menu";
import { ProfileCard } from "../../components/ProfileCard";
import { About } from "../../components/About";
import { HelpAreas } from "../../components/HelpAreas";
import { Expertise } from "../../components/Expertise";
import { HowItWorks } from "../../components/HowItWorks";
import { QuoteBlock } from "../../components/QuoteBlock";
import { ContactCTA } from "../../components/ContactCTA";
import { Footer } from "../../components/Footer";
import { ScrollTop } from "../../components/ScrollTop";
import { RevealObserver } from "../../components/RevealObserver";
import { karelProfile } from "../../data/karel";

export const metadata = {
  title: "Mgr. Karel Černín | Psycholog FM",
  description:
    "Psychologické poradenství, práce s úzkostí, depresí, vztahovými obtížemi i životními krizemi. Bezpečný prostor a srozumitelný přístup.",
  openGraph: {
    title: "Mgr. Karel Černín | Psycholog FM",
    description:
      "Psychologické poradenství, práce s úzkostí, depresí, vztahovými obtížemi i životními krizemi. Bezpečný prostor a srozumitelný přístup.",
    url: "https://psychologfm.cz/karel-cernin",
    type: "website"
  }
};

export default function KarelCerninPage() {
  return (
    <div className="relative overflow-hidden">
      <Menu />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="section-spacing">
          <ProfileCard profile={karelProfile} />
          <About profile={karelProfile} />
          <HelpAreas profile={karelProfile} />
          <Expertise profile={karelProfile} />
          <HowItWorks />
          <QuoteBlock profile={karelProfile} />
          <ContactCTA email="cernin@psychologfm.cz" phone="+420 603 500 580" />
        </div>
      </main>
      <Footer />
      <ScrollTop />
      <RevealObserver />
    </div>
  );
}
