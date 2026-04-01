import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteShell() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = decodeURIComponent(location.hash.slice(1))
    let attempts = 0
    const maxAttempts = 12

    const tryScroll = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      attempts += 1
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 100)
      }
    }

    tryScroll()
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-brand-page">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
        href="#main-content"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
