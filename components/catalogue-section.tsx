'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BookOpen, Download, ExternalLink, X } from 'lucide-react'
import { useLang } from '@/components/language-provider'
import { CATALOGUE_PDF } from '@/lib/content'

export function CatalogueSection() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <section id="catalogue" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {t.catalogue.eyebrow}
            </p>
            <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              {t.catalogue.title}
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" aria-hidden="true" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {t.catalogue.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
              >
                {open ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                )}
                {open ? t.catalogue.close : t.catalogue.open}
              </button>

              <a
                href={CATALOGUE_PDF}
                download="HassanainFurniture-Catalogue.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/25 bg-card px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t.catalogue.download}
              </a>

              <a
                href={CATALOGUE_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-4 text-sm font-bold text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {t.catalogue.newTab}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl"
            aria-label={t.catalogue.open}
          >
            <Image
              src="/images/catalogue-book.png"
              alt="Hassanain Furniture catalogue"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-6 start-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {t.catalogue.open}
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <object
                data={`${CATALOGUE_PDF}#view=FitH&toolbar=1&navpanes=0`}
                type="application/pdf"
                className="h-[70vh] min-h-[520px] w-full lg:h-[85vh]"
                aria-label="Hassanain Furniture catalogue"
              >
                <iframe
                  src={`${CATALOGUE_PDF}#view=FitH`}
                  title="Hassanain Furniture catalogue"
                  className="h-[70vh] min-h-[520px] w-full lg:h-[85vh]"
                >
                  <p className="p-6 text-center text-sm text-muted-foreground">
                    {t.catalogue.fallback}
                  </p>
                </iframe>
              </object>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t.catalogue.hint}</p>
          </div>
        )}
      </div>
    </section>
  )
}
