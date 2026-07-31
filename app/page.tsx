import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesStrip } from '@/components/features-strip'
import { CatalogueSection } from '@/components/catalogue-section'
import { ConnectBar } from '@/components/connect-bar'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <CatalogueSection />
      </main>
      <ConnectBar />
    </>
  )
}
