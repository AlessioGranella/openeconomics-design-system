import Demo from '../ui/Demo'

/* Scala nominale (Figma / Brand Manual) — è il riferimento per i designer. */
const nominal = [
  ['xxs', 4], ['xs', 8], ['s', 16], ['m', 24],
  ['l', 32], ['xl', 40], ['2xl', 48], ['3xl', 64],
] as const

/* Scala numerica a base 4px — è l'implementazione completa usata nel codice. */
const numeric = [
  ['1', 4], ['2', 8], ['3', 12], ['4', 16], ['5', 20], ['6', 24],
  ['7', 32], ['8', 40], ['9', 52], ['10', 64], ['11', 80], ['12', 120],
] as const

function SpaceRow({ token, px }: { token: string; px: number }) {
  return (
    <div className="dx-space-row">
      <code className="dx-swatch__var">{token}</code>
      <span className="dx-space-bar" style={{ width: px }} />
      <span className="dx-space-px">{px}px</span>
    </div>
  )
}

export default function SpacingLayout() {
  return (
    <section id="spacing" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Spacing</h2>
      <p className="dx-lead">
        Sistema modulare a base <strong>4&nbsp;px</strong>. I designer ragionano con la scala
        nominale (<code>xxs…3xl</code>); il codice ha la scala numerica completa
        (<code>--oe-space-1…12</code>). Spigolo vivo ovunque: <strong>tutti i raggi sono 0</strong>.
      </p>

      <Demo
        title="Scala nominale"
        description="Riferimento da Figma / Brand Manual. Usa questi step per padding, gap e margini."
      >
        <div className="dx-space-list">
          {nominal.map(([n, px]) => (
            <SpaceRow key={n} token={`--oe-space-${n}`} px={px} />
          ))}
        </div>
      </Demo>

      <Demo
        title="Scala numerica (implementazione)"
        description="Tutti gli step disponibili a codice, base 4px con ancore 20/52/80/120 usate in Figma."
      >
        <div className="dx-space-list">
          {numeric.map(([n, px]) => (
            <SpaceRow key={n} token={`--oe-space-${n}`} px={px} />
          ))}
        </div>
      </Demo>
    </section>
  )
}
