import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-8 lg:grid-cols-2 lg:gap-6 lg:pb-24">
        <div className="relative z-10">
          <h1 className="text-balance text-6xl font-black leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            YOU
            <br />
            FOUND IT.
          </h1>
          <p className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
            From Damietta. <span className="text-primary">Differently.</span>
          </p>
          <div className="mt-4 h-0.5 w-10 bg-primary" aria-hidden="true" />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
            Handcrafted furniture made in Damietta with passion, quality
            materials, and timeless designs for modern living.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              Browse Catalogue
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/30 bg-card px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Visit Showroom
            </Link>
          </div>
        </div>

        <div className="relative -mx-6 lg:mx-0">
          <Image
            src="/images/hero-living-room.png"
            alt="Elegant living room with a cream sofa, wooden coffee table, and warm natural light"
            width={900}
            height={700}
            className="h-full w-full object-cover lg:rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
