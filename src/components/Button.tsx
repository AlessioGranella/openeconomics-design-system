import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

/**
 * Pulsante OpenEconomics — spigolo vivo (radius 0), Atkinson Next.
 * - primary:   Bluette pieno, testo bianco (CTA principale)
 * - accent:    Lime pieno, testo nero (call to action ad alta energia)
 * - secondary: bordo Bluette, testo Bluette (azione secondaria)
 * - ghost:     solo testo Bluette
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`oe-btn oe-btn--${variant} oe-btn--${size}`} {...rest}>
      {children}
    </button>
  )
}
