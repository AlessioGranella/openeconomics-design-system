import type { ReactNode } from 'react'

export interface DemoProps {
  title?: string
  description?: ReactNode
  /** anteprima dal vivo */
  children: ReactNode
  /** snippet di codice mostrato sotto l'anteprima */
  code?: string
  /** sfondo scuro per l'area di anteprima */
  dark?: boolean
}

/** Blocco esempio: titolo + descrizione + anteprima live + codice (stile Catalyst). */
export default function Demo({ title, description, children, code, dark }: DemoProps) {
  return (
    <div className="dx-demo">
      {title && <h3 className="dx-demo__title">{title}</h3>}
      {description && <p className="dx-demo__desc">{description}</p>}
      <div className={`dx-demo__preview${dark ? ' dx-demo__preview--dark' : ''}`}>
        {children}
      </div>
      {code && (
        <pre className="dx-code"><code>{code}</code></pre>
      )}
    </div>
  )
}
