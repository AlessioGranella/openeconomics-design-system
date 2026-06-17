import { Swatch, Scale } from '../ui/Swatch'

const bluetteSteps = [
  { step: '900', hex: '#270065' }, { step: '800', hex: '#340088' }, { step: '700', hex: '#4400B3' },
  { step: '600', hex: '#5902EE' }, { step: '500', hex: '#6E1AFF' }, { step: '400', hex: '#8742FF' },
  { step: '300', hex: '#A16AFF' }, { step: '200', hex: '#B991FF' }, { step: '100', hex: '#D9C1FF' },
  { step: '050', hex: '#EFE5FF' },
]
const limeSteps = [
  { step: '900', hex: '#315C01' }, { step: '800', hex: '#458300' }, { step: '700', hex: '#67C300' },
  { step: '600', hex: '#7FF100' }, { step: '500', hex: '#91FF15' }, { step: '400', hex: '#B9FF69' },
  { step: '300', hex: '#C9FF8C' }, { step: '200', hex: '#D5FFA4' }, { step: '100', hex: '#DFFFBB' },
  { step: '050', hex: '#EFFFDC' },
]
const grraySteps = [
  { step: '900', hex: '#000000' }, { step: '800', hex: '#2C2C2C' }, { step: '700', hex: '#545454' },
  { step: '600', hex: '#6E6E6E' }, { step: '500', hex: '#999999' }, { step: '400', hex: '#AFAFAF' },
  { step: '300', hex: '#D2D2D2' }, { step: '200', hex: '#E7E7E7' }, { step: '100', hex: '#F1F1F1' },
  { step: '000', hex: '#FFFFFF' },
]

export default function Colors() {
  return (
    <section id="colori" className="dx-section">
      <span className="oe-eyebrow">Foundations</span>
      <h2>Colore</h2>
      <p className="dx-lead">
        Due accent sono il cuore dell'identità: <strong>Bluette</strong> (tono tech/autorevole) e
        {' '}<strong>Lime</strong> (energia, urgenza positiva). I primari neutri (bianco/nero) e i grigi
        sono la base di contrasto e accessibilità.
      </p>

      <h3>Accent</h3>
      <div className="dx-swatch-grid">
        <Swatch name="Bluette" hex="#4400B3" varName="--oe-bluette-700" />
        <Swatch name="Lime" hex="#B9FF69" varName="--oe-lime-400" darkText />
        <Swatch name="White" hex="#FFFFFF" varName="--oe-white" darkText />
        <Swatch name="Black" hex="#000000" varName="--oe-black" />
      </div>
      <p className="dx-note">
        Abbinamenti di contrasto canonici: <strong>Bluette su bianco</strong>, <strong>Lime su nero</strong>,
        {' '}<strong>bianco su Bluette</strong>, <strong>nero su Lime</strong>.
      </p>

      <h3>Scale tonali</h3>
      <Scale label="Bluette" prefix="--oe-bluette" steps={bluetteSteps} darkFrom={200} />
      <Scale label="Lime" prefix="--oe-lime" steps={limeSteps} darkFrom={900} />
      <Scale label="Gray" prefix="--oe-gray" steps={grraySteps} darkFrom={400} />
    </section>
  )
}
