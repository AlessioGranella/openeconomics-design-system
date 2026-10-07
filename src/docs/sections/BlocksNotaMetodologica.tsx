import Demo from '../ui/Demo'

const flush = { margin: '-32px' } as const

export default function BlocksNotaMetodologica() {
  return (
    <section id="blocks-nota-metodologica" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Nota metodologica</span>
      <h2>Nota metodologica</h2>
      <p className="dx-lead">
        La fascia che spiega come è stata fatta l'analisi: modello, dati, perimetro, limiti.
        Si riconosce dal colore — <strong>fondo bluette-050</strong> — ed è una regola fissa:
        in qualsiasi analisi, una sezione di nota metodologica ha questo fondo e nessun altro.
      </p>

      <Demo
        title="Fascia nota metodologica"
        description="Fondo --oe-bg-tint (bluette-050), chip lime, H2, testo. Il corpo lungo va su due colonne con .oe-text-2col; i dettagli che non tutti leggeranno stanno in un «Scopri di più» richiudibile. Il riquadro bianco di una figura dentro questa fascia resta bianco."
        code={`<section class="oe-band oe-band--nota">
  <div class="oe-container">
    <span class="oe-tag-chip oe-tag-chip--lime">Nota metodologica</span>
    <h2>Metodologia</h2>
    <p>Una riga che dice quali analisi sono state fatte e perché.</p>

    <h3>1. Analisi di impatto macroeconomico (SAM)</h3>
    <div class="oe-text-2col">
      <p>…</p>
      <p>…</p>
    </div>

    <details class="oe-more">
      <summary>Scopri di più</summary>
      <div class="oe-more__body">
        <p>I dettagli tecnici: canali di trasmissione, assunzioni, limiti.</p>
      </div>
    </details>

    <p class="oe-note oe-note--grey">Fonte dei dati e anno di riferimento.</p>
  </div>
</section>`}
      >
        <div style={flush}>
          <section className="oe-band oe-band--nota oe-band--tight">
            <div className="oe-container">
              <span className="oe-tag-chip oe-tag-chip--lime" style={{ marginBottom: 'var(--oe-space-s)', display: 'inline-flex' }}>
                Nota metodologica
              </span>
              <h2 className="oe-h2" style={{ marginTop: 0 }}>Metodologia</h2>
              <p className="oe-body">
                Le analisi sono due e rispondono a finalità complementari: stimare gli impatti
                macroeconomici della spesa e misurare i benefici sociali generati dal comparto.
              </p>
              <div className="oe-text-2col">
                <p className="oe-body">
                  L'impatto macroeconomico è stimato con un modello SAM configurato sui dati
                  ISTAT dell'anno di riferimento, con disaggregazione in 63 settori e a livello
                  regionale.
                </p>
                <p className="oe-body" style={{ marginBottom: 0 }}>
                  Entrambe le grandezze sono espresse in valori monetari ma non sono sommabili:
                  descrivono dimensioni diverse e vanno lette insieme, non addizionate.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Colore</span>
          <h3 className="oe-card__title">Bluette-050, sempre</h3>
          <p className="oe-card__body">
            <code>.oe-band--nota</code> → <code>--oe-bg-tint</code>. Regola fissa: è il colore che
            distingue questo tipo di sezione e <strong>non entra nell'alternanza</strong> bianco /
            grigio delle altre fasce. Una nota metodologica su fondo grigio è un errore.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Figure</span>
          <h3 className="oe-card__title">Riquadro bianco</h3>
          <p className="oe-card__body">
            Il riquadro di una figura prende sempre il colore opposto alla fascia: dentro la nota
            metodologica resta bianco. Vale anche per la nota in variante grigia, che su questo
            fondo diventa bianca.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Testo</span>
          <h3 className="oe-card__title">Due colonne, niente corsivo</h3>
          <p className="oe-card__body">
            È la sezione più densa della pagina: il testo lungo va su <code>.oe-text-2col</code> e
            i dettagli tecnici dentro un <code>.oe-more</code> richiudibile. Nessun corsivo, qui
            come altrove — nemmeno per i nomi dei modelli.
          </p>
        </article>
      </div>
    </section>
  )
}
