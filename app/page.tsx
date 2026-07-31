import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesStrip, AboutSection } from '@/components/features-strip'
import { CollectionsSection } from '@/components/collections-section'
import { CatalogueSection } from '@/components/catalogue-section'
import { PackagesSection } from '@/components/packages-section'
import { StorySection } from '@/components/story-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <AboutSection />
        <CollectionsSection />
        <CatalogueSection />
        <PackagesSection />
        <StorySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
