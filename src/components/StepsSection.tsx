const steps = [
  { num: "01", icon: "↑", title: "Add Your Artwork", desc: "Upload or snap a photo of your art, print, or poster, and enter its real dimensions so the scale stays accurate." },
  { num: "02", icon: "▦", title: "Pick a Scene", desc: "Choose from thousands of interior scenes — or upload a photo of your own wall — and set the frame, mat, and edge color." },
  { num: "03", icon: "★", title: "Export & Sell", desc: "The app matches lighting and shadow for a photoreal result. Export a high-resolution image for your shop, listing, or feed." },
];

const StepsSection = () => {
  return (
    <section id="how-it-works" className="py-[100px]">
      <div className="container">
        <h2 className="text-4xl text-center fade-up">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[60px]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-card p-10 rounded-2xl border border-border relative hover:border-primary hover:-translate-y-[5px] transition-all duration-300 fade-up delay-${i + 1}`}
            >
              <span className="absolute top-5 right-5 font-heading text-7xl text-foreground/[0.03] leading-none">{step.num}</span>
              <div className="w-[60px] h-[60px] bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6 text-2xl font-bold font-heading">
                {step.icon}
              </div>
              <h3 className="text-xl mb-3">{step.title}</h3>
              <p className="text-[0.95rem] text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
