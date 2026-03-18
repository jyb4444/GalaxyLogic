import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Slack,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerColumns, socialLinks } from '../../data/siteData'
import { SecondaryButton } from '../ui/SecondaryButton'

const iconMap = {
  Twitter: Facebook,
  GitHub: Instagram,
  Email: Mail,
  Slack,
  Youtube: Youtube,
}

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-brand-page">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <section className="space-y-5">
            <Link className="text-4xl font-semibold italic text-brand-text no-underline" to="/">
              GalaxyLogic
            </Link>
            <p className="max-w-sm text-lg text-brand-secondary">
              Get insights on software strategy and industry trends.
            </p>
            <form className="max-w-md space-y-3" onSubmit={(event) => event.preventDefault()}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  className="h-11 flex-1 rounded-lg border-brand-border px-4"
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                />
                <SecondaryButton className="bg-white">Subscribe</SecondaryButton>
              </div>
              <p className="text-sm text-brand-muted">
                We respect your privacy and only send relevant updates.
              </p>
            </form>
          </section>

          {footerColumns.map((column) => (
            <section className="space-y-4" key={column.heading}>
              <h2 className="text-2xl font-semibold text-brand-text">{column.heading}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
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
          ))}

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-text">LinkedIn</h2>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap] ?? Linkedin
                return (
                  <li key={link.label}>
                    <a
                      className="inline-flex items-center gap-3 text-base font-medium text-brand-secondary no-underline hover:text-brand-text"
                      href={link.href}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-border pt-7 text-sm text-brand-secondary md:flex-row md:items-center md:justify-between">
          <p>© 2025 GalaxyLogic LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className="text-brand-secondary" href="#">Privacy policy</a>
            <a className="text-brand-secondary" href="#">Terms of service</a>
            <a className="text-brand-secondary" href="#">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
