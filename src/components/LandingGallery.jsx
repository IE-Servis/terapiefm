const galleryImages = [
  { src: "/galerie/Galerie-1.jpg", alt: "Galerie prostoru 1" },
  { src: "/galerie/Galerie-2.jpg", alt: "Galerie prostoru 2" },
  { src: "/galerie/Galerie-3.jpg", alt: "Galerie prostoru 3" }
];

export function LandingGallery() {
  return (
    <section className="space-y-8 reveal" data-reveal>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Jak to u nás vypadá</p>
        <h2 className="text-2xl font-semibold text-textDark md:text-3xl">
          Místo pro klid, důvěru a otevřený rozhovor
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-2xl border border-borderLight bg-white shadow-soft"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-72 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
