import { CTASection } from '../components/sections/CTASection'
import { SplitFeatureSection } from '../components/sections/SplitFeatureSection'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import { ServiceCard } from '../components/ui/ServiceCard'
import {
  servicesFaq,
  servicesFeatures,
  servicesPartnershipCards,
  servicesPrimary,
} from '../data/siteData'

export function Services() {
  return (
    <>
      <section className="bg-brand-tint section-space text-center">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="eyebrow">Expertise</p>
            <h1 className="hero-title">Enterprise software solutions</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              We design, build, and modernize the systems that power your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <PrimaryButton to="/contact">Consult</PrimaryButton>
              <SecondaryButton to="/about">Learn more</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-12">
          <SectionIntro
            centered
            eyebrow="Engineering"
            title="Software engineering"
            description="We build and extend business-critical applications with clean architecture and scalable design."
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {servicesPrimary.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                dark
                imageSrc="/images/placeholders/square.svg"
              />
            ))}
          </div>
        </div>
      </section>

      {servicesFeatures.map((feature, index) => (
        <SplitFeatureSection
          key={feature.title}
          {...feature}
          reverse={index % 2 === 1}
          primaryLabel="Learn"
          primaryTo="/about"
          secondaryLabel="Explore"
          secondaryTo="/contact"
          className="bg-brand-page"
        />
      ))}

      <section className="section-space bg-brand-page">
        <div className="site-container space-y-12">
          <SectionIntro
            centered
            eyebrow="Partnership"
            title="Long-term engineering support"
            description="Sustained growth requires reliable technical support beyond project completion."
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {servicesPartnershipCards.map((card) => (
              <ServiceCard
                key={card.title}
                {...card}
                dark
                imageSrc="/images/placeholders/square.svg"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page" id="faq">
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
            <SecondaryButton to="/contact">Contact</SecondaryButton>
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
