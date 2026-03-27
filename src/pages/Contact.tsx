import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
} from 'lucide-react'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { ContactMethodCard } from '../components/ui/ContactMethodCard'
import { FormField } from '../components/ui/FormField'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'
import { contactFaq } from '../data/siteData'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: "Send us a message and we'll get back to you promptly.",
    value: 'hello@galaxylogic.com',
  },
  {
    icon: MessageSquare,
    title: 'Live chat',
    description: 'Connect with our team in real time for immediate questions.',
    value: 'Start new chat',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak directly with a consultant about your project.',
    value: '+1 (415) 555-0147',
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Visit us or schedule time at our headquarters.',
    value: 'San Francisco, California 94105 US',
  },
]

const personaOptions = [
  'Operations leader',
  'Product owner',
  'Technology decision-maker',
  'Engineering manager',
  'Executive',
  'Other',
]

export function Contact() {
  return (
    <>
      <section className="bg-brand-tint section-space text-center">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <h1 className="hero-title">Let's talk</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              Reach out to discuss your software challenges and explore how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-6">
          {contactMethods.map((method) => (
            <ContactMethodCard key={method.title} {...method} />
          ))}
        </div>
      </section>

      <section className="section-space bg-brand-page">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5">
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title">Send us a message</h2>
            <p className="text-base text-brand-secondary md:text-lg">
              Tell us about your challenge and we'll explore the right approach together.
            </p>
            <ul className="space-y-2 text-base text-brand-secondary">
              <li>✉ hello@galaxylogic.com</li>
              <li>✆ +1 (415) 555-0147</li>
              <li>⌂ San Francisco, California 94105 US</li>
            </ul>
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField htmlFor="first-name" label="First name">
                <input className="h-11 w-full rounded-lg px-3" id="first-name" name="firstName" />
              </FormField>
              <FormField htmlFor="last-name" label="Last name">
                <input className="h-11 w-full rounded-lg px-3" id="last-name" name="lastName" />
              </FormField>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField htmlFor="email" label="Email">
                <input
                  className="h-11 w-full rounded-lg px-3"
                  id="email"
                  name="email"
                  type="email"
                />
              </FormField>
              <FormField htmlFor="phone" label="Phone number">
                <input className="h-11 w-full rounded-lg px-3" id="phone" name="phone" />
              </FormField>
            </div>

            <FormField htmlFor="message" label="Message">
              <textarea
                className="min-h-[140px] w-full rounded-lg px-3 py-2"
                id="message"
                name="message"
                placeholder="Tell us more about your project..."
              />
            </FormField>

            <label className="inline-flex items-center gap-2 text-sm text-brand-secondary">
              <input className="h-4 w-4 rounded border-brand-border" type="checkbox" name="privacy" />
              I agree to the privacy policy
            </label>

            <div>
              <PrimaryButton type="submit">Send</PrimaryButton>
            </div>
          </form>
        </div>
      </section>

      <section className="section-space bg-brand-tint">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Accessible"
              title="Where we work"
              description="Meet us in person or connect remotely."
            />

            <div className="space-y-5 border-l-2 border-brand-border pl-4">
              <div>
                <h3 className="subsection-title">San Francisco</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  555 Market Street, San Francisco CA 94105
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-text">Get directions</p>
              </div>
              <div>
                <h3 className="subsection-title">Remote first</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  Virtual consultations available across all time zones
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-text">Schedule call</p>
              </div>
              <div>
                <h3 className="subsection-title">Flexible engagement</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  On-site or distributed teams based on project needs
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-text">Discuss options</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-card bg-brand-border">
            <img
              className="h-[320px] w-full object-cover"
              src="/images/placeholders/map.svg"
              alt="Map showing where GalaxyLogic works"
            />
          </div>
        </div>
      </section>
    </>
  )
}
