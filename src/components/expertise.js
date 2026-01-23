export function NikolaExpertise(profile) {
  return `
    <section id="odbornost" class="grid gap-8 rounded-3xl border border-borderLight bg-white p-8 shadow-soft md:grid-cols-[1fr_1.1fr] reveal" data-reveal>
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Odbornost a vzdělání</p>
        <h2 class="text-2xl font-semibold text-textDark md:text-3xl">Zázemí, které stojí na odbornosti i praxi</h2>
        <p class="text-base leading-relaxed text-textMuted">
          Přehled vzdělání, výcviků a zaměření, které rámují moji práci a pomáhají udržet bezpečný prostor.
        </p>
      </div>
      <ul class="space-y-4 text-base leading-relaxed text-textMuted">
        ${profile.expertise
          .map(
            (item) => `
              <li class="flex gap-3">
                <span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-warmAmber"></span>
                <span>${item}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </section>
  `;
}
