import { outcomes } from '#/content/site'
import { StaggerGroup, StaggerItem } from '#/components/motion'

export function OutcomesStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-white/50 backdrop-blur-sm">
      <StaggerGroup
        className="page-wrap grid grid-cols-2 items-stretch gap-3 px-4 py-6 sm:grid-cols-4 sm:gap-4"
        fast
      >
        {outcomes.map((item) => (
          <StaggerItem key={item.label} className="h-full min-h-0">
            <div className="glass-panel glass-panel-compact flex h-full min-h-[5.75rem] flex-col justify-start text-left sm:min-h-[6.25rem]">
              <p className="m-0 min-h-[1.75rem] font-display text-[1.15rem] leading-none tracking-tight text-[var(--brand-primary)] sm:min-h-[2rem] sm:text-[1.45rem] lg:text-[1.6rem]">
                {item.value}
              </p>
              <p className="mt-2 mb-0 min-h-[2.5rem] text-xs leading-snug text-[var(--ink-soft)]">
                {item.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
