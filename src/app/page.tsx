import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import PhoneMockupSection from '@/components/PhoneMockupSection'
import StepsSection from '@/components/StepsSection'
import SeoSection from '@/components/SeoSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HomeFaqSection from '@/components/HomeFaqSection'
import LatestGuidesSection from '@/components/LatestGuidesSection'
import CtaSection from '@/components/CtaSection'
import SiteFooter from '@/components/SiteFooter'
import FadeUpObserver from '@/components/FadeUpObserver'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FadeUpObserver />
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <StepsSection />
      <PhoneMockupSection />
      <SeoSection />
      <TestimonialsSection />
      <HomeFaqSection />
      <LatestGuidesSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
