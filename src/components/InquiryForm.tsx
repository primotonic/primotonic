import { useState, type FormEvent, type ReactNode } from 'react'
import {
  budgetOptions,
  serviceOptions,
  timelineOptions,
} from '#/content/site'
import { submitFormspree } from '#/lib/formspree'

type InquiryState = {
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  description: string
  website: string
}

const initial: InquiryState = {
  name: '',
  email: '',
  company: '',
  service: serviceOptions[0],
  budget: budgetOptions[4],
  timeline: timelineOptions[3],
  description: '',
  website: '',
}

export function InquiryForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<InquiryState>(initial)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [error, setError] = useState('')

  function update<K extends keyof InquiryState>(key: K, value: InquiryState[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  function next(event: FormEvent) {
    event.preventDefault()
    if (step === 1) {
      if (!data.name.trim() || !data.email.trim()) {
        setError('Name and email are required.')
        return
      }
      setError('')
      setStep(2)
      return
    }
    if (step === 2) {
      if (!data.description.trim()) {
        setError('Tell us a bit about the problem.')
        return
      }
      setError('')
      setStep(3)
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (data.website.trim()) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setError('')

    const result = await submitFormspree({
      formType: 'inquiry',
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description,
      _replyto: data.email,
    })

    if (!result.ok) {
      setStatus('error')
      setError(result.error)
      return
    }

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="form-shell p-4 sm:p-5">
        <h3 className="m-0 font-display text-lg font-bold text-[var(--ink)]">
          Inquiry received
        </h3>
        <p className="mt-3 text-[var(--ink-soft)]">
          Thanks {data.name.split(' ')[0] || 'there'}. We will review your project
          details and get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="form-shell p-4 sm:p-5">
      <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`rounded-full px-3 py-1 ${
              step === n
                ? 'bg-[var(--brand-primary)] text-white'
                : step > n
                  ? 'bg-[rgba(255,106,0,0.15)] text-[var(--brand-primary)]'
                  : 'bg-[rgba(26,26,26,0.06)] text-[var(--ink-soft)]'
            }`}
          >
            {n === 1 ? 'Contact' : n === 2 ? 'Project' : 'Review'}
          </span>
        ))}
      </div>

      {step === 1 ? (
        <form onSubmit={next} className="grid gap-4">
          <Field label="Name" required>
            <input
              className="field-input"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Email" required>
            <input
              className="field-input"
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              autoComplete="email"
              required
            />
          </Field>
          <Field label="Company">
            <input
              className="field-input"
              value={data.company}
              onChange={(e) => update('company', e.target.value)}
              autoComplete="organization"
            />
          </Field>
          <Honeypot value={data.website} onChange={(v) => update('website', v)} />
          {error ? <p className="form-error">{error}</p> : null}
          <button type="submit" className="btn-primary mt-2 justify-self-start">
            Continue
          </button>
        </form>
      ) : null}

      {step === 2 ? (
        <form onSubmit={next} className="grid gap-4">
          <Field label="Service interest" required>
            <select
              className="field-input"
              value={data.service}
              onChange={(e) => update('service', e.target.value)}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget range" required>
            <select
              className="field-input"
              value={data.budget}
              onChange={(e) => update('budget', e.target.value)}
            >
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Timeline" required>
            <select
              className="field-input"
              value={data.timeline}
              onChange={(e) => update('timeline', e.target.value)}
            >
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="What problem should we solve?" required>
            <textarea
              className="field-input min-h-28"
              value={data.description}
              onChange={(e) => update('description', e.target.value)}
              required
            />
          </Field>
          {error ? <p className="form-error">{error}</p> : null}
          <div className="mt-2 flex flex-wrap gap-3">
            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit" className="btn-primary">
              Review
            </button>
          </div>
        </form>
      ) : null}

      {step === 3 ? (
        <form onSubmit={submit} className="grid gap-4">
          <dl className="review-grid">
            <ReviewRow label="Name" value={data.name} />
            <ReviewRow label="Email" value={data.email} />
            <ReviewRow label="Company" value={data.company || '—'} />
            <ReviewRow label="Service" value={data.service} />
            <ReviewRow label="Budget" value={data.budget} />
            <ReviewRow label="Timeline" value={data.timeline} />
            <ReviewRow label="Problem" value={data.description} />
          </dl>
          {error ? <p className="form-error">{error}</p> : null}
          <div className="mt-2 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep(2)}
              disabled={status === 'submitting'}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Submit inquiry'}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (website.trim()) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setError('')

    const result = await submitFormspree({
      formType: 'contact',
      name,
      email,
      message,
      _replyto: email,
    })

    if (!result.ok) {
      setStatus('error')
      setError(result.error)
      return
    }

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="form-shell p-4 sm:p-5">
        <h3 className="m-0 font-display text-lg font-bold text-[var(--ink)]">
          Message sent
        </h3>
        <p className="mt-3 text-[var(--ink-soft)]">
          Thanks — we will reply as soon as we can.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="form-shell grid gap-4 p-4 sm:p-5">
      <Field label="Name" required>
        <input
          className="field-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Field>
      <Field label="Email" required>
        <input
          className="field-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Field>
      <Field label="Message" required>
        <textarea
          className="field-input min-h-28"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Field>
      <Honeypot value={website} onChange={setWebsite} />
      {error ? <p className="form-error">{error}</p> : null}
      <button
        type="submit"
        className="btn-primary justify-self-start"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold text-[var(--ink)]">
      <span>
        {label}
        {required ? <span className="text-[var(--brand-accent)]"> *</span> : null}
      </span>
      {children}
    </label>
  )
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold tracking-wider text-[var(--ink-soft)] uppercase">
        {label}
      </dt>
      <dd className="mt-1 mb-0 text-sm text-[var(--ink)] whitespace-pre-wrap">{value}</dd>
    </div>
  )
}

function Honeypot({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
}
