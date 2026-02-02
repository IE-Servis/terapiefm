export function LandingProfiles({ profiles }) {
  return (
    <section id="tym" className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">S kým se můžete setkat</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">
          Bezpečný prostor začíná u lidí, kteří mu rozumějí.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {profiles.map((profile) => (
          <article key={profile.name} className="flex h-full flex-col gap-4 rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <figure className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-borderLight bg-lightBlueBackground">
                <img src={profile.image} alt={profile.name} className="h-full w-full object-contain p-2" loading="lazy" />
              </figure>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-textDark">{profile.name}</h3>
                <p className="text-sm font-medium text-textMuted">{profile.role}</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-textMuted">{profile.note}</p>
            <div className="mt-auto space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryBlue">Kontakt:</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-borderLight bg-lightBlueBackground px-4 py-2 text-primaryBlue transition hover:border-primaryBlue hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="rounded-full border border-borderLight bg-lightBlueBackground px-4 py-2 text-primaryBlue transition hover:border-primaryBlue hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <a
              href={profile.href}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-primaryBlue px-5 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              aria-label={`Zobrazit profil ${profile.name}`}
            >
              Zobrazit profil
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
