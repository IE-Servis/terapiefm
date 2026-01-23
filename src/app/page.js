import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { RevealObserver } from "../components/RevealObserver";

export const metadata = {
  title: "psychologfm.cz | Psychologické poradenství",
  description: "Psychologické poradenství a krizová intervence. Profesionální a empatická péče."
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-softBlue/50 blur-3xl" aria-hidden="true"></div>
      <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">psychologfm.cz</p>
        <h1 className="text-4xl font-semibold tracking-tight text-textDark md:text-5xl">
          Psychologické poradenství a krizová intervence
        </h1>
        <p className="text-base leading-relaxed text-textMuted md:text-lg">
          Moderní a bezpečný prostor pro podporu v náročných životních situacích.
        </p>
        <a
          href="/nikola-filipova"
          className="rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          aria-label="Zobrazit medailonek"
        >
          Přejít na medailonek
        </a>
      </main>
      <Footer />
      <ScrollTop />
      <RevealObserver />
    </div>
  );
}
