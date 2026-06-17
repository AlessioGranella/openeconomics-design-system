import Demo from '../ui/Demo'

const spaces = [
  ['1', 4], ['2', 8], ['3', 12], ['4', 16], ['5', 20], ['6', 24],
  ['7', 32], ['8', 40], ['9', 52], ['10', 64], ['11', 80], ['12', 120],
] as const

export default function SpacingLayout() {
  return (
    <section id="spacing" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Spacing &amp; Layout</h2>
      <p className="dx-lead">
        Griglia modulare a base <strong>4&nbsp;px</strong> (con ancore 20/40/80 usate in Figma).
        Spigolo vivo ovunque: <strong>tutti i raggi sono 0</strong>.
      </p>

      <Demo title="Scala spaziature">
        <div className="dx-space-list">
          {spaces.map(([n, px]) => (
            <div className="dx-space-row" key={n}>
              <code className="dx-swatch__var">--oe-space-{n}</code>
              <span className="dx-space-bar" style={{ width: px }} />
              <span className="dx-space-px">{px}px</span>
            </div>
          ))}
        </div>
      </Demo>

      <Demo
        title="Container"
        description="Larghezza massima 1760px, padding laterale 80px (24px mobile). Le sezioni sono full-bleed; il contenuto sta in .oe-container."
      >
        <div className="dx-layout-demo">
          <div className="dx-layout-demo__full">
            <div className="dx-layout-demo__inner">.oe-container · max 1760px</div>
          </div>
        </div>
      </Demo>
    </section>
  )
}
