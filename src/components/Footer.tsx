import type { ReactNode } from 'react'
import Wordmark from './Wordmark'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps {
  /**
   * "standard" → solo brand + meta legali (copyright, privacy, cookie).
   * "analisi"  → in più la colonna "Condizioni d'uso" con il disclaimer,
   *              per report e documenti di analisi.
   */
  variant?: 'standard' | 'analisi'
  /** Tagline serif accanto al logotipo. */
  tagline?: ReactNode
  /** Etichetta mono del disclaimer (solo variante "analisi"). */
  disclaimerLabel?: string
  /** Testo del disclaimer (solo variante "analisi"). */
  disclaimer?: ReactNode
  website?: string
  company?: string
  /** Anno del copyright (default: anno corrente). */
  year?: number
  links?: FooterLink[]
}

const DEFAULT_TAGLINE =
  'Enabling adaptation. Empowering impact. With platforms, strategy, and trust.'

const DEFAULT_DISCLAIMER =
  'Il presente documento e tutte le informazioni in esso contenute possono essere ' +
  'divulgati, a condizione che la distribuzione avvenga citando OpenEconomics come ' +
  'fonte. Le informazioni sono fornite a scopo puramente informativo e non implicano ' +
  'alcuna garanzia o impegno da parte di OpenEconomics. Le analisi economiche contenute ' +
  'nel documento sono state elaborate sulla base di fonti pubbliche autorevoli e ' +
  "fornitori di dati specialistici, con l'obiettivo di offrire una valutazione " +
  'professionale, oggettiva e prudenziale in linea con le prassi metodologiche di ' +
  'comparto. Al documento e ai suoi contenuti si applicano il copyright e le norme in ' +
  'materia di protezione dei dati personali.'

const DEFAULT_LINKS: FooterLink[] = [
  { label: 'Privacy policy', href: '#' },
  { label: 'Cookie policy', href: '#' },
]

/**
 * Footer di brand OpenEconomics su fondo Bluette scuro.
 * Due varianti selezionabili per progetto: `standard` e `analisi`.
 */
export default function Footer({
  variant = 'standard',
  tagline = DEFAULT_TAGLINE,
  disclaimerLabel = "Condizioni d'uso",
  disclaimer = DEFAULT_DISCLAIMER,
  website = 'www.openeconomics.eu',
  company = 'OpenEconomics Srl',
  year = new Date().getFullYear(),
  links = DEFAULT_LINKS,
}: FooterProps) {
  return (
    <footer className={`oe-footer oe-footer--${variant}`}>
      <div className="oe-footer__inner">
        <div className="oe-footer__top">
          <div className="oe-footer__brand">
            <Wordmark className="oe-footer__logo" />
            <p className="oe-footer__tagline">{tagline}</p>
          </div>

          {variant === 'analisi' && (
            <div className="oe-footer__disclaimer">
              <span className="oe-footer__disclaimer-label">{disclaimerLabel}</span>
              {disclaimer}
            </div>
          )}
        </div>

        <hr className="oe-footer__rule" />

        <div className="oe-footer__bottom">
          <p className="oe-footer__meta">
            {website} · Copyright © {company} {year}
          </p>
          <nav className="oe-footer__links" aria-label="Note legali">
            {links.map((l) => (
              <a className="oe-footer__link" href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
