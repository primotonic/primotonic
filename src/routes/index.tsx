import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '#/components/Hero'
import { OutcomesStrip } from '#/components/OutcomesStrip'
import { ServicesPreview } from '#/components/ServicesPreview'
import { WorkPreview } from '#/components/WorkPreview'
import { TeamPreview } from '#/components/TeamPreview'
import { InquiryBand } from '#/components/InquiryBand'
import { SectionIntro } from '#/components/SectionIntro'
import { FadeInView } from '#/components/motion'
import { pageHead } from '#/lib/seo'
import { site } from '#/content/site'

export const Route = createFileRoute('/')({
  head: () => pageHead({ title: site.name, path: '/' }),
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <Hero />
      <OutcomesStrip />

      <section className="section-block">
        <div className="page-wrap px-4">
          <SectionIntro
            className="mb-8"
            kicker="Services"
            title="Full-stack web, mobile, support, and security"
            description="Build, ship, secure, and sustain — end-to-end systems your team can run in production."
          />
          <ServicesPreview limit={4} />
        </div>
      </section>

      <section className="section-block border-t border-[var(--line)] bg-white/30 backdrop-blur-sm">
        <div className="page-wrap px-4">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionIntro
              className="mb-0"
              kicker="Selected work"
              title="Outcomes over features"
              description="Proof from production systems — from revenue-scale platforms to confidential NDA work."
            />
            <FadeInView delay={0.1}>
              <Link
                to="/work"
                className="text-sm font-semibold text-[var(--ink)] no-underline hover:text-[var(--brand-primary)]"
              >
                Browse case studies →
              </Link>
            </FadeInView>
          </div>
          <WorkPreview />
        </div>
      </section>

      <section className="section-block">
        <div className="page-wrap px-4">
          <SectionIntro
            className="mb-8"
            kicker="Team"
            title="The engineers behind Primotech"
            description="Full-stack systems, secure backends, and product craft — one Philippines-based team."
          />
          <TeamPreview />
          <FadeInView className="mt-8" delay={0.15}>
            <Link to="/team" className="btn-secondary text-sm">
              Meet the team
            </Link>
          </FadeInView>
        </div>
      </section>

      <InquiryBand />
    </main>
  )
}
