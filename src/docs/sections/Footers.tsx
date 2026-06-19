import Demo from '../ui/Demo'
import { Footer } from '../../components'

/** Annulla il padding (32px) dell'area di anteprima così il footer va a tutta larghezza. */
const flush = { margin: '-32px' } as const

export default function Footers() {
  return (
    <section id="footer" className="dx-section">
      <span className="oe-eyebrow">Componenti</span>
      <h2>Footer</h2>
      <p className="dx-lead">
        Footer di brand su fondo Bluette scuro, in due varianti selezionabili a seconda del
        progetto. Logotipo bianco + tagline serif, riga di chiusura con copyright e note legali.
        Importabile da <code>design-system/src/components</code>.
      </p>

      <Demo
        title="Standard Footer"
        description="Variante essenziale: brand, copyright e link legali (privacy, cookie). Per sito, landing e mini-siti di report."
        code={`import { Footer } from '@/components'

<Footer variant="standard" />`}
      >
        <div style={flush}>
          <Footer variant="standard" />
        </div>
      </Demo>

      <Demo
        title="Footer Analisi"
        description="Come lo Standard, ma con la colonna “Condizioni d'uso” e il disclaimer: per report e documenti di analisi che vanno distribuiti citando la fonte."
        code={`import { Footer } from '@/components'

<Footer variant="analisi" />

// disclaimer / link personalizzabili via props:
// <Footer variant="analisi" disclaimer="…" links={[…]} />`}
      >
        <div style={flush}>
          <Footer variant="analisi" />
        </div>
      </Demo>
    </section>
  )
}
