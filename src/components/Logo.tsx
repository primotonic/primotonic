import { Link } from '@tanstack/react-router'
import { LogoMark } from './LogoMark'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

const sizes = {
  sm: { face: 26, text: 'text-[1.05rem]', gap: 'gap-2' },
  md: { face: 32, text: 'text-lg', gap: 'gap-2.5' },
  lg: { face: 48, text: 'text-3xl', gap: 'gap-3' },
} as const

export function Logo({
  size = 'md',
  showWordmark = true,
  className = '',
}: LogoProps) {
  const s = sizes[size]

  return (
    <span className={`logo-lockup inline-flex items-center ${s.gap} ${className}`}>
      <span className="logo-mark-wrap">
        <LogoMark size={s.face} />
      </span>
      {showWordmark ? (
        <span className={`logo-wordmark font-display font-bold ${s.text}`}>
          PRIMOTONIC
        </span>
      ) : null}
    </span>
  )
}

export function LogoLink({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <Link to="/" className="inline-flex no-underline" aria-label="Primotonic home">
      <Logo size={size} />
    </Link>
  )
}
