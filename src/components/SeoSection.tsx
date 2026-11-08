import Link from "next/link";

const audiences = [
  { label: "Etsy Art Sellers", href: "/for/etsy-art-sellers/" },
  { label: "Print-on-Demand", href: "/for/print-on-demand/" },
  { label: "Artists", href: "/for/artists/" },
  { label: "Photographers", href: "/for/photographers/" },
  { label: "Interior Designers", href: "/for/interior-designers/" },
  { label: "Galleries", href: "/for/galleries/" },
];

const SeoSection = () => {
  return (
    <>
      {/* Audience tags */}
      <section className="py-[60px]">
        <div className="container text-center">
          <h2 className="text-3xl mb-8 fade-up">Who uses MockupWall?</h2>
          <div className="flex flex-wrap justify-center gap-3 fade-up delay-1">
            {audiences.map((a) => (
              <Link key={a.href} href={a.href} className="px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200">
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-20 border-t border-b border-border">
        <div className="container max-w-[800px] mx-auto fade-up">
          <h2 className="text-3xl mb-6">MockupWall — The Wall Art Mockup Generator for Sellers</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Selling art online comes down to one thing: helping a buyer picture the piece on their own wall. <strong>MockupWall</strong> is a wall art mockup generator that places your artwork, prints, posters, and photography into realistic interior scenes — with the right frame, the right light, and the right size — so a flat image becomes a scroll-stopping, in-context product photo. Artists, Etsy sellers, and print-on-demand shops use it to produce listing images that look staged, without renting a room or hiring a photographer.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Because you enter your artwork&apos;s real dimensions, every mockup is shown at <strong>true scale</strong> — a small print reads small and an oversized canvas reads oversized — which sets the right expectation and cuts down on returns. Choose from thousands of interior scenes, or upload a photo of your own wall to place art exactly where it will hang. Add a frame and mat, preview the piece against different wall colors, or arrange several works into a balanced <strong>gallery wall</strong> layout. And because it&apos;s a mobile app, the whole workflow — from photo to high-resolution export — fits in your pocket.
          </p>
          <p className="text-muted-foreground text-lg">
            Whether you run a busy Etsy art shop, a print-on-demand store, a photography print catalogue, or an interior design practice, <strong>MockupWall</strong> gives you unique, in-room images that help buyers commit. Download the app and see your art on the wall — powered by AI, built for creators.
          </p>
        </div>
      </section>
    </>
  );
};

export default SeoSection;
