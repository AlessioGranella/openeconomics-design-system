import { useRef } from 'react'
import { catalog, previewBase, prototypes } from '../catalog'

/** iframe che si auto-dimensiona sull'altezza del contenuto (stesso origin). */
function AutoFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null)
  const resize = () => {
    const f = ref.current
    try {
      const doc = f?.contentDocument
      if (f && doc) f.style.height = `${doc.body.scrollHeight}px`
    } catch {
      /* cross-origin: lascia altezza di default */
    }
  }
  return (
    <iframe
      ref={ref}
      className="dx-cat-frame"
      src={src}
      title={title}
      loading="lazy"
      onLoad={resize}
    />
  )
}

function PreviewCard({ file, label }: { file: string; label: string }) {
  const src = `${previewBase}/${file}.html`
  return (
    <div className="dx-cat-card" id={`comp-${file}`}>
      <div className="dx-cat-card__head">
        <span className="dx-cat-card__label">{label}</span>
        <a className="dx-cat-btn" href={src} target="_blank" rel="noreferrer">Apri ↗</a>
      </div>
      <AutoFrame src={src} title={label} />
    </div>
  )
}

export default function Catalog() {
  return (
    <section id="catalogo" className="dx-section">
      <span className="oe-eyebrow">Catalogo ufficiale</span>
      <h2>Componenti</h2>
      <p className="dx-lead">
        Le schede del kit ufficiale (generato da Figma + Brand Manual), renderizzate dal vivo con i
        token reali. Apri ↗ per la pagina intera.
      </p>

      {catalog.map((g) => (
        <div key={g.id} id={g.id} className="dx-cat-group">
          <h3>{g.title}</h3>
          <div className="dx-cat-grid">
            {g.items.map((it) => (
              <PreviewCard key={it.file} file={it.file} label={it.label} />
            ))}
          </div>
        </div>
      ))}

      <h3 id="prototipi">Prototipi interattivi</h3>
      <div className="dx-proto-grid">
        {prototypes.map((p) => (
          <a key={p.href} className="dx-proto-card" href={p.href} target="_blank" rel="noreferrer">
            <span className="dx-proto-card__title">{p.title} ↗</span>
            <span className="dx-proto-card__desc">{p.desc}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
