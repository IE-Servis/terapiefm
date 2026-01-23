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
import { nikolaProfile } from "../../data/nikola";

export const metadata = {
  title: "Mgr. Nikol Filipová | Psychologické poradenství a krizová intervence",
  description:
    "Citlivé psychologické poradenství a krizová intervence. Bezpečný prostor, odborné vedení a podpora v náročných životních situacích.",
  openGraph: {
    title: "Mgr. Nikol Filipová | Psychologické poradenství a krizová intervence",
    description:
      "Citlivé psychologické poradenství a krizová intervence. Bezpečný prostor, odborné vedení a podpora v náročných životních situacích.",
    url: "https://psychologfm.cz/nikol-filipova",
    type: "website"
  }
};

export default function NikolaFilipovaPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-softBlue/50 blur-3xl" aria-hidden="true"></div>
      <div className="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-primaryBlue/20 blur-3xl" aria-hidden="true"></div>
      <Menu />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="section-spacing">
          <ProfileCard profile={nikolaProfile} />
          <About profile={nikolaProfile} />
          <HelpAreas profile={nikolaProfile} />
          <Expertise profile={nikolaProfile} />
          <HowItWorks />
          <QuoteBlock profile={nikolaProfile} />
          <ContactCTA />
        </div>
      </main>
      <Footer />
      <ScrollTop />
      <RevealObserver />
    </div>
  );
}
