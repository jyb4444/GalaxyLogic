import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/sections/CTASection'
import { SplitFeatureSection } from '../components/sections/SplitFeatureSection'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import { ServiceCard } from '../components/ui/ServiceCard'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import {
  homeCoreServices,
  homeSolutions,
  homeTestimonials,
  homeWhyFeatures,
} from '../data/siteData'

export function Home() {
  return (
    <>
      <section className="bg-brand-tint pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="site-container">
          <div className="surface-card overflow-hidden bg-brand-tint p-6 md:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-6">
                <h1 className="hero-title">
                  Software that works.
                  <br />
                  Systems that scale.
                </h1>
                <p className="max-w-xl text-base text-brand-secondary md:text-lg">
                  GalaxyLogic LLC builds and modernizes the software systems that power your
                  business. We work with enterprises and growing companies to design, integrate,
                  and support technology that matters.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <PrimaryButton to="/contact">Start consulting</PrimaryButton>
                  <SecondaryButton to="/services">Learn more</SecondaryButton>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-brand-border">
                <img
                  className="h-[340px] w-full object-cover md:h-[420px]"
                  src="/images/placeholders/hero.svg"
                  alt="GalaxyLogic consulting team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-12">
          <SectionIntro
            centered
            eyebrow="Core"
            title="What we build"
            description="Custom software engineered for your business needs"
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {homeCoreServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <SplitFeatureSection
        eyebrow="About"
        title="About GalaxyLogic LLC"
        description="We partner with organizations to build and modernize the software systems that drive their business. Our approach combines technical depth with practical understanding of enterprise operations."
        primaryLabel="Learn more"
        primaryTo="/"
        secondaryLabel="About"
        secondaryTo="/"
        imageSrc="/images/placeholders/office.svg"
        imageAlt="GalaxyLogic discussion session"
      />

      <section className="section-space bg-brand-tint">
        <div className="site-container space-y-12">
          <SectionIntro
            eyebrow="Advantage"
            title="Why work with us"
            description="We bring proven expertise and a commitment to long-term success. Your challenges become our priority."
          />

          {homeWhyFeatures.map((feature, index) => (
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10" key={feature.title}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="subsection-title">{feature.title}</h3>
                <p className="mt-3 max-w-xl text-base text-brand-secondary md:text-lg">
                  {feature.description}
                </p>
                {index === 0 ? (
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <PrimaryButton to="/contact">Start consulting</PrimaryButton>
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text no-underline hover:text-brand-accent"
                      to="/contact"
                    >
                      Contact
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : null}
              </div>

              <div
                className={
                  index % 2 === 1
                    ? 'overflow-hidden rounded-card bg-brand-border lg:order-1'
                    : 'overflow-hidden rounded-card bg-brand-border'
                }
              >
                <img
                  className="h-[320px] w-full object-cover"
                  src={feature.imageSrc}
                  alt={feature.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-12">
          <SectionIntro
            centered
            eyebrow="Solutions"
            title="What we solve"
            description="From legacy modernization to new product delivery"
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {homeSolutions.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-10">
          <SectionIntro
            centered
            title="Trusted partners"
            description="What our clients say"
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {homeTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to transform your systems?"
        description="Let's discuss how GalaxyLogic LLC can solve your toughest technical challenges."
        primaryLabel="Consult"
        primaryTo="/contact"
        secondaryLabel="Contact"
        secondaryTo="/contact"
        imageSrc="/images/placeholders/wide.svg"
        imageAlt="Consulting collaboration"
      />
    </>
  )
}
