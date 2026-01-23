export function initReveal() {
  const elements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window) || elements.length === 0) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  elements.forEach((el) => observer.observe(el));
}
