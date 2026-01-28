export function LandingLocation() {
  return (
    <section id="kontakt" className="grid gap-6 rounded-3xl border border-borderLight bg-white p-8 shadow-soft md:grid-cols-[0.9fr_1.1fr] reveal" data-reveal>
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Kde nás najdete</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Ordinace psychologického poradenství a diagnostiky</h2>
        <p className="text-base leading-relaxed text-textMuted">
          Hlavní třída 15<br />
          738 01 Frýdek-Místek
        </p>
        <div className="rounded-2xl border border-borderLight bg-lightBlueBackground p-4 text-sm text-textMuted">
          V blízkosti MHD, parkování v okolních ulicích.
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-borderLight bg-lightBlueBackground">
        <iframe
          title="Mapa ordinace"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.263316407705!2d18.339276976540503!3d49.674773442909995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f726bee8da9f%3A0x9b9519e1b100f3eb!2zSGxhdm7DrSB0xZkuIDE1LCA3MzggMDEgRnLDvWRlay1Nw61zdGVrIDE!5e1!3m2!1scs!2scz!4v1769587646675!5m2!1scs!2scz"
          className="h-72 w-full md:h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
