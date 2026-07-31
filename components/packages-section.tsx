'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLang } from '@/components/language-provider'
import { WHATSAPP_NUMBER } from '@/lib/content'

export function PackagesSection() {
  const { t } = useLang()

  return (
    <section id="packages" className="relative isolate scroll-mt-24 overflow-hidden">
      <Image
        src="/images/vaulted-room.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-secondary/92" />

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/70">
            {t.packages.eyebrow}
          </p>
          <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-secondary-foreground md:text-5xl">
            {t.packages.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-secondary-foreground/75">
            {t.packages.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.packages.items.map((item, index) => (
            <article
              key={item.name}
              className={`flex flex-col rounded-2xl border p-7 backdrop-blur ${
                index === 1
                  ? 'border-primary bg-card shadow-2xl md:-mt-4 md:pb-11'
                  : 'border-white/15 bg-white/5'
              }`}
            >
              <h3
                className={`text-lg font-black uppercase tracking-wide ${
                  index === 1 ? 'text-foreground' : 'text-secondary-foreground'
                }`}
              >
                {item.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-2" dir="ltr">
                <span
                  className={`text-4xl font-black ${
                    index === 1 ? 'text-primary' : 'text-secondary-foreground'
                  }`}
                >
                  {item.price}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    index === 1 ? 'text-muted-foreground' : 'text-secondary-foreground/70'
                  }`}
                >
                  {t.packages.currency}
                </span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {item.includes.map((line) => (
                  <li
                    key={line}
                    className={`flex items-start gap-2 text-sm ${
                      index === 1 ? 'text-muted-foreground' : 'text-secondary-foreground/80'
                    }`}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `${t.whatsappPrefill} ${item.name}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-sm font-bold transition-opacity hover:opacity-90 ${
                  index === 1
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-white/25 text-secondary-foreground'
                }`}
              >
                {t.packages.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-secondary-foreground/60">{t.packages.note}</p>
      </div>
    </section>
  )
}
