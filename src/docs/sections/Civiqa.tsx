import type { ReactNode } from 'react'
import { Scale } from '../ui/Swatch'
import Demo from '../ui/Demo'
import { CiviqaWordmark } from '../../components'

const bluSteps = [
  { step: '900', hex: '#000035' }, { step: '800', hex: '#000068' }, { step: '700', hex: '#0000A1' },
  { step: '600', hex: '#0000FF' }, { step: '500', hex: '#3A3AFF' }, { step: '400', hex: '#6161FF' },
  { step: '300', hex: '#9696FF' }, { step: '200', hex: '#B6B6FF' }, { step: '100', hex: '#D5D5FF' },
  { step: '050', hex: '#F1F1FF' },
]

/** Annulla il padding (32px) dell'area di anteprima per i blocchi a tutta larghezza. */
const flush = { margin: '-32px' } as const

/* Icone Civiqa: outline, tratto bianco su quadrato blu scuro (stile dal Figma). */
const icons: Record<string, ReactNode> = {
  home: <><path d="M4 11 14 3l10 8" /><path d="M6 10v13h16V10" /></>,
  user: <><circle cx="14" cy="10" r="4" /><path d="M6 24c0-4 3.6-7 8-7s8 3 8 7" /></>,
  map: <><path d="M3 6 11 3l6 3 8-3v19l-8 3-6-3-8 3V6Z" /><path d="M11 3v19M17 6v19" /></>,
  compass: <><circle cx="14" cy="14" r="11" /><path d="m18.5 9.5-2 5-5 2 2-5 5-2Z" /></>,
  code: <><path d="m10 9-5 5 5 5M18 9l5 5-5 5" /></>,
}

export default function Civiqa() {
  return (
    <section id="civiqa" className="dx-section">
      <span className="oe-eyebrow">Brand di prodotto</span>
      <h2>Civiqa</h2>
      <p className="dx-lead">
        Civiqa è un brand di prodotto che vive dentro questo design system come sezione a sé.
        L'accento primario è una scala di <strong>blu elettrico</strong> (token namespacati{' '}
        <code>--cv-*</code>, così convivono senza collidere con i <code>--oe-*</code> di OpenEconomics).
        Spigolo vivo come tutto il sistema.
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

      <h3>Bottoni</h3>
      <Demo
        title="Varianti"
        description="Etichetta mono uppercase, spigolo vivo. Primario blu, scuro, outline, tint e text-link."
        code={`<button class="cv-btn cv-btn--primary">Submit</button>
<button class="cv-btn cv-btn--dark">Submit</button>
<button class="cv-btn cv-btn--outline">Submit</button>
<button class="cv-btn cv-btn--tint">Submit</button>
<a class="cv-btn cv-btn--link">Vedi tutti gli articoli →</a>`}
      >
        <div className="dx-row">
          <button className="cv-btn cv-btn--primary">Submit</button>
          <button className="cv-btn cv-btn--dark">Submit</button>
          <button className="cv-btn cv-btn--outline">Submit</button>
          <button className="cv-btn cv-btn--tint">Submit</button>
        </div>
        <div className="dx-row">
          <a className="cv-btn cv-btn--link" href="#civiqa">Vedi tutti gli articoli della categoria →</a>
        </div>
      </Demo>

      <h3>Chips</h3>
      <Demo
        title="Chip"
        description="Mono uppercase con quadratino/pixel iniziale. Attivo = blu pieno; default = tinta blu chiara."
        code={`<span class="cv-chip cv-chip--active">Storie dal territorio</span>
<span class="cv-chip">Guida agli indicatori</span>`}
      >
        <div className="dx-row">
          <span className="cv-chip cv-chip--active">Storie dal territorio</span>
          <span className="cv-chip">Guida agli indicatori</span>
          <span className="cv-chip">Sussidi e incentivi</span>
        </div>
      </Demo>

      <h3>Iconografia</h3>
      <Demo
        title="Stile icone"
        description="Outline a tratto uniforme, bianco su quadrato blu scuro (--cv-blu-900). Riquadro 56px, glifo 28px."
      >
        <div className="dx-row">
          {Object.entries(icons).map(([name, paths]) => (
            <span className="cv-icon" key={name} aria-hidden>
              <svg viewBox="0 0 28 28">{paths}</svg>
            </span>
          ))}
        </div>
      </Demo>

      <h3>Menu</h3>
      <Demo
        title="Top nav"
        description="Barra bianca: logo Civiqa a sinistra, link (attivo sottolineato in blu), rimando a OpenEconomics a destra."
        code={`<nav class="cv-nav">
  <a class="cv-nav__logo">…Civiqa…</a>
  <span class="cv-nav__links">
    <a class="cv-nav__link is-active">Piattaforma</a>
    <a class="cv-nav__link">Data Room</a>
    <a class="cv-nav__link">Scenari</a>
  </span>
  <a class="cv-nav__oe">OpenEconomics</a>
</nav>`}
      >
        <div style={flush}>
          <nav className="cv-nav">
            <CiviqaWordmark className="cv-nav__logo" />
            <span className="cv-nav__links">
              <a className="cv-nav__link is-active" href="#civiqa">Piattaforma</a>
              <a className="cv-nav__link" href="#civiqa">Data Room</a>
              <a className="cv-nav__link" href="#civiqa">Scenari</a>
            </span>
            <a className="cv-nav__oe" href="#civiqa">OpenEconomics</a>
          </nav>
        </div>
      </Demo>

      <h3>Footer</h3>
      <Demo
        title="Footer Civiqa"
        description="Fondo blu scuro, logotipo bianco, colonne di link + CTA, tagline serif, sedi, social e barra legale con switch lingua."
      >
        <div style={flush}>
          <footer className="cv-footer">
            <div className="cv-footer__inner">
              <CiviqaWordmark className="cv-footer__logo" />

              <div className="cv-footer__top">
                <div className="cv-footer__cols">
                  <nav className="cv-footer__col">
                    <a className="cv-footer__link" href="#civiqa">Home</a>
                    <a className="cv-footer__link" href="#civiqa">Data Room</a>
                    <a className="cv-footer__link" href="#civiqa">Scenari</a>
                    <a className="cv-footer__link" href="#civiqa">Valutazioni e incentivi (coming soon)</a>
                  </nav>
                  <nav className="cv-footer__col">
                    <a className="cv-footer__link" href="#civiqa">Contattaci</a>
                    <a className="cv-footer__link" href="#civiqa">FAQ</a>
                    <a className="cv-footer__link" href="#civiqa">OpenEconomics</a>
                  </nav>
                </div>
                <div className="cv-footer__cta">
                  <button className="cv-btn cv-btn--primary">Registrati gratis alla Data Room</button>
                  <button className="cv-btn cv-btn--ghost-light">Accedi</button>
                </div>
                <div />
              </div>

              <hr className="cv-footer__rule" />

              <div className="cv-footer__mid">
                <p className="cv-footer__tagline">Turning public data into better decisions. For smarter public governance.</p>
                <div className="cv-footer__addr">Via Vitorchiano, 123<br />00189 Roma (RM)<br />+39 06 8414</div>
                <div className="cv-footer__addr">Via J. F. Kennedy, 57/59<br />87036 Rende (CS)<br />+39 0984 302539</div>
                <div className="cv-footer__addr">Via Nino Bixio, 7<br />20129 Milano (MI)<br />+39 071 9715460</div>
              </div>

              <div className="cv-footer__social">
                <a href="#civiqa" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H9V9Z" /></svg></a>
                <a href="#civiqa" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5C.5 9.4.5 12 .5 12s0 2.6.5 4.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.5.5-4.5s0-2.6-.5-4.5ZM9.8 15.4V8.6l6 3.4-6 3.4Z" /></svg></a>
              </div>

              <hr className="cv-footer__rule" />

              <div className="cv-footer__bottom">
                <span>© 2026 Civiqa — Un progetto di OpenEconomics | Partita IVA 12504821005</span>
                <nav className="cv-footer__legal">
                  <a href="#civiqa">Privacy Policy</a>
                  <a href="#civiqa">Cookie Policy</a>
                  <a href="#civiqa">Termini e Condizioni</a>
                </nav>
                <span className="cv-footer__lang">
                  <a className="is-active" href="#civiqa">IT</a>
                  <a href="#civiqa">ENG</a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </Demo>
    </section>
  )
}
