import { useState } from 'react'
import { cn } from '../../lib/cn'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
  defaultOpenIndex?: number
  className?: string
}

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <article className="surface-card overflow-hidden" key={item.question}>
            <h3>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-brand-text"
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {item.question}
                <span className="text-xl leading-none text-brand-text">
                  {isOpen ? '×' : '+'}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div className="border-t border-brand-border px-5 pb-5 pt-4">
                <p className="text-base leading-[1.7] text-brand-secondary">{item.answer}</p>
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
