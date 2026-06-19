import Demo from '../ui/Demo'

export default function FormsInputs() {
  return (
    <section id="form-input" className="dx-section">
      <span className="oe-eyebrow">Componenti UI</span>
      <h2>Form &amp; Input</h2>
      <p className="dx-lead">
        Campi a spigolo vivo, etichetta in mono, focus sull'accento del brand attivo
        (Bluette o, sotto <code>.theme-civiqa</code>, blu Civiqa).
      </p>

      <Demo
        title="Campi di testo"
        description="Input, select e textarea con etichetta e hint."
        code={`<label class="oe-field">
  <span class="oe-label">Email</span>
  <input class="oe-input" type="email" placeholder="nome@dominio.it" />
</label>

<label class="oe-field oe-field--error">
  <span class="oe-label">Codice</span>
  <input class="oe-input" value="ABC" />
  <span class="oe-field__hint">Codice non valido</span>
</label>`}
      >
        <div className="dx-grid-3" style={{ alignItems: 'start' }}>
          <label className="oe-field">
            <span className="oe-label">Email</span>
            <input className="oe-input" type="email" placeholder="nome@dominio.it" />
          </label>
          <label className="oe-field">
            <span className="oe-label">Area</span>
            <select className="oe-select" defaultValue="">
              <option value="" disabled>Seleziona…</option>
              <option>Impatto</option>
              <option>Finanza pubblica</option>
            </select>
          </label>
          <label className="oe-field oe-field--error">
            <span className="oe-label">Codice</span>
            <input className="oe-input" defaultValue="ABC" />
            <span className="oe-field__hint">Codice non valido</span>
          </label>
        </div>
        <label className="oe-field" style={{ marginTop: 16 }}>
          <span className="oe-label">Note</span>
          <textarea className="oe-textarea" placeholder="Scrivi qui…" />
        </label>
      </Demo>

      <Demo
        title="Ricerca"
        description="Input con icona a sinistra."
        code={`<div class="oe-search">
  <svg viewBox="0 0 24 24">…</svg>
  <input class="oe-input" placeholder="Cerca per tema, territorio o indicatore" />
</div>`}
      >
        <div className="oe-search" style={{ maxWidth: 420 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input className="oe-input" placeholder="Cerca per tema, territorio o indicatore" />
        </div>
      </Demo>

      <Demo
        title="Checkbox, radio, switch"
        description="Selettori a spigolo vivo: checkbox con spunta, radio con quadratino interno, switch."
        code={`<label class="oe-check"><input type="checkbox" checked /> Includi storico</label>
<label class="oe-check"><input type="radio" name="r" checked /> Mensile</label>
<label class="oe-switch"><input type="checkbox" checked /> Notifiche</label>`}
      >
        <div className="dx-row" style={{ gap: 28 }}>
          <label className="oe-check"><input type="checkbox" defaultChecked /> Includi storico</label>
          <label className="oe-check"><input type="checkbox" /> Solo verificati</label>
          <label className="oe-check"><input type="checkbox" disabled /> Disabilitato</label>
        </div>
        <div className="dx-row" style={{ gap: 28, marginTop: 12 }}>
          <label className="oe-check"><input type="radio" name="freq" defaultChecked /> Mensile</label>
          <label className="oe-check"><input type="radio" name="freq" /> Trimestrale</label>
          <label className="oe-switch"><input type="checkbox" defaultChecked /> Notifiche</label>
        </div>
      </Demo>
    </section>
  )
}
