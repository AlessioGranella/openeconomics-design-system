import Demo from '../ui/Demo'
import { Note } from '../../components'

export default function Notes() {
  return (
    <section id="note" className="dx-section">
      <span className="oe-eyebrow">Componenti · Note</span>
      <h2>Note</h2>
      <p className="dx-lead">
        La nota di lettura accompagna dati e grafici con la loro chiave di lettura. Ha due sole
        varianti e la scelta dipende da quanto conta il messaggio: <strong>evidente</strong> (fondo
        Lime) per la nota importante, <strong>neutra</strong> (fondo grigio) per quella di contesto.
        Prima di impaginare una nota si chiede sempre quale delle due serve.
      </p>

      <Demo
        title="Evidente — la nota importante"
        description="Fondo Lime pieno e filetto Bluette (bianco sotto Civiqa). È il messaggio che deve fermare l'occhio: una conclusione, un confronto decisivo. Al massimo una o due per pagina, altrimenti smette di essere evidente."
        code={`<p class="oe-note oe-note--evidente">
  <strong>Il differenziale tra i due scenari.</strong> La spesa nel comparto audiovisivo
  ha una capacità di attivazione economica superiore rispetto a un impiego “medio”
  delle risorse da parte della PA. …
</p>

<!-- React -->
<Note tone="evidente" lead="Il differenziale tra i due scenari.">…</Note>`}
      >
        <Note tone="evidente" lead="Il differenziale tra i due scenari.">
          La spesa nel comparto audiovisivo ha una capacità di attivazione economica superiore
          rispetto a un impiego “medio” delle risorse da parte della PA. In questa prospettiva, le
          politiche di sostegno al settore possono tradursi, a parità di risorse, in una maggiore
          generazione di valore aggiunto, occupazione e ricadute fiscali.
        </Note>
      </Demo>

      <Demo
        title="Neutra — la nota di contesto"
        description="Fondo grigio e filetto Lime. Spiega, definisce, avverte: una formula, una definizione, un limite della stima. Su una fascia grigia o sulla nota metodologica il fondo diventa bianco da solo, per restare visibile."
        code={`<p class="oe-note oe-note--neutra">
  <strong>SROI = Benefici sociali netti / Costi economici.</strong> I benefici sociali
  netti sono la somma dei benefici monetizzati per i principali outcome. …
</p>

<!-- React -->
<Note tone="neutra" lead="SROI = Benefici sociali netti / Costi economici.">…</Note>`}
      >
        <Note tone="neutra" lead="SROI = Benefici sociali netti / Costi economici.">
          I benefici sociali netti sono la somma dei benefici monetizzati per i principali outcome
          (e, se presenti, dei costi sociali), opportunamente trattati secondo le regole
          metodologiche, ad esempio evitando doppie contabilizzazioni.
        </Note>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Scelta</span>
          <h3 className="oe-card__title">Importante → evidente, altrimenti neutra</h3>
          <p className="oe-card__body">
            Lime solo per la nota che conta davvero; tutto il resto è grigio. Nel dubbio si
            chiede: «la nota la vuoi evidente o neutra?».
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Testo</span>
          <h3 className="oe-card__title">Prima la conclusione</h3>
          <p className="oe-card__body">
            Una frase d'attacco in grassetto che dice il punto, poi il testo che lo motiva. Niente
            corsivo, niente titoli dentro la nota.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Filetto</span>
          <h3 className="oe-card__title">L'unico bordo laterale ammesso</h3>
          <p className="oe-card__body">
            Il filetto verticale di 4px è l'eccezione sanzionata alla regola sui bordi laterali
            colorati: vale solo per questo componente. Classi storiche <code>--lime</code> e{' '}
            <code>--grey</code> restano come alias.
          </p>
        </article>
      </div>
    </section>
  )
}
