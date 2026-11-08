const useCases = [
  {
    title: 'Fill every listing slot',
    text: 'Generate several scenes and sizes per print so your Etsy or Shopify listing uses every photo slot — more context, more trust.',
  },
  {
    title: 'Stand out from template shops',
    text: 'Every mockup is built from your own art, so your listings don’t look like the identical stock templates thousands of sellers reuse.',
  },
  {
    title: 'Show true scale',
    text: 'Enter real dimensions and buyers see how big the piece actually is on a wall — the question that stalls most art purchases.',
  },
  {
    title: 'Pitch on a client’s wall',
    text: 'Upload a photo of a real room and place art on it at true scale to close a commission or an interior-design decision.',
  },
  {
    title: 'Sell sets as gallery walls',
    text: 'Arrange multiple prints into a balanced gallery wall layout and present a curated bundle as one finished look.',
  },
  {
    title: 'Post motion, not just stills',
    text: 'Turn a mockup into a short AI showcase video for Reels and TikTok — movement that stops the scroll, no editing.',
  },
]

const TestimonialsSection = () => {
  return (
    <section id="use-cases" className="py-[100px]">
      <div className="container">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-6 fade-up">
          Built for the Way You{' '}
          <span className="highlight">
            <span>Sell Art</span>
          </span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-[640px] mx-auto mb-14 fade-up delay-1">
          One photo of your artwork is all it takes. Here’s what creators do with it.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
          {useCases.map((c, i) => (
            <figure
              key={c.title}
              className={`rounded-2xl border border-border bg-card p-7 fade-up ${
                i % 3 === 1 ? 'delay-1' : i % 3 === 2 ? 'delay-2' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 font-heading text-lg">
                {i + 1}
              </div>
              <figcaption className="text-foreground font-semibold mb-2">{c.title}</figcaption>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
