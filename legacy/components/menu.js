export function Menu() {
  return `
    <header class="sticky top-0 z-50 bg-lightBlueBackground/90 backdrop-blur border-b border-borderLight">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" class="text-lg font-semibold tracking-tight text-textDark">psychologfm.cz</a>
        <nav class="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Hlavní navigace">
          <a class="transition hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber" href="#o-mne">O mně</a>
          <a class="transition hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber" href="#pomoc">S čím mohu pomoci</a>
          <a class="transition hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber" href="#odbornost">Odbornost</a>
          <a class="transition hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber" href="#kontakt">Kontakt</a>
        </nav>
        <a
          href="#kontakt"
          class="hidden rounded-full bg-warmAmber px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber md:inline-flex"
          aria-label="Objednat konzultaci"
        >
          Objednat konzultaci
        </a>
        <a
          href="#kontakt"
          class="md:hidden rounded-full border border-primaryBlue px-4 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
          aria-label="Kontaktovat poradnu"
        >
          Kontakt
        </a>
      </div>
    </header>
  `;
}
