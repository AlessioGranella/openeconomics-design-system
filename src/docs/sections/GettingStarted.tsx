export default function GettingStarted() {
  return (
    <section id="intro" className="dx-section">
      <span className="oe-eyebrow">OpenEconomics Design System</span>
      <h1 className="dx-hero">UI Kit &amp; documentazione</h1>
      <p className="dx-lead">
        La fonte di verità per costruire web page, minisiti di analisi e dashboard OpenEconomics
        mantenendo coerenza di UI e UX. Token, tipografia, colori e componenti — tutto in un posto solo.
      </p>

      <div className="dx-cards">
        <div className="dx-card">
          <h4>Una sola fonte</h4>
          <p>I token e i font vivono in <code>design-system/src/styles</code>. Sito ed Eni li raggiungono via symlink: modifichi una volta, vale ovunque.</p>
        </div>
        <div className="dx-card">
          <h4>Token in CSS e JS</h4>
          <p><code>colors_and_type.css</code> per le pagine; <code>tokens.ts</code> per i grafici e la logica delle dashboard.</p>
        </div>
        <div className="dx-card">
          <h4>Componenti importabili</h4>
          <p>Primitive React on-brand in <code>src/components</code>, documentate qui con anteprima e codice.</p>
        </div>
      </div>

      <h3>Come si usa in un nuovo progetto</h3>
      <pre className="dx-code"><code>{`// 1. Token CSS (in index.css del progetto)
@import "<path>/design-system/src/styles/colors_and_type.css";

// 2. Token JS per i grafici
import { chartSeries, color, formatNumber } from '.../design-system/src/tokens'

// 3. Componenti
import { Button, KpiCard, Tag } from '.../design-system/src/components'`}</code></pre>
      <p className="dx-note">
        Suggerimento: per i prossimi asset valuteremo un alias <code>@oe</code> o un pacchetto condiviso,
        così gli import restano corti e stabili.
      </p>
    </section>
  )
}
