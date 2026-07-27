import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead } from '#/lib/seo'

export const Route = createFileRoute('/$')({
  head: () =>
    pageHead({
      title: 'Not found',
      description: 'This page does not exist on Primotonic.',
      path: '/404',
      noIndex: true,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Not found', path: '/404' },
      ],
    }),
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <main className="section-block">
      <div className="page-wrap px-4 text-center">
        <p className="section-kicker mb-3">404</p>
        <h1 className="display-title m-0 text-[1.75rem] font-bold text-[var(--ink)]">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--ink-soft)]">
          That route does not exist. Head home or start a project inquiry.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
