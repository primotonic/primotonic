import { team } from '#/content/team'
import { GlassPanel, StaggerGroup, StaggerItem } from '#/components/motion'

export function TeamPreview({ limit }: { limit?: number }) {
  const items = limit ? team.slice(0, limit) : team

  return (
    <StaggerGroup className="grid gap-4 md:grid-cols-3">
      {items.map((member) => (
        <StaggerItem key={member.id}>
          <GlassPanel className="team-card h-full !p-0 overflow-hidden">
            <div className="team-photo-wrap">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
                loading="lazy"
                width={720}
                height={720}
              />
            </div>
            <div className="p-5">
              <h3 className="m-0 font-display text-[1.05rem] text-[var(--ink)]">
                {member.name}
              </h3>
              <p className="mt-1 mb-0 text-sm font-semibold text-[var(--brand-primary)]">
                {member.role}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                {member.summary}
              </p>
            </div>
          </GlassPanel>
        </StaggerItem>
      ))}
    </StaggerGroup>
  )
}
