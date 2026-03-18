import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { moreNavLinks, primaryNavLinks } from '../../data/siteData'
import { cn } from '../../lib/cn'
import { PrimaryButton } from '../ui/PrimaryButton'

function navLinkClass(isActive: boolean) {
  return cn(
    'text-sm font-medium no-underline transition-colors duration-200',
    isActive ? 'text-brand-text' : 'text-brand-secondary hover:text-brand-text',
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const closeMenus = () => {
    setMobileOpen(false)
    setMoreOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-brand-border bg-brand-tint/95 backdrop-blur-sm">
      <div className="site-container">
        <div className="hidden h-20 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <nav aria-label="Primary navigation" className="relative flex items-center gap-6">
            {primaryNavLinks.map((link) => (
              <NavLink
                className={({ isActive }) => navLinkClass(isActive)}
                key={link.to}
                to={link.to}
                onClick={closeMenus}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="relative">
              <button
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-text"
                type="button"
                onClick={() => setMoreOpen((value) => !value)}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {moreOpen ? (
                <div className="surface-card absolute left-0 top-9 w-48 overflow-hidden py-2">
                  {moreNavLinks.map((link) => (
                    <Link
                      className="block px-4 py-2 text-sm font-medium text-brand-secondary no-underline transition-colors hover:bg-brand-page hover:text-brand-text"
                      key={link.to}
                      to={link.to}
                      onClick={closeMenus}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>

          <Link className="text-3xl font-semibold italic text-brand-text no-underline" to="/">
            GalaxyLogic
          </Link>

          <div className="flex justify-end">
            <PrimaryButton className="h-9 px-4 text-[13px]" to="/contact" onClick={closeMenus}>
              Menu
            </PrimaryButton>
          </div>
        </div>

        <div className="flex h-16 items-center justify-between md:hidden">
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-brand-text"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            className="text-2xl font-semibold italic text-brand-text no-underline"
            to="/"
            onClick={closeMenus}
          >
            GalaxyLogic
          </Link>

          <PrimaryButton className="h-8 px-3 text-xs" to="/contact" onClick={closeMenus}>
            Contact
          </PrimaryButton>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-border bg-brand-page md:hidden">
          <nav aria-label="Mobile navigation" className="site-container flex flex-col gap-2 py-4">
            {primaryNavLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-semibold no-underline',
                    isActive
                      ? 'bg-brand-tint text-brand-text'
                      : 'text-brand-secondary hover:bg-white hover:text-brand-text',
                  )
                }
                key={link.to}
                to={link.to}
                onClick={closeMenus}
              >
                {link.label}
              </NavLink>
            ))}
            {moreNavLinks.map((link) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-secondary no-underline hover:bg-white hover:text-brand-text"
                key={link.to}
                to={link.to}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
