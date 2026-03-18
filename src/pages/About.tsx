import { Globe, Linkedin, X } from 'lucide-react'
import { CTASection } from '../components/sections/CTASection'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import { StatCard } from '../components/ui/StatCard'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import {
  aboutStats,
  aboutTeam,
  aboutTestimonials,
} from '../data/siteData'

export function About() {
  return (
    <>
      <section className="bg-brand-tint section-space text-center">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="eyebrow">Expertise</p>
            <h1 className="hero-title">Who we are</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              GalaxyLogic LLC builds software systems that matter. We partner with organizations
              to solve complex technical challenges.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <PrimaryButton to="/services">Services</PrimaryButton>
              <SecondaryButton to="/contact">Contact</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-10 text-center">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="eyebrow">Foundation</p>
            <h2 className="section-title">Built on technical depth and client trust</h2>
            <p className="text-base text-brand-secondary md:text-lg">
              GalaxyLogic LLC was founded by engineers who understood that great software requires
              more than code. We started with a simple conviction: organizations deserve partners
              who listen, understand their constraints, and deliver systems that work reliably at
              scale.
            </p>
            <div className="flex justify-center">
              <SecondaryButton to="/contact">Learn</SecondaryButton>
            </div>
          </div>
          <div className="surface-card overflow-hidden">
            <img
              className="h-[360px] w-full object-cover md:h-[460px]"
              src="/images/placeholders/wide.svg"
              alt="GalaxyLogic team workshop"
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page" id="careers">
        <div className="site-container space-y-12">
          <SectionIntro
            centered
            eyebrow="People"
            title="The team behind the work"
            description="We hire engineers and architects who care about solving real problems."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {aboutTeam.map((member) => (
              <article className="space-y-4 text-center" key={member.name}>
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-brand-border">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/placeholders/avatar.svg"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-brand-text">{member.name}</h3>
                  <p className="text-base text-brand-secondary">{member.role}</p>
                  <p className="text-base text-brand-secondary">{member.bio}</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-brand-text">
                  <Linkedin className="h-4 w-4" />
                  <X className="h-4 w-4" />
                  <Globe className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h3 className="subsection-title">We're hiring</h3>
            <p className="text-base text-brand-secondary md:text-lg">
              Join a team of engineers building software that solves real problems for real
              organizations.
            </p>
            <SecondaryButton to="/contact">View careers</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-tint">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
            <div className="space-y-5">
              <p className="eyebrow">Track record</p>
              <h2 className="section-title">A decade of proven delivery</h2>
              <p className="text-base text-brand-secondary md:text-lg">
                We measure success by the systems we build and the partnerships we maintain. Our
                clients return because we deliver.
              </p>
              <SecondaryButton to="/contact">Learn</SecondaryButton>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {aboutStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page" id="testimonials">
        <div className="site-container space-y-10">
          <SectionIntro
            eyebrow="Partnership that delivers"
            title="What clients say"
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {aboutTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk about your systems"
        description="Let's discuss what your organization needs and how we can help you get there."
        primaryLabel="Contact"
        primaryTo="/contact"
        secondaryLabel="Services"
        secondaryTo="/services"
      />
    </>
  )
}
