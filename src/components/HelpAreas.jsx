"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const icons = {
  lifebuoy: "fa-solid fa-life-ring",
  chat: "fa-solid fa-comments",
  balance: "fa-solid fa-scale-balanced",
  family: "fa-solid fa-people-roof",
  couple: "fa-solid fa-user-group"
};

export function HelpAreas({ profile }) {
  const [activeItem, setActiveItem] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeItem) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeItem]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <section id="pomoc" className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">S čím mohu pomoci</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">Opora v klíčových životních situacích</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {profile.helpAreas.map((item) => (
          <article key={item.title} className="flex gap-4 rounded-2xl border border-borderLight bg-white p-6 shadow-soft">
            <div className="flex w-12 flex-shrink-0 items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-softBlue/60 text-xl text-primaryBlue">
                <i className={icons[item.icon]} aria-hidden="true"></i>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-xl font-semibold text-textDark">{item.title}</h3>
              <p className="text-base leading-relaxed text-textMuted">{item.text}</p>
            </div>
            <div className="flex flex-shrink-0 flex-col items-center gap-2 self-center sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderLight text-primaryBlue transition hover:border-primaryBlue hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
                aria-label={`Více informací: ${item.title}`}
              >
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              </button>
              <a
                href="https://ordinace-psychologickeho-poradenstvi-a-diagnostiky.reservio.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderLight text-primaryBlue transition hover:border-primaryBlue hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
                aria-label={`Rezervovat termín: ${item.title}`}
              >
                <i className="fa-solid fa-calendar-days" aria-hidden="true"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
      {mounted && activeItem
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-6 py-10 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
              role="presentation"
            >
              <div
                className="relative w-full max-w-3xl rounded-3xl border border-borderLight bg-white p-8 shadow-soft"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="help-modal-title"
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-borderLight text-primaryBlue transition hover:border-primaryBlue hover:bg-softBlue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
                  aria-label="Zavřít"
                >
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
                <h3 id="help-modal-title" className="text-2xl font-semibold text-textDark md:text-3xl">
                  {activeItem.modalTitle}
                </h3>
                <div className="mt-4 h-px w-full bg-borderLight"></div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-textMuted">
                  {activeItem.modalText.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
