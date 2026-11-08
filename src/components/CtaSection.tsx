const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="py-[120px] text-center bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,hsl(var(--background))_60%)]"
    >
      <div className="container">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-10 fade-up">
          See Your Art{' '}
          <span className="highlight">
            <span>ON THE WALL</span>
          </span>
        </h2>
        <div className="fade-up delay-1">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <img
              src="/assets/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-16 hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
        <p className="text-muted-foreground mt-6 fade-up delay-2">Free to download · iPhone &amp; iPad</p>
      </div>
    </section>
  )
}

export default CtaSection
