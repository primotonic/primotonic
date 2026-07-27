import { createFileRoute, Link } from '@tanstack/react-router'
import { caseStudies } from '#/content/case-studies'
import { Breadcrumbs } from '#/components/Breadcrumbs'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/work')({
  head: () =>
    pageHead({
      title: 'Work',
      description:
        'Case studies from Primotonic — full-stack systems, banking ops, government-approved iGaming platforms, and confidential engagements.',
      path: '/work',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
      ],
    }),
  component: WorkPage,
})

function WorkPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4">
        <Breadcrumbs
          className="mb-5"
          items={[
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
          ]}
        />
        <p className="section-kicker mb-3">Work</p>
        <h1 className="display-title m-0 max-w-3xl text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold text-[var(--ink)]">
          Full-stack systems that shipped
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[var(--ink-soft)] sm:text-base">
          Real production work — measurable ops outcomes, plus confidential
          engagements where the client brand stays under NDA.
        </p>

        <div className="mt-8 grid gap-6">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              id={study.id}
              className="case-card rise-in p-4 sm:p-5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="section-kicker m-0">{study.clientContext}</p>
                {study.nda ? <span className="nda-badge">NDA</span> : null}
              </div>
              <h2 className="display-title text-xl font-bold text-[var(--ink)]">
                {study.title}
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="m-0 text-xs font-bold tracking-wider text-[var(--brand-primary)] uppercase">
                    Purpose
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">{study.purpose}</p>
                </div>
                <div>
                  <h3 className="m-0 text-xs font-bold tracking-wider text-[var(--brand-primary)] uppercase">
                    Problem
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">{study.problem}</p>
                </div>
                <div>
                  <h3 className="m-0 text-xs font-bold tracking-wider text-[var(--brand-primary)] uppercase">
                    Solution
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">{study.solution}</p>
                </div>
                <div>
                  <h3 className="m-0 text-xs font-bold tracking-wider text-[var(--brand-primary)] uppercase">
                    Outcome
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--ink)]">{study.outcome}</p>
                </div>
              </div>

              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {study.metrics.map((metric) => (
                  <li key={metric} className="metric-chip">
                    {metric}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-[var(--line)] bg-[var(--cream)] px-2.5 py-1 text-xs font-semibold text-[var(--ink-soft)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-primary">
            Start a project inquiry
          </Link>
        </div>
      </div>
    </main>
  )
}
