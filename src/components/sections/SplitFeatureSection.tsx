import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'
import { cn } from '../../lib/cn'

type SplitFeatureSectionProps = {
  eyebrow?: string
  title: string
  description: string
  bullets?: string[]
  imageSrc?: string
  imageAlt?: string
  imageRounded?: boolean
  reverse?: boolean
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  className?: string
}

export function SplitFeatureSection({
  eyebrow,
  title,
  description,
  bullets,
  imageSrc = '/images/placeholders/landscape.svg',
  imageAlt = '',
  imageRounded = true,
  reverse = false,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  className,
}: SplitFeatureSectionProps) {
  return (
    <section className={cn('section-space-tight', className)}>
      <div className="site-container">
        <div
          className={cn(
            'grid items-center gap-8 lg:grid-cols-2 lg:gap-10',
            reverse && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1',
          )}
        >
          <div className="space-y-5">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="section-title">{title}</h2>
            <p className="text-base text-brand-secondary md:text-lg">{description}</p>
            {bullets && bullets.length > 0 ? (
              <ul className="space-y-2 text-base text-brand-secondary">
                {bullets.map((bullet) => (
                  <li className="flex items-start gap-2" key={bullet}>
                    <span aria-hidden="true">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {primaryLabel || secondaryLabel ? (
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {primaryLabel && primaryTo ? (
                  <PrimaryButton to={primaryTo}>{primaryLabel}</PrimaryButton>
                ) : null}
                {secondaryLabel && secondaryTo ? (
                  <SecondaryButton to={secondaryTo}>{secondaryLabel}</SecondaryButton>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className={cn('overflow-hidden bg-brand-border', imageRounded && 'rounded-card')}>
            <img className="h-[320px] w-full object-cover" src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
