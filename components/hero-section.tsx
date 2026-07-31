'use client'

import Image from 'next/image'
import { BookOpen, MapPin, Package } from 'lucide-react'
import { useLang } from '@/components/language-provider'
import { WhatsAppIcon } from '@/components/social-icons'
import { WHATSAPP_NUMBER } from '@/lib/content'

function scrollTo(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroSection() {
  const { t } = useLang()
  const customOrderLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.hero.customOrderMessage,
  )}`

  return (
    <section id="about" className="relative isolate overflow-hidden">
      {/* Showroom dining table as the hero backdrop — clearly visible, just
          softened enough to keep the headline readable. */}
      <Image
        src="/images/showroom-dining.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/55 via-background/25 to-background/70" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {t.hero.line1}
            <br />
            {t.hero.line2}
          </h1>
          <p className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
            {t.hero.tagline} <span className="text-primary">{t.hero.taglineAccent}</span>
          </p>
          <div className="mt-4 h-0.5 w-12 bg-primary" aria-hidden="true" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {t.hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#catalogue"
              onClick={(e) => scrollTo(e, 'catalogue')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
            >
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              {t.hero.ctaCatalogue}
            </a>

            <a
              href="#packages"
              onClick={(e) => scrollTo(e, 'packages')}
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/25 bg-card/85 px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Package className="h-5 w-5" aria-hidden="true" />
              {t.hero.ctaPackages}
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/25 bg-card/85 px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {t.hero.ctaShowroom}
            </a>
          </div>

          <a
            href={customOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/10 transition-opacity hover:opacity-90 sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {t.hero.ctaCustomOrder}
          </a>
        </div>

        <div className="relative mt-4 lg:mt-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/5] lg:rounded-3xl">
            {/* The dining-table shot is now the section backdrop, so the two
                inset photos use the other showroom images to avoid repeating it.
                Swap these src values if you'd rather show it twice. */}
            <Image
              src="/images/cover.jpg"
              alt="Vaulted living space furnished by Hassanain"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-5 start-[-0.75rem] w-28 overflow-hidden rounded-xl border-4 border-background shadow-xl sm:w-36 lg:-bottom-6 lg:start-[-1.5rem] lg:w-44 lg:rounded-2xl">
            <div className="relative aspect-square">
              <Image
                src="/images/showroom-lounge.jpg"
                alt="Hassanain showroom lounge setting"
                fill
                sizes="(min-width: 1024px) 176px, 112px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
