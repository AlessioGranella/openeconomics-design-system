import GettingStarted from './sections/GettingStarted'
import Colors from './sections/Colors'
import Typography from './sections/Typography'
import SpacingLayout from './sections/SpacingLayout'
import DataViz from './sections/DataViz'
import Icons from './sections/Icons'
import Components from './sections/Components'
import Catalog from './sections/Catalog'
import { catalog } from './catalog'

const nav = [
  { group: 'Inizio', items: [{ id: 'intro', label: 'Introduzione' }] },
  {
    group: 'Foundations',
    items: [
      { id: 'colori', label: 'Colore' },
      { id: 'tipografia', label: 'Tipografia' },
      { id: 'spacing', label: 'Spacing & Layout' },
      { id: 'dataviz', label: 'Data Visualization' },
      { id: 'icone', label: 'Iconografia' },
    ],
  },
  // Un gruppo per ogni famiglia del catalogo, con un link per ciascun componente
  ...catalog.map((g) => ({
    group: g.title,
    items: g.items.map((it) => ({ id: `comp-${it.file}`, label: it.label })),
  })),
  { group: 'Altro', items: [
    { id: 'prototipi', label: 'Prototipi' },
    { id: 'componenti', label: 'Componenti React' },
  ] },
]

export default function App() {
  return (
    <div className="dx-shell">
      <aside className="dx-sidebar">
        <a className="dx-brand" href="#intro">
          <span className="dx-brand__mark">OE</span>
          <span className="dx-brand__txt">Design System</span>
        </a>
        <nav className="dx-nav">
          {nav.map((g) => (
            <div className="dx-nav__group" key={g.group}>
              <div className="dx-nav__title">{g.group}</div>
              {g.items.map((it) => (
                <a className="dx-nav__link" href={`#${it.id}`} key={it.id}>
                  {it.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <div className="dx-sidebar__foot">v0.1 · © OpenEconomics</div>
      </aside>

      <main className="dx-main">
        <div className="dx-content">
          <GettingStarted />
          <Colors />
          <Typography />
          <SpacingLayout />
          <DataViz />
          <Icons />
          <Catalog />
          <Components />
        </div>
      </main>
    </div>
  )
}
