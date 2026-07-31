# Hassanain Furniture — Website

Next.js 16 (App Router) + Tailwind v4. Bilingual EN / AR with full RTL support.

## Run it

```bash
pnpm install    # or npm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

## What's on the page

| Section | Anchor | Notes |
|---|---|---|
| Hero | `#about` | Photo background + two showroom photos (visible on mobile too) and four CTAs: Catalogue, Packages, Visit Showroom, and a green WhatsApp "Start your custom order" |
| Why us | — | Four selling points |
| About | — | Copy + stats |
| Collections | `#collections` | Five collection cards with photos |
| Catalogue | `#catalogue` | **Opens the full catalogue inside the page** + download + new tab |
| Packages | `#packages` | Studio / 2BR / 3BR, each links to WhatsApp |
| Our Story | `#story` | |
| Contact | `#contact` | Branches with Google Maps links, Instagram, TikTok, email, phone |

Every header link scrolls to its section and the active link is highlighted while you scroll.

## Catalogue viewer

Phones and tablets can't render a PDF inside an `<object>`/`<iframe>` — that's a
browser limitation, not a bug in the site. So:

- **Desktop / laptop** → native PDF viewer, exactly as before.
- **Phone / tablet** (`max-width: 1023px` or no hover) → a swipeable page viewer
  built from pre-rendered images in `public/catalogue/pages/` (47 pages, lazy
  loaded, with page counter and prev/next arrows).

Download and "open in new tab" work everywhere either way.

**If you replace the PDF**, re-render the page images too:

```bash
pdftoppm -jpeg -jpegopt quality=72 -r 110 \
  public/catalogue/hassanain-catalogue.pdf public/catalogue/pages/page
```

Then update `CATALOGUE_PAGES` in `lib/content.ts` to the new page count.

## Language switching

The globe button in the header toggles EN ⇄ AR. It flips `<html dir>` to `rtl`,
swaps the font to Cairo, and mirrors the layout (all spacing uses logical
properties — `ms-`, `me-`, `ps-`, `start-`, `end-`). The choice is remembered in
`localStorage`, and Arabic browsers get Arabic by default on the first visit.

**All copy lives in one file: `lib/content.ts`.** Edit the `en` and `ar` objects
there — nothing else needs touching. Contact details, links, prices and
collection names are at the top of the same file.

## The logo

Your original transparent artwork, at:

- `public/images/logo.png` — full lockup (H + HASSANAIN + FURNITURE AND MORE)
- `public/images/logo-mark.png` — the H on its own, for tight spaces

`components/logo.tsx` renders it; pass `markOnly` for the H alone, `compact` for
a smaller size. Favicons (`public/icon.png`, `public/apple-icon.png`) are cut
from the same file.

## WhatsApp

Floating green button, bottom corner, on every screen. Number is
`WHATSAPP_NUMBER` in `lib/content.ts` (international format, no `+`). Each
package button pre-fills a message naming that package.

## Photos

In `public/images/`: `cover.jpg`, `showroom-lounge.jpg`, `showroom-dining.jpg`,
`cabinet-burl.jpg`, `sofa-terracotta.jpg`, `vaulted-room.jpg`. All resized and
compressed for the web. Swap any file and keep the name to change a section
background.

## To verify

- The two Google Maps links are assigned to **Damietta (factory)** and
  **Alexandria (warehouse)** in that order — swap them in `lib/content.ts` if
  it's the other way round.
- Package prices and collection names came from the catalogue; confirm before
  going live.
