export function HeaderHero() {
  return (
    <section className="relative rounded-3xl border border-borderLight bg-white/80 p-8 shadow-soft md:p-12 reveal" data-reveal>
      <div className="max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Psychologfm.cz</p>
        <h2 className="text-3xl font-semibold tracking-tight text-textDark md:text-4xl">
          Bezpečný prostor pro nový směr a klid, který můžete znovu najít.
        </h2>
        <p className="text-base leading-relaxed text-textMuted md:text-lg">
          Citlivé poradenství a krizová intervence pro chvíle, kdy potřebujete oporu,
          porozumění a jasný krok vpřed.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-warmAmber/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            aria-label="Objednat konzultaci"
          >
            Domluvit konzultaci
          </a>
          <a
            href="#o-mne"
            className="rounded-full border border-primaryBlue px-6 py-3 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            aria-label="Zobrazit informace o přístupu"
          >
            Poznat můj přístup
          </a>
        </div>
      </div>
    </section>
  );
}
