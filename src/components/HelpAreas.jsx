const icons = {
  lifebuoy: "fa-solid fa-life-ring",
  chat: "fa-solid fa-comments",
  balance: "fa-solid fa-scale-balanced",
  family: "fa-solid fa-people-roof"
};

export function HelpAreas({ profile }) {
  return (
    <section id="pomoc" className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">S čím mohu pomoci</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Opora v klíčových životních situacích</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {profile.helpAreas.map((item) => (
          <article key={item.title} className="flex gap-4 rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-softBlue/60 text-xl text-primaryBlue">
              <i className={icons[item.icon]} aria-hidden="true"></i>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-textDark">{item.title}</h3>
              <p className="text-base leading-relaxed text-textMuted">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
