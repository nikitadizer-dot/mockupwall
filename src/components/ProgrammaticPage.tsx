import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CtaSection from '@/components/CtaSection'
import FadeUpObserver from '@/components/FadeUpObserver'
import RatingBadge from '@/components/RatingBadge'
import {
  ProgrammaticPage as PageData,
  programmaticPages,
  pagePath,
} from '@/data/programmatic'
import { postsLinkingTo } from '@/data/blog'

const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'
const SITE_URL = 'https://www.mockupwall.com'

const imagePairs = [
  { before: '/assets/before-1.png', after: '/assets/after-1.png' },
  { before: '/assets/before-2.png', after: '/assets/after-2.png' },
  { before: '/assets/before-3.png', after: '/assets/after-3.png' },
]

const steps = [
  { title: 'Add your artwork', text: 'Upload or photograph your art, print, or poster and enter its real dimensions so the scale stays accurate.' },
  { title: 'Pick a scene', text: 'Choose from thousands of interior scenes — or upload your own wall — and set the frame, mat, and edge color.' },
  { title: 'Export & sell', text: 'The app matches lighting and shadow for a photoreal result. Export a high-resolution image for your shop, listing, or feed.' },
]

const ProgrammaticPageView = ({ page }: { page: PageData }) => {
  const pairIndex =
    programmaticPages.findIndex((p) => p.slug === page.slug && p.group === page.group) %
    imagePairs.length
  const pair = imagePairs[pairIndex < 0 ? 0 : pairIndex]

  const relatedPages = page.related
    .map((href) => programmaticPages.find((p) => pagePath(p) === href))
    .filter((p): p is PageData => Boolean(p))

  const guides = postsLinkingTo(pagePath(page), 6, page.featuredGuides)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MockupWall', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.h1, item: `${SITE_URL}${pagePath(page)}` },
    ],
  }

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FadeUpObserver />
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[160px] pb-[60px] relative overflow-hidden text-center">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] -z-10 pointer-events-none" />
        <div className="container">
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] max-w-[900px] mx-auto mb-6">{page.h1}</h1>
          <p className="text-xl text-muted-foreground max-w-[640px] mx-auto mb-10">
            {page.subtitle}
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <img
              src="/assets/app-store-badge.svg"
              alt="Download MockupWall on the App Store"
              className="h-14 hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
          <div className="mt-8">
            <RatingBadge />
          </div>
        </div>
      </section>

      {/* Featured real example or generic before/after */}
      {page.example ? (
        <section className="py-[40px]">
          <div className="container">
            <figure className="max-w-[520px] mx-auto relative">
              <div className="absolute -inset-6 bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/70 shadow-[0_40px_90px_rgba(0,0,0,0.6)] rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
                <img src={page.example.src} alt={page.example.alt} className="w-full h-auto" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  AI Generated
                </div>
              </div>
              <figcaption className="text-center text-sm text-muted-foreground mt-5 max-w-[420px] mx-auto">
                {page.example.caption}
              </figcaption>
            </figure>
          </div>
        </section>
      ) : (
      <section className="py-[40px]">
        <div className="container">
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <figure className="w-[280px] max-w-[42vw]">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={pair.before}
                  alt={`Flat art file before the mockup — ${page.h1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-sm text-muted-foreground mt-3 uppercase tracking-widest">
                Your art
              </figcaption>
            </figure>
            <div className="text-primary text-4xl font-bold" aria-hidden="true">
              →
            </div>
            <figure className="w-[280px] max-w-[42vw]">
              <div className="rounded-2xl overflow-hidden border-2 border-primary">
                <img
                  src={pair.after}
                  alt={`Realistic in-room mockup result — ${page.h1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-sm text-muted-foreground mt-3 uppercase tracking-widest">
                On the wall
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      )}

      {/* Intro copy */}
      <section className="py-[60px]">
        <div className="container max-w-[760px]">
          {page.intro.map((paragraph, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-[60px]">
        <div className="container">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] text-center mb-12">
            Why{' '}
            <span className="highlight">
              <span>MockupWall</span>
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
            {page.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border p-8 bg-card">
                <h3 className="text-lg mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-[60px]">
        <div className="container">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] text-center mb-12">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center px-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading text-xl flex items-center justify-center mx-auto mb-5">
                  {i + 1}
                </div>
                <h3 className="text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[60px]">
        <div className="container max-w-[760px]">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg normal-case tracking-normal font-sans font-semibold text-foreground mb-2">
                  {f.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides — reverse links from blog posts that reference this page */}
      {guides.length > 0 && (
        <section className="py-[60px]">
          <div className="container max-w-[760px]">
            <h2 className="text-xl text-center mb-8">Guides</h2>
            <ul className="space-y-4">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/blog/${g.slug}/`}
                    className="block rounded-2xl border border-border p-5 hover:border-primary transition-colors duration-200"
                  >
                    <span className="block text-lg mb-1">{g.title}</span>
                    <span className="block text-sm text-muted-foreground leading-relaxed">{g.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedPages.length > 0 && (
        <section className="py-[60px]">
          <div className="container max-w-[760px]">
            <h2 className="text-xl text-center mb-8">Explore More</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {relatedPages.map((r) => (
                <Link
                  key={pagePath(r)}
                  href={pagePath(r)}
                  className="px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  {r.h1}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
      <SiteFooter />
    </main>
  )
}

export default ProgrammaticPageView
