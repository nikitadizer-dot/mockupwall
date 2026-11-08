import Link from 'next/link'
import { latestPosts } from '@/data/blog'

const LatestGuidesSection = () => {
  const posts = latestPosts(6)

  return (
    <section id="guides" className="py-[100px]">
      <div className="container max-w-[800px]">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-14 fade-up">
          Latest{' '}
          <span className="highlight">
            <span>Guides</span>
          </span>
        </h2>
        <ul className="space-y-8">
          {posts.map((post, i) => (
            <li key={post.slug} className={`fade-up ${i % 2 === 1 ? 'delay-1' : ''}`}>
              <Link href={`/blog/${post.slug}/`} className="group block">
                <h3 className="text-lg normal-case tracking-normal font-sans font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-12">
          <Link href="/blog/" className="text-primary text-sm font-semibold hover:underline">
            All guides →
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LatestGuidesSection
