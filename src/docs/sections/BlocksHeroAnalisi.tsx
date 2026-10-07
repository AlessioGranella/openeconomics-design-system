import Demo from '../ui/Demo'

const flush = { margin: '-32px' } as const

/* segnaposto del logo cliente, così l'anteprima non dipende da un asset */
const LogoPlaceholder = () => (
  <svg viewBox="0 0 230 46" width="184" height="37" role="img" aria-label="Segnaposto logo cliente"
       className="oe-hero-analisi__client">
    <rect x="0.5" y="0.5" width="229" height="45" fill="none" stroke="#fff" strokeOpacity="0.45" strokeDasharray="4 4" />
    <text x="115" y="27.5" textAnchor="middle" fontFamily="var(--oe-font-mono)" fontSize="11"
          letterSpacing="1.4" fill="#fff" fillOpacity="0.75">LOGO CLIENTE</text>
  </svg>
)

export default function BlocksHeroAnalisi() {
  return (
    <section id="blocks-hero-analisi" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Hero Analisi</span>
      <h2>Hero Analisi</h2>
      <p className="dx-lead">
        La hero delle landing di studi e analisi — caso studio per un cliente oppure studio
        indipendente di OpenEconomics. Struttura fissa: riga alta con chip e logo del cliente,
        titolo, sottotitolo facoltativo, indicatori.
      </p>

      <Demo
        title="Hero Analisi"
        description="Fascia full-bleed con immagine e velo; il contenuto sta in un .oe-container. Nell'anteprima l'altezza è ridotta e l'immagine sostituita dal fondo scuro."
        code={`<section class="oe-hero-analisi">
  <div class="oe-hero-analisi__media">
    <img src="assets/hero.jpg" alt="" aria-hidden="true" decoding="async">
  </div>

  <div class="oe-container">
    <div class="oe-hero-analisi__top">
      <!-- «Caso studio» se l'analisi è per un cliente,
           «Studio indipendente» se lo studio è di OpenEconomics -->
      <span class="oe-tag-chip oe-tag-chip--lime">Caso studio</span>
      <!-- versione bianca del logo; --invert se hai solo quella nera.
           Nello studio indipendente l'img non c'è -->
      <img class="oe-hero-analisi__client" src="assets/logo-cliente.svg" alt="Nome cliente">
    </div>

    <h1 class="oe-hero-analisi__title">Titolo: che cosa è stato misurato, in una riga</h1>

    <!-- facoltativo: solo se è stato specificato -->
    <p class="oe-hero-analisi__sub">Sottotitolo che precisa il perimetro dell'analisi.</p>

    <dl class="oe-hero-analisi__meta">
      <div><dt>Tipo di analisi</dt><dd>Impatto macroeconomico e ritorno sociale</dd></div>
      <div><dt>Modello / metodologia</dt><dd>SAM + SROI</dd></div>
      <div><dt>Fonti</dt><dd>ISTAT, Eurostat, Banca d'Italia</dd></div>
      <div><dt>Anno di riferimento</dt><dd>2023</dd></div>
      <div><dt>Ultimo aggiornamento</dt><dd>Marzo 2026</dd></div>
    </dl>
  </div>

  <p class="oe-hero-analisi__cue" aria-hidden="true">Scorri<span></span></p>
</section>`}
      >
        <div style={flush}>
          <section className="oe-hero-analisi" style={{ minHeight: 430, paddingBlock: 40 }}>
            <div className="oe-container">
              <div className="oe-hero-analisi__top">
                <span className="oe-tag-chip oe-tag-chip--lime">Caso studio</span>
                <LogoPlaceholder />
              </div>
              <h2 className="oe-hero-analisi__title" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}>
                Titolo: che cosa è stato misurato, in una riga
              </h2>
              <p className="oe-hero-analisi__sub">Sottotitolo che precisa il perimetro dell'analisi.</p>
              <dl className="oe-hero-analisi__meta">
                {[
                  ['Tipo di analisi', 'Impatto macroeconomico e ritorno sociale'],
                  ['Modello / metodologia', 'SAM + SROI'],
                  ['Fonti', "ISTAT, Eurostat, Banca d'Italia"],
                  ['Anno di riferimento', '2023'],
                  ['Ultimo aggiornamento', 'Marzo 2026'],
                ].map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Chip</span>
          <h3 className="oe-card__title">Caso studio o studio indipendente</h3>
          <p className="oe-card__body">
            <strong>Caso studio</strong> quando l'analisi è commissionata da un cliente,
            <strong> Studio indipendente</strong> quando è di OpenEconomics. Sempre lime, sempre
            sopra il titolo. È la prima cosa da chiarire prima di impostare la pagina.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Logo cliente</span>
          <h3 className="oe-card__title">In alto a destra</h3>
          <p className="oe-card__body">
            Versione bianca su fondo scuro; se esiste solo la nera si aggiunge
            <code> --invert</code>. Nello studio indipendente non c'è. Il nome del cliente sta
            qui, non fra gli indicatori.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Sottotitolo</span>
          <h3 className="oe-card__title">Facoltativo</h3>
          <p className="oe-card__body">
            Si inserisce solo se è stato specificato. Non si inventa per riempire lo spazio
            sotto il titolo.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Indicatori</span>
          <h3 className="oe-card__title">Set chiuso di cinque</h3>
          <p className="oe-card__body">
            Tipo di analisi · Modello / metodologia · Fonti · Anno di riferimento · Ultimo
            aggiornamento. Valgono per <strong>tutte</strong> le landing di studi e analisi: si
            omettono quelli non disponibili, non se ne aggiungono di nuovi.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Responsive</span>
          <h3 className="oe-card__title">Due punti di rottura</h3>
          <p className="oe-card__body">
            Sotto 768px gli indicatori passano a due colonne, il logo scende a 30px e il segnale
            «scorri» sparisce. Sotto 440px una colonna sola e il logo va a capo sotto il chip.
            Zoom dell'immagine e animazione del cue si spengono con
            <code> prefers-reduced-motion</code>.
          </p>
        </article>
      </div>

      <p className="dx-lead" style={{ marginTop: 'var(--oe-space-l)' }}>
        Senza immagine: si toglie il <code>div.oe-hero-analisi__media</code> e resta il fondo
        Bluette scuro. Pagina completa che lo usa: il caso studio «Impatto Audiovisivo»; punto di
        partenza pronto in <code>progetti/_template-caso-studio/</code>.
      </p>
    </section>
  )
}
