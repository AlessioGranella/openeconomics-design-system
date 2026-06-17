import Demo from '../ui/Demo'
import { Button, Tag, KpiCard, Accordion, FigureLabel } from '../../components'

export default function Components() {
  return (
    <section id="componenti" className="dx-section">
      <span className="oe-eyebrow">Componenti</span>
      <h2>Componenti</h2>
      <p className="dx-lead">
        Primitive React importabili da <code>design-system/src/components</code>. Anteprima dal vivo +
        codice. Tutte rispettano i token (spigolo vivo, font, colori brand).
      </p>

      <Demo
        title="Button"
        description="Quattro varianti. primary = CTA principale; accent = lime ad alta energia; secondary = bordo; ghost = solo testo."
        code={`import { Button } from '@/components'

<Button variant="primary">Scopri di più</Button>
<Button variant="accent">Parla con un esperto</Button>
<Button variant="secondary">Approfondisci</Button>
<Button variant="ghost">Annulla</Button>`}
      >
        <div className="dx-row">
          <Button variant="primary">Scopri di più</Button>
          <Button variant="accent">Parla con un esperto</Button>
          <Button variant="secondary">Approfondisci</Button>
          <Button variant="ghost">Annulla</Button>
        </div>
      </Demo>

      <Demo
        title="Tag / Chip"
        description="Mono uppercase. Regola brand: niente icone né frecce dentro il chip."
        code={`import { Tag } from '@/components'

<Tag>Impatto</Tag>
<Tag tone="lime">Sonar</Tag>`}
      >
        <div className="dx-row">
          <Tag>Impatto</Tag>
          <Tag tone="lime">Sonar</Tag>
          <Tag tone="default">Externalytics</Tag>
        </div>
        <div className="dx-row dx-row--dark">
          <Tag tone="on-dark">Public Funding</Tag>
        </div>
      </Demo>

      <Demo
        title="KPI Card"
        description="Big number con cifre tabulari, formattazione IT. tone='dark' per fondi Bluette."
        code={`import { KpiCard } from '@/components'

<KpiCard value={300} suffix=" Mld €" prefix="+" label="Investimenti analizzati" />
<KpiCard value={500} suffix="+" label="Analisi complesse" />`}
      >
        <div className="dx-grid-3">
          <KpiCard value={300} suffix=" Mld €" prefix="+" label="Investimenti analizzati" />
          <KpiCard value={500} suffix="+" label="Analisi complesse" />
          <KpiCard value={30} label="Paesi" tone="dark" />
        </div>
      </Demo>

      <Demo
        title="Accordion"
        description="Un pannello aperto per volta; spigolo vivo, divisori sottili."
        code={`import { Accordion } from '@/components'

<Accordion defaultOpen={0} items={[
  { title: 'Analisi di Impatto', body: 'Effetti macroeconomici…' },
  { title: 'ESG Rating', body: 'Doppia materialità…' },
]} />`}
      >
        <Accordion
          defaultOpen={0}
          items={[
            { title: 'Analisi di Impatto', body: 'Effetti macroeconomici (PIL, occupazione, redditi) fino a livello provinciale, su matrici SAM proprietarie.' },
            { title: 'Footprint Socioeconomico', body: 'Ricadute territoriali e settoriali sulle filiere.' },
            { title: 'ESG Rating', body: 'Performance e rischi ESG, doppia materialità, standard GRI/ESRS/CSRD.' },
          ]}
        />
      </Demo>

      <Demo
        title="Figure Label"
        description="Pre-titolo per grafici, tabelle e mappe."
        code={`import { FigureLabel } from '@/components'

<FigureLabel kind="GRAFICO" index={1} title="Impatto sul PIL" />`}
      >
        <FigureLabel kind="GRAFICO" index={1} title="Impatto sul PIL" />
        <FigureLabel kind="TABELLA" index={2} title="Investimenti per area" />
      </Demo>
    </section>
  )
}
