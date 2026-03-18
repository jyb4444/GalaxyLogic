import { cn } from '../../lib/cn'

type SectionIntroProps = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        centered && 'mx-auto max-w-3xl text-center',
        !centered && 'max-w-2xl text-left',
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="text-base leading-[1.7] text-brand-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
