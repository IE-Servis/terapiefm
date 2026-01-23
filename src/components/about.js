export function NikolaAbout(profile) {
  return `
    <section id="o-mne" class="space-y-6 reveal" data-reveal>
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">O mně</p>
        <h2 class="text-2xl font-semibold text-textDark md:text-3xl">Respektující vedení, které drží bezpečný rámec</h2>
      </div>
      <div class="rounded-2xl border border-borderLight bg-white p-6 text-base leading-relaxed text-textMuted shadow-soft">
        <div class="space-y-3">
          ${profile.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
    </section>
  `;
}
