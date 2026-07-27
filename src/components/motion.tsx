import { motion, useInView, type HTMLMotionProps } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { fadeUp, springSoft } from '#/lib/motion'

type FadeInViewProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  amount?: number
}

export function FadeInView({
  children,
  delay = 0,
  amount = 0.2,
  ...props
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ ...springSoft, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  fast?: boolean
}

export function StaggerGroup({ children, className, fast }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={
        fast
          ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
          : { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
      }
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={springSoft}
    >
      {children}
    </motion.div>
  )
}

export function GlassPanel({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <motion.div
      className={`glass-panel ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              transition: springSoft,
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.995 } : undefined}
    >
      {children}
    </motion.div>
  )
}

export function MotionLink({
  children,
  className,
  href,
}: {
  children: ReactNode
  className?: string
  href: string
}) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springSoft}
    >
      {children}
    </motion.a>
  )
}
