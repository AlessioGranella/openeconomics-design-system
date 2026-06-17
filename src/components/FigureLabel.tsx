export interface FigureLabelProps {
  /** tipo di figura: GRAFICO, TABELLA, MAPPA … */
  kind?: string
  /** numero progressivo */
  index?: number
  /** titolo/caption della figura */
  title?: string
}

/**
 * Pre-titolo figura per grafici/tabelle/mappe — mono, uppercase, piccolo.
 * Es: "GRAFICO 1 · Impatto sul PIL".
 */
export default function FigureLabel({ kind = 'GRAFICO', index = 1, title }: FigureLabelProps) {
  return (
    <div className="oe-figure-label">
      {kind} {index}
      {title && <span className="oe-figure-label__title"> · {title}</span>}
    </div>
  )
}
