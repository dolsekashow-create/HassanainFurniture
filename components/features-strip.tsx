'use client'

import { Armchair, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'
import { useLang } from '@/components/language-provider'

const icons = [HeartHandshake, Leaf, ShieldCheck, Armchair]

export function FeaturesStrip() {
  const { t } = useLang()

  return (
    <section aria-label="Why Hassanain" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 px-5 py-14 sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-y-0">
        {t.features.map((feature, index) => {
          const Icon = icons[index]
          return (
            <div
              key={feature.title}
              className={`flex flex-col items-center px-6 text-center ${
                index > 0 ? 'lg:border-s lg:border-border' : ''
              }`}
            >
              <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function AboutSection() {
  const { t } = useLang()

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              {t.about.title}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 lg:grid-cols-4">
          {t.about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-4xl font-black text-primary md:text-5xl">{stat.value}</dt>
              <dd className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
