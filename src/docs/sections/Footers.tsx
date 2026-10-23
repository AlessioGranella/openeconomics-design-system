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
        progetto. Logotipo bianco + tagline serif, sede (Headquarter) con indirizzo e telefono, riga di
        chiusura con il link al sito a sinistra, copyright e note legali a destra.
        Importabile da <code>design-system/src/components</code>.
      </p>

      <Demo
        title="Standard Footer"
        description="Variante essenziale: brand e sede a destra; sotto la riga, link al sito e copyright a sinistra, link legali (privacy, cookie) a destra. Per sito, landing e mini-siti di report."
        code={`import { Footer } from '@/components'

<Footer variant="standard" />

// sede e sito personalizzabili (headquarters={null} la nasconde):
// <Footer headquarters={{ address: ['…', '…'], phone: '…' }}
//         website="www.openeconomics.eu" websiteUrl="https://www.openeconomics.eu" />`}
      >
        <div style={flush}>
          <Footer variant="standard" />
        </div>
      </Demo>

      <Demo
        title="Footer Analisi"
        description="Come lo Standard, ma con la colonna “Condizioni d'uso” e il disclaimer (la sede scende sotto il payoff): per report e documenti di analisi che vanno distribuiti citando la fonte."
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
