import { useState } from 'react'
import type { ReactNode } from 'react'

export interface AccordionItem {
  title: string
  body: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  /** indice aperto di default (nessuno se omesso) */
  defaultOpen?: number
}

/**
 * Accordion — spigolo vivo, divisori sottili. Un solo pannello aperto per volta.
 */
export default function Accordion({ items, defaultOpen }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null)
  return (
    <div className="oe-accordion">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className="oe-accordion__item" key={i}>
            <button
              className="oe-accordion__head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.title}</span>
              <span className="oe-accordion__sign" aria-hidden>{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && <div className="oe-accordion__body">{it.body}</div>}
          </div>
        )
      })}
    </div>
  )
}
