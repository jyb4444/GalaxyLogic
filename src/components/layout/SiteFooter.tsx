import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SiteFooter() {
  const quickLinks = [
    { label: 'About', to: '/#about-overview' },
    { label: 'Services', to: '/services#services-top' },
    { label: 'Contact', to: '/contact#contact-top' },
    { label: 'FAQ', to: '/services#faq' },
  ]

  return (
    <footer className="border-t border-brand-border bg-brand-page">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <section className="space-y-4">
            <Link className="inline-flex items-center no-underline" to="/" aria-label="GalaxyLogic home">
              <img className="h-12 w-auto" src="/images/logo.svg" alt="GalaxyLogic logo" />
            </Link>
            <p className="max-w-md text-lg text-brand-secondary">
              Practical career coaching and hands-on support to help you move from planning to
              offers.
            </p>
            <a
              className="inline-flex items-center gap-2 text-base font-medium text-brand-secondary no-underline hover:text-brand-text"
              href="mailto:ykj2018720@gmail.com"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              ykj2018720@gmail.com
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-text">Quick links</h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    className="cursor-pointer text-base font-medium text-brand-secondary no-underline transition-colors duration-200 hover:text-brand-accent focus-visible:text-brand-accent"
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
