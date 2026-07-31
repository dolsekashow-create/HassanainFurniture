'use client'

import { useLang } from '@/components/language-provider'
import { WhatsAppIcon } from '@/components/social-icons'
import { WHATSAPP_NUMBER } from '@/lib/content'

export function WhatsAppButton() {
  const { t } = useLang()
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappPrefill)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      title={t.whatsappAria}
      className="group fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
