import Image from 'next/image'

/**
 * Official brand artwork, transparent PNG.
 * - logo.png      full lockup (H mark + HASSANAIN + FURNITURE AND MORE)
 * - logo-mark.png the H mark on its own, for tight spaces
 */
export function Logo({
  className = '',
  compact = false,
  markOnly = false,
  priority = false,
}: {
  className?: string
  compact?: boolean
  markOnly?: boolean
  priority?: boolean
}) {
  const src = markOnly ? '/images/logo-mark.png' : '/images/logo.png'
  const intrinsicWidth = markOnly ? 650 : 650
  const intrinsicHeight = markOnly ? 577 : 809

  return (
    <Image
      src={src}
      alt="Hassanain Furniture — Furniture and More"
      width={intrinsicWidth}
      height={intrinsicHeight}
      priority={priority}
      className={`w-auto object-contain ${compact ? 'h-12' : 'h-14 md:h-[76px]'} ${className}`}
    />
  )
}
