import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FadeUpObserver from '@/components/FadeUpObserver'
import { blogPosts } from '@/data/blog'

const SITE_URL = 'https://www.mockupwall.com'

export const metadata: Metadata = {
  title: 'Blog – MockupWall',
  description:
    'Guides on wall art mockups, selling art prints online, gallery wall layouts, and product photography for Etsy and print-on-demand art sellers.',
  alternates: { canonical: `${SITE_URL}/blog/` },
}

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main className="overflow-x-hidden">
      <FadeUpObserver />
      <SiteHeader />

      <section className="pt-[160px] pb-[80px]">
        <div className="container max-w-[800px]">
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-16">
            Practical guides on wall art mockups, gallery wall layouts, and selling art prints online.
          </p>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-12">
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-2xl mb-3">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
