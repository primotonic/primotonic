import { createFileRoute, Link } from '@tanstack/react-router'
import { services } from '#/content/services'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/services')({
  head: () =>
    pageHead({
      title: 'Services',
      description:
        'Web development, mobile apps, technical support, and web pentesting from Primotech — plus internal systems that replace costly tools.',
      path: '/services',
    }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4">
        <p className="section-kicker mb-3">Services</p>
        <h1 className="display-title m-0 max-w-3xl text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold text-[var(--ink)]">
          Full-stack build, ship, and secure
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[var(--ink-soft)] sm:text-base">
          Clear service pillars with measurable outcomes — full-stack websites and platforms,
          apps, support, web pentesting, and internal systems that cut subscription cost.
        </p>

        <div className="mt-8 flex flex-col gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-block rise-in ${index % 2 === 1 ? 'service-block-offset' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="service-block-accent" aria-hidden="true" />
              <div className="p-4 sm:p-5">
                <h2 className="m-0 font-display text-sm font-bold tracking-wide text-[var(--ink)] uppercase sm:text-base">
                  {service.title}
                </h2>
                <p className="mt-3 text-base text-[var(--ink-soft)]">{service.summary}</p>
                <p className="mt-3 text-sm text-[var(--ink)]">{service.details}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-[var(--ink-soft)]">
                  {service.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--line)] bg-white/70 p-4 sm:p-5">
          <h2 className="display-title m-0 text-lg font-bold text-[var(--ink)]">
            Beyond the brochure
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
            Our team also ships internal ops platforms, secure backends, monitoring,
            access control, and product documentation — the work that makes the
            three pillars durable in production.
          </p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Start a project
          </Link>
        </div>
      </div>
    </main>
  )
}
