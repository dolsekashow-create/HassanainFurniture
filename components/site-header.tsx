'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact Us', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col items-start gap-1">
          <Image
            src="/images/logo.jpeg"
            alt="HassanainFurniture logo"
            width={88}
            height={88}
            className="h-16 w-16 object-contain md:h-20 md:w-20"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Visit Showroom
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-6 pb-6 shadow-lg lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Visit Showroom
          </Link>
        </nav>
      )}
    </header>
  )
}
