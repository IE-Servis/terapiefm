export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-borderLight py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-textMuted md:flex-row md:items-center md:justify-between">
        <span>© {year} Psycholog FM (psychologfm.cz)</span>
      </div>
    </footer>
  );
}
