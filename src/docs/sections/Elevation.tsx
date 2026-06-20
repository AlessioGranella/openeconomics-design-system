import Demo from '../ui/Demo'

const shadows = [
  { name: 'Shadow 1', token: '--oe-shadow-1', use: 'chip / elementi piccoli' },
  { name: 'Shadow 2', token: '--oe-shadow-2', use: 'card in hover' },
  { name: 'Shadow 3', token: '--oe-shadow-3', use: 'popover / tooltip' },
]

export default function Elevation() {
  return (
    <section id="elevation" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Elevation &amp; Radii</h2>
      <p className="dx-lead">
        Il brand è prevalentemente piatto: le ombre si usano con parsimonia, la separazione di
        norma è data dalla hairline. Tre livelli (token <code>--oe-shadow-*</code>). I raggi sono{' '}
        <strong>0 ovunque</strong> — spigolo vivo, nessuna eccezione.
      </p>

      <Demo title="Elevation" description="Tre livelli di ombra, dal più sottile al popover.">
        <div className="dx-grid-3">
          {shadows.map((s) => (
            <div key={s.token} style={{ background: 'var(--oe-white)', padding: '18px 16px', height: 110, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `var(${s.token})` }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</span>
              <code className="dx-swatch__var">{s.token} · {s.use}</code>
            </div>
          ))}
        </div>
      </Demo>

      <Demo title="Radii" description="Tutti i raggi sono 0px: card, bottoni, input, chip, immagini.">
        <div className="dx-row" style={{ gap: 24 }}>
          {['--oe-radius-sm', '--oe-radius-md', '--oe-radius-lg', '--oe-radius-pill'].map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 96, height: 72, background: 'var(--oe-accent)', borderRadius: `var(${r})` }} />
              <code className="dx-swatch__var">{r} · 0</code>
            </div>
          ))}
        </div>
      </Demo>
    </section>
  )
}
