export function initScrollTop() {
  const button = document.querySelector("[data-scroll-top]");
  if (!button) return;

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 240;
    button.classList.toggle("is-visible", shouldShow);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}
