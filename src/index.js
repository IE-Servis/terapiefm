import "./style.css";
import { applyHead } from "./components/head";
import { Footer } from "./components/footer";
import { ScrollTop } from "./components/scrollTop";
import { initScrollTop } from "./utils/scrollTop";

applyHead({
  title: "psychologfm.cz | Psychologické poradenství",
  description: "Psychologické poradenství a krizová intervence. Profesionální a empatická péče."
});

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-softBlue/50 blur-3xl" aria-hidden="true"></div>
      <main class="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-20">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">psychologfm.cz</p>
        <h1 class="text-4xl font-semibold tracking-tight text-textDark md:text-5xl">Psychologické poradenství a krizová intervence</h1>
        <p class="text-base leading-relaxed text-textMuted md:text-lg">
          Moderní a bezpečný prostor pro podporu v náročných životních situacích.
        </p>
        <a
          href="/nikola-filipova.html"
          class="rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-0.5 hover:bg-warmAmber/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          aria-label="Zobrazit medailonek"
        >
          Přejít na medailonek
        </a>
      </main>
      ${Footer()}
      ${ScrollTop()}
    </div>
  `;
}

initScrollTop();
