import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { services } from '#/content/services'
import { StaggerGroup, StaggerItem } from '#/components/motion'
import { springSoft } from '#/lib/motion'

export function ServicesPreview({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-2">
      {items.map((service) => (
        <StaggerItem key={service.id}>
          <motion.article
            className="service-block"
            whileHover={{ y: -4 }}
            transition={springSoft}
          >
            <div className="service-block-accent" aria-hidden="true" />
            <div className="p-4 sm:p-5">
              <h3 className="m-0 font-display text-[0.95rem] tracking-tight text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="mt-2 mb-0 text-sm leading-relaxed text-[var(--ink-soft)]">
                {service.summary}
              </p>
            </div>
          </motion.article>
        </StaggerItem>
      ))}
      {limit ? (
        <StaggerItem className="sm:col-span-2">
          <Link to="/services" className="btn-secondary">
            All services
          </Link>
        </StaggerItem>
      ) : null}
    </StaggerGroup>
  )
}
