const reasons = [
  {
    title: "Odborné psychologické vzdělání",
    text:
      "Všichni naši psychologové mají magisterské vzdělání v oboru psychologie a pracují podle odborných standardů a etického kodexu.",
    icon: "fa-solid fa-graduation-cap"
  },
  {
    title: "Krizová intervence s certifikací",
    text:
      "Nabízíme okamžitou odbornou podporu v náročných životních situacích. Vzdělání i praxe našich psychologů vychází z akreditovaných výcviků krizové intervence.",
    icon: "fa-solid fa-hand-holding-medical"
  },
  {
    title: "Bezpečné a respektující prostředí",
    text:
      "Terapie probíhá v klidném a diskrétním prostoru, kde můžete mluvit otevřeně a svým tempem. Respekt k vašemu příběhu a důvěrnost jsou pro nás samozřejmostí.",
    icon: "fa-solid fa-heart"
  },
  {
    title: "Možnost online konzultací",
    text:
      "Pokud se nemůžete dostavit osobně nebo je to pro vás komfortnější, nabízíme bezpečné a profesionální online setkání.",
    icon: "fa-solid fa-video"
  }
];

export function LandingWhyUs() {
  return (
    <section id="my" className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Proč právě u nás</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Hodnoty, na kterých naše práce stojí</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => (
          <article key={reason.title} className="flex gap-4 rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-softBlue/60 text-xl text-primaryBlue">
              <i className={reason.icon} aria-hidden="true"></i>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-textDark">{reason.title}</h3>
              <p className="text-base leading-relaxed text-textMuted">{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
