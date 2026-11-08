const features = [
  { icon: "👕", title: "AI Clothing Mockups", desc: "Generates realistic drape and fit on any body type." },
  { icon: "💡", title: "Realistic Drape & Lighting", desc: "AI analyzes fabric texture and lighting for photorealistic results." },
  { icon: "🧍", title: "Model Generation", desc: "Choose from diverse AI models to showcase your designs." },
  { icon: "🌆", title: "Background Replacement", desc: "Place your models in studios, streets, or abstract voids." },
  { icon: "📐", title: "4K Export", desc: "High-resolution output suitable for web, social, and print." },
  { icon: "🖥", title: "No Photoshop Required", desc: "100% app-based processing. No design skills needed." },
  { icon: "⚡", title: "Fast Rendering", desc: "Get results in under 15 seconds per image." },
];

const FeaturesSection = () => {
  return (
    <section className="py-[100px] relative overflow-hidden">
      <div className="absolute top-[50px] -right-[50px] bg-primary text-primary-foreground font-heading font-bold uppercase px-[100px] py-2.5 rotate-[15deg] z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] text-xl">
        High Definition
      </div>

      <div className="container">
        <h2 className="text-4xl mb-10 fade-up">Professional Grade Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card p-8 rounded-xl border border-border hover:bg-card-hover hover:border-foreground/20 transition-all duration-300 fade-up delay-${(i % 3) + 1}`}
            >
              <div className="text-primary mb-4 text-2xl">{f.icon}</div>
              <h3 className="text-xl mb-3">{f.title}</h3>
              <p className="text-[0.95rem] text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
