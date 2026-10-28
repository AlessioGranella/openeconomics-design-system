const casi = [
  {
    nome: 'Analisi one-page',
    obiettivo:
      "Far parlare il dato: i risultati di un'analisi o di uno studio con testo essenziale. Per un cliente (chip «Caso studio») o per OpenEconomics (chip «Studio indipendente»).",
    hero: '.oe-hero-analisi',
    segni: [
      'Hero con linea sottile sotto il sottotitolo e cinque indicatori: tipo di analisi, metodologia, fonti, anno, aggiornamento. Logo cliente in alto a destra solo per i casi studio.',
      'Executive Summary in card subito sotto: al passaggio del mouse compare la spiegazione.',
      'Alta densità di grafici con le relative spiegazioni.',
      'Note di highlight a commento e chiusura dei paragrafi (evidente o neutra: si chiede).',
      'Nota metodologica su fondo viola chiaro; Footer Analisi con le condizioni d’uso.',
    ],
  },
  {
    nome: 'Web report (minireport)',
    obiettivo:
      "Portare sul web un report mantenendo i testi fedeli all'originale: l'interattività è un supporto, non una riscrittura.",
    hero: 'Immersiva a tutto schermo',
    segni: [
      'Copertina immersiva e indice laterale o menu in alto che segue la lettura.',
      'Sintesi delle evidenze in forma testuale ma schematica (card numerate).',
      'Alternanza di sezioni a 2 colonne e a 1 colonna, per una lettura movimentata.',
      'Cassetti: le sezioni si possono richiudere.',
      'Focus point: citazioni e dati chiave hanno riquadri dedicati.',
    ],
  },
  {
    nome: 'Presentazione a scroll',
    obiettivo:
      "Raccontare un tema con una sola idea per sezione, in modo sintetico e d'impatto.",
    hero: 'Immersiva + puntini di navigazione',
    segni: [
      'Hero con i puntini di navigazione sulla destra.',
      'Sezioni quasi a tutto schermo, fondo alternato bianco, grigio e viola scuro, numeri grandi. Testo ridotto al minimo.',
      'Animazioni sulle card e contenuti interattivi (es. tabelle con filtri).',
    ],
  },
  {
    nome: 'Minisito verticale',
    obiettivo: 'Presentare un verticale o un prodotto in più pagine, con tono editoriale e persuasivo.',
    hero: 'Home immersiva, pagine interne più strette',
    segni: [
      'Home con foto e sfumatura viola, pretitolo lime, titolo serif e due bottoni con freccia verso le due sottosezioni.',
      'Menu fisso a due livelli: pagine del sito sopra, sezioni della pagina sotto, voce attiva evidenziata.',
      'Numeri in evidenza in card con microanimazioni; sotto, ammessa una citazione con barra lime.',
      'Card editoriali con illustrazioni su fondo viola puntinato, verso gli approfondimenti.',
      'Metafora grafica per i concetti chiave (es. cerchi in proporzione).',
    ],
  },
  {
    nome: 'Dashboard',
    obiettivo:
      "Presentare dati da leggere a colpo d'occhio, seguendone andamento e confronti, con note di commento.",
    hero: 'Compatta',
    segni: [
      'Hero compatta con foto, pretitolo lime e titolo serif; comandi tecnici (Backup, impostazioni, Upload) nella barra in alto.',
      'KPI in card: icona del brand, numero nero, etichetta maiuscola, badge di variazione verde (sale), rosa (scende), grigio (stabile).',
      'Grafici in riquadri o su bianco, con «GRAFICO X», titolo, unità e nota.',
      'Classifiche e tabelle: categoria in un chip e valore a destra.',
      'Commenti importanti su viola scuro, pretitolo lime, termini chiave in lime.',
    ],
  },
  {
    nome: 'Repository',
    obiettivo: 'Una libreria di asset in cui la trovabilità viene prima di tutto.',
    hero: 'Compatta',
    segni: [
      'Ricerca full-text e filtri combinabili.',
      'Card asset piatte con filetto: tipo, formato e data visibili subito.',
      'CTA di download sull’accento, mai nera.',
    ],
  },
]

const comuni = [
  'Titoli grandi e numeri grandi in Hedvig; tutto il resto in Atkinson, peso leggero come base.',
  'Pretitolo in box lime, Atkinson Mono maiuscolo, sopra i titoli principali.',
  'Titoli con la sola iniziale maiuscola.',
  'Card e bottoni a spigolo vivo.',
  'Bottoni con la freccia accanto all’etichetta, mai neri.',
  'Sezioni scure sempre in viola scuro, mai nero.',
  'Icone del brand, mai emoji. Nessun testo in corsivo.',
  'Grafici solo dal motore del design system, una sola tinta per grafico.',
  'Variante Civiqa: stessa struttura, accento blu e logo Civiqa.',
]

export default function UseCases() {
  return (
    <section id="casi-uso" className="dx-section">
      <span className="oe-eyebrow">Inizio · Casi d'uso</span>
      <h2>Casi d'uso</h2>
      <p className="dx-lead">
        Ogni asset web OpenEconomics o Civiqa è uno di questi sei tipi. Il tipo si decide per primo,
        prima del brand: ognuno ha un obiettivo diverso e alcuni segni particolari che lo rendono
        riconoscibile. Si può anche allineare al brand una pagina esistente, partendo dal suo codice
        sorgente.
      </p>

      <div className="dx-callout">
        <strong>Regola #0 — Che cosa devi fare?</strong> Chi lavora con il design system o con la
        skill <code>oe-frontend-brand</code> chiede prima di tutto quale di questi casi serve. Poi il
        brand, poi (per le analisi) caso studio o studio indipendente, poi i materiali. La mappa delle
        sezioni si approva prima di scrivere codice.
      </div>

      {casi.map((c) => (
        <div key={c.nome}>
          <h3>{c.nome}</h3>
          <p>{c.obiettivo}</p>
          <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
            <article className="oe-card oe-col-4 oe-col-m-4">
              <span className="oe-card__eyebrow">Hero</span>
              <p className="oe-card__body">{c.hero}</p>
            </article>
            <article className="oe-card oe-col-8 oe-col-m-8">
              <span className="oe-card__eyebrow">Segni particolari</span>
              <ol className="oe-card__body">
                {c.segni.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      ))}

      <h3>Tratti comuni a tutti</h3>
      <ul>
        {comuni.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="dx-note">
        Testo completo in <code>design-system/CASI-D-USO.md</code>.
      </p>
    </section>
  )
}
