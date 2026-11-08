import Link from 'next/link'

const faqs = [
  {
    q: 'How do I make a wall art mockup with AI?',
    a: 'Upload a photo of your artwork, enter its real dimensions, and choose an interior scene (or upload your own wall). MockupWall places the art on the wall with a frame, matched lighting, and a natural shadow, at true scale — then you export a high-resolution image.',
    href: '/mockups/wall-art/',
    label: 'Wall art mockup guide',
  },
  {
    q: 'How is this different from Placeit and template mockups?',
    a: 'Template tools paste your image into stock scenes shared by thousands of sellers, so every listing looks the same. MockupWall generates each mockup from your own art and scene choices at true scale, so the images are unique to your shop.',
    href: '/alternatives/placeit/',
    label: 'Placeit comparison',
  },
  {
    q: 'Can I see the art on my own wall?',
    a: 'Yes. Upload a photo of a real wall and place the artwork on it at true scale, with a frame and realistic shadow — ideal for commissions, home planning, and client previews.',
    href: '/tools/room-visualizer/',
    label: 'Room visualizer',
  },
  {
    q: 'Does the size stay accurate?',
    a: 'Yes. Because you enter the artwork’s real dimensions, it appears at true scale in the scene, so a small print and an oversized canvas read as different sizes — just like in person.',
    href: '/mockups/canvas/',
    label: 'Canvas mockups',
  },
  {
    q: 'Can I make a gallery wall with several prints?',
    a: 'Yes. Arrange multiple artworks into a grid or gallery layout on a real-looking wall, adjust spacing and frames until it balances, and export the finished arrangement — great for selling print sets.',
    href: '/mockups/gallery-wall/',
    label: 'Gallery wall maker',
  },
  {
    q: 'Is it free, and what devices does it run on?',
    a: 'MockupWall is free to download and lets you create mockups before paying. A subscription unlocks unlimited mockups and the full scene library. It runs on iPhone and iPad — there’s no web or Android version.',
    href: '/tools/free-wall-art-mockup-generator/',
    label: 'Free mockup generator',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const HomeFaqSection = () => {
  return (
    <section id="faq" className="py-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container max-w-[800px]">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-14 fade-up">
          Frequently Asked{' '}
          <span className="highlight">
            <span>Questions</span>
          </span>
        </h2>
        <div className="space-y-10">
          {faqs.map((f, i) => (
            <div key={f.q} className={`fade-up ${i % 2 === 1 ? 'delay-1' : ''}`}>
              <h3 className="text-lg normal-case tracking-normal font-sans font-semibold text-foreground mb-2">
                {f.q}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">{f.a}</p>
              <Link
                href={f.href}
                className="text-primary text-sm font-semibold hover:underline"
              >
                Learn more: {f.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFaqSection
