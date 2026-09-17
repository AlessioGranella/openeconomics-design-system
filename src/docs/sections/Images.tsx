const mapPath = (name: string, ext: 'svg' | 'png') => `kit/assets/mappe/${name}.${ext}`

type MapItem = { file: string; label: string }
type MapGroup = { title: string; note: string; items: MapItem[] }

// Mappe a griglia di quadratini: stile Civiqa (blu elettrico #0000FF su fondo bianco, puntini #9999FF)
const vercelli = 'mappa-comune-vercelli'
const italia = 'mappa-italia-evidenziata'

/** Stessa variante per le due mappe con aree evidenziate (comune e Italia). */
const pair = (suffix: string, label: string): MapItem[] => [
  { file: `${vercelli}-${suffix}`, label: `Comune · ${label}` },
  { file: `${italia}-${suffix}`, label: `Italia · ${label}` },
]

const groups: MapGroup[] = [
  {
    title: 'Mappe piene',
    note: 'Tutti i quadrati nello stesso colore. Europa con dissolvenza verso est.',
    items: [
      { file: 'mappa-europa', label: 'Europa' },
      { file: 'mappa-italia', label: 'Italia' },
      { file: 'mappa-piemonte', label: 'Piemonte' },
      { file: 'mappa-comune-vercelli-pieno', label: 'Comune (Vercelli)' },
    ],
  },
  {
    title: 'Aree evidenziate · originali',
    note: 'Alcuni quadrati in blu pieno, gli altri azzurri.',
    items: [
      { file: vercelli, label: 'Comune (Vercelli)' },
      { file: 'mappa-italia-evidenziata', label: 'Italia' },
    ],
  },
  {
    title: 'Aree evidenziate · blu Civiqa su base chiara',
    note: 'Quadrati evidenziati in #0000FF; base in gradiente chiaro, extra chiaro e con meno evidenziati.',
    items: [
      ...pair('blu-civiqa-chiaro', 'base chiara'),
      ...pair('blu-civiqa-grandi-chiaro', 'base chiara, quadrati grandi'),
      ...pair('blu-civiqa-extrachiaro', 'base extra chiara'),
      ...pair('blu-civiqa-grandi-extrachiaro', 'base extra chiara, quadrati grandi'),
      ...pair('blu-civiqa-extrachiaro-meno', 'extra chiara, meno evidenziati'),
      ...pair('blu-civiqa-grandi-extrachiaro-meno', 'extra chiara, meno evidenziati, grandi'),
    ],
  },
  {
    title: 'Aree evidenziate · blu scuro',
    note: 'Quadrati evidenziati in blu Civiqa 800 #000068.',
    items: [
      ...pair('blu-scuro', 'base azzurra'),
      ...pair('blu-scuro-grandi', 'base azzurra, quadrati grandi'),
      ...pair('blu-scuro-chiaro', 'base chiara'),
      ...pair('blu-scuro-grandi-chiaro', 'base chiara, quadrati grandi'),
    ],
  },
  {
    title: 'Aree evidenziate · lime',
    note: 'Quadrati evidenziati in Lime #B9FF69. Contrasto basso su base chiara: preferire i quadrati grandi.',
    items: [
      ...pair('lime', 'base azzurra'),
      ...pair('lime-grandi', 'base azzurra, quadrati grandi'),
      ...pair('lime-chiaro', 'base chiara'),
      ...pair('lime-grandi-chiaro', 'base chiara, quadrati grandi'),
    ],
  },
]

const total = groups.reduce((n, g) => n + g.items.length, 0)

export default function Images() {
  return (
    <section id="immagini" className="dx-section">
      <span className="oe-eyebrow">Brand</span>
      <h2>Immagini</h2>
      <p className="dx-lead">
        {total} mappe a griglia di quadratini in stile Civiqa: blu elettrico su fondo bianco, con la
        trama di puntini attorno al territorio. Formato quadrato 1080×1080.
      </p>
      <p className="dx-note">
        File in <code>public/kit/assets/mappe/</code>, ognuno in SVG (vettoriale, da preferire) e PNG.
      </p>
      <p>
        <a className="oe-btn oe-btn--md oe-btn--primary dx-icon-download" href="kit/assets/mappe.zip" download="openeconomics-mappe.zip">
          Scarica tutte le mappe (.zip)
        </a>
      </p>

      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="dx-icon-subhead">{g.title}</h3>
          <p className="dx-note">{g.note}</p>
          <div className="dx-map-grid">
            {g.items.map((m) => (
              <figure className="dx-map" key={m.file}>
                <img src={mapPath(m.file, 'svg')} alt={m.label} loading="lazy" width={1080} height={1080} />
                <figcaption className="dx-map__cap">
                  <span className="dx-map__name">{m.label}</span>
                  <span className="dx-map__dl">
                    <a href={mapPath(m.file, 'svg')} download={`${m.file}.svg`}>SVG</a>
                    <a href={mapPath(m.file, 'png')} download={`${m.file}.png`}>PNG</a>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
