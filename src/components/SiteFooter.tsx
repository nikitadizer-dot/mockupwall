import Link from 'next/link'
import { getPagesByGroup, pagePath } from '@/data/programmatic'

const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'
const footerLinkClass = 'hover:text-primary transition-colors duration-200'

const SiteFooter = () => {
  const mockupPages = getPagesByGroup('mockups')
  const audiencePages = getPagesByGroup('for')
  const alternativePages = getPagesByGroup('alternatives')
  const toolPages = getPagesByGroup('tools')

  return (
    <footer className="py-[60px] border-t border-border text-sm text-muted-foreground">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          <div>
            <img
              src="/assets/app-icon.png"
              alt="MockupWall logo"
              width={88}
              height={88}
              className="sticker w-20 h-20 rounded-2xl mb-4 shadow-[0_16px_30px_rgba(0,0,0,0.5)]"
            />
            <div className="font-heading text-xl text-foreground mb-3">MOCKUPWALL</div>
            <p className="leading-relaxed">
              A wall art mockup generator for iOS. Place your art, prints, and posters in realistic
              rooms at true scale — in seconds.
            </p>
          </div>
          <div>
            <div className="font-heading text-foreground mb-3">Mockups</div>
            <ul className="space-y-2">
              {mockupPages.map((p) => (
                <li key={p.slug}>
                  <Link href={pagePath(p)} className={footerLinkClass}>
                    {p.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-heading text-foreground mb-3">Who It’s For</div>
            <ul className="space-y-2">
              {audiencePages.map((p) => (
                <li key={p.slug}>
                  <Link href={pagePath(p)} className={footerLinkClass}>
                    {p.h1.replace('Art Mockups for ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-heading text-foreground mb-3">Tools</div>
            <ul className="space-y-2">
              {toolPages.map((p) => (
                <li key={p.slug}>
                  <Link href={pagePath(p)} className={footerLinkClass}>
                    {p.h1}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/" className={footerLinkClass}>
                  Blog
                </Link>
              </li>
            </ul>
            <div className="font-heading text-foreground mb-3 mt-8">Compare</div>
            <ul className="space-y-2">
              {alternativePages.map((p) => (
                <li key={p.slug}>
                  <Link href={pagePath(p)} className={footerLinkClass}>
                    {p.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-heading text-foreground mb-3 mt-8">Legal</div>
            <ul className="space-y-2">
              <li>
                <a href="https://hibu.app/privacy-policy/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://hibu.app/terms-of-use/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  EULA
                </a>
              </li>
              <li>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border">
          <p>© 2026 MockupWall · Promoting the Wallapp iOS app</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
