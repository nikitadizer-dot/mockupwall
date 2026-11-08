import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CtaSection from '@/components/CtaSection'
import FadeUpObserver from '@/components/FadeUpObserver'
import { blogPosts, getPost, relatedPosts } from '@/data/blog'
import { programmaticPages, pagePath } from '@/data/programmatic'
import PhotoChecklist from '@/components/widgets/PhotoChecklist'
import BeforeAfterWidget from '@/components/widgets/BeforeAfterWidget'

const widgets = {
  'photo-checklist': PhotoChecklist,
  'before-after': BeforeAfterWidget,
} as const

const SITE_URL = 'https://www.mockupwall.com'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}/`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.hero, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [post.hero],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: `${SITE_URL}${post.hero}`,
    author: { '@type': 'Organization', name: 'MockupWall', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'MockupWall',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/app-icon.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
    ],
  }

  const videoSchemas = post.blocks.flatMap((block) =>
    block.type === 'video'
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: block.caption,
            description: block.caption,
            thumbnailUrl: `${SITE_URL}${block.poster}`,
            contentUrl: `${SITE_URL}${block.src}`,
            uploadDate: `${post.date}T00:00:00+00:00`,
            publisher: { '@type': 'Organization', name: 'MockupWall', url: SITE_URL },
          },
        ]
      : []
  )

  const morePosts = relatedPosts(post)

  const relatedPages = post.related
    .map((href) => programmaticPages.find((p) => pagePath(p) === href))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {videoSchemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
        />
      )}
      <FadeUpObserver />
      <SiteHeader />

      <article className="pt-[160px] pb-[80px]">
        <div className="container max-w-[760px]">
          <p className="text-sm text-muted-foreground mb-4">
            <Link href="/blog/" className="hover:text-primary transition-colors duration-200">
              Blog
            </Link>{' '}
            ·{' '}
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] mb-8">{post.title}</h1>

          <div className="rounded-2xl overflow-hidden border border-border mb-8">
            <img src={post.hero} alt={post.title} className="w-full h-auto" />
          </div>

          <div className="border-l-4 border-primary bg-card rounded-r-xl px-6 py-5 mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Short answer
            </p>
            <p className="text-lg text-foreground leading-relaxed">{post.shortAnswer}</p>
          </div>

          <div className="space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-[clamp(1.4rem,2.5vw,1.9rem)] pt-6">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'widget') {
                const Widget = widgets[block.widget]
                return Widget ? <Widget key={i} /> : null
              }
              if (block.type === 'video') {
                return (
                  <figure key={i} className="my-4 max-w-[300px] mx-auto">
                    <div className="rounded-[28px] border-[5px] border-[#1c1b18] bg-[#1c1b18] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                      <video
                        controls
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster={block.poster}
                        className="w-full aspect-[9/19.5] object-cover rounded-[23px] bg-black"
                      >
                        <source src={block.src} type="video/quicktime" />
                      </video>
                    </div>
                    <figcaption className="text-center text-muted-foreground text-sm mt-3 italic">
                      {block.caption}
                    </figcaption>
                  </figure>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="text-xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-7">
              {post.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base normal-case tracking-normal font-sans font-semibold text-foreground mb-2">
                    {f.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {relatedPages.length > 0 && (
            <div className="mt-14 pt-10 border-t border-border">
              <h2 className="text-xl mb-6">Related Pages</h2>
              <div className="flex gap-4 flex-wrap">
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
          )}

          {morePosts.length > 0 && (
            <div className="mt-14 pt-10 border-t border-border">
              <h2 className="text-xl mb-6">More Guides</h2>
              <ul className="space-y-4">
                {morePosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}/`}
                      className="text-lg hover:text-primary transition-colors duration-200"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <CtaSection />
      <SiteFooter />
    </main>
  )
}
