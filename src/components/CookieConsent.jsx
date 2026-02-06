"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "psychologfm-cookie-consent";

const defaultPrefs = {
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false
};

function loadConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveConsent(preferences) {
  const payload = {
    preferences,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function CookieConsent() {
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [hasConsent, setHasConsent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = loadConsent();
    if (stored?.preferences) {
      setPrefs({ ...defaultPrefs, ...stored.preferences, necessary: true });
      setHasConsent(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openSettings = () => setIsOpen(true);

  const acceptAll = () => {
    const next = {
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    setPrefs(next);
    saveConsent(next);
    setHasConsent(true);
    setIsOpen(false);
    setSnackbar("Vaše preference webových Cookies byla uložena.");
  };

  const saveSettings = () => {
    const next = { ...prefs, necessary: true };
    setPrefs(next);
    saveConsent(next);
    setHasConsent(true);
    setIsOpen(false);
    setSnackbar("Vaše preference webových Cookies byla uložena.");
  };

  const togglePref = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const rejectAll = () => {
    const next = {
      necessary: true,
      analytics: false,
      preferences: false,
      marketing: false
    };
    setPrefs(next);
    saveConsent(next);
    setHasConsent(true);
    setIsOpen(false);
    setSnackbar("Vaše preference webových Cookies byla uložena.");
  };

  useEffect(() => {
    if (!snackbar) return;
    const timer = window.setTimeout(() => setSnackbar(""), 3000);
    return () => window.clearTimeout(timer);
  }, [snackbar]);

  return (
    <>
      {isReady && !hasConsent && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-2xl border border-borderLight bg-white p-5 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Cookies</p>
          <p className="mt-3 text-sm leading-relaxed text-textMuted">
            Používáme cookies pro zajištění funkčnosti webu, měření návštěvnosti a zlepšení služeb.
            Podrobnosti najdete v&nbsp;
            <a
              href="/zasady-ochrany-osobnich-udaju"
              className="font-semibold text-primaryBlue transition hover:text-textDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            >
              zásadách ochrany osobních údajů
            </a>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-warmAmber px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            >
              Přijmout vše
            </button>
            <button
              type="button"
              onClick={openSettings}
              className="rounded-full border border-primaryBlue px-4 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            >
              Nastavení
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-6 py-10 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-borderLight bg-white p-8 shadow-soft"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-borderLight text-primaryBlue transition hover:border-primaryBlue hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              aria-label="Zavřít"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
            <h3 id="cookie-modal-title" className="text-2xl font-semibold text-textDark md:text-3xl">
              Nastavení cookies
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-textMuted">
              Používáme cookies pro zajištění funkčnosti webu, měření návštěvnosti a zlepšení služeb. Podrobnosti
              najdete v&nbsp;
              <a
                href="/zasady-ochrany-osobnich-udaju"
                className="font-semibold text-primaryBlue transition hover:text-textDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              >
                zásadách ochrany osobních údajů
              </a>
              .
            </p>
            <div className="mt-4 h-px w-full bg-borderLight"></div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-textDark">Nutné cookies</h4>
                  <p className="text-sm leading-relaxed text-textMuted">
                    Zajišťují základní funkčnost webu a nelze je vypnout.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  disabled
                  className="relative inline-flex h-7 w-12 flex-shrink-0 cursor-not-allowed items-center rounded-full bg-warmAmber"
                >
                  <span className="h-5 w-5 translate-x-6 rounded-full bg-white shadow"></span>
                </button>
              </div>

              <CookieToggle
                title="Statistické cookies"
                description="Pomáhají nám porozumět návštěvnosti a zlepšovat obsah webu."
                checked={prefs.analytics}
                onToggle={() => togglePref("analytics")}
              />
              <CookieToggle
                title="Preferenční cookies"
                description="Ukládají vaše volby a nastavení pro pohodlnější používání webu."
                checked={prefs.preferences}
                onToggle={() => togglePref("preferences")}
              />
              <CookieToggle
                title="Marketingové cookies"
                description="Slouží k personalizaci obsahu a měření marketingových kampaní."
                checked={prefs.marketing}
                onToggle={() => togglePref("marketing")}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-warmAmber px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#C99764] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              >
                Přijmout vše
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-primaryBlue px-5 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={saveSettings}
                className="rounded-full border border-primaryBlue px-5 py-2 text-sm font-semibold text-primaryBlue transition hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
              >
                Uložit nastavení
              </button>
            </div>
          </div>
        </div>
      )}

      {snackbar && (
        <div className="fixed bottom-6 left-6 z-50 rounded-2xl border border-borderLight bg-white px-4 py-3 text-sm font-semibold text-primaryBlue shadow-soft">
          {snackbar}
        </div>
      )}
    </>
  );
}

function CookieToggle({ title, description, checked, onToggle }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h4 className="text-lg font-semibold text-textDark">{title}</h4>
        <p className="text-sm leading-relaxed text-textMuted">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition ${
          checked ? "bg-warmAmber" : "bg-borderLight"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
    </div>
  );
}
