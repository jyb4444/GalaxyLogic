import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SiteFooter() {
  const quickLinks = [
    { label: 'About', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/services#faq' },
  ]

  return (
    <footer className="border-t border-brand-border bg-brand-page">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <section className="space-y-4">
            <Link className="text-4xl font-semibold italic text-brand-text no-underline" to="/">
              GalaxyLogic
            </Link>
            <p className="max-w-md text-lg text-brand-secondary">
              Practical career coaching and hands-on support to help you move from planning to
              offers.
            </p>
            <a
              className="inline-flex items-center gap-2 text-base font-medium text-brand-secondary no-underline hover:text-brand-text"
              href="mailto:hello@galaxylogic.com"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@galaxylogic.com
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-text">Quick links</h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    className="text-base font-medium text-brand-secondary no-underline hover:text-brand-text"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-brand-border pt-6 text-sm text-brand-secondary">
          <p>© 2025 GalaxyLogic LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
