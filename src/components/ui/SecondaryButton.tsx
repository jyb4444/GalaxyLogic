import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type SecondaryButtonProps = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

const baseClassName =
  'inline-flex h-10 items-center justify-center rounded-lg border border-brand-border bg-transparent px-4 text-sm font-semibold text-brand-text no-underline transition-colors duration-200 hover:bg-white focus-visible:ring-brand-accent md:h-11 md:px-5'

export function SecondaryButton({
  children,
  className,
  to,
  href,
  type = 'button',
  ...props
}: SecondaryButtonProps) {
  if (to) {
    return (
      <Link className={cn(baseClassName, className)} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={cn(baseClassName, className)} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(baseClassName, className)} type={type} {...props}>
      {children}
    </button>
  )
}
