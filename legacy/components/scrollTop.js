export function ScrollTop() {
  return `
    <button class="scroll-top" type="button" aria-label="Zpět nahoru" data-scroll-top>
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6l6 6m-6-6l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  `;
}
