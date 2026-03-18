import { Star } from 'lucide-react'
import { cn } from '../../lib/cn'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  company: string
  logoText?: string
  avatarSrc?: string
  ctaLabel?: string
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  logoText,
  avatarSrc = '/images/placeholders/avatar.svg',
  ctaLabel,
  className,
}: TestimonialCardProps) {
  return (
    <article className={cn('surface-card space-y-5 p-5', className)}>
      {logoText ? (
        <p className="text-sm font-semibold text-brand-text">{logoText}</p>
      ) : (
        <div className="flex items-center gap-1 text-brand-text" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star className="h-4 w-4 fill-current" key={index} />
          ))}
        </div>
      )}

      <blockquote className="text-base leading-[1.7] text-brand-secondary">“{quote}”</blockquote>

      <div className="flex items-start gap-3">
        <img className="h-9 w-9 rounded-full object-cover" src={avatarSrc} alt="" />
        <div>
          <p className="text-base font-semibold text-brand-text">{name}</p>
          <p className="text-sm text-brand-secondary">
            {role}, {company}
          </p>
        </div>
      </div>

      {ctaLabel ? (
        <p className="text-sm font-semibold text-brand-text">{ctaLabel} &gt;</p>
      ) : null}
    </article>
  )
}
