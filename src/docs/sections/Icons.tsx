import iconList from '../icons.json'

const icons = iconList as string[]

// Ultime icone aggiunte: evidenziate in cima alla sezione
const recentBase = ['programmazione', 'progettazione-documento', 'finanziamento', 'approfondimento']
// Ogni icona in 3 declinazioni colore: Bluette 900 + chiaro, Bluette + Lime, Lime + Bluette
const recent = ['', '-bluette-lime', '-lime'].flatMap((v) => recentBase.map((n) => `${n}${v}.svg`))

const iconPath = (name: string) => `kit/assets/icons/${name}`

function IconTile({ name }: { name: string }) {
  return (
    <a className="dx-icon" href={iconPath(name)} download={name} title={`Scarica ${name}`}>
      <img src={iconPath(name)} alt={name} loading="lazy" />
      <span className="dx-icon__name">{name.replace(/\.svg$/, '')}</span>
      <span className="dx-icon__dl">Scarica SVG</span>
    </a>
  )
}

export default function Icons() {
  return (
    <section id="icone" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Iconografia</h2>
      <p className="dx-lead">
        {icons.length} icone monoline (stroke 1,5–2&nbsp;px), coerenti col linguaggio Carbon / Lucide.
        Resa in colore pieno (Bluette o nero), allineate alla cap-height del testo.
      </p>
      <p className="dx-note">
        File in <code>public/kit/assets/icons/</code> — usabili come <code>&lt;img&gt;</code> o inline SVG.
        Clicca un'icona per scaricare l'SVG.
      </p>
      <p>
        <a className="oe-btn oe-btn--md oe-btn--primary dx-icon-download" href="kit/assets/icons.zip" download="openeconomics-icone.zip">
          Scarica tutte le icone (.zip)
        </a>
      </p>

      <h3 className="dx-icon-subhead">Aggiunte di recente</h3>
      <div className="dx-icon-grid">
        {recent.map((name) => <IconTile name={name} key={name} />)}
      </div>

      <h3 className="dx-icon-subhead">Tutte le icone</h3>
      <div className="dx-icon-grid">
        {icons.map((name) => <IconTile name={name} key={name} />)}
      </div>
    </section>
  )
}
