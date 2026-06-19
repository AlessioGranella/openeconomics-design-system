import Demo from '../ui/Demo'

export default function DashboardTables() {
  return (
    <section id="dash-tables" className="dx-section">
      <span className="oe-eyebrow">Componenti UI · Dashboard</span>
      <h2>Tabelle dashboard</h2>
      <p className="dx-lead">
        Composizioni di tabella specifiche per i dati finanziari delle dashboard (CapEx/OPEX, KPI
        editabili, moltiplicatori, riepilogo). Numeri IT tabulari; accento del brand attivo.
      </p>

      <h3>Topbar dashboard</h3>
      <Demo
        title="Barra superiore"
        description="Bianca con bordo inferiore lime (blu sotto Civiqa): eyebrow + titolo a sinistra, filtri a destra."
        code={`<header class="oe-topbar">
  <div>
    <div class="oe-topbar__eyebrow">Panoramica</div>
    <h1 class="oe-topbar__title">Quadro macro — Italia</h1>
  </div>
  <div class="oe-topbar__actions"><div class="oe-segment">…</div></div>
</header>`}
      >
        <div style={{ margin: '-32px' }}>
          <header className="oe-topbar">
            <div>
              <div className="oe-topbar__eyebrow">Panoramica</div>
              <h1 className="oe-topbar__title">Quadro macro — Italia</h1>
            </div>
            <div className="oe-topbar__actions">
              <div className="oe-segment">
                <button className="oe-segment__btn is-active">Tutto</button>
                <button className="oe-segment__btn">Ultimi 4 trim.</button>
              </div>
            </div>
          </header>
        </div>
      </Demo>

      <h3>Tabella CapEx / OPEX</h3>
      <Demo
        title="Spesa pluriennale"
        description="Header sull'accento, prima colonna etichetta su grigio, riga Totale evidenziata."
        code={`<table class="oe-table oe-table--capex">
  <thead><tr><th>Voce di spesa</th><th>2023</th>…</tr></thead>
  <tbody>
    <tr><td>Costi del personale</td><td>276.000 €</td>…</tr>
    <tr><td>Totale</td><td>503.500 €</td>…</tr>
  </tbody>
</table>`}
      >
        <div className="oe-table__wrap">
          <table className="oe-table oe-table--capex">
            <thead><tr><th>Voce di spesa</th><th>2023</th><th>2024</th><th>2025</th><th>2026</th></tr></thead>
            <tbody>
              <tr><td>Costi del personale</td><td>276.000 €</td><td>276.000 €</td><td>276.000 €</td><td>276.000 €</td></tr>
              <tr><td>Costi operativi</td><td>142.500 €</td><td>148.000 €</td><td>155.000 €</td><td>160.000 €</td></tr>
              <tr><td>Investimenti</td><td>85.000 €</td><td>90.000 €</td><td>92.000 €</td><td>88.000 €</td></tr>
              <tr><td>Totale</td><td>503.500 €</td><td>514.000 €</td><td>523.000 €</td><td>524.000 €</td></tr>
            </tbody>
          </table>
        </div>
      </Demo>

      <h3>Tabella KPI editabile</h3>
      <Demo
        title="Distribuzione per anno"
        description="Righe categoria (.oe-table__cat) + celle input (.oe-input--cell) + barra azioni."
        code={`<table class="oe-table">
  <thead><tr><th>KPI</th><th>Valore</th><th>2025</th>…</tr></thead>
  <tbody>
    <tr class="oe-table__cat"><td colspan="6">Risparmio ambientale</td></tr>
    <tr><td>Migliore qualità rifiuti</td><td>509.000.999 €</td>
        <td><input class="oe-input oe-input--cell" value="0,00"></td>…</tr>
  </tbody>
</table>
<div class="oe-table__actions">…</div>`}
      >
        <div className="oe-table__wrap">
          <table className="oe-table oe-table--numeric">
            <thead><tr><th>KPI</th><th>Valore</th><th>2025</th><th>2026</th><th>2027</th></tr></thead>
            <tbody>
              <tr className="oe-table__cat"><td colSpan={5}>Risparmio ambientale</td></tr>
              <tr><td>Migliore qualità rifiuti</td><td>509.000.999 €</td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td></tr>
              <tr><td>Fattore Risparmio Amb.</td><td>509.000.999 €</td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td></tr>
              <tr className="oe-table__cat"><td colSpan={5}>Maggiore introito da TARI</td></tr>
              <tr><td>Numero nuovi paganti</td><td>509.000.999 €</td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td>
                <td><input className="oe-input oe-input--cell" defaultValue="0,00" /></td></tr>
            </tbody>
          </table>
          <div className="oe-table__actions">
            <button className="oe-btn oe-btn--primary oe-btn--sm">Inserisci automaticamente sugli anni</button>
            <button className="oe-btn oe-btn--ghost oe-btn--sm">Pulisci la distribuzione ✕</button>
          </div>
        </div>
      </Demo>

      <h3>Pannello moltiplicatori</h3>
      <Demo
        title="Metriche con header accento"
        description="Header sull'accento (range evidenziato), righe label + sottotitolo + valore, totale evidenziato, link in fondo."
        code={`<div class="oe-metrics">
  <div class="oe-metrics__head">
    <div class="oe-metrics__title">Moltiplicatori di spesa</div>
    <div class="oe-metrics__range">Range</div>
  </div>
  <div class="oe-metrics__row">…</div>
  <div class="oe-metrics__link">Approfondisci →</div>
</div>`}
      >
        <div className="oe-metrics" style={{ maxWidth: 480 }}>
          <div className="oe-metrics__head">
            <div className="oe-metrics__title">
              Moltiplicatori di spesa
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            </div>
            <div className="oe-metrics__range">Range</div>
          </div>
          {[
            ['Moltiplicatore diretto', 'Effetto della spesa iniziale', '0,89'],
            ['Moltiplicatore indiretto', "Effetto sull'economia collegata", '0,66'],
            ['Moltiplicatore indotto', 'Effetto dei consumi generati', '0,31'],
          ].map(([l, s, v]) => (
            <div className="oe-metrics__row" key={l}>
              <div><div className="oe-metrics__label">{l}</div><div className="oe-metrics__sub">{s}</div></div>
              <div className="oe-metrics__value">{v}</div>
            </div>
          ))}
          <div className="oe-metrics__row">
            <div className="oe-metrics__label">Moltiplicatore totale stimato</div>
            <div className="oe-metrics__value">1,86</div>
          </div>
          <div className="oe-metrics__link">Approfondisci i moltiplicatori di spesa →</div>
        </div>
      </Demo>

      <h3>Recap</h3>
      <Demo
        title="Riepilogo label + valore"
        description="Lista chiave/valore in grassetto con nota finale."
        code={`<div class="oe-recap">
  <div class="oe-recap__row"><span class="oe-recap__label">Investimento totale</span><span class="oe-recap__value">503.500 €</span></div>
  <div class="oe-recap__note">Nota metodologica…</div>
</div>`}
      >
        <div className="oe-recap" style={{ maxWidth: 380 }}>
          {[
            ['Investimento totale', '503.500 €'],
            ['Beneficio netto attualizzato', '1.284.000 €'],
            ['Rapporto benefici/costi', '2,55'],
            ['Periodo di ritorno', '4,2 anni'],
          ].map(([l, v]) => (
            <div className="oe-recap__row" key={l}>
              <span className="oe-recap__label">{l}</span><span className="oe-recap__value">{v}</span>
            </div>
          ))}
          <div className="oe-recap__note">Valori stimati su fonti pubbliche; cfr. nota metodologica del report.</div>
        </div>
      </Demo>
    </section>
  )
}
