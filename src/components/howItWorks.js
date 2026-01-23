export function HowItWorks() {
  return `
    <section class="space-y-8 reveal" data-reveal>
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Jak probíhá spolupráce</p>
        <h2 class="text-2xl font-semibold text-textDark md:text-3xl">Jasný a bezpečný průběh krok za krokem</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">1. krok</p>
          <h3 class="mt-3 text-xl font-semibold text-textDark">První konzultace</h3>
          <p class="mt-3 text-base leading-relaxed text-textMuted">
            Během úvodního setkání probereme vaši aktuální situaci, vaše potřeby a očekávání.
            Vytvoříme bezpečný prostor, kde můžete otevřeně mluvit.
          </p>
        </article>
        <article class="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">2. krok</p>
          <h3 class="mt-3 text-xl font-semibold text-textDark">Společné nastavení směru</h3>
          <p class="mt-3 text-base leading-relaxed text-textMuted">
            Domluvíme se na cílech naší spolupráce a zvolíme přístup, který pro vás bude nejvhodnější.
            Navrhnu možnosti, jak můžeme postupovat dál.
          </p>
        </article>
        <article class="rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">3. krok</p>
          <h3 class="mt-3 text-xl font-semibold text-textDark">Pravidelná setkávání</h3>
          <p class="mt-3 text-base leading-relaxed text-textMuted">
            Pokračujeme v práci podle domluveného plánu. Tempo i délku spolupráce přizpůsobíme tomu,
            co právě potřebujete.
          </p>
        </article>
      </div>
    </section>
  `;
}
