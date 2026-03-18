import { cn } from '../../lib/cn'

type LogoStripProps = {
  title?: string
  logos: string[]
  className?: string
}

export function LogoStrip({ title, logos, className }: LogoStripProps) {
  return (
    <section className={cn('space-y-8', className)}>
      {title ? (
        <p className="text-center text-base font-semibold text-brand-text">{title}</p>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-xl font-semibold text-brand-text">
        {logos.map((logo, index) => (
          <span key={`${logo}-${index}`}>{logo}</span>
        ))}
      </div>
    </section>
  )
}
