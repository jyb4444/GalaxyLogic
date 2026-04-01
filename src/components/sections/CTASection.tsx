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
  imageSrc = '/images/about2.jpg',
}: CTASectionProps) {
  return (
    <section className="section-space bg-brand-page">
      <div className="site-container">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          <p className="text-base text-brand-secondary md:text-lg">{description}</p>
        </div>

        {imageSrc ? (
          <div className="surface-card relative mt-10 overflow-hidden bg-brand-tint/70 px-4 py-8 md:px-8 md:py-10">
            <div className="relative mx-auto h-[250px] w-full max-w-3xl md:h-[320px]">
              <figure className="absolute left-2 top-14 w-[58%] max-w-[390px] -rotate-[7deg] overflow-hidden rounded-2xl border border-brand-border bg-white shadow-[0_14px_40px_rgba(17,24,39,0.14)]">
                <img
                  className="block h-full w-full object-contain"
                  src="/images/restArea.png"
                  alt="GalaxyLogic office rest area"
                />
              </figure>

              <figure className="absolute right-3 top-1 w-[44%] max-w-[290px] rotate-[7deg] overflow-hidden rounded-2xl border border-brand-border bg-white shadow-[0_14px_40px_rgba(17,24,39,0.14)]">
                <img
                  className="block h-full w-full object-contain"
                  src="/images/workArea.png"
                  alt="GalaxyLogic office work area"
                />
              </figure>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
