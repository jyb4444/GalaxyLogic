import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { moreNavLinks, primaryNavLinks } from '../../data/siteData'
import { cn } from '../../lib/cn'

function navLinkClass(isActive: boolean) {
  return cn(
    'inline-flex origin-center items-center rounded-lg px-3 py-2 text-lg font-semibold no-underline transition-all duration-200 ease-out',
    isActive
      ? 'scale-105 bg-brand-section text-brand-accent shadow-subtle'
      : 'text-brand-secondary hover:scale-105 hover:bg-white/70 hover:text-brand-text',
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMenus = () => {
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-brand-border bg-brand-tint/95 backdrop-blur-sm">
      <div className="site-container">
        <div className="hidden h-20 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <Link className="text-3xl font-semibold italic text-brand-text no-underline" to="/">
            GalaxyLogic
          </Link>
          <nav aria-label="Primary navigation" className="relative flex items-center gap-8">
            {primaryNavLinks.map((link) => (
              <NavLink
                className={({ isActive }) => navLinkClass(isActive)}
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenus}
              >
                {link.label}
              </NavLink>
            ))}
            {moreNavLinks.map((link) => (
              link.to.includes('#') ? (
                <Link
                  className="inline-flex origin-center items-center rounded-lg px-3 py-2 text-lg font-semibold text-brand-secondary no-underline transition-all duration-200 ease-out hover:scale-105 hover:bg-white/70 hover:text-brand-text"
                  key={link.to}
                  to={link.to}
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  className={({ isActive }) => navLinkClass(isActive)}
                  key={link.to}
                  to={link.to}
                  end
                  onClick={closeMenus}
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </nav>
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
              link.to.includes('#') ? (
                <Link
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-secondary no-underline hover:bg-white hover:text-brand-text"
                  key={link.to}
                  to={link.to}
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              ) : (
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
                  end
                  onClick={closeMenus}
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
