'use client'

import { Logo } from '@/components/logo'
import { useLang } from '@/components/language-provider'
import { InstagramIcon, TikTokIcon } from '@/components/social-icons'
import { INSTAGRAM, NAV_IDS, TIKTOK } from '@/lib/content'

export function SiteFooter() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="rounded-xl bg-white/95 px-4 py-3">
              <Logo compact />
            </div>
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">{t.footer.made}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/60"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/60"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-secondary-foreground/60">
            © {year} Hassanain Furniture. {t.footer.rights}
          </p>

          <a
            href="https://www.zero--nine.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zero-nine.webp"
              alt=""
              width={309}
              height={320}
              loading="lazy"
              className="h-7 w-auto opacity-80 transition-opacity group-hover:opacity-100"
            />
            <span>
              {t.footer.developedBy} <strong className="font-bold">Zero&mdash;Nine</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
