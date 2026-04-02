import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

type ContactMethodCardProps = {
  icon: LucideIcon
  title: string
  description: string
  value: string
  valueAsButton?: boolean
  onValueClick?: () => void
  className?: string
}

export function ContactMethodCard({
  icon: Icon,
  title,
  description,
  value,
  valueAsButton = false,
  onValueClick,
  className,
}: ContactMethodCardProps) {
  return (
    <article className={cn('space-y-4', className)}>
      <Icon className="h-8 w-8 text-brand-text" aria-hidden="true" />
      <h3 className="subsection-title">{title}</h3>
      <p className="text-base leading-[1.7] text-brand-secondary">{description}</p>
      {valueAsButton ? (
        <button
          className="!cursor-pointer inline-flex items-center text-base font-semibold text-brand-text underline decoration-brand-border underline-offset-4 transition-colors duration-200 hover:text-brand-accent"
          type="button"
          onClick={onValueClick}
        >
          {value}
        </button>
      ) : (
        <p className="text-base font-semibold text-brand-text underline decoration-brand-border underline-offset-4">
          {value}
        </p>
      )}
    </article>
  )
}
