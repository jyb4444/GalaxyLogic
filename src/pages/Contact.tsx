import { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
} from 'lucide-react'
import { ContactMethodCard } from '../components/ui/ContactMethodCard'
import { FormField } from '../components/ui/FormField'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SectionIntro } from '../components/ui/SectionIntro'

type ContactMethod = {
  icon: typeof Mail
  title: string
  description: string
  value: string
  opensWechatPopup?: boolean
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: 'Email',
    description: "Send us a message and we'll get back to you promptly.",
    value: 'info@galaxy-logic.com',
  },
  {
    icon: MessageSquare,
    title: 'Live chat',
    description: 'Connect with our team in real time for immediate questions.',
    value: 'Start new chat',
    opensWechatPopup: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak directly with a consultant about your project.',
    value: '+1 (517) 204-2820',
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Visit us or schedule time at our headquarters.',
    value: '800 w 6th street 310, Los Angeles, CA, 90017',
  },
]

type ContactFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialFormValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  privacy: false,
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const PHONE_ALLOWED_CHARS_REGEX = /^\+?[0-9\s\-()]+$/

function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'Please enter your first name.'
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Please enter your last name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else {
    const phone = values.phone.trim()
    const digits = phone.replace(/\D/g, '')
    if (!PHONE_ALLOWED_CHARS_REGEX.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = 'Please enter a valid phone number.'
    }
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  if (!values.privacy) {
    errors.privacy = 'Please agree to the privacy policy before sending.'
  }

  return errors
}

export function Contact() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues)
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
  const [isWechatPopupOpen, setIsWechatPopupOpen] = useState(false)
  const [submitState, submitToFormspree, resetSubmitState] = useForm('moqgdozg')

  function clearFieldError(field: keyof ContactFormValues) {
    setFormErrors((current) => {
      if (!current[field]) {
        return current
      }

      const next = { ...current }
      delete next[field]
      return next
    })
  }

  return (
    <>
      <section className="bg-brand-tint section-space text-center" id="contact-top">
        <div className="site-container">
          <div className="mx-auto max-w-3xl space-y-5">
            <h1 className="hero-title">Let's talk</h1>
            <p className="text-base text-brand-secondary md:text-lg">
              Reach out to discuss your software challenges and explore how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-page" id="contact-methods">
        <div className="site-container grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-6">
          {contactMethods.map((method) => (
            <ContactMethodCard
              key={method.title}
              {...method}
              valueAsButton={Boolean(method.opensWechatPopup)}
              onValueClick={method.opensWechatPopup ? () => setIsWechatPopupOpen(true) : undefined}
            />
          ))}
        </div>
      </section>

      {isWechatPopupOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wechat-popup-title"
          onClick={() => setIsWechatPopupOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-brand-border bg-white p-5 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="subsection-title text-[24px]" id="wechat-popup-title">
              WeChat Consultation
            </h3>
            <p className="mt-2 text-sm text-brand-secondary">Scan the QR code to start a chat.</p>
            <img
              className="mx-auto mt-4 h-56 w-56 rounded-lg border border-brand-border object-cover"
              src="/images/wechat.jpg"
              alt="GalaxyLogic WeChat QR code"
            />
            <div className="mt-5 flex justify-end">
              <button
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-tint"
                type="button"
                onClick={() => setIsWechatPopupOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="section-space bg-brand-page">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5">
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title">Send us a message</h2>
            <p className="text-base text-brand-secondary md:text-lg">
              Tell us about your challenge and we'll explore the right approach together.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
              const nextErrors = validateContactForm(formValues)
              setFormErrors(nextErrors)
              if (Object.keys(nextErrors).length === 0) {
                void submitToFormspree(event)
              }
            }}
          >
            <input name="_subject" type="hidden" value="New message from GalaxyLogic website" />

            <div className="grid gap-4 md:grid-cols-2">
              <FormField htmlFor="firstName" label="First name">
                <input
                  autoComplete="given-name"
                  className="h-11 w-full rounded-lg px-3"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={(event) => {
                    if (submitState.succeeded) {
                      resetSubmitState()
                    }
                    setFormValues((current) => ({ ...current, firstName: event.target.value }))
                    clearFieldError('firstName')
                  }}
                />
                {formErrors.firstName ? (
                  <p className="text-sm font-medium text-red-600">{formErrors.firstName}</p>
                ) : null}
              </FormField>
              <FormField htmlFor="lastName" label="Last name">
                <input
                  autoComplete="family-name"
                  className="h-11 w-full rounded-lg px-3"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={(event) => {
                    if (submitState.succeeded) {
                      resetSubmitState()
                    }
                    setFormValues((current) => ({ ...current, lastName: event.target.value }))
                    clearFieldError('lastName')
                  }}
                />
                {formErrors.lastName ? (
                  <p className="text-sm font-medium text-red-600">{formErrors.lastName}</p>
                ) : null}
              </FormField>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField htmlFor="email" label="Email">
                <input
                  autoComplete="email"
                  className="h-11 w-full rounded-lg px-3"
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={(event) => {
                    if (submitState.succeeded) {
                      resetSubmitState()
                    }
                    setFormValues((current) => ({ ...current, email: event.target.value }))
                    clearFieldError('email')
                  }}
                />
                {formErrors.email ? (
                  <p className="text-sm font-medium text-red-600">{formErrors.email}</p>
                ) : null}
              </FormField>
              <FormField htmlFor="phone" label="Phone number">
                <input
                  autoComplete="tel"
                  className="h-11 w-full rounded-lg px-3"
                  id="phone"
                  inputMode="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  type="tel"
                  value={formValues.phone}
                  onChange={(event) => {
                    if (submitState.succeeded) {
                      resetSubmitState()
                    }
                    setFormValues((current) => ({ ...current, phone: event.target.value }))
                    clearFieldError('phone')
                  }}
                />
                {formErrors.phone ? (
                  <p className="text-sm font-medium text-red-600">{formErrors.phone}</p>
                ) : null}
              </FormField>
            </div>

            <FormField htmlFor="message" label="Message">
              <textarea
                className="min-h-[140px] w-full rounded-lg px-3 py-2"
                id="message"
                name="message"
                placeholder="Tell us more about your project..."
                value={formValues.message}
                onChange={(event) => {
                  if (submitState.succeeded) {
                    resetSubmitState()
                  }
                  setFormValues((current) => ({ ...current, message: event.target.value }))
                  clearFieldError('message')
                }}
              />
              {formErrors.message ? (
                <p className="text-sm font-medium text-red-600">{formErrors.message}</p>
              ) : null}
            </FormField>

            <label className="inline-flex items-center gap-2 text-sm text-brand-secondary">
              <input
                checked={formValues.privacy}
                className="h-4 w-4 rounded border-brand-border"
                name="privacy"
                type="checkbox"
                onChange={(event) => {
                  if (submitState.succeeded) {
                    resetSubmitState()
                  }
                  setFormValues((current) => ({ ...current, privacy: event.target.checked }))
                  clearFieldError('privacy')
                }}
              />
              I agree to the privacy policy
            </label>
            {formErrors.privacy ? (
              <p className="text-sm font-medium text-red-600">{formErrors.privacy}</p>
            ) : null}

            <ValidationError errors={submitState.errors} field="email" prefix="Email" />
            <ValidationError errors={submitState.errors} field="message" prefix="Message" />

            {submitState.succeeded ? (
              <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2">
                <p className="text-sm font-medium text-emerald-700">
                  Message sent successfully. Thank you, I will get back to you soon.
                </p>
                <button
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  type="button"
                  onClick={resetSubmitState}
                >
                  Dismiss
                </button>
              </div>
            ) : null}

            <div>
              <PrimaryButton disabled={submitState.submitting} type="submit">
                {submitState.submitting ? 'Sending...' : 'Send'}
              </PrimaryButton>
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
                <h3 className="subsection-title">Los Angeles</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  800 w 6th street 310, Los Angeles, CA, 90017
                </p>
                <a
                  className="mt-2 inline-block text-sm font-semibold text-brand-text no-underline hover:text-brand-accent"
                  href="https://www.google.com/maps/search/?api=1&query=800+W+6th+St+310,+Los+Angeles,+CA+90017"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>
              <div>
                <h3 className="subsection-title">Remote first</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  Virtual consultations available across all time zones
                </p>
              </div>
              <div>
                <h3 className="subsection-title">Flexible engagement</h3>
                <p className="mt-1 text-base text-brand-secondary">
                  On-site or distributed teams based on project needs
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-brand-border bg-brand-section">
            <iframe
              className="h-[320px] w-full border-0"
              src="https://www.google.com/maps?q=800+W+6th+St+310,+Los+Angeles,+CA+90017&z=15&output=embed"
              title="Map showing GalaxyLogic office location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
