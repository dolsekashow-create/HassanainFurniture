'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { CATALOGUE_PAGES, cataloguePage } from '@/lib/content'
import { useLang } from '@/components/language-provider'

/**
 * Mobile browsers refuse to render a PDF inside <object>/<iframe>, so on small
 * screens we show the catalogue as pre-rendered page images in a swipeable,
 * scroll-snapped strip. Tapping a page opens it full screen. Pages load lazily,
 * so only what's on screen downloads.
 */
export function CatalogueViewer() {
  const { t, dir } = useLang()
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)
  const [zoomed, setZoomed] = useState(false)

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

  // Lock body scroll and allow Esc while the full-screen view is open.
  useEffect(() => {
    if (!zoomed) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false)
      if (e.key === 'ArrowRight') setPage((p) => Math.min(CATALOGUE_PAGES, p + 1))
      if (e.key === 'ArrowLeft') setPage((p) => Math.max(1, p - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [zoomed])

  const goTo = (target: number) => {
    const next = Math.min(CATALOGUE_PAGES, Math.max(1, target))
    setPage(next)
    const el = trackRef.current
    if (!el || zoomed) return
    const offset = el.clientWidth * (next - 1)
    el.scrollTo({ left: dir === 'rtl' ? -offset : offset, behavior: 'smooth' })
  }

  return (
    <>
      {/* Full-bleed on phones so the pages are as large as the screen allows */}
      <div className="-mx-5 overflow-hidden border-y border-border bg-card shadow-xl sm:mx-0 sm:rounded-2xl sm:border">
        <div
          ref={trackRef}
          dir={dir}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Catalogue pages"
        >
          {Array.from({ length: CATALOGUE_PAGES }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPage(i + 1)
                setZoomed(true)
              }}
              className="w-full flex-none snap-center"
              aria-label={`Enlarge page ${i + 1}`}
            >
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
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page <= 1}
            aria-label="Previous page"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2.5 text-sm font-bold text-foreground"
          >
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">
              {page} / {CATALOGUE_PAGES}
            </span>
          </button>

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page >= CATALOGUE_PAGES}
            aria-label="Next page"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
          >
            <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
          </button>
        </div>

        <p className="pb-3 text-center text-xs text-muted-foreground">{t.catalogue.swipeHint}</p>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Catalogue"
        >
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <span className="text-sm font-bold" dir="ltr">
              {page} / {CATALOGUE_PAGES}
            </span>
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center overflow-auto px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cataloguePage(page)}
              alt={`Catalogue page ${page}`}
              className="max-h-full w-full max-w-5xl object-contain"
              draggable={false}
            />
          </div>

          <div className="flex items-center justify-center gap-6 px-4 pb-8 pt-4">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page <= 1}
              aria-label="Previous page"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-25"
            >
              <ChevronLeft className="h-7 w-7 rtl:rotate-180" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page >= CATALOGUE_PAGES}
              aria-label="Next page"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-25"
            >
              <ChevronRight className="h-7 w-7 rtl:rotate-180" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
