import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function ConnectBar() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-bold uppercase tracking-widest">
          Let&apos;s Connect
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <Link
            href="https://instagram.com/hassanain_furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
          >
            <InstagramIcon className="h-5 w-5" />
            @hassanain_furniture
          </Link>
          <Link
            href="tel:+201001234567"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            +20 100 123 4567
          </Link>
          <p className="inline-flex items-center gap-2 text-sm">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Damietta, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
