import { createFileRoute } from '@tanstack/react-router'
import { ContactForm, InquiryForm } from '#/components/InquiryForm'
import { site } from '#/content/site'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () =>
    pageHead({
      title: 'Contact',
      description:
        'Contact Primotech or start a project inquiry for web, mobile, support, or internal systems work.',
      path: '/contact',
    }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4">
        <p className="section-kicker mb-3">Contact</p>
        <h1 className="display-title m-0 max-w-3xl text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold text-[var(--ink)]">
          Tell us the problem first
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[var(--ink-soft)] sm:text-base">
          Building an internal system, replacing a costly tool, or need clearer
          operational visibility? Reach out — or walk through a short project inquiry.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="display-title m-0 text-lg font-bold text-[var(--ink)]">
              Project inquiry
            </h2>
            <p className="mt-2 mb-5 text-sm text-[var(--ink-soft)]">
              Three quick steps. We review scope, budget, and timeline together.
            </p>
            <InquiryForm />
          </section>

          <section className="flex flex-col gap-6">
            <div>
              <h2 className="display-title m-0 text-lg font-bold text-[var(--ink)]">
                Quick message
              </h2>
              <p className="mt-2 mb-5 text-sm text-[var(--ink-soft)]">
                Prefer a short note? Send it here.
              </p>
              <ContactForm />
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-white/70 p-4">
              <p className="section-kicker mb-2">Direct</p>
              <p className="m-0 text-sm text-[var(--ink-soft)]">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-flex font-semibold text-[var(--ink)] no-underline hover:text-[var(--brand-primary)]"
              >
                {site.email}
              </a>
              <p className="mt-4 text-sm text-[var(--ink-soft)]">Social</p>
              <p className="m-0 font-semibold text-[var(--ink)]">{site.social.handle}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
