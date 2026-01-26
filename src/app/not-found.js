export const metadata = {
  title: "Stránka nenalezena | Terapie FM"
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <div className="flex flex-col items-center gap-3">
        <img src="/Menu_Logo.svg" alt="Terapie FM" className="h-20 w-20" loading="lazy" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Terapie FM</p>
      </div>
      <h1 className="text-3xl font-semibold text-textDark md:text-4xl">Tato stránka neexistuje</h1>
      <p className="text-base leading-relaxed text-textMuted md:text-lg">
        Odkaz pravděpodobně neexistuje nebo byl přesunut. Vraťte se prosím na hlavní stránku.
      </p>
      <a
        href="/"
        className="rounded-full bg-warmAmber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
      >
        Zpět na hlavní stránku
      </a>
    </div>
  );
}
