/**
 * Brand mark for Hassanain Furniture, drawn as inline SVG so it stays sharp at
 * any size and has a genuinely transparent background on any surface.
 *
 * If you'd rather use your original artwork file, drop it at
 * `public/images/logo.png` and set USE_IMAGE_MARK to true below.
 */
const USE_IMAGE_MARK = false

const BRAND_BLUE = '#4A8CF2'
const BRAND_RED = '#E8102F'
const BRAND_INK = '#111827'
const BRAND_GOLD = '#F2C230'

function Mark({ className }: { className?: string }) {
  if (USE_IMAGE_MARK) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/images/logo.png" alt="" className={className} />
  }

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" role="presentation">
      {/* Blue H */}
      <path
        d="M30 10 H70 V80 H130 V10 H170 A20 20 0 0 1 190 30 V170 A20 20 0 0 1 170 190 H130 V120 H70 V190 H30 A20 20 0 0 1 10 170 V30 A20 20 0 0 1 30 10 Z"
        fill={BRAND_BLUE}
      />

      {/* Left wardrobe */}
      <path
        d="M18 46 A22 22 0 0 1 40 24 H62 V178 H18 Z"
        fill={BRAND_RED}
        stroke={BRAND_INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <line x1="40" y1="26" x2="40" y2="178" stroke={BRAND_INK} strokeWidth="3" />
      <rect x="32" y="96" width="5" height="9" fill={BRAND_GOLD} stroke={BRAND_INK} strokeWidth="2" />
      <rect x="43" y="96" width="5" height="9" fill={BRAND_GOLD} stroke={BRAND_INK} strokeWidth="2" />

      {/* Right wardrobe */}
      <path
        d="M182 154 A22 22 0 0 1 160 176 H138 V24 H182 Z"
        fill={BRAND_RED}
        stroke={BRAND_INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <line x1="160" y1="24" x2="160" y2="174" stroke={BRAND_INK} strokeWidth="3" />
      <rect x="152" y="96" width="5" height="9" fill={BRAND_GOLD} stroke={BRAND_INK} strokeWidth="2" />
      <rect x="163" y="96" width="5" height="9" fill={BRAND_GOLD} stroke={BRAND_INK} strokeWidth="2" />

      {/* Centre console */}
      <rect
        x="60"
        y="80"
        width="80"
        height="40"
        fill={BRAND_RED}
        stroke={BRAND_INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Lamp */}
      <rect x="97" y="60" width="5" height="21" fill={BRAND_GOLD} stroke={BRAND_INK} strokeWidth="2" />
      <path
        d="M86 62 L92 44 H108 L114 62 Z"
        fill={BRAND_GOLD}
        stroke={BRAND_INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({
  className = '',
  withWordmark = true,
  compact = false,
}: {
  className?: string
  withWordmark?: boolean
  compact?: boolean
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`} dir="ltr">
      <Mark className={compact ? 'h-9 w-9' : 'h-11 w-11 md:h-14 md:w-14'} />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight text-[#4A8CF2] ${
              compact ? 'text-lg' : 'text-xl md:text-2xl'
            }`}
          >
            HASSANAIN
          </span>
          <span
            className={`mt-0.5 font-bold uppercase text-[#E8102F] ${
              compact ? 'text-[7px] tracking-[0.22em]' : 'text-[8px] tracking-[0.28em] md:text-[9px]'
            }`}
          >
            Furniture and More
          </span>
        </span>
      )}
    </span>
  )
}

export { Mark as LogoMark }
