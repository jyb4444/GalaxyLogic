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
      <div className="site-container py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <section className="space-y-4">
            <Link className="inline-flex items-center no-underline" to="/" aria-label="GalaxyLogic home">
              <img className="h-10 w-auto" src="/images/logo.svg" alt="GalaxyLogic logo" />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-brand-secondary">
              Practical career coaching and hands-on support to help you move from planning to
              offers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-brand-text">Contact</h2>
            <p className="text-sm text-brand-secondary">WeChat consultation</p>
            <img
              className="h-24 w-24 rounded-md border border-brand-border bg-white object-cover md:h-28 md:w-28"
              src="/images/wechat.jpg"
              alt="GalaxyLogic WeChat QR code"
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-brand-text">Quick links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    className="inline-flex cursor-pointer text-base font-medium text-brand-secondary no-underline transition-colors duration-200 hover:text-brand-accent focus-visible:text-brand-accent"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-brand-border pt-4 text-sm text-brand-secondary md:flex-row md:items-center md:justify-between">
          <p>© 2026 GalaxyLogic LLC. All rights reserved.</p>
          <p>Los Angeles, CA</p>
        </div>
      </div>
    </footer>
  )
}
