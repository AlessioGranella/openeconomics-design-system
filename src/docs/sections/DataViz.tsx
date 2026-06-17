import { Scale } from '../ui/Swatch'

const palettes: { label: string; prefix: string; steps: { step: string; hex: string }[] }[] = [
  { label: 'Magenta', prefix: '--oe-magenta', steps: [
    { step: '600', hex: '#FF00FF' }, { step: '500', hex: '#FF4EFF' }, { step: '400', hex: '#FF8DFF' },
    { step: '700', hex: '#C300C3' }, { step: '800', hex: '#920092' }, { step: '900', hex: '#600060' },
  ]},
  { label: 'Blu', prefix: '--oe-blu', steps: [
    { step: '600', hex: '#0000FF' }, { step: '500', hex: '#3A3AFF' }, { step: '400', hex: '#6161FF' },
    { step: '700', hex: '#0000A1' }, { step: '800', hex: '#000068' }, { step: '900', hex: '#000035' },
  ]},
  { label: 'Yellow', prefix: '--oe-yellow', steps: [
    { step: '600', hex: '#F4E900' }, { step: '500', hex: '#FFF300' }, { step: '400', hex: '#FFF751' },
    { step: '700', hex: '#595700' }, { step: '800', hex: '#403E00' }, { step: '900', hex: '#262500' },
  ]},
  { label: 'Green', prefix: '--oe-green', steps: [
    { step: '600', hex: '#00E279' }, { step: '500', hex: '#00FF88' }, { step: '400', hex: '#3FFFA5' },
    { step: '700', hex: '#00542D' }, { step: '800', hex: '#003F22' }, { step: '900', hex: '#002D18' },
  ]},
  { label: 'Cyan', prefix: '--oe-cyan', steps: [
    { step: '600', hex: '#00FFFF' }, { step: '500', hex: '#61FFFF' }, { step: '400', hex: '#83FFFF' },
    { step: '700', hex: '#005B5B' }, { step: '800', hex: '#004646' }, { step: '900', hex: '#003535' },
  ]},
]

export default function DataViz() {
  return (
    <section id="dataviz" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Data Visualization</h2>
      <p className="dx-lead">
        Principio guida: <strong>minimalismo e accuratezza del dato</strong>. I primari (bianco, nero,
        Bluette, Lime) restano la base strutturale; le palette secondarie entrano solo quando migliorano
        davvero la lettura — <strong>massimo 2–3 colori per grafico</strong>.
      </p>
      <p className="dx-note">
        In codice usa la sequenza pronta <code>chartSeries</code> da <code>tokens.ts</code> per assegnare i colori delle serie.
      </p>
      {palettes.map((p) => (
        <Scale key={p.label} label={p.label} prefix={p.prefix} steps={p.steps} darkFrom={500} />
      ))}
    </section>
  )
}
