import type { ReactNode } from 'react'

type Tone = 'default' | 'on-dark' | 'lime'

export interface TagProps {
  children: ReactNode
  tone?: Tone
}

/**
 * Chip / tag categoria — Atkinson Mono, UPPERCASE.
 * Regola brand/design system: NIENTE icone né frecce dentro il chip.
 * - default: testo Bluette su chiaro
 * - on-dark: testo Lime su sfondo scuro
 * - lime:    box Lime, testo nero
 */
export default function Tag({ children, tone = 'default' }: TagProps) {
  return <span className={`oe-tag-chip oe-tag-chip--${tone}`}>{children}</span>
}
