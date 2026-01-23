const icons = {
  lifebuoy: `<i class="fa-solid fa-life-ring" aria-hidden="true"></i>`,
  chat: `<i class="fa-solid fa-comments" aria-hidden="true"></i>`,
  balance: `<i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>`,
  family: `<i class="fa-solid fa-people-roof" aria-hidden="true"></i>`
};

export function NikolaHelpAreas(profile) {
  return `
    <section id="pomoc" class="space-y-8 reveal" data-reveal>
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">S čím mohu pomoci</p>
        <h2 class="text-2xl font-semibold text-textDark md:text-3xl">Opora v klíčových životních situacích</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        ${profile.helpAreas
          .map(
            (item) => `
              <article class="flex gap-4 rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-softBlue/60 text-xl text-primaryBlue">
                  ${icons[item.icon] || ""}
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-semibold text-textDark">${item.title}</h3>
                  <p class="text-base leading-relaxed text-textMuted">${item.text}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
