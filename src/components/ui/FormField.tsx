import { cn } from '../../lib/cn'
import type { ReactNode } from 'react'

type FormFieldProps = {
  label: string
  htmlFor: string
  children: ReactNode
  className?: string
}

export function FormField({ label, htmlFor, children, className }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="text-sm font-semibold text-brand-text" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  )
}
