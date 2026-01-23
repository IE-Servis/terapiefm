export function ContactCTA() {
  return `
    <section id="kontakt" class="grid gap-8 rounded-3xl border border-borderLight bg-white p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr] reveal" data-reveal>
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Kontakt</p>
        <h2 class="text-2xl font-semibold text-textDark md:text-3xl">Domluvme si bezpečný první krok</h2>
        <p class="text-base leading-relaxed text-textMuted">
          Pokud cítíte, že je čas se zastavit a získat oporu, napište nebo zavolejte.
          Společně najdeme termín i formu spolupráce, která vám bude vyhovovat.
        </p>
        <div class="flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="mailto:nikola.filipova@psychologfm.cz"
            class="rounded-full border border-borderLight bg-lightBlueBackground px-4 py-2 text-primaryBlue transition hover:border-primaryBlue hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          >
            nikola.filipova@psychologfm.cz
          </a>
          <a
            href="tel:+420000000000"
            class="rounded-full border border-borderLight bg-lightBlueBackground px-4 py-2 text-primaryBlue transition hover:border-primaryBlue hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          >
            +420 000 000 000
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 rounded-2xl border border-borderLight bg-lightBlueBackground p-6 text-center md:self-center">
        <p class="text-base leading-relaxed text-textMuted">
          Rezervujte si termín snadno a bezpečně přes systém Reservio, ať už preferujete osobní nebo online setkání.
        </p>
        <a
          href="https://ie-servis-s-r-o.reservio.com"
          class="inline-flex items-center justify-center rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          aria-label="Rezervovat termín"
        >
          Rezervovat termín
        </a>
      </div>
    </section>
  `;
}
