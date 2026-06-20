import Demo from '../ui/Demo'
import { KpiCard, Footer } from '../../components'

const flush = { margin: '-32px' } as const

export default function BlocksReport() {
  return (
    <section id="blocks-report" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Report</span>
      <h2>Blocchi — Report &amp; analisi onepage</h2>
      <p className="dx-lead">
        Sezioni per i documenti di analisi: intestazione, sintesi KPI, grafico con commento, tabella
        dati e disclaimer.
      </p>

      <h3>Header report</h3>
      <Demo
        title="Intestazione"
        description="Eyebrow + titolo serif + meta (data, autore, area)."
        code={`<header class="oe-report-head">
  <span class="oe-eyebrow">Report d'impatto</span>
  <h1 class="oe-report-head__title">Valutazione socioeconomica del Programma X</h1>
  <div class="oe-report-head__meta">
    <span>Giugno 2026</span><span>OpenEconomics</span><span>Mezzogiorno</span>
  </div>
</header>`}
      >
        <header className="oe-report-head">
          <span className="oe-eyebrow">Report d'impatto</span>
          <h1 className="oe-report-head__title">Valutazione socioeconomica del Programma X</h1>
          <div className="oe-report-head__meta"><span>Giugno 2026</span><span>OpenEconomics</span><span>Mezzogiorno</span></div>
        </header>
      </Demo>

      <h3>Sintesi KPI</h3>
      <Demo
        title="Banda KPI"
        description=".oe-grid di KpiCard (4 colonne, responsive)."
        code={`<section class="oe-grid">
  <div class="oe-col-3 oe-col-m-4"><!-- KpiCard --></div> …
</section>`}
      >
        <section className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
          {[
            { v: 300, p: '+', s: ' Mln €', l: 'Beneficio netto' },
            { v: 2.55, s: '', l: 'Rapporto B/C', d: 2 },
            { v: 1240, s: '', l: 'Posti di lavoro' },
            { v: 4.2, s: ' anni', l: 'Periodo di ritorno', d: 1 },
          ].map((k) => (
            <div className="oe-col-3 oe-col-m-4" key={k.l}>
              <KpiCard value={k.v} prefix={k.p} suffix={k.s} decimals={k.d ?? 0} label={k.l} />
            </div>
          ))}
        </section>
      </Demo>

      <h3>Grafico + commento</h3>
      <Demo
        title="Due colonne"
        description="Pannello grafico + testo di commento."
        code={`<section class="oe-grid">
  <div class="oe-panel oe-col-7 oe-col-m-8"> … grafico … </div>
  <div class="oe-col-5 oe-col-m-8"> … commento … </div>
</section>`}
      >
        <section className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
          <div className="oe-panel oe-col-7 oe-col-m-8">
            <div className="oe-panel__head"><div><div className="oe-panel__label">Grafico 1</div><div className="oe-panel__title">PIL — variazione % tendenziale</div></div></div>
            <div className="oe-panel__chart">il grafico va qui (tokens.ts · chartSeries)</div>
          </div>
          <div className="oe-col-5 oe-col-m-8" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--oe-space-s)' }}>
            <h3 style={{ margin: 0 }}>Lettura</h3>
            <p className="oe-card__body">Nel periodo l'indicatore mostra una ripresa graduale, sopra la media dell'area di riferimento. Il differenziale si riduce a partire dal secondo trimestre.</p>
          </div>
        </section>
      </Demo>

      <h3>Sezione tabella</h3>
      <Demo
        title="Tabella dati"
        description="Titolo + tabella numerica."
        code={`<h3>Indicatori principali</h3>
<div class="oe-table__wrap"><table class="oe-table oe-table--numeric"> … </table></div>`}
      >
        <h3 style={{ marginTop: 0 }}>Indicatori principali</h3>
        <div className="oe-table__wrap">
          <table className="oe-table oe-table--numeric">
            <thead><tr><th>Indicatore</th><th>Valore</th><th>Var. anno</th></tr></thead>
            <tbody>
              <tr><td>PIL (mld €)</td><td>1.847</td><td>+0,7</td></tr>
              <tr><td>Occupazione (%)</td><td>62,7</td><td>+0,2</td></tr>
              <tr><td>Debito / PIL (%)</td><td>135,3</td><td>-1,2</td></tr>
            </tbody>
          </table>
        </div>
      </Demo>

      <h3>Disclaimer</h3>
      <Demo
        title="Footer Analisi"
        description="Chiusura del report con condizioni d'uso (variante 'analisi' del Footer)."
        code={`import { Footer } from '@/components'\n\n<Footer variant="analisi" />`}
      >
        <div style={flush}>
          <Footer variant="analisi" />
        </div>
      </Demo>
    </section>
  )
}
