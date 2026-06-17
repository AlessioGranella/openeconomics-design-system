export interface SwatchProps {
  name: string
  hex: string
  /** nome della CSS custom property, es. --oe-bluette-700 */
  varName?: string
  /** testo scuro sopra il colore (per tinte chiare) */
  darkText?: boolean
}

export function Swatch({ name, hex, varName, darkText }: SwatchProps) {
  return (
    <div className="dx-swatch">
      <div
        className="dx-swatch__chip"
        style={{ background: hex, color: darkText ? '#000' : '#fff' }}
      >
        <span className="dx-swatch__hex">{hex}</span>
      </div>
      <div className="dx-swatch__meta">
        <span className="dx-swatch__name">{name}</span>
        {varName && <code className="dx-swatch__var">{varName}</code>}
      </div>
    </div>
  )
}

export interface ScaleProps {
  label: string
  /** voci dalla 900 alla 050 */
  steps: { step: string; hex: string }[]
  prefix: string // es. --oe-bluette
  /** soglia: da questo step in giù (numerico) il testo diventa scuro */
  darkFrom?: number
}

export function Scale({ label, steps, prefix, darkFrom = 300 }: ScaleProps) {
  return (
    <div className="dx-scale">
      <div className="dx-scale__label">{label}</div>
      <div className="dx-scale__row">
        {steps.map(({ step, hex }) => {
          const n = parseInt(step, 10)
          const dark = n <= darkFrom
          return (
            <div className="dx-scale__cell" key={step} style={{ background: hex, color: dark ? '#000' : '#fff' }}>
              <span className="dx-scale__step">{step}</span>
              <span className="dx-scale__hex">{hex}</span>
              <code className="dx-scale__var">{prefix}-{step}</code>
            </div>
          )
        })}
      </div>
    </div>
  )
}
