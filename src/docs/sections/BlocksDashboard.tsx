import Demo from '../ui/Demo'
import { KpiCard } from '../../components'

const flush = { margin: '-32px' } as const

export default function BlocksDashboard() {
  return (
    <section id="blocks-dashboard" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Dashboard</span>
      <h2>Blocchi — Dashboard</h2>
      <p className="dx-lead">
        Layout di dashboard pronti: shell applicativa (sidebar + topbar + contenuti) e barra filtri
        con tabella. La griglia interna si adatta allo spazio reale (container query).
      </p>

      <h3>App shell</h3>
      <Demo
        title="Shell completa"
        description="Sidebar (.oe-dashnav) + topbar (.oe-topbar) + contenuti (KPI + pannello grafico)."
        code={`<div class="oe-shell">
  <nav class="oe-dashnav"> … </nav>
  <div class="oe-shell__main">
    <header class="oe-topbar"> … </header>
    <div class="oe-shell__content">
      <section class="oe-grid"> <!-- KpiCard / .oe-panel --> </section>
    </div>
  </div>
</div>`}
      >
        <div style={flush}>
          <div className="oe-shell">
            <nav className="oe-dashnav">
              <div className="oe-dashnav__title">Sintesi</div>
              <button className="oe-dashnav__item is-active">Panoramica</button>
              <div className="oe-dashnav__title">Indicatori</div>
              <button className="oe-dashnav__item">PIL</button>
              <button className="oe-dashnav__item">Inflazione</button>
              <button className="oe-dashnav__item">Lavoro</button>
            </nav>
            <div className="oe-shell__main">
              <header className="oe-topbar">
                <div>
                  <div className="oe-topbar__eyebrow">Panoramica</div>
                  <h1 className="oe-topbar__title">Quadro macro — Italia</h1>
                </div>
                <div className="oe-topbar__actions">
                  <div className="oe-segment">
                    <button className="oe-segment__btn is-active">Tutto</button>
                    <button className="oe-segment__btn">4 trim.</button>
                  </div>
                </div>
              </header>
              <div className="oe-shell__content">
                <section className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0, marginBottom: 'var(--oe-space-m)' }}>
                  {[['0,7', '%', 'PIL var. annua'], ['1,2', '%', 'Inflazione'], ['5,9', '%', 'Disoccupazione'], ['132', 'pb', 'Spread']].map(([v, s, l]) => (
                    <div className="oe-col-3 oe-col-m-4 oe-col-s-2" key={l}>
                      <KpiCard value={v} suffix={` ${s}`} label={l} />
                    </div>
                  ))}
                </section>
                <section className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
                  <div className="oe-panel oe-col-12">
                    <div className="oe-panel__head"><div><div className="oe-panel__label">Grafico 1</div><div className="oe-panel__title">PIL — variazione % tendenziale</div></div></div>
                    <div className="oe-panel__chart">il grafico va qui</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Demo>

      <h3>Barra filtri + tabella</h3>
      <Demo
        title="Filtri e tabella"
        description="Ricerca + segmented sopra una tabella dati."
        code={`<div class="oe-row-between">
  <div class="oe-search"> … </div>
  <div class="oe-segment"> … </div>
</div>
<div class="oe-table__wrap"><table class="oe-table oe-table--numeric"> … </table></div>`}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--oe-space-m)', flexWrap: 'wrap', marginBottom: 'var(--oe-space-s)' }}>
          <div className="oe-search" style={{ maxWidth: 320, flex: 1 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <input className="oe-input" placeholder="Cerca indicatore" />
          </div>
          <div className="oe-segment">
            <button className="oe-segment__btn is-active">Tutto</button>
            <button className="oe-segment__btn">Macro</button>
            <button className="oe-segment__btn">Lavoro</button>
          </div>
        </div>
        <div className="oe-table__wrap">
          <table className="oe-table oe-table--numeric">
            <thead><tr><th>Indicatore</th><th>Valore</th><th>Var. trim.</th><th>Var. anno</th></tr></thead>
            <tbody>
              <tr><td>PIL (mld €)</td><td>1.847</td><td>+0,2</td><td>+0,7</td></tr>
              <tr><td>Inflazione IPCA (%)</td><td>1,2</td><td>-0,3</td><td>-1,4</td></tr>
              <tr><td>Disoccupazione (%)</td><td>5,9</td><td>-0,2</td><td>-1,0</td></tr>
            </tbody>
          </table>
        </div>
      </Demo>
    </section>
  )
}
