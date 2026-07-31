'use client'

import Image from 'next/image'
import { useLang } from '@/components/language-provider'

export function StorySection() {
  const { t } = useLang()

  return (
    <section id="story" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl lg:aspect-[4/5]">
            <Image
              src="/images/showroom-dining.jpg"
              alt="Solid wood dining table in the Hassanain showroom"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              {t.story.title}
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" aria-hidden="true" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.story.body1}</p>
              <p>{t.story.body2}</p>
            </div>
            <p className="mt-8 border-s-4 border-primary ps-5 text-2xl font-black text-foreground md:text-3xl">
              {t.story.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
