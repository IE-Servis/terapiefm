"use client";

import { useEffect } from "react";

export function ScrollTop() {
  useEffect(() => {
    const button = document.querySelector("[data-scroll-top]");
    if (!button) return;

    const toggleVisibility = () => {
      const shouldShow = window.scrollY > 240;
      button.classList.toggle("is-visible", shouldShow);
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    button.addEventListener("click", handleClick);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      button.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button className="scroll-top" type="button" aria-label="Zpět nahoru" data-scroll-top>
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6l6 6m-6-6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
