import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ServiceCardProps = {
  eyebrow: string
  title: string
  description: string
  linkLabel?: string
  to?: string
  dark?: boolean
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'top' | 'bottom'
  className?: string
}

export function ServiceCard({
  eyebrow,
  title,
  description,
  linkLabel = 'Explore',
  to = '/services',
  dark = false,
  imageSrc,
  imageAlt = '',
  imagePosition = 'top',
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        'surface-card overflow-hidden rounded-card',
        dark && 'border-transparent bg-brand-card text-white',
        className,
      )}
    >
      {imageSrc && imagePosition === 'top' ? (
        <div className="h-44 w-full overflow-hidden bg-brand-border">
          <img className="h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
        </div>
      ) : null}

      <div className="space-y-4 p-6">
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted',
            dark && 'text-white/80',
          )}
        >
          {eyebrow}
        </p>
        <h3 className={cn('subsection-title', dark && 'text-white')}>{title}</h3>
        <p className={cn('text-sm leading-[1.7] text-brand-secondary', dark && 'text-white/90')}>
          {description}
        </p>
        <Link
          className={cn(
            'inline-flex items-center gap-2 text-sm font-semibold no-underline',
            dark ? 'text-white hover:text-white/80' : 'text-brand-text hover:text-brand-accent',
          )}
          to={to}
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {imageSrc && imagePosition === 'bottom' ? (
        <div className="h-28 w-full overflow-hidden bg-brand-border">
          <img className="h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
        </div>
      ) : null}
    </article>
  )
}
