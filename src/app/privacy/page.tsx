import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – MockupWall',
  description:
    'Privacy Policy for MockupWall, the AI wall art mockup generator for iOS. Learn what data the app accesses and how it is used.',
  alternates: { canonical: 'https://www.mockupwall.com/privacy/' },
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="font-heading text-2xl tracking-wider text-foreground">
              MOCKUPWALL
            </Link>
          </nav>
        </div>
      </header>

      <main className="container max-w-[800px] mx-auto pt-32 pb-20 px-6">
        <h1 className="font-heading text-4xl mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Effective Date:</strong> November 1, 2026 · The authoritative policy for the
          Wallapp iOS app is published at{' '}
          <a href="https://hibu.app/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            hibu.app/privacy-policy
          </a>
          .
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Overview</h2>
            <p>
              Wallapp – Gallery Wall Designer ("we", "our", "the app"), promoted on this site as
              MockupWall, is a creative AI-powered tool that helps users place their artwork and
              prints into realistic interior scenes. This Privacy Policy explains what data we
              access, how we use it, and your choices.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Data We Access</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>User-Uploaded Images:</strong> Photos you upload are processed solely for
                the purpose of generating art mockups. Images are used for AI processing and
                are not sold, shared, or used for advertising.
              </li>
              <li>
                <strong>Purchases:</strong> Anonymous purchase and entitlement status (via Apple App
                Store) to unlock premium features.
              </li>
              <li>
                <strong>Diagnostics:</strong> Optional crash logs and basic analytics provided by
                Apple may be used to improve app stability and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process your uploaded images and generate AI art mockups.</li>
              <li>
                To process in-app purchases and restore entitlements via Apple billing.
              </li>
              <li>
                To improve app performance and fix bugs using aggregated diagnostics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Image Processing</h2>
            <p>
              Your images are processed for mockup generation only. We do not store, sell, or use
              your images for any purpose other than providing the core functionality of the app.
              Processed images may be temporarily cached to deliver results but are not retained
              long-term on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">In-App Purchases</h2>
            <p>
              The app may offer premium features through in-app purchases or subscriptions. All
              payments are handled by Apple through the App Store. We do not collect or store your
              payment information directly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Analytics</h2>
            <p>
              We may use optional, anonymized analytics to understand app usage patterns and improve
              the user experience. No personally identifiable information is collected through
              analytics.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apple:</strong> App Store infrastructure, in-app purchase processing, and
                optional diagnostics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can delete the app at any time to stop all data access.</li>
              <li>You can manage or cancel subscriptions via your Apple ID settings.</li>
              <li>You can disable analytics sharing in your device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Children&apos;s Privacy</h2>
            <p>
              The app is not directed at children under 13. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected by
              updating the effective date above.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{' '}
              <a
                href="mailto:support@mockupwall.com"
                className="text-primary hover:underline"
              >
                support@mockupwall.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
