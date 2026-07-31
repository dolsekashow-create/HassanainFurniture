'use client'

import Image from 'next/image'
import { BookOpen, MapPin } from 'lucide-react'
import { useLang } from '@/components/language-provider'

function scrollTo(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroSection() {
  const { t } = useLang()

  return (
    <section id="about" className="relative isolate overflow-hidden">
      <Image
        src="/images/showroom-lounge.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/80 to-background/95 rtl:bg-gradient-to-b" />
      <div className="absolute inset-0 -z-10 bg-background/30" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-16 md:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="text-balance text-6xl font-black leading-[0.9] tracking-tight text-foreground md:text-7xl lg:text-8xl">
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
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/25 bg-card/80 px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {t.hero.ctaShowroom}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/cabinet-burl.jpg"
              alt="Handcrafted arched burl-wood cabinet"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 start-[-1.5rem] w-44 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
            <div className="relative aspect-square">
              <Image
                src="/images/sofa-terracotta.jpg"
                alt="Terracotta velvet sofa"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
