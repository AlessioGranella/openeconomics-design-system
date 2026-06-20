import type { ReactNode } from 'react'
import { formatNumber } from '../tokens'

export interface KpiCardProps {
  /** Valore numerico (verrà formattato in locale IT) o stringa già pronta */
  value: number | string
  label: string
  /** prefisso/suffisso (es. "€", "+", "%", "Mld €") */
  prefix?: string
  suffix?: string
  decimals?: number
  tone?: 'light' | 'dark'
  /** icona opzionale sopra il valore (es. <img> o SVG) */
  icon?: ReactNode
  /** descrizione/nota opzionale sotto l'etichetta */
  note?: ReactNode
}

/**
 * KPI / big number — numeri in Atkinson Next tabulare, etichetta in mono.
 * tone="dark" per fondi Bluette scuri (testo bianco/lime). `icon` e `note`
 * opzionali per le card di sintesi nei report.
 */
export default function KpiCard({
  value,
  label,
  prefix,
  suffix,
  decimals = 0,
  tone = 'light',
  icon,
  note,
}: KpiCardProps) {
  const display = typeof value === 'number' ? formatNumber(value, 'it-IT', decimals) : value
  return (
    <div className={`oe-kpi oe-kpi--${tone}`}>
      {icon && <div className="oe-kpi__icon" aria-hidden>{icon}</div>}
      <div className="oe-kpi__value oe-num">
        {prefix && <span className="oe-kpi__affix">{prefix}</span>}
        {display}
        {suffix && <span className="oe-kpi__affix">{suffix}</span>}
      </div>
      <div className="oe-kpi__label">{label}</div>
      {note && <p className="oe-kpi__note">{note}</p>}
    </div>
  )
}
