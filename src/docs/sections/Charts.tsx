import { useEffect, useRef } from 'react'
import Demo from '../ui/Demo'
import '../../charts/oe-charts.js'
import samples from '../chart-samples.json'

type Spec = Record<string, unknown>
const S = samples as unknown as Record<string, Spec>

/** Anteprima dal vivo: il motore disegna il grafico dentro un riquadro .oe-fig. */
function Chart({ spec, label, title }: { spec: Spec; label: string; title: string }) {
  const host = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = host.current
    if (!el) return
    window.OECharts.render(el, spec)
    return () => {
      const prev = el.previousElementSibling
      if (prev && prev.classList.contains('oe-fig__ctrl')) prev.remove()
      el.innerHTML = ''
    }
  }, [spec])
  return (
    <div className="oe-fig" style={{ margin: 0 }}>
      <div className="oe-fig__head">
        <span className="oe-figure-label">{label}</span>
        <p className="oe-fig__title">{title}</p>
      </div>
      <div ref={host} />
    </div>
  )
}

const TYPES: { key: string; label: string; title: string; name: string; when: string; code: string }[] = [
  {
    key: 'hbars', label: 'Grafico 1', name: 'hbars — barre orizzontali',
    title: 'Impatti diretti, indiretti e indotti sulle dimensioni principali',
    when: "Il grafico di default per confrontare voci con etichette lunghe (settori, regioni, dimensioni). Impilate per diretto/indiretto/indotto con la rampa ordinale; mode:'grouped' per affiancarle. Totale a fine barra, scomposizione nel tooltip.",
    code: `impatti: {
  type: 'hbars', series: ['Diretto', 'Indiretto', 'Indotto'],
  labelW: 235, controlLabel: 'Dimensione', source: 'Elaborazione OpenEconomics · …',
  views: [{ key: 'money', label: 'Valori monetari' }, { key: 'occ', label: 'Occupazione' }],
  data: {
    money: { unit: 'milioni di euro', dec: 0,
      rows: [{ label: 'PIL', values: [4395, 4239, 6207] }, …] },
    occ: { unit: 'ETP', dec: 0, rows: [{ label: 'Occupazione', values: [56095, 56248, 68115] }] }
  }
}`,
  },
  {
    key: 'columns', label: 'Grafico 2', name: 'columns — colonne verticali',
    title: 'Spesa del comparto per anno',
    when: "Serie storiche brevi e confronti per categoria ordinata (anni, scenari). mode:'stacked' per la composizione, 'grouped' per confrontare le serie. Asse con valori tondi, totale sopra la colonna.",
    code: `spesaAnni: {
  type: 'columns', series: ['Beni e servizi', 'Personale'], mode: 'stacked',
  unit: 'milioni di euro', dec: 0, source: '…',
  rows: [{ label: '2020', values: [8394, 1650] }, { label: '2021', values: [9601, 2135] }, …]
}`,
  },
  {
    key: 'line', label: 'Grafico 3', name: 'line — linee e aree',
    title: 'Spesa per macrocategoria, 2020–2023',
    when: 'Andamenti nel tempo con molti punti o più serie. area:true per sottolineare il volume. Al passaggio del mouse una guida verticale mostra tutte le serie in quell’anno; il valore finale è scritto a fine linea.',
    code: `andamento: {
  type: 'line', categories: ['2020', '2021', '2022', '2023'], area: false,
  unit: 'milioni di euro', dec: 0, source: '…',
  series: [{ label: 'Produzione', values: [2060, 3378, 4097, 4361] }, …]
}`,
  },
  {
    key: 'donut', label: 'Grafico 4', name: 'donut — ciambella',
    title: 'Ripartizione degli investimenti per settore',
    when: 'Composizione di un totale in poche voci (fino a 7). Rampa a una tinta dal più scuro; la voce «Altro» va sempre in fondo e in grigio, da sola. Legenda con i valori a destra.',
    code: `settori: {
  type: 'donut', unit: 'milioni di euro — totale 10,4 miliardi', dec: 0, source: '…',
  items: [{ label: 'Costruzioni', value: 5220, suffix: ' mln €' }, …,
          { label: 'Altro', value: 1902, suffix: ' mln €' }]
}`,
  },
  {
    key: 'waterfall', label: 'Grafico 5', name: 'waterfall — cascata',
    title: 'Dai benefici sociali al beneficio netto',
    when: 'Passaggio dal lordo al netto (benefici − costi, SROI). Le voci di costo sono l’unico uso ammesso del magenta; il totale va nel tono più scuro. Cifre in Hedvig.',
    code: `sroi: {
  type: 'waterfall', unit: 'miliardi di euro', source: '…',
  steps: [{ label: 'Benefici sociali', value: 32.44, kind: 'start' },
          { label: 'Costi economici', value: -7.27, kind: 'delta' },
          { label: 'Beneficio netto', value: 25.17, kind: 'total' }]
}`,
  },
  {
    key: 'compare', label: 'Grafico 6', name: 'compare — confronto',
    title: 'Moltiplicatore del PIL: scenario e controfattuale',
    when: 'Due o tre numeri da mettere a confronto diretto (moltiplicatori, scenari). Il valore misurato è pieno, il termine di paragone è chiaro. Usare width: 560 se sta in mezza colonna.',
    code: `moltiplicatore: {
  type: 'compare', dec: 2, unit: 'euro di PIL per euro speso', source: '…',
  items: [{ label: 'Spesa audiovisiva', value: 1.47, note: 'scenario misurato', highlight: true },
          { label: 'Spesa pubblica media', value: 1.30, note: 'controfattuale' }]
}`,
  },
  {
    key: 'map', label: 'Mappa 1', name: 'map — cartogramma con classifica',
    title: 'Articolazione regionale del valore aggiunto',
    when: 'Distribuzione territoriale (regioni, province). Scala sequenziale a 7 passi e classifica sincronizzata a fianco: passando su una regione si accende la riga e viceversa. rankTop limita la classifica (es. 20 province su 107). I path si generano una volta sola con src/charts/tools/geojson_to_paths.py.',
    code: `mappaRegioni: {
  type: 'map', paths: { Lombardia: 'M…Z', … }, viewBox: '0 0 314 412',
  controlLabel: 'Componente', rankTop: 0, source: '…',
  views: [{ key: 'tot', label: 'Totale' }, { key: 'dir', label: 'Diretto' }, …],
  data: { tot: { unit: 'milioni di euro di valore aggiunto', dec: 1,
    regions: [{ name: 'Lombardia', value: 2406.95,
                parts: [['Diretto', 439.79], ['Indiretto', 864.09], ['Indotto', 1103.07]] }, …] } }
}`,
  },
  {
    key: 'grid', label: 'Grafico 7', name: 'grid — matrice a bolle',
    title: 'Investimenti per regione e linea di intervento',
    when: 'Incrocio di due dimensioni (regione × settore, regione × linea). Area della bolla proporzionale al valore. Con poche colonne le intestazioni sono orizzontali, con molte ruotate; parts aggiunge diretto/indiretto/indotto nel tooltip. Tipico con le viste Totale / Pro capite.',
    code: `matrice: {
  type: 'grid', rowH: 28, maxR: 17, controlLabel: 'Lettura', source: '…',
  views: [{ key: 'tot', label: 'Totale' }, { key: 'pc', label: 'Pro capite' }],
  data: { tot: { unit: 'milioni di euro', dec: 1,
    rows: ['Veneto', 'Campania', …], cols: ['Sviluppo', 'Tecnologie', …],
    values: [[1204.6, 141.9, …], …], parts: [[[…3 valori…], …], …] } }
}`,
  },
  {
    key: 'treemap', label: 'Grafico 8', name: 'treemap — rettangoli proporzionali',
    title: 'Articolazione settoriale del valore aggiunto',
    when: 'Molte voci di un totale (fino a 60–70 settori) dove conta la gerarchia delle grandezze più del valore esatto. Le celle piccole restano senza testo: il dato è nel tooltip, con sub per la denominazione estesa.',
    code: `treemapSettori: {
  type: 'treemap', height: 560, unit: 'milioni di euro di valore aggiunto', source: '…',
  items: [{ label: 'Costruzioni', value: 2553.7, sub: 'Denominazione ISTAT estesa',
            parts: [['Diretto', 2045.1], ['Indiretto', 361.2], ['Indotto', 147.4]] }, …]
}`,
  },
  {
    key: 'sunburst', label: 'Grafico 9', name: 'sunburst — ruota a due livelli',
    title: 'Articolazione geografica degli impatti: regioni e province',
    when: 'Un totale scomposto su due livelli annidati (regioni → province, settori → comparti). Anello interno per il primo livello, esterno per il secondo nello stesso colore più chiaro; il totale in Hedvig al centro. Le etichette compaiono dove la fetta ha spazio.',
    code: `geoRuota: {
  type: 'sunburst', dec: 1, unit: 'milioni di euro di valore aggiunto',
  centerLabel: 'MLD € DI VALORE AGGIUNTO', centerScale: 1000, childName: 'province', source: '…',
  items: [{ label: 'Lombardia', value: 2406.95,
            children: [{ label: 'Milano', value: 842.79 }, { label: 'Brescia', value: 275.1 }, …] }, …]
}`,
  },
  {
    key: 'sankey', label: 'Grafico 10', name: 'sankey — flussi',
    title: 'Dai settori di spesa alla filiera attivata',
    when: 'Come una spesa si propaga da una colonna di origini a una di destinazioni (settori di spesa → filiera attivata). topTargets / topSources raccolgono le voci minori in «Altri», in grigio. Passando su un nodo si isolano i suoi flussi.',
    code: `filiera: {
  type: 'sankey', topTargets: 12, height: 480, unit: 'milioni di euro', dec: 1,
  sourceTitle: 'SETTORI DI SPESA', targetTitle: 'FILIERA ATTIVATA', source: '…',
  links: [{ source: 'Metallurgia', target: 'Costruzioni', value: 0.61 }, …]
}`,
  },
]

export default function Charts() {
  return (
    <section id="grafici" className="dx-section">
      <span className="oe-eyebrow">Componenti · Grafici</span>
      <h2>Grafici</h2>
      <p className="dx-lead">
        Undici tipi di grafico pronti, disegnati dal motore <code>src/charts/oe-charts.js</code>:
        SVG senza dipendenze, tooltip a mouse, tocco e tastiera, legenda attiva, controlli
        segmentati per cambiare vista. Si scrivono solo i dati; forma, colori e numeri sono
        quelli del sistema, così ogni grafico OpenEconomics è riconoscibile a colpo d'occhio.
        Gli esempi qui sotto usano dati reali dei casi studio RFI, APA e Difesa e Aerospazio.
      </p>

      <Demo
        title="Come si usa"
        description="Un riquadro .oe-fig per ogni grafico, con figure label e titolo; il grafico è un contenitore vuoto con data-oe-chart. I dati stanno in window.OE_DATA (un file data.js, così la pagina funziona anche aperta da file). Il motore legge i colori dai token --oe-chart-*: sotto .theme-civiqa i grafici diventano blu Civiqa da soli."
        code={`<link rel="stylesheet" href="ds-kit/colors_and_type.css">
<link rel="stylesheet" href="ds-kit/components.css">

<div class="oe-fig">
  <div class="oe-fig__head">
    <span class="oe-figure-label">Grafico 1</span>
    <p class="oe-fig__title">Che cosa mostra il grafico, in una riga</p>
  </div>
  <div data-oe-chart="impatti"></div>
</div>

<script src="js/data.js"></script>          <!-- window.OE_DATA = { impatti: {…} } -->
<script src="ds-kit/oe-charts.js" defer></script>

<!-- da codice: OECharts.render(elemento, spec) · OECharts.mount(root, dati) -->`}
      >
        <p className="dx-demo__desc" style={{ margin: 0 }}>
          Tipi disponibili: {(window.OECharts?.types || []).join(' · ')} — motore v{window.OECharts?.version}
        </p>
      </Demo>

      {TYPES.map(t => (
        <Demo key={t.key} title={t.name} description={t.when} code={t.code}>
          <Chart spec={S[t.key]} label={t.label} title={t.title} />
        </Demo>
      ))}

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Colore</span>
          <h3 className="oe-card__title">Una tinta per grafico</h3>
          <p className="oe-card__body">
            Rampa ordinale a tre passi per diretto / indiretto / indotto (<code>--oe-chart-1..3</code>),
            scala sequenziale a sette per mappe, treemap e ruote (<code>--oe-chart-seq-1..7</code>).
            Il magenta solo per le voci di costo, il grigio solo per «Altro».
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Numeri</span>
          <h3 className="oe-card__title">Locale italiano, due famiglie</h3>
          <p className="oe-card__body">
            Migliaia con il punto, decimali con la virgola. Etichette, assi e tooltip in Atkinson
            tabulare; Hedvig solo per le cifre display (waterfall, confronto, centro della ruota).
            Unità e fonte sempre sotto il grafico, la fonte in mono.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Riquadro</span>
          <h3 className="oe-card__title">32 sopra, 40 sotto</h3>
          <p className="oe-card__body">
            <code>.oe-fig</code> ha fondo opposto alla fascia (grigio su bianco, bianco su grigio e
            su nota metodologica), figure label sull'accento e titolo in una riga. Su mobile il
            grafico tiene una larghezza minima e scorre, invece di diventare illeggibile.
          </p>
        </article>
      </div>
    </section>
  )
}
