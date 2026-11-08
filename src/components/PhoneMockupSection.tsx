'use client'

// Real App Store screenshots of the Wallapp iOS app, shown as a phone-screen gallery.
const shots = [
  { src: '/assets/screen-2.png', alt: 'Wallapp — browsing interior scenes grouped by category' },
  { src: '/assets/screen-4.png', alt: 'Wallapp — placing artwork into a kitchen scene with Room, Artwork, Frame and Shadow tabs' },
  { src: '/assets/screen-3.png', alt: 'Wallapp — adjusting the frame and mat on a framed print' },
  { src: '/assets/screen-5.png', alt: 'Wallapp — previewing a gallery wall layout' },
  { src: '/assets/screen-6.png', alt: 'Wallapp — a finished art mockup ready to export' },
]

const PhoneMockupSection = () => {
  return (
    <section className="py-[110px] text-center overflow-hidden">
      <div className="container">
        <h2 className="text-4xl mb-4 fade-up">The Whole Studio in Your Pocket</h2>
        <p className="text-muted-foreground text-lg max-w-[560px] mx-auto fade-up delay-1">
          Upload, place, frame, and export — these are real screens from the app.
        </p>

        <div className="relative mt-[60px] fade-up delay-2">
          {/* Warm glow behind the gallery */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] rounded-full bg-[radial-gradient(ellipse,hsl(var(--primary)/0.12)_0%,transparent_70%)] blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="flex gap-5 sm:gap-7 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-hide justify-start lg:justify-center" style={{ scrollbarWidth: 'none' }}>
            {shots.map((shot, i) => (
              <div
                key={shot.src}
                className="snap-center flex-shrink-0 w-[200px] sm:w-[230px] rounded-[34px] border-[6px] border-[#1c1b18] bg-[#1c1b18] shadow-[0_40px_90px_rgba(0,0,0,0.6)] overflow-hidden"
                style={{ animation: `float ${6 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full aspect-[9/19.5] object-cover rounded-[28px] bg-black"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneMockupSection
