const defaultItems = [
  { label: "O mně", href: "#o-mne" },
  { label: "S čím mohu pomoci", href: "#pomoc" },
  { label: "Odbornost", href: "#odbornost" },
  { label: "Kontakt", href: "#kontakt" }
];

export function Menu({ items = defaultItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-borderLight bg-lightBlueBackground/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-primaryBlue">
          <img
            src="/Menu_Logo.svg"
            alt="Psycholog FM"
            className="h-14 w-14"
            loading="lazy"
          />
          <span>Psycholog FM</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Hlavní navigace">
          {items.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-primaryBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://ordinace-psychologickeho-poradenstvi-a-diagnostiky.reservio.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-full bg-warmAmber px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber md:inline-flex"
          aria-label="Rezervovat termín"
        >
          Rezervovat termín
        </a>
        <a
          href="#kontakt"
          className="rounded-full border border-primaryBlue px-4 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber md:hidden"
          aria-label="Kontaktovat poradnu"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
