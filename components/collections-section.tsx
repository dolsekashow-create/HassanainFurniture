'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/components/language-provider'

const images = [
  '/images/cover.jpg',
  '/images/vaulted-room.jpg',
  '/images/sofa-terracotta.jpg',
  '/images/showroom-dining.jpg',
  '/images/cabinet-burl.jpg',
]

export function CollectionsSection() {
  const { t } = useLang()

  return (
    <section id="collections" className="scroll-mt-24 bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {t.collections.eyebrow}
          </p>
          <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            {t.collections.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {t.collections.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.collections.groups.map((group, index) => (
            <article
              key={group.title}
              className={`group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[4/3] lg:aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image
                  src={images[index % images.length]}
                  alt={group.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 start-5 text-2xl font-black text-white drop-shadow">
                  {group.title}
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground"
                      dir="ltr"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#catalogue"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            {t.collections.viewCatalogue}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
