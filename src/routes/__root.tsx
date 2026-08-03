import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { site } from '#/content/site'
import { absoluteUrl, OG_IMAGE } from '#/lib/seo'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.name },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#FF6A00' },
      { name: 'msapplication-TileColor', content: '#FF6A00' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'application-name', content: site.name },
      { name: 'apple-mobile-web-app-title', content: site.name },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: site.locale },
      { property: 'og:image', content: absoluteUrl(OG_IMAGE) },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/logo-face.png', type: 'image/png', sizes: 'any' },
      { rel: 'apple-touch-icon', href: '/logo-face.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/logo-face.svg', color: '#FF6A00' },
      { rel: 'me', href: `mailto:${site.email}` },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(255,106,0,0.22)]">
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
