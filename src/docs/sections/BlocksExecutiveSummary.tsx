import Demo from '../ui/Demo'

type Kpi = { label: string; value: string; unit: string; tip: string }

const KPIS: Kpi[] = [
  { label: 'Spesa complessiva', value: '8', unit: 'Mld €',
    tip: "La spesa annua del comparto: è lo shock di domanda che alimenta il modello." },
  { label: 'Valore della produzione', value: '23,5', unit: 'Mld €',
    tip: "L'incremento di domanda stimola il fatturato delle imprese lungo le catene del valore." },
  { label: 'PIL', value: '11,6', unit: 'Mld €',
    tip: 'Nettando gli scambi intermedi si stima il contributo al PIL nazionale.' },
  { label: 'Occupazione', value: '153', unit: 'Mila ETP',
    tip: 'Unità di lavoro equivalenti a tempo pieno attivate nell’anno di riferimento.' },
  { label: 'Redditi', value: '6,9', unit: 'Mld €',
    tip: 'Redditi da lavoro e da impresa generati lungo la filiera attivata.' },
  { label: 'Gettito fiscale', value: '3,2', unit: 'Mld €',
    tip: 'Entrate fiscali e contributive riconducibili alla spesa del comparto.' },
]

export default function BlocksExecutiveSummary() {
  return (
    <section id="blocks-executive-summary" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Executive Summary</span>
      <h2>Executive Summary</h2>
      <p className="dx-lead">
        La fascia che segue la hero in ogni landing di studio: i risultati dell'analisi in una
        riga di card, prima di qualsiasi testo. Chi apre la pagina e non scorre deve comunque
        portarsi via i numeri.
      </p>

      <Demo
        title="Sintesi in card KPI"
        description="Chip lime «Executive Summary», poi la griglia .oe-kpis. Ogni card porta etichetta, numero in Hedvig e unità in mono; al passaggio del mouse (o con il focus da tastiera) va in negativo su Bluette 900 e i dati lasciano il posto alla spiegazione, dentro la card. Passa il mouse su una card qui sotto."
        code={`<section class="oe-band">
  <div class="oe-container">
    <span class="oe-tag-chip oe-tag-chip--lime">Executive Summary</span>

    <div class="oe-kpis">
      <!-- tabindex="0" perché la card si raggiunga anche da tastiera -->
      <div class="oe-kpi oe-kpi--titled oe-kpi--flip" tabindex="0">
        <div class="oe-kpi__label">Spesa complessiva</div>
        <div class="oe-kpi__value oe-num">8</div>
        <div class="oe-kpi__unit">Mld €</div>
        <p class="oe-kpi__tip">La spesa annua del comparto: è lo shock di domanda
          che alimenta il modello.</p>
      </div>
      …
    </div>
  </div>
</section>`}
      >
        <div>
          <span className="oe-tag-chip oe-tag-chip--lime" style={{ marginBottom: 'var(--oe-space-s)', display: 'inline-flex' }}>
            Executive Summary
          </span>
          <div className="oe-kpis oe-kpis--3">
            {KPIS.map(k => (
              <div className="oe-kpi oe-kpi--titled oe-kpi--flip" tabIndex={0} key={k.label}>
                <div className="oe-kpi__label">{k.label}</div>
                <div className="oe-kpi__value oe-num">{k.value}</div>
                <div className="oe-kpi__unit">{k.unit}</div>
                <p className="oe-kpi__tip">{k.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Chip</span>
          <h3 className="oe-card__title">Sempre «Executive Summary»</h3>
          <p className="oe-card__body">
            Chip lime sopra la griglia, con questa dicitura. È l'unica fascia della pagina che
            non ha un H2: i numeri sono il titolo.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Hover</span>
          <h3 className="oe-card__title">In negativo su Bluette 900</h3>
          <p className="oe-card__body">
            La card cambia colore al passaggio del mouse e va in negativo. La spiegazione compare
            <strong> dentro</strong> la card, al posto dei dati (<code>.oe-kpi__tip</code>): mai
            un tooltip esterno che copre le card vicine.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Tastiera</span>
          <h3 className="oe-card__title">tabindex="0"</h3>
          <p className="oe-card__body">
            Se una card nasconde del testo dietro l'hover, deve essere raggiungibile da tastiera:
            il focus produce lo stesso scambio del mouse.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Numeri</span>
          <h3 className="oe-card__title">Hedvig e unità separata</h3>
          <p className="oe-card__body">
            Il valore è un numero display: Hedvig 400, cifre tabulari, locale IT. L'unità non sta
            dentro il numero ma in <code>.oe-kpi__unit</code>, mono uppercase. Con
            <code> .oe-kpi--titled</code> l'etichetta sale sopra il numero e tiene un'altezza
            minima, così le etichette su due righe non sfalsano la riga di cifre.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Griglia</span>
          <h3 className="oe-card__title">6 · 3 · 2 · 1</h3>
          <p className="oe-card__body">
            <code>.oe-kpis</code> parte da sei colonne e scende a 3, 2 e infine 1 sotto i 480px:
            in mobile le card si incolonnano, non si schiacciano. Varianti
            <code> --3</code> e <code>--2</code> per sintesi più corte; con sei card dispari si
            usa <code>--3</code> per non lasciare un buco in fondo alla riga.
          </p>
        </article>
      </div>
    </section>
  )
}
