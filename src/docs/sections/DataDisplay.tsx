import { useState } from 'react'
import Demo from '../ui/Demo'

const rows = [
  ['PIL (mld €)', '1.847', '+0,2', '+0,7'],
  ['Inflazione IPCA (%)', '1,2', '-0,3', '-1,4'],
  ['Disoccupazione (%)', '5,9', '-0,2', '-1,0'],
  ['Debito / PIL (%)', '135,3', '+0,4', '-1,2'],
]

export default function DataDisplay() {
  const [tab, setTab] = useState(0)
  const [page, setPage] = useState(2)
  const [range, setRange] = useState('all')

  return (
    <section id="data-display" className="dx-section">
      <span className="oe-eyebrow">Componenti UI</span>
      <h2>Tabelle &amp; dati</h2>
      <p className="dx-lead">
        Componenti per la presentazione dei dati: tabella, tab, badge di stato, paginazione e
        filtri (segmented). Numeri in formato IT, cifre tabulari.
      </p>

      <Demo
        title="Tabella"
        description="Intestazioni in mono uppercase; con --numeric le colonne dati vanno a destra, tabulari."
        code={`<div class="oe-table__wrap">
  <table class="oe-table oe-table--numeric">
    <thead><tr><th>Indicatore</th><th>Valore</th><th>Var. trim.</th><th>Var. anno</th></tr></thead>
    <tbody><tr><td>PIL (mld €)</td><td>1.847</td><td>+0,2</td><td>+0,7</td></tr>…</tbody>
  </table>
</div>`}
      >
        <div className="oe-table__wrap">
          <table className="oe-table oe-table--numeric">
            <thead>
              <tr><th>Indicatore</th><th>Valore</th><th>Var. trim.</th><th>Var. anno</th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </Demo>

      <Demo
        title="Tab"
        description="Navigazione a sezioni; attivo sull'accento."
        code={`<div class="oe-tabs">
  <button class="oe-tab is-active">Panoramica</button>
  <button class="oe-tab">Dettaglio</button>
</div>`}
      >
        <div className="oe-tabs">
          {['Panoramica', 'Dettaglio', 'Metodologia'].map((t, i) => (
            <button key={t} className={`oe-tab${i === tab ? ' is-active' : ''}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
      </Demo>

      <Demo
        title="Badge di stato"
        description="Indicatori di stato (puntino + testo). Distinti dai chip categoriali."
        code={`<span class="oe-badge oe-badge--success">Pubblicato</span>
<span class="oe-badge oe-badge--warning">In revisione</span>
<span class="oe-badge oe-badge--danger">Scaduto</span>`}
      >
        <div className="dx-row">
          <span className="oe-badge oe-badge--success">Pubblicato</span>
          <span className="oe-badge oe-badge--warning">In revisione</span>
          <span className="oe-badge oe-badge--danger">Scaduto</span>
          <span className="oe-badge oe-badge--info">Nuovo</span>
          <span className="oe-badge oe-badge--neutral">Bozza</span>
        </div>
      </Demo>

      <Demo
        title="Paginazione"
        code={`<nav class="oe-pagination">
  <button class="oe-page" disabled>‹</button>
  <button class="oe-page is-active">2</button>
  <button class="oe-page">3</button>
  <button class="oe-page">›</button>
</nav>`}
      >
        <nav className="oe-pagination">
          <button className="oe-page" disabled>‹</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className={`oe-page${n === page ? ' is-active' : ''}`} onClick={() => setPage(n)}>{n}</button>
          ))}
          <button className="oe-page">›</button>
        </nav>
      </Demo>

      <Demo
        title="Filtri (segmented)"
        description="Gruppo di opzioni mutuamente esclusive."
        code={`<div class="oe-segment">
  <button class="oe-segment__btn is-active">Tutto</button>
  <button class="oe-segment__btn">Ultimi 4 trim.</button>
</div>`}
      >
        <div className="oe-segment">
          {[['all', 'Tutto'], ['4', 'Ultimi 4 trim.'], ['12', 'Ultimi 12 mesi']].map(([k, l]) => (
            <button key={k} className={`oe-segment__btn${range === k ? ' is-active' : ''}`} onClick={() => setRange(k)}>{l}</button>
          ))}
        </div>
      </Demo>
    </section>
  )
}
