import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Globe } from 'lucide-react'

export function CatalogueSection() {
  return (
    <section id="catalogue" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Our Catalogue
          </p>
          <h2 className="mt-3 text-pretty text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
            Explore our collections.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Browse our full range of furniture and discover pieces that bring
            comfort, beauty, and function to your space.
          </p>
          <div className="mt-4 h-0.5 w-10 bg-primary" aria-hidden="true" />

          <div className="mt-8">
            <a
              href="/catalogue/hassanain-catalogue.pdf"
              download="HassanainFurniture-Catalogue.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Catalogue (PDF)
            </a>
          </div>

          <div className="mt-6 flex max-w-md items-center gap-4 rounded-xl bg-muted p-5">
            <Globe className="h-8 w-8 shrink-0 text-foreground" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Prefer browsing online?
              </p>
              <Link
                href="#collections"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Explore our collections
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div id="story" className="relative">
          <Image
            src="/images/catalogue-book.png"
            alt="Hassanain furniture catalogue book, Collection 2026 edition"
            width={800}
            height={900}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
