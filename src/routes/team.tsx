import { createFileRoute, Link } from '@tanstack/react-router'
import { team } from '#/content/team'
import { Breadcrumbs } from '#/components/Breadcrumbs'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/team')({
  head: () =>
    pageHead({
      title: 'Team',
      description:
        'Meet the Primotonic team — Melquizedek Felix, Von Aralar, and Rojhon Buenaventura. Philippines-based full-stack engineers.',
      path: '/team',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' },
      ],
    }),
  component: TeamPage,
})

function TeamPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4">
        <Breadcrumbs
          className="mb-5"
          items={[
            { name: 'Home', path: '/' },
            { name: 'Team', path: '/team' },
          ]}
        />
        <p className="section-kicker mb-3">Team</p>
        <h1 className="display-title m-0 max-w-3xl text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold text-[var(--ink)]">
          People you will actually work with
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[var(--ink-soft)] sm:text-base">
          A compact Philippines-based group spanning full-stack systems, security,
          web, and games.
        </p>

        <div className="mt-8 grid gap-4">
          {team.map((member, index) => (
            <article
              key={member.id}
              id={member.id}
              className="team-card rise-in overflow-hidden !p-0 sm:grid sm:grid-cols-[220px_1fr]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="team-photo-wrap team-photo-wrap-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                  width={720}
                  height={720}
                />
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="m-0 font-display text-lg font-bold text-[var(--ink)]">
                  {member.name}
                </h2>
                <p className="mt-1 font-semibold text-[var(--brand-primary)]">
                  {member.role}
                </p>
                <p className="mt-3 max-w-3xl text-sm text-[var(--ink-soft)] sm:text-base">
                  {member.summary}
                </p>

                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[var(--ink)]">
                  {member.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                  {member.skills.map((skill) => (
                    <li key={skill} className="metric-chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/contact" className="btn-primary">
            Work with us
          </Link>
        </div>
      </div>
    </main>
  )
}
