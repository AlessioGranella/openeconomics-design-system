import Demo from '../ui/Demo'

const flush = { margin: '-32px' } as const

export default function BlocksCtaAnalisi() {
  return (
    <section id="blocks-cta-analisi" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · CTA Analisi</span>
      <h2>CTA Analisi</h2>
      <p className="dx-lead">
        La fascia di invito che può chiudere una landing di studio, subito prima del Footer
        Analisi: una domanda rivolta a chi legge, una riga che dice cosa misuriamo e un solo
        bottone verso OpenEconomics. È facoltativa: si mette quando la pagina serve anche a
        portare contatti, si toglie quando il committente non la vuole.
      </p>

      <Demo
        title="CTA Analisi"
        description="Fascia full-bleed sull'accento (.oe-cta), titolo serif in forma di domanda, una riga di testo e il bottone inverse. Nessun wrapper interno: la fascia usa --oe-band-pad e cade sulla stessa colonna del resto della pagina."
        code={`<!-- CTA Analisi — facoltativa, tra l'ultima sezione e il Footer Analisi -->
<section class="oe-cta">
  <div>
    <h2 class="oe-cta__title">Quanto vale il vostro piano di investimenti?</h2>
    <p class="oe-cta__text">Misuriamo gli impatti su PIL, occupazione e territori
      con modelli riconosciuti e dati verificabili.</p>
  </div>
  <a class="oe-btn oe-btn--inverse oe-btn--lg" href="https://www.openeconomics.eu/">Parliamone</a>
</section>`}
      >
        <div style={flush}>
          <section className="oe-cta">
            <div>
              <h2 className="oe-cta__title">Quanto vale il vostro piano di investimenti?</h2>
              <p className="oe-cta__text">
                Misuriamo gli impatti su PIL, occupazione e territori con modelli riconosciuti e
                dati verificabili.
              </p>
            </div>
            <a className="oe-btn oe-btn--inverse oe-btn--lg" href="https://www.openeconomics.eu/">Parliamone</a>
          </section>
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Posizione</span>
          <h3 className="oe-card__title">Ultima fascia, prima del footer</h3>
          <p className="oe-card__body">
            Mai in mezzo all'analisi: chi legge arriva all'invito dopo aver visto i risultati.
            Una sola CTA per pagina.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Testo</span>
          <h3 className="oe-card__title">Una domanda sul loro caso</h3>
          <p className="oe-card__body">
            Il titolo riprende l'oggetto dello studio e lo gira a chi legge («Quanto vale la spesa
            del vostro settore?», «Quanto vale il vostro piano di investimenti?»). Sotto, una riga
            sola su cosa misuriamo. Niente slogan.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Facoltativa</span>
          <h3 className="oe-card__title">Si toglie senza lasciare buchi</h3>
          <p className="oe-card__body">
            Il Footer Analisi chiude la pagina anche da solo. Nei casi studio pubblicati per conto
            del cliente, la CTA si chiede al committente prima di metterla.
          </p>
        </article>
      </div>
    </section>
  )
}
