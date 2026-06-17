import iconList from '../icons.json'

const icons = iconList as string[]

export default function Icons() {
  return (
    <section id="icone" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Iconografia</h2>
      <p className="dx-lead">
        {icons.length} icone monoline (stroke 1,5–2&nbsp;px), coerenti col linguaggio Carbon / Lucide.
        Resa in colore pieno (Bluette o nero), allineate alla cap-height del testo.
      </p>
      <p className="dx-note">File in <code>public/kit/assets/icons/</code> — usabili come <code>&lt;img&gt;</code> o inline SVG.</p>
      <div className="dx-icon-grid">
        {icons.map((name) => (
          <div className="dx-icon" key={name} title={name}>
            <img src={`kit/assets/icons/${name}`} alt={name} loading="lazy" />
            <span className="dx-icon__name">{name.replace(/\.svg$/, '')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
