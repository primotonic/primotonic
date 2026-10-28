import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'
import { nav, site } from '#/content/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-16 px-4 pb-12 pt-10 text-[var(--ink-soft)]">
      <div className="page-wrap grid gap-8 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo size="sm" />
          <p className="mt-3.5 max-w-sm text-sm leading-relaxed">{site.promise}</p>
        </div>

        <div>
          <p className="section-kicker mb-2.5">Explore</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[var(--ink)] no-underline hover:text-[var(--brand-primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-kicker mb-2.5">Connect</p>
          <p className="m-0 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-[var(--ink)] no-underline hover:text-[var(--brand-primary)]"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-1.5 text-sm">{site.social.handle}</p>
          {site.social.profiles.length > 0 ? (
            <ul className="mt-2.5 m-0 flex list-none flex-col gap-1.5 p-0 text-sm font-semibold">
              {site.social.profiles.map((href) => {
                const label = href.includes('linkedin')
                  ? 'LinkedIn'
                  : href.includes('facebook')
                    ? 'Facebook'
                    : href.includes('twitter') || href.includes('x.com')
                      ? 'X / Twitter'
                      : href.includes('github')
                        ? 'GitHub'
                        : 'Social'
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="text-[var(--ink)] no-underline hover:text-[var(--brand-primary)]"
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : null}
          <Link to="/contact" className="btn-primary mt-4 inline-flex">
            Start a project
          </Link>
        </div>
      </div>

      <div className="page-wrap mt-8 flex flex-col items-center justify-between gap-2 border-t border-[var(--line)] pt-5 text-center text-sm sm:flex-row sm:text-left">
        <p className="m-0">
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <Link
          to="/privacy-policy"
          className="font-semibold text-[var(--ink)] underline underline-offset-4 hover:text-[var(--brand-primary)]"
        >
          Privacy Policy
        </Link>
        <p className="m-0">Philippines-based engineering team</p>
      </div>
    </footer>
  )
}
