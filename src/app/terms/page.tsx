import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use – MockupWall',
  description:
    'Terms of Use for MockupWall, the AI wall art mockup generator for iOS. Read the rules for using the app and its AI-generated content.',
  alternates: { canonical: 'https://www.mockupwall.com/terms/' },
}

export default function Terms() {
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
        <h1 className="font-heading text-4xl mb-2">Terms of Use</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Effective Date:</strong> November 1, 2026 · The authoritative terms for the
          Wallapp iOS app are published at{' '}
          <a href="https://hibu.app/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            hibu.app/terms-of-use
          </a>
          .
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading or using the Wallapp – Gallery Wall Designer app ("we", "our", "the
              app"), promoted on this site as MockupWall, you agree to be bound by these Terms of
              Use. If you do not agree with any part of the terms, you may not use the app.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              2. App Description &amp; Usage
            </h2>
            <p>
              Wallapp is an AI-powered creative tool that places your artwork, prints, and posters
              into realistic interior scenes to produce mockup images. You may use the app solely for
              lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Do not use the app in any way that could harm, disable, or impair its operation.
              </li>
              <li>
                Do not attempt to reverse engineer, decompile, or otherwise extract source code from
                the app.
              </li>
              <li>Do not use the app for any illegal or unauthorized purpose.</li>
              <li>
                Do not upload content that infringes on third-party intellectual property rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              3. In-App Purchases &amp; Subscriptions
            </h2>
            <p>
              Some features may be available via one-time purchases or auto-renewable subscriptions.
              Payment is charged to your Apple ID at confirmation. Subscriptions renew automatically
              unless turned off at least 24 hours before the end of the current period. Your account
              is charged for renewal within 24 hours before the period ends.
            </p>
            <p className="mt-3">
              You can manage or cancel subscriptions in your App Store account settings. Any unused
              portion of a free trial, if offered, is forfeited when you purchase a subscription.
              The current price and duration are shown on the in-app paywall before purchase. A
              "Restore Purchases" option is available in the app.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">4. Privacy &amp; Data</h2>
            <p>
              We process user-uploaded images to generate AI art mockups. Images are not sold
              or shared with third parties for advertising. For full details, see our{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content, design, code, and AI models within the app are owned by MockupWall and
              protected by applicable intellectual property laws. You retain ownership of the images
              you upload. Mockup-generated output images are licensed to you for personal and
              commercial use, subject to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">6. Disclaimer</h2>
            <p>
              The app is provided "as is" without warranties of any kind. We do not guarantee that
              AI-generated mockups will be error-free or suitable for any particular purpose. The
              app is a creative tool and results may vary.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, MockupWall shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of the app, including but not limited to loss of profits, data, or business
              opportunities.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">8. Apple Standard EULA</h2>
            <p>
              This app is licensed under the{' '}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Apple Standard End User License Agreement (EULA)
              </a>
              . In the event of any conflict between these Terms and the Apple EULA, the Apple EULA
              shall prevail.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              9. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Changes will be reflected by updating the
              effective date above. Continued use of the app after changes constitutes acceptance of
              the new Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">10. Contact</h2>
            <p>
              If you have questions about these Terms, contact us at{' '}
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
