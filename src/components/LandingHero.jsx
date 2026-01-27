export function LandingHero() {
  return (
    <section className="relative rounded-3xl border border-borderLight bg-white/80 p-8 shadow-soft md:p-12 reveal" data-reveal>
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-textDark md:text-5xl">
            Bezpečný prostor pro změnu, podporu a klidnější každodennost
          </h1>
          <p className="text-base leading-relaxed text-textMuted md:text-lg">
            Citlivé psychologické poradenství a krizová intervence. Najdeme společně cestu, která vám bude dávat smysl.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ie-servis-s-r-o.reservio.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              aria-label="Objednat konzultaci"
            >
              Rezervovat konzultaci
            </a>
            <a
              href="#medailonky"
              className="rounded-full border border-primaryBlue px-6 py-3 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              aria-label="Zobrazit medailonky"
            >
              Zobrazit medailonky
            </a>
          </div>
        </div>
        <figure className="flex items-center justify-center rounded-2xl bg-transparent p-6">
          <img
            src="/Therapy_Vector.svg"
            alt="Ilustrace terapeutického sezení"
            className="hero-vector h-56 w-full object-contain md:h-64"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
