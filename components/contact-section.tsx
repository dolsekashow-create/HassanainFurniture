'use client'

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { useLang } from '@/components/language-provider'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/social-icons'
import { EMAIL, INSTAGRAM, TIKTOK, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/content'

export function ContactSection() {
  const { t } = useLang()
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappPrefill)}`

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-pretty text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.contact.body}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              {t.contact.branchesTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {t.contact.branches.map((branch) => (
                <li
                  key={branch.name}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-foreground">{branch.name}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{branch.detail}</p>
                      <span className="mt-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                        {branch.type}
                      </span>
                    </div>
                  </div>
                  {branch.map && (
                    <a
                      href={branch.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/40 px-4 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {t.contact.directions}
                      <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              {t.contact.followTitle}
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-bold text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="flex-1">{t.contact.whatsapp}</span>
                <span className="text-sm font-semibold opacity-90" dir="ltr">
                  {WHATSAPP_DISPLAY}
                </span>
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-bold text-foreground transition-colors hover:border-primary"
              >
                <InstagramIcon className="h-5 w-5 text-primary" />
                <span className="flex-1" dir="ltr">
                  @hassanain_furniture
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground rtl:-scale-x-100" />
              </a>

              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-bold text-foreground transition-colors hover:border-primary"
              >
                <TikTokIcon className="h-5 w-5 text-primary" />
                <span className="flex-1" dir="ltr">
                  @hassanain.furniture
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground rtl:-scale-x-100" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-bold text-foreground transition-colors hover:border-primary"
              >
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="flex-1 break-all text-sm" dir="ltr">
                  {EMAIL}
                </span>
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-bold text-foreground transition-colors hover:border-primary"
              >
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="flex-1" dir="ltr">
                  {WHATSAPP_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
