import { Bike, PersonStanding, Rocket } from 'lucide-react'
import { CTASection } from '../components/sections/CTASection'
import { StatCard } from '../components/ui/StatCard'
import {
  aboutStats,
} from '../data/siteData'

export function About() {
  const missionItems = [
    {
      icon: PersonStanding,
      text: 'Empower students with practical skills, insider industry knowledge, and career-building strategies.',
    },
    {
      icon: Bike,
      text: 'Build a career-focused community where students can connect, learn, and grow together.',
    },
    {
      icon: Rocket,
      text: 'Deliver real results, helping students break into top-tier companies and thrive in competitive job markets.',
    },
  ]
  const missionOfferImages = [
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/1.png', alt: 'EY offer' },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/2.png', alt: 'PWC offer' },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/3.png', alt: 'Amazon offer' },
    {
      src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/4.png',
      alt: 'Capital One offer',
    },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/5.png', alt: 'MTA offer' },
    {
      src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/6.png',
      alt: 'Deloitte offer',
    },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/7.png', alt: 'Offer 7' },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/8.png', alt: 'Offer 8' },
    {
      src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/9.png',
      alt: 'Grady offer',
    },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/10.png', alt: 'IBM offer' },
    { src: 'https://energyjuiceconsulting.com/wp-content/uploads/2025/04/11.png', alt: 'Offer 11' },
  ]

  return (
    <>
      <section className="bg-brand-tint section-space text-center">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <h1 className="hero-title">Who we are</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              Founded by engineers, GalaxyLogic LLC builds software systems that matter. We
              partner with organizations to solve complex challenges with reliable, scalable
              delivery.
            </p>
            <div className="pt-3">
              <img
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl object-cover"
                src="/images/about.jpg"
                alt="GalaxyLogic team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
            <div className="space-y-5">
              <p className="eyebrow">Track record</p>
              <h2 className="section-title">A decade of proven delivery</h2>
              <p className="text-base text-brand-secondary md:text-lg">
                We measure success by the systems we build and the partnerships we maintain. Our
                clients return because we deliver.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {aboutStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-tint" id="testimonials">
        <div className="site-container">
          <div className="surface-card mx-auto max-w-6xl bg-brand-page px-4 py-8 md:px-8 md:py-10 lg:px-10">
            <h2 className="text-[48px] font-bold tracking-tight text-brand-accent md:text-[70px]">
              Our Mission
            </h2>

            <div className="mt-6 divide-y divide-brand-border md:mt-8">
              {missionItems.map((item) => {
                const Icon = item.icon

                return (
                  <div className="grid items-center gap-4 py-6 md:grid-cols-[minmax(220px,340px)_1fr] md:gap-6 md:py-8" key={item.text}>
                    <div className="flex h-32 items-center justify-center rounded-3xl border border-brand-border bg-brand-section md:h-36">
                      <Icon className="h-16 w-16 text-brand-accent" strokeWidth={1.6} />
                    </div>
                    <p className="text-base leading-relaxed text-brand-secondary md:text-2xl/[1.35]">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div
              className="mission-carousel-mask mt-8 rounded-2xl border border-brand-border bg-brand-section py-4"
              role="region"
              aria-roledescription="carousel"
              aria-label="Student offers carousel"
            >
              <div className="mission-carousel-track" aria-live="off">
                {[...missionOfferImages, ...missionOfferImages].map((item, index) => (
                  <figure className="mission-carousel-slide" key={`${item.src}-${index}`}>
                    <img className="h-16 w-auto object-contain md:h-20" src={item.src} alt={item.alt} />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Are you ready to discuss your career plan?"
        description="Let's discuss what you need and how we can help you get there."
        primaryLabel="Contact"
        primaryTo="/contact"
        secondaryLabel="Services"
        secondaryTo="/services"
      />
    </>
  )
}
