import { cn } from '../../lib/cn'

type StatCardProps = {
  label: string
  value: string
  caption: string
  className?: string
}

export function StatCard({ label, value, caption, className }: StatCardProps) {
  return (
    <article className={cn('surface-card space-y-4 p-6', className)}>
      <p className="text-lg font-semibold text-brand-text">{label}</p>
      <p className="text-[57px] font-bold leading-none tracking-[-0.03em] text-brand-text">
        {value}
      </p>
      <div className="border-t border-brand-border pt-3">
        <p className="text-sm text-brand-secondary">{caption}</p>
      </div>
    </article>
  )
}
