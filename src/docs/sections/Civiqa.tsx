import { Scale } from '../ui/Swatch'
import Demo from '../ui/Demo'
import { CiviqaWordmark } from '../../components'

const bluSteps = [
  { step: '900', hex: '#000035' }, { step: '800', hex: '#000068' }, { step: '700', hex: '#0000A1' },
  { step: '600', hex: '#0000FF' }, { step: '500', hex: '#3A3AFF' }, { step: '400', hex: '#6161FF' },
  { step: '300', hex: '#9696FF' }, { step: '200', hex: '#B6B6FF' }, { step: '100', hex: '#D5D5FF' },
  { step: '050', hex: '#F1F1FF' },
]

export default function Civiqa() {
  return (
    <section id="civiqa" className="dx-section">
      <span className="oe-eyebrow">Brand di prodotto</span>
      <h2>Civiqa</h2>
      <p className="dx-lead">
        Civiqa è un brand di prodotto che vive dentro questo design system come sezione a sé.
        L'accento primario è una scala di <strong>blu elettrico</strong> (token namespacati{' '}
        <code>--cv-*</code>, così convivono senza collidere con i <code>--oe-*</code> di OpenEconomics).
      </p>

      <h3>Logo</h3>
      <Demo
        title="Logotipo Civiqa"
        description="Wordmark con il quadrato/pixel iniziale. Usa currentColor: nero su chiaro, bianco su fondi blu scuri."
        code={`import { CiviqaWordmark } from '@/components'

<CiviqaWordmark style={{ height: 48 }} />`}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
          <div style={{ background: '#fff', padding: '40px 48px', flex: '1 1 280px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--oe-gray-200)' }}>
            <CiviqaWordmark className="dx-civiqa-logo" />
          </div>
          <div style={{ background: 'var(--cv-blu-600)', padding: '40px 48px', flex: '1 1 280px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <CiviqaWordmark className="dx-civiqa-logo" />
          </div>
        </div>
      </Demo>

      <h3>Scala Blu</h3>
      <p className="dx-note">
        Accento primario <strong>Blu 600 <code>#0000FF</code></strong> (<code>--cv-blu-600</code>). Shade e tint
        per quando serve più profondità cromatica.
      </p>
      <Scale label="Blu" prefix="--cv-blu" steps={bluSteps} darkFrom={300} />

      <div className="dx-callout" style={{ marginTop: 'var(--oe-space-l)' }}>
        <strong>In arrivo dal Figma Civiqa:</strong> bottone, menu Civiqa, footer, chips e stili di icone.
        Servono i componenti dal file Figma per riprodurli fedelmente — vedi nota a fine sezione.
      </div>
    </section>
  )
}
