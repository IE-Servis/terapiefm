import "./style.css";
import { applyHead } from "./components/head";
import { Menu } from "./components/menu";
import { NikolaProfileCard } from "./components/profileCard";
import { NikolaAbout } from "./components/about";
import { NikolaHelpAreas } from "./components/helpAreas";
import { NikolaExpertise } from "./components/expertise";
import { HowItWorks } from "./components/howItWorks";
import { QuoteBlock } from "./components/quoteBlock";
import { ContactCTA } from "./components/contactCTA";
import { Footer } from "./components/footer";
import { ScrollTop } from "./components/scrollTop";
import { initReveal } from "./utils/reveal";
import { initScrollTop } from "./utils/scrollTop";
import { nikolaProfile } from "./data/nikola";

applyHead({
  title: "Mgr. Nikol Filipová | Psychologické poradenství a krizová intervence",
  description:
    "Citlivé psychologické poradenství a krizová intervence. Bezpečný prostor, odborné vedení a podpora v náročných životních situacích.",
  url: "https://psychologfm.cz/nikola-filipova"
});

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-softBlue/50 blur-3xl" aria-hidden="true"></div>
      <div class="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-primaryBlue/20 blur-3xl" aria-hidden="true"></div>
      ${Menu()}
      <main class="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div class="section-spacing">
          ${NikolaProfileCard(nikolaProfile)}
          ${NikolaAbout(nikolaProfile)}
          ${NikolaHelpAreas(nikolaProfile)}
          ${NikolaExpertise(nikolaProfile)}
          ${HowItWorks()}
          ${QuoteBlock(nikolaProfile)}
          ${ContactCTA()}
        </div>
      </main>
      ${Footer()}
      ${ScrollTop()}
    </div>
  `;
}

initReveal();
initScrollTop();
