import type { ReactNode } from 'react'

export interface NoteProps {
  /** evidente = nota importante (fondo Lime) · neutra = nota di contesto (fondo grigio) */
  tone: 'evidente' | 'neutra'
  /** frase d'attacco in grassetto: dice la conclusione */
  lead?: ReactNode
  children: ReactNode
}

/**
 * Nota di lettura accanto a dati e grafici.
 * Regola: la nota IMPORTANTE è «evidente» (fondo Lime, filetto Bluette); quella che non è
 * particolarmente importante è «neutra» (fondo grigio, filetto Lime). Prima di impaginarla
 * si chiede sempre quale delle due serve.
 */
export default function Note({ tone, lead, children }: NoteProps) {
  return (
    <p className={`oe-note oe-note--${tone}`}>
      {lead && <><strong>{lead}</strong>{' '}</>}
      {children}
    </p>
  )
}
