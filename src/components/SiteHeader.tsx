import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'

const SiteHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/app-icon.png" alt="Mockup App Icon" className="w-10 h-10 rounded-xl" />
            <Link href="/" className="font-heading text-2xl tracking-wider text-foreground">
              MOCKUPWALL
            </Link>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-body font-semibold text-sm bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Download App
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
