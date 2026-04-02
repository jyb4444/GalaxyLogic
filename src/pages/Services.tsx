import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  Check,
  FileSearch,
  Handshake,
  MessageSquareQuote,
  Send,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/sections/CTASection'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import {
  servicesFaq,
} from '../data/siteData'

export function Services() {
  const [animationProgress, setAnimationProgress] = useState(0)
  const stats = [
    { label: 'Highly Experienced Mentors', target: 10, suffix: '+' },
    { label: 'Community Members', target: 200, suffix: '+' },
    { label: 'Offer Rate', target: 70, suffix: '%' },
    { label: 'Offers', target: 100, suffix: '+' },
  ]
  const coachingCards = [
    {
      icon: Briefcase,
      title: 'Career Consultation',
      subtitle: 'Personalized career roadmap to gain clarity and confidence.',
      bullets: [
        'One-on-one strategy sessions tailored to your goals.',
        'Resume review, job market insights, and sponsorship guidance.',
        'Actionable steps to optimize your search approach.',
      ],
      imageSrc: '/images/service1.jpg',
      imageAlt: 'Career consultation planning session',
    },
    {
      icon: Send,
      title: 'Strategic Resume Distribution',
      subtitle: 'We apply, you succeed with simplified job applications.',
      bullets: [
        'We handle applications while you focus on interviews.',
        'Personalized targeting and live tracking sheet updates.',
        'Choose from 100, 300, 600, or 1000 applications.',
      ],
      imageSrc: '/images/service2.jpg',
      imageAlt: 'Resume strategy discussion',
    },
    {
      icon: Handshake,
      title: 'Networking Mastery',
      subtitle: 'Turn conversations into real career opportunities.',
      bullets: [
        'Overcome networking anxiety with practical relationship frameworks.',
        'Personalized outreach scripts with real-time mentor feedback.',
        'Practice routines to sharpen confidence and follow-up.',
      ],
      imageSrc: '/images/service3.jpg',
      imageAlt: 'Professional networking workshop',
    },
    {
      icon: FileSearch,
      title: 'Job Description Deep Dive',
      subtitle: 'Decode postings and tailor your application strategy.',
      bullets: [
        'Analyze requirements and identify true hiring signals.',
        'Map your experience to the role with clear positioning.',
        'Refine resume bullets for stronger role alignment.',
      ],
      imageSrc: '/images/service4.jpg',
      imageAlt: 'Team reviewing job descriptions',
    },
    {
      icon: MessageSquareQuote,
      title: 'Behavioral Questions Course',
      subtitle: 'Master storytelling frameworks that interviewers remember.',
      bullets: [
        'Deep dive into STAR method and persuasive narratives.',
        'Craft high-impact answers for common behavior prompts.',
        'Build a reusable story bank for different roles.',
      ],
      imageSrc: '/images/service5.jpg',
      imageAlt: 'Behavioral interview coaching',
    },
    {
      icon: Users,
      title: 'Mock Interview Coaching',
      subtitle: 'Simulate, improve, and succeed with expert feedback.',
      bullets: [
        'Role-specific mock interviews for target companies.',
        'Actionable review on structure, confidence, and delivery.',
        'Iterative practice until your answers feel natural and sharp.',
      ],
      imageSrc: '/images/service6.jpg',
      imageAlt: 'Mock interview session',
    },
  ]

  useEffect(() => {
    let frameId = 0
    const duration = 3000
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const rawProgress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3)
      setAnimationProgress(easedProgress)

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <section className="bg-brand-tint section-space text-center" id="services-top">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <h1 className="hero-title">On-Demand Career Services</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              <b>Expert-Led Coaching</b>
              <br />
              <b>Strategic Guidance</b>
              <br />
              <b>Hands-On Support to Elevate Your Career</b>
            </p>
          </div>

          <div className="surface-card mt-10 bg-brand-page/80 px-5 py-6 md:px-8 md:py-8">
            <div className="grid gap-6 md:grid-cols-4 md:divide-x md:divide-brand-border">
              {stats.map((stat) => {
                const value = Math.round(stat.target * animationProgress).toLocaleString()

                return (
                  <div className="space-y-2 md:px-4" key={stat.label}>
                    <p className="text-5xl font-bold leading-none tracking-tight text-brand-accent md:text-6xl">
                      {value}
                      {stat.suffix}
                    </p>
                    <p className="text-lg leading-tight text-brand-secondary">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-10">
          <SectionIntro
            centered
            eyebrow="Career Accelerator"
            title="Programs Designed For Real Outcomes"
            description="Hands-on services built to move you from planning to offers, with clear milestones and mentor support."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {coachingCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  className="surface-card group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand-accent/10"
                  key={card.title}
                >
                  <div className="h-44 w-full overflow-hidden bg-brand-border">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={card.imageSrc}
                      alt={card.imageAlt}
                    />
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-center gap-3 border-b border-brand-border pb-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-[33px] font-semibold leading-[1.1] tracking-[-0.01em] text-brand-text">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-sm italic leading-[1.6] text-brand-muted">{card.subtitle}</p>

                    <ul className="space-y-2">
                      {card.bullets.map((point) => (
                        <li className="flex items-start gap-2 text-sm leading-[1.6] text-brand-secondary" key={point}>
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between border-t border-brand-border pt-3">
                      <span className="text-sm font-medium text-brand-muted">Learn more</span>
                      <Link
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-white no-underline transition-all duration-300 hover:bg-brand-accent-hover group-hover:translate-x-1"
                        to="/contact#contact-methods"
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-tint" id="faq">
        <div className="site-container space-y-8">
          <SectionIntro
            eyebrow="FAQ"
            title="Common questions"
            description="Questions about process, engagement models, and how we work."
          />

          <FAQAccordion items={servicesFaq} />

          <div className="space-y-4 pt-4">
            <h3 className="subsection-title">Still have questions?</h3>
            <p className="text-base text-brand-secondary md:text-lg">
              Reach out to our team for a detailed conversation.
            </p>
            <SecondaryButton to="/contact#contact-methods">Contact</SecondaryButton>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start"
        description="Schedule a consultation with our team to discuss your software challenges and explore solutions."
        primaryLabel="Consult"
        primaryTo="/contact"
        secondaryLabel="Email"
        secondaryTo="/contact"
      />
    </>
  )
}
