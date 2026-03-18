import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'

type CTASectionProps = {
  eyebrow?: string
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  imageSrc?: string
  imageAlt?: string
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  imageSrc = '/images/placeholders/wide.svg',
  imageAlt = '',
}: CTASectionProps) {
  return (
    <section className="section-space bg-brand-page">
      <div className="site-container">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          <p className="text-base text-brand-secondary md:text-lg">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <PrimaryButton to={primaryTo}>{primaryLabel}</PrimaryButton>
            {secondaryLabel && secondaryTo ? (
              <SecondaryButton to={secondaryTo}>{secondaryLabel}</SecondaryButton>
            ) : null}
          </div>
        </div>

        {imageSrc ? (
          <div className="surface-card mt-10 overflow-hidden">
            <img className="h-56 w-full object-cover md:h-72" src={imageSrc} alt={imageAlt} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
