export function QuoteBlock(profile) {
  return `
    <section class="rounded-3xl border border-borderLight bg-softBlue/40 p-8 text-center shadow-soft md:p-12 reveal" data-reveal>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Motto</p>
      <blockquote class="mt-6 text-xl font-medium text-textDark md:text-2xl">
        ${profile.motto}
      </blockquote>
    </section>
  `;
}
