import Demo from '../ui/Demo'
import { Button, Tag, Accordion } from '../../components'

const flush = { margin: '-32px' } as const

export default function BlocksSite() {
  return (
    <section id="blocks-site" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Sito</span>
      <h2>Blocchi — Sito &amp; landing</h2>
      <p className="dx-lead">
        Sezioni intere pronte all'uso, composte dai componenti del sistema. Copia il markup;
        sotto <code>.theme-civiqa</code> l'accento diventa blu.
      </p>

      <h3>Hero</h3>
      <Demo
        title="Hero"
        description="Eyebrow + titolo serif + lead + azioni."
        code={`<section class="oe-hero">
  <span class="oe-eyebrow">Analisi d'impatto</span>
  <h1 class="oe-hero__title">Trasformiamo dati complessi in decisioni con cui rischiare capitale e policy.</h1>
  <p class="oe-hero__lead">Soluzioni integrate per l'analisi socioeconomica e la gestione di finanziamenti pubblici.</p>
  <div class="oe-hero__actions">
    <button class="oe-btn oe-btn--primary oe-btn--lg">Parla con un esperto</button>
    <button class="oe-btn oe-btn--ghost oe-btn--lg">Scopri le piattaforme</button>
  </div>
</section>`}
      >
        <section className="oe-hero">
          <span className="oe-eyebrow">Analisi d'impatto</span>
          <h1 className="oe-hero__title">Trasformiamo dati complessi in decisioni solide.</h1>
          <p className="oe-hero__lead">Soluzioni integrate per l'analisi socioeconomica e la gestione di finanziamenti pubblici.</p>
          <div className="oe-hero__actions">
            <Button variant="primary" size="lg">Parla con un esperto</Button>
            <Button variant="ghost" size="lg">Scopri le piattaforme</Button>
          </div>
        </section>
      </Demo>

      <h3>Logo cloud</h3>
      <Demo
        title="Clienti"
        description="Titolo + strip dei clienti."
        code={`<p class="oe-eyebrow">Hanno scelto OpenEconomics</p>
<div class="oe-client-strip"> … </div>`}
      >
        <div style={flush}>
          <div style={{ padding: '24px 24px 0', textAlign: 'center' }}>
            <span className="oe-eyebrow">Hanno scelto OpenEconomics</span>
          </div>
          <div className="oe-client-strip" style={{ borderTop: 0 }}>
            <span style={{ fontWeight: 700 }}>FIFA</span><span>Terna</span>
            <span style={{ fontStyle: 'italic' }}>Muzinich&amp;Co</span>
            <span style={{ fontWeight: 700 }}>SNAM</span><span>Enel</span>
          </div>
        </div>
      </Demo>

      <h3>Feature grid</h3>
      <Demo
        title="Griglia di feature"
        description=".oe-grid + .oe-card su 3 colonne (responsive)."
        code={`<section class="oe-grid">
  <article class="oe-card oe-col-4 oe-col-m-4">
    <span class="oe-card__eyebrow">Externalytics</span>
    <h3 class="oe-card__title">Misura l'impatto</h3>
    <p class="oe-card__body">…</p>
  </article>
  …
</section>`}
      >
        <section className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
          {[
            ['Externalytics', "Misura l'impatto", 'Valutazione socioeconomica su 30+ aree geografiche.'],
            ['Sonar', 'Anticipa i rischi', 'Early warning su territori e settori in tempo reale.'],
            ['Public Funding', 'Gestisci i fondi', 'Strumenti per la gestione dei finanziamenti pubblici.'],
          ].map(([e, t, b]) => (
            <article className="oe-card oe-col-4 oe-col-m-4" key={t}>
              <span className="oe-card__eyebrow">{e}</span>
              <h3 className="oe-card__title">{t}</h3>
              <p className="oe-card__body">{b}</p>
              <div className="oe-card__foot"><Button variant="ghost">Approfondisci →</Button></div>
            </article>
          ))}
        </section>
      </Demo>

      <h3>Stats band</h3>
      <Demo
        title="Numeri chiave"
        description="Fascia scura con i KPI di sintesi."
        code={`<section class="oe-stats">
  <div class="oe-stats__grid">
    <div><div class="oe-stat__num">+300 Mld €</div><div class="oe-stat__label">Investimenti analizzati</div></div>
    …
  </div>
</section>`}
      >
        <div style={flush}>
          <section className="oe-stats">
            <div className="oe-stats__grid">
              {[['+300 Mld €', 'Investimenti analizzati'], ['500+', 'Analisi complesse'], ['30+', 'Aree geografiche'], ['15 anni', 'Di esperienza']].map(([n, l]) => (
                <div key={l}><div className="oe-stat__num">{n}</div><div className="oe-stat__label">{l}</div></div>
              ))}
            </div>
          </section>
        </div>
      </Demo>

      <h3>CTA band</h3>
      <Demo
        title="Call to action"
        description="Fascia sull'accento con bottone inverso."
        code={`<section class="oe-cta">
  <div>
    <h2 class="oe-cta__title">Pronti a valutare il vostro impatto?</h2>
    <p class="oe-cta__text">Parliamo del tuo prossimo progetto.</p>
  </div>
  <button class="oe-btn oe-btn--inverse oe-btn--lg">Contattaci</button>
</section>`}
      >
        <div style={flush}>
          <section className="oe-cta">
            <div>
              <h2 className="oe-cta__title">Pronti a valutare il vostro impatto?</h2>
              <p className="oe-cta__text">Parliamo del tuo prossimo progetto.</p>
            </div>
            <Button variant="inverse" size="lg">Contattaci</Button>
          </section>
        </div>
      </Demo>

      <h3>FAQ</h3>
      <Demo
        title="Domande frequenti"
        description="Titolo + Accordion."
        code={`<h2>Domande frequenti</h2>
<Accordion items={[{ title: '…', body: '…' }]} />`}
      >
        <h2 style={{ marginTop: 0 }}>Domande frequenti</h2>
        <Accordion items={[
          { title: 'Cosa misura un’analisi d’impatto?', body: 'Gli effetti socioeconomici diretti, indiretti e indotti di un investimento o programma.' },
          { title: 'Su quali dati lavorate?', body: 'Fonti pubbliche autorevoli e fornitori di dati specialistici, con metodo prudenziale.' },
          { title: 'In quante aree operate?', body: 'Oltre 30 aree geografiche.' },
        ]} />
      </Demo>
    </section>
  )
}
