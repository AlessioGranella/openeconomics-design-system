import GettingStarted from './sections/GettingStarted'
import Colors from './sections/Colors'
import Typography from './sections/Typography'
import SpacingLayout from './sections/SpacingLayout'
import GridLayout from './sections/GridLayout'
import DataViz from './sections/DataViz'
import Icons from './sections/Icons'
import Components from './sections/Components'
import FormsInputs from './sections/FormsInputs'
import DataDisplay from './sections/DataDisplay'
import DashboardTables from './sections/DashboardTables'
import CardsNav from './sections/CardsNav'
import Footers from './sections/Footers'
import Civiqa from './sections/Civiqa'

const nav = [
  { group: 'Inizio', items: [{ id: 'intro', label: 'Introduzione' }] },
  {
    group: 'Foundations',
    items: [
      { id: 'colori', label: 'Colore' },
      { id: 'tipografia', label: 'Tipografia' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'grid', label: 'Griglia & Breakpoint' },
      { id: 'dataviz', label: 'Data Visualization' },
      { id: 'icone', label: 'Iconografia' },
    ],
  },
  {
    group: 'Componenti',
    items: [
      { id: 'componenti', label: 'Primitive React' },
      { id: 'cards-nav', label: 'Card & Navigazione' },
      { id: 'form-input', label: 'Form & Input' },
      { id: 'data-display', label: 'Tabelle & dati' },
      { id: 'dash-tables', label: 'Tabelle dashboard' },
      { id: 'footer', label: 'Footer' },
    ],
  },
  { group: 'Brand di prodotto', items: [{ id: 'civiqa', label: 'Civiqa' }] },
]

export default function App() {
  return (
    <div className="dx-shell">
      <aside className="dx-sidebar">
        <a className="dx-brand" href="#intro">
          <span className="dx-brand__mark" aria-label="OpenEconomics">
            <svg viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M39.7979 0C17.817 0 0 17.9241 0 40.0386C0 62.1532 17.817 80.0849 39.7979 80.0849C61.779 80.0849 79.6108 62.1606 79.6108 40.0386C79.6108 17.9166 61.7937 0 39.7979 0ZM63.2876 63.6825H16.3156V16.4173H63.2802V63.6899L63.2876 63.6825Z" fill="currentColor"/>
            </svg>
          </span>
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
        <div className="dx-sidebar__foot">v0.2 · © OpenEconomics</div>
      </aside>

      <main className="dx-main">
        <div className="dx-content">
          <GettingStarted />
          <Colors />
          <Typography />
          <SpacingLayout />
          <GridLayout />
          <DataViz />
          <Icons />
          <Components />
          <CardsNav />
          <FormsInputs />
          <DataDisplay />
          <DashboardTables />
          <Footers />
          <Civiqa />
        </div>
      </main>
    </div>
  )
}
