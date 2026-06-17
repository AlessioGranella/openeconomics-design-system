import Demo from '../ui/Demo'
import { grid, breakpoint } from '../../tokens'

/* Colonne per fascia di viewport (da Figma). */
const responsive = [
  { name: 'Desktop XL', range: '≥ 1440px', token: '--oe-bp-xxl', cols: grid.cols.xl, margin: grid.margin, gutter: grid.gutter },
  { name: 'Desktop', range: '1200–1439px', token: '--oe-bp-xl', cols: grid.cols.l, margin: grid.margin, gutter: grid.gutter },
  { name: 'Tablet', range: '768–1199px', token: '--oe-bp-l / m', cols: grid.cols.m, margin: 16, gutter: 16 },
  { name: 'Mobile', range: '< 768px', token: '—', cols: grid.cols.s, margin: 16, gutter: 16 },
] as const

const bps = [
  ['--oe-bp-xxl', breakpoint.xxl],
  ['--oe-bp-xl', breakpoint.xl],
  ['--oe-bp-l', breakpoint.l],
  ['--oe-bp-m', breakpoint.m],
] as const

function ColumnGrid({ cols }: { cols: number }) {
  return (
    <div className="dx-gridviz" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: grid.gutter }}>
      {Array.from({ length: cols }, (_, i) => (
        <div className="dx-gridviz__col" key={i}>
          <span className="dx-gridviz__num">{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

export default function GridLayout() {
  return (
    <section id="grid" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Griglia &amp; Breakpoint</h2>
      <p className="dx-lead">
        Griglia a colonne responsive. Larghezza massima del contenuto{' '}
        <strong>{grid.max}px</strong> (<code>--oe-grid-max</code>), gutter{' '}
        <strong>{grid.gutter}px</strong> (<code>--oe-grid-gutter</code>), margine esterno{' '}
        <strong>{grid.margin}px</strong> (<code>--oe-grid-margin</code>).
      </p>

      <Demo
        title="Griglia desktop — 12 colonne"
        description={`Contenuto entro ${grid.max}px, gutter ${grid.gutter}px tra le colonne.`}
      >
        <ColumnGrid cols={grid.cols.xl} />
      </Demo>

      <Demo title="Tablet — 8 colonne">
        <ColumnGrid cols={grid.cols.m} />
      </Demo>

      <Demo title="Mobile — 4 colonne">
        <ColumnGrid cols={grid.cols.s} />
      </Demo>

      <Demo
        title="Colonne per fascia"
        description="Quante colonne usare a ogni dimensione di schermo."
      >
        <table className="dx-table">
          <thead>
            <tr><th>Fascia</th><th>Viewport</th><th>Colonne</th><th>Margine</th><th>Gutter</th></tr>
          </thead>
          <tbody>
            {responsive.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td><code className="dx-swatch__var">{r.range}</code></td>
                <td><strong>{r.cols}</strong></td>
                <td>{r.margin}px</td>
                <td>{r.gutter}px</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Demo>

      <Demo
        title="Breakpoint"
        description="Soglie usate in media query (token --oe-bp-*)."
      >
        <div className="dx-space-list">
          {bps.map(([token, px]) => (
            <div className="dx-space-row" key={token}>
              <code className="dx-swatch__var">{token}</code>
              <span className="dx-bp-bar" style={{ width: `${(px / breakpoint.xxl) * 100}%` }} />
              <span className="dx-space-px">{px}px</span>
            </div>
          ))}
        </div>
      </Demo>
    </section>
  )
}
