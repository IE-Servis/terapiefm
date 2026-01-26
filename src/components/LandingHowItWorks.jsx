export function LandingHowItWorks() {
  return (
    <section id="jak" className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Jak probíhá spolupráce</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Jednoduchý průběh, srozumitelné kroky</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-textDark">1. První kontakt</h3>
          <p className="mt-3 text-base leading-relaxed text-textMuted">
            Ozvete se e-mailem nebo telefonicky a domluvíme si termín, který vám bude vyhovovat.
          </p>
        </article>
        <article className="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-textDark">2. Úvodní setkání</h3>
          <p className="mt-3 text-base leading-relaxed text-textMuted">
            Probereme vaši situaci a očekávání, společně nastavíme směr další spolupráce.
          </p>
        </article>
        <article className="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-textDark">3. Práce v tempu</h3>
          <p className="mt-3 text-base leading-relaxed text-textMuted">
            Pokračujeme podle domluvy, v rytmu, který respektuje vaše potřeby a možnosti.
          </p>
        </article>
      </div>
    </section>
  );
}
