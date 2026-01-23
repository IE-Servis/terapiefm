export function Expertise({ profile }) {
  return (
    <section id="odbornost" className="grid gap-8 rounded-3xl border border-borderLight bg-white p-8 shadow-soft md:grid-cols-[1fr_1.1fr] reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Odbornost a vzdělání</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Zázemí, které stojí na odbornosti i praxi</h2>
        <p className="text-base leading-relaxed text-textMuted">
          Přehled vzdělání, výcviků a zaměření, které rámují moji práci a pomáhají udržet bezpečný prostor.
        </p>
      </div>
      <ul className="space-y-4 text-base leading-relaxed text-textMuted">
        {profile.expertise.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-warmAmber"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
