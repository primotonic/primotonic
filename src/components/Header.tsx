import { Link } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { LogoLink } from './Logo'
import { nav } from '#/content/site'

export default function Header() {
  const { scrollY } = useScroll()
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(250, 246, 240, 0.72)', 'rgba(250, 246, 240, 0.94)'],
  )
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ['0 0 0 rgba(0,0,0,0)', '0 8px 24px rgba(22, 20, 18, 0.06)'],
  )

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[var(--line)] px-4 backdrop-blur-xl"
      style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
    >
      <nav className="page-wrap flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
        <LogoLink size="sm" />

        <div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-1 pb-0.5 sm:order-none sm:ml-6 sm:w-auto sm:pb-0">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
              activeOptions={{ exact: item.to === '/' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto">
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="btn-primary">
              Start a project
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
