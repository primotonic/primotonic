import { Link } from '@tanstack/react-router'
import type { BreadcrumbItem } from '#/lib/seo'

export function Breadcrumbs({
  items,
  className = '',
}: {
  items: BreadcrumbItem[]
  className?: string
}) {
  const trail =
    items[0]?.path === '/'
      ? items
      : [{ name: 'Home', path: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs ${className}`.trim()}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0 text-sm text-[var(--ink-soft)]">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[var(--line)]">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-[var(--ink)]">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="font-medium text-[var(--ink-soft)] no-underline hover:text-[var(--brand-primary)]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
