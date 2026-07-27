import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { LogoMark } from './LogoMark'
import { site } from '#/content/site'
import { fadeUp, springSoft, springSnappy } from '#/lib/motion'

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const highlights = ['Full-stack', 'Web pentesting', 'Ops systems', 'iGaming']

export function Hero() {
  return (
    <section className="hero-plane relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="blob blob-tl"
        aria-hidden="true"
        animate={{ x: [0, 18, -10, 0], y: [0, 14, 6, 0], rotate: [0, 5, -3, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-br"
        aria-hidden="true"
        animate={{ x: [0, -16, 10, 0], y: [0, -12, 5, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-a"
        aria-hidden="true"
        animate={{ y: [0, -14, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-b"
        aria-hidden="true"
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="page-wrap relative z-10 grid items-center gap-10 px-4 pb-14 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pb-16 lg:pt-12">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.p
            variants={fadeUp}
            transition={springSoft}
            className="section-kicker mb-4"
          >
            {site.tagline} · Philippines
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={springSoft}
            className="display-title mb-4 text-[clamp(2.35rem,5.2vw,3.75rem)] text-[var(--ink)]"
          >
            <span className="logo-wordmark block text-[clamp(1.9rem,4vw,2.85rem)] mb-3">
              PRIMOTONIC
            </span>
            {site.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={springSoft}
            className="mb-7 max-w-md text-[1.05rem] leading-relaxed text-[var(--ink-soft)]"
          >
            {site.promise}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={springSoft}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
              <Link to="/contact" className="btn-primary">
                {site.ctaPrimary}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
              <Link to="/services" className="btn-secondary">
                {site.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-panel hidden lg:block"
          initial={{ opacity: 0, y: 24, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ ...springSoft, delay: 0.35 }}
        >
          <div className="relative z-10 flex flex-col items-start gap-5">
            <LogoMark size={88} />
            <p className="display-title m-0 text-2xl text-[var(--ink)]">
              Build. Secure. Support.
            </p>
            <p className="m-0 text-sm leading-relaxed text-[var(--ink-soft)]">
              End-to-end product work with measurable outcomes — including production
              platforms that have managed six-figure USD revenue periods.
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {highlights.map((item) => (
                <li key={item} className="metric-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
