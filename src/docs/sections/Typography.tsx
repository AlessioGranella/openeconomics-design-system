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
        title="Mono: tag e figure label"
        description="Il mono è riservato a chip/tag, unità e numerazione figure."
      >
        <div className="dx-type-specimen">
          <span className="oe-tag">CATEGORIA</span>
          <div className="oe-figure-label">GRAFICO 1 · Impatto sul PIL</div>
        </div>
      </Demo>

      <Demo
        title="Misura del testo: fascia piena, due colonne"
        description="REGOLA. Il testo corrente non si cappa mai a una misura: paragrafi, lead, note ed elenchi occupano tutta la larghezza del contenitore (max-width:none, niente 70ch). Un testo che si ferma a metà fascia lascia la pagina sbilanciata. Quando il passaggio è lungo e la riga diventa difficile da seguire, si divide in due colonne con .oe-text-2col — sotto i 768px torna a colonna unica. Il testo dentro una colonna di griglia (card, lato stretto di .cols) è già contenuto dalla colonna e non ha bisogno di cap."
        code={`<div class="oe-text-2col">
  <p>Primo paragrafo lungo…</p>
  <p>Secondo paragrafo…</p>
</div>`}
      >
        <div className="oe-text-2col">
          <p className="oe-body">
            Il testo corrente occupa tutta la fascia. Quando il passaggio è lungo, due colonne
            riportano la riga a una lunghezza che l'occhio segue senza perdere il capo, invece di
            accorciare la colonna e lasciare metà pagina vuota.
          </p>
          <p className="oe-body" style={{ marginBottom: 0 }}>
            La stessa regola vale per lead, note ed elenchi puntati: nessun cap in ch. Sotto i
            768px le colonne diventano una sola e l'ordine di lettura resta quello del markup.
          </p>
        </div>
      </Demo>

      <Demo
        title="Numeri: display e dati"
        description="I numeri grandi (KPI, stat, hero, valori nei grafici) sono in Hedvig — .oe-num--display. I numeri in linea, nelle tabelle e nei dati fitti restano in Atkinson Next tabulare — .oe-num. Locale IT (1.234.567,89)."
      >
        <div className="dx-type-specimen">
          <div className="oe-num--display" style={{ fontSize: 56, color: 'var(--oe-bluette-700)' }}>11,8</div>
          <div className="oe-num" style={{ fontSize: 18, color: 'var(--oe-fg-soft)' }}>1.234.567,89</div>
        </div>
      </Demo>
    </section>
  )
}
