'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CATALOGUE_PAGES, cataloguePage } from '@/lib/content'
import { useLang } from '@/components/language-provider'

/**
 * Mobile browsers refuse to render a PDF inside <object>/<iframe>, so on small
 * screens we show the catalogue as pre-rendered page images in a swipeable,
 * scroll-snapped strip. Pages load lazily, so only what's on screen downloads.
 */
export function CatalogueViewer() {
  const { t, dir } = useLang()
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const width = el.clientWidth || 1
    const index = Math.round(Math.abs(el.scrollLeft) / width)
    setPage(Math.min(CATALOGUE_PAGES, Math.max(1, index + 1)))
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const goTo = (target: number) => {
    const el = trackRef.current
    if (!el) return
    const next = Math.min(CATALOGUE_PAGES, Math.max(1, target))
    const offset = el.clientWidth * (next - 1)
    el.scrollTo({ left: dir === 'rtl' ? -offset : offset, behavior: 'smooth' })
    setPage(next)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      <div
        ref={trackRef}
        dir={dir}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Catalogue pages"
      >
        {Array.from({ length: CATALOGUE_PAGES }, (_, i) => (
          <div key={i} className="w-full flex-none snap-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cataloguePage(i + 1)}
              alt={`Catalogue page ${i + 1}`}
              width={1040}
              height={607}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-auto w-full bg-muted object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
        </button>

        <p className="text-sm font-bold text-muted-foreground" dir="ltr">
          {page} / {CATALOGUE_PAGES}
        </p>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page >= CATALOGUE_PAGES}
          aria-label="Next page"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
        >
          <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
        </button>
      </div>

      <p className="pb-3 text-center text-xs text-muted-foreground">{t.catalogue.swipeHint}</p>
    </div>
  )
}
