export function ProfileCard({ profile }) {
  return (
    <section className="grid gap-6 rounded-3xl border border-borderLight bg-white p-8 shadow-soft md:grid-cols-[1.3fr_1fr] md:items-center reveal" data-reveal>
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Medailonek</p>
        <h1 className="text-4xl font-semibold tracking-tight text-textDark md:text-5xl">{profile.name}</h1>
        <p className="text-lg font-medium text-textMuted">{profile.service}</p>
        <p className="text-base leading-relaxed text-textMuted md:text-lg">
          „Chaos v našem životě není překážkou, ale motorem ke změně. Nebojme se ho – je to síla, která nás učí
          hledat nové cesty. Skrze ztišení se rodí nové poznání.“
        </p>
      </div>
      <figure className="flex items-center justify-center overflow-hidden rounded-2xl border border-borderLight bg-lightBlueBackground shadow-soft">
        <img
          src="/Nikola-Filipova.svg"
          alt="Mgr. Nikol Filipová"
          className="h-64 w-full object-contain p-6 md:h-80"
          loading="lazy"
        />
      </figure>
    </section>
  );
}
