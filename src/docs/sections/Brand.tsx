import Demo from '../ui/Demo'
import { Wordmark } from '../../components'

const flush = { margin: '-32px' } as const

export default function Brand() {
  return (
    <section id="brand" className="dx-section">
      <span className="oe-eyebrow">Brand</span>
      <h2>Logo, slogan, clienti</h2>
      <p className="dx-lead">
        Elementi d'identità: logotipo, lockup dello slogan e strip dei clienti. Logo piccolo e ad
        alto contrasto (nero su chiaro, bianco su scuro), mai in scala di grigi.
      </p>

      <h3>Logo</h3>
      <Demo
        title="Wordmark"
        description="currentColor: nero su chiaro, bianco su scuro."
        code={`import { Wordmark } from '@/components'\n\n<Wordmark style={{ height: 36 }} />`}
      >
        <div className="dx-row"><Wordmark style={{ height: 34, color: 'var(--oe-black)' }} /></div>
        <div className="dx-row dx-row--dark"><Wordmark style={{ height: 34 }} /></div>
      </Demo>

      <h3>Slogan</h3>
      <Demo
        title="Lockup slogan"
        description="Serif su fondo scuro (Bluette / blu sotto Civiqa), con fonte in mono."
        code={`<div class="oe-slogan">
  <div class="oe-slogan__src">— Footer slogan</div>
  <p class="oe-slogan__text">Enabling adaptation. Empowering impact. With platforms, strategy, and trust.</p>
</div>`}
      >
        <div style={flush}>
          <div className="oe-slogan">
            <div className="oe-slogan__src">— Footer slogan</div>
            <p className="oe-slogan__text">Enabling adaptation. Empowering impact.<br />With platforms, strategy, and trust.</p>
          </div>
        </div>
      </Demo>

      <h3>Client strip</h3>
      <Demo
        title="Loghi clienti"
        description="Nomi/loghi monocromatici in serif, bordo grigio sopra e sotto."
        code={`<div class="oe-client-strip">
  <span class="b">FIFA</span><span>Terna</span><span>Enel</span> …
</div>`}
      >
        <div style={flush}>
          <div className="oe-client-strip">
            <span style={{ fontWeight: 700 }}>FIFA</span>
            <span>Terna</span>
            <span style={{ fontStyle: 'italic' }}>Muzinich&amp;Co</span>
            <span style={{ fontWeight: 700 }}>SNAM</span>
            <span style={{ letterSpacing: '0.15em' }}>FIT</span>
            <span>Enel</span>
          </div>
        </div>
      </Demo>
    </section>
  )
}
