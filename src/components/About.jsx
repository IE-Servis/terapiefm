export function About({ profile }) {
  return (
    <section id="o-mne" className="space-y-6 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">O mně</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Respektující vedení, které drží bezpečný rámec</h2>
      </div>
      <div className="rounded-2xl border border-borderLight bg-white p-6 text-base leading-relaxed text-textMuted shadow-soft">
        <div className="space-y-3">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
