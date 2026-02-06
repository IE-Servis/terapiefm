"use client";

export function CookieSettingsLink() {
  const openSettings = (event) => {
    event.preventDefault();
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <a
      href="#nastaveni-cookies"
      onClick={openSettings}
      className="inline-flex items-center gap-2 text-sm font-semibold text-primaryBlue transition hover:text-textDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
    >
      <i className="fa-solid fa-cookie-bite" aria-hidden="true"></i>
      Nastavení cookies
    </a>
  );
}
