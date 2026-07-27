import { FadeInView } from '#/components/motion'
import type { ReactNode } from 'react'

export function SectionIntro({
  kicker,
  title,
  description,
  children,
  className = '',
}: {
  kicker: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <FadeInView className={className}>
      <p className="section-kicker mb-2.5">{kicker}</p>
      <h2 className="display-title m-0 max-w-xl text-[clamp(1.55rem,2.6vw,2.1rem)] text-[var(--ink)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          {description}
        </p>
      ) : null}
      {children}
    </FadeInView>
  )
}
