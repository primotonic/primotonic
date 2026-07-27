import { Link } from '@tanstack/react-router'
import { caseStudies } from '#/content/case-studies'
import { GlassPanel, StaggerGroup, StaggerItem } from '#/components/motion'

export function WorkPreview({ featuredOnly = true }: { featuredOnly?: boolean }) {
  const items = featuredOnly
    ? caseStudies.filter((c) => c.featured).slice(0, 3)
    : caseStudies

  return (
    <StaggerGroup className="grid gap-4 lg:grid-cols-3">
      {items.map((study) => (
        <StaggerItem key={study.id}>
          <GlassPanel className="work-teaser h-full !p-0">
            <div className="p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="section-kicker m-0">{study.clientContext}</p>
                {study.nda ? <span className="nda-badge">NDA</span> : null}
              </div>
              <h3 className="m-0 font-display text-[1.05rem] text-[var(--ink)]">
                {study.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                {study.outcome}
              </p>
              <ul className="mt-3.5 flex list-none flex-wrap gap-1.5 p-0">
                {study.metrics.map((metric) => (
                  <li key={metric} className="metric-chip">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </GlassPanel>
        </StaggerItem>
      ))}
      <StaggerItem className="lg:col-span-3">
        <Link to="/work" className="btn-secondary">
          Browse case studies
        </Link>
      </StaggerItem>
    </StaggerGroup>
  )
}
