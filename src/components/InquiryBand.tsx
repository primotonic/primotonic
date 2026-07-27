import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { FadeInView } from '#/components/motion'
import { springSoft } from '#/lib/motion'

export function InquiryBand() {
  return (
    <section className="inquiry-band relative overflow-hidden">
      <motion.div
        className="blob blob-tl opacity-45"
        aria-hidden="true"
        animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FadeInView className="page-wrap relative z-10 px-4 py-12 text-center sm:py-14">
        <h2 className="display-title m-0 text-[clamp(1.55rem,2.8vw,2.15rem)] text-[var(--ink)]">
          Have a system problem worth solving?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[0.95rem] text-[var(--ink-soft)]">
          Tell us what is broken, costly, or invisible today. We start with the
          problem — not a feature list.
        </p>
        <motion.div
          className="mt-6 inline-flex"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={springSoft}
        >
          <Link to="/contact" className="btn-primary">
            Start a project inquiry
          </Link>
        </motion.div>
      </FadeInView>
    </section>
  )
}
