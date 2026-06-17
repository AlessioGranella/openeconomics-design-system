import Demo from '../ui/Demo'

export default function Typography() {
  return (
    <section id="tipografia" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Tipografia</h2>
      <p className="dx-lead">
        Tre famiglie con ruoli precisi: <strong>Hedvig Letters Serif</strong> per i titoli e brevi testi
        di "brand voice"; <strong>Atkinson Hyperlegible Next</strong> per tutto il testo descrittivo e
        long-form; <strong>Atkinson Hyperlegible Mono</strong> per tag, dati e valute (uppercase).
      </p>

      <Demo title="Famiglie">
        <div className="dx-type-families">
          <div>
            <div className="dx-type-fam" style={{ fontFamily: 'var(--oe-font-serif)' }}>Hedvig Letters Serif</div>
            <code className="dx-swatch__var">--oe-font-serif · titoli</code>
          </div>
          <div>
            <div className="dx-type-fam" style={{ fontFamily: 'var(--oe-font-sans)' }}>Atkinson Hyperlegible Next</div>
            <code className="dx-swatch__var">--oe-font-sans · body</code>
          </div>
          <div>
            <div className="dx-type-fam" style={{ fontFamily: 'var(--oe-font-mono)' }}>Atkinson Mono 1.234,56</div>
            <code className="dx-swatch__var">--oe-font-mono · tag / dati</code>
          </div>
        </div>
      </Demo>

      <Demo title="Scala (display, heading, body)">
        <div className="dx-type-specimen">
          <div className="oe-display">Display · Hedvig</div>
          <h1 className="oe-h1">Heading H1</h1>
          <h2 className="oe-h2">Heading H2</h2>
          <h3 className="oe-h3">Heading H3 (Atkinson)</h3>
          <h4 className="oe-h4">Heading H4</h4>
          <span className="oe-eyebrow">Eyebrow · sans 500 uppercase</span>
          <p className="oe-body">Body · Atkinson Hyperlegible Next, Light 300. Pensato per long-form, massima leggibilità.</p>
          <p className="oe-body-sm">Body small · 18px.</p>
        </div>
      </Demo>

      <Demo
        title="Mono: tag, figure label, numeri"
        description="Il mono è riservato a chip/tag e numerazione figure. I numeri usano cifre tabulari e locale IT (1.234.567,89)."
      >
        <div className="dx-type-specimen">
          <span className="oe-tag">CATEGORIA</span>
          <div className="oe-figure-label">GRAFICO 1 · Impatto sul PIL</div>
          <div className="oe-num" style={{ fontSize: 32, color: 'var(--oe-bluette-700)' }}>1.234.567,89</div>
        </div>
      </Demo>
    </section>
  )
}
