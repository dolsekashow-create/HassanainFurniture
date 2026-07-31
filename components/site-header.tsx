'use client'

import { useEffect, useState } from 'react'
import { Globe, MapPin, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useLang } from '@/components/language-provider'
import { NAV_IDS } from '@/lib/content'

export function SiteHeader() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
        <a href="#about" onClick={(e) => go(e, 'about')} aria-label="Hassanain Furniture">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              className={`relative py-1 text-sm font-semibold transition-colors ${
                active === id ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {t.nav[id]}
              {active === id && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {t.langButton}
          </button>

          <a
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t.visitShowroom}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-5 shadow-lg lg:hidden"
        >
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              className="block rounded-md px-2 py-3 text-base font-semibold text-foreground hover:bg-muted"
            >
              {t.nav[id]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t.visitShowroom}
          </a>
        </nav>
      )}
    </header>
  )
}
