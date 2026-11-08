import RatingBadge from '@/components/RatingBadge'
import HeroShowcaseCloud from '@/components/HeroShowcaseCloud'

const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'

const HeroSection = () => {
  return (
    <section className="pt-[180px] pb-[120px] relative overflow-hidden text-center">
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="container relative z-10">
        <h1 className="text-[clamp(3rem,6vw,5rem)] max-w-[940px] mx-auto mb-6 fade-up">
          Gallery Wall{' '}
          <span className="highlight">
            <span>DESIGNER</span>
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[660px] mx-auto mb-12 fade-up delay-1">
          Wallapp is a wall art mockup generator for iOS — place your art, prints, and posters in
          realistic rooms at true scale, framed, with real light and shadow, in seconds.
        </p>
        <div className="flex justify-center gap-4 flex-wrap fade-up delay-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <img
              src="/assets/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-14 hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
        <div className="mt-8 fade-up delay-3">
          <RatingBadge />
        </div>
      </div>

      <HeroShowcaseCloud />
    </section>
  )
}

export default HeroSection
