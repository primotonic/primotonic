import { site } from '#/content/site'

export type BreadcrumbItem = {
  name: string
  path: string
}

type PageSeo = {
  title: string
  description?: string
  path?: string
  /** Override default OG/Twitter image (absolute or site-relative). */
  image?: string
  /** Open Graph type — website | article | profile */
  type?: 'website' | 'article' | 'profile'
  breadcrumbs?: BreadcrumbItem[]
  noIndex?: boolean
}

const OG_IMAGE = '/og-image.png'
const OG_WIDTH = 1200
const OG_HEIGHT = 630

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http')) return pathOrUrl
  const base = site.url.replace(/\/$/, '')
  return pathOrUrl.startsWith('/') ? `${base}${pathOrUrl}` : `${base}/${pathOrUrl}`
}

function pageUrl(path: string) {
  const base = site.url.replace(/\/$/, '')
  return path === '/' ? `${base}/` : `${base}${path}`
}

function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: 'application/ld+json' as const,
    children: JSON.stringify(data),
  }
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.name,
    url: site.url,
    logo: absoluteUrl('/logo-face.png'),
    image: absoluteUrl(OG_IMAGE),
    description: site.description,
    email: site.email,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PH',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Philippines',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      availableLanguage: ['English'],
    },
    ...(site.social.profiles.length
      ? { sameAs: [...site.social.profiles] }
      : {}),
  }
}

function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    inLanguage: 'en-PH',
  }
}

function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const trail =
    items[0]?.path === '/'
      ? items
      : [{ name: 'Home', path: '/' }, ...items]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}

/**
 * Full page head: SEO, Open Graph (Facebook/LinkedIn), Twitter/X, JSON-LD.
 */
export function pageHead({
  title,
  description,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  breadcrumbs,
  noIndex = false,
}: PageSeo) {
  const fullTitle =
    title === site.name ? `${site.name} · ${site.headline}` : `${title} · ${site.name}`
  const shortTitle = title === site.name ? site.name : title
  const desc = description ?? site.description
  const url = pageUrl(path)
  const imageUrl = absoluteUrl(image)
  const locale = site.locale

  const crumbTrail: BreadcrumbItem[] =
    breadcrumbs ??
    (path === '/'
      ? [{ name: 'Home', path: '/' }]
      : [
          { name: 'Home', path: '/' },
          { name: shortTitle, path },
        ])

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: desc },
      { name: 'author', content: site.name },
      {
        name: 'robots',
        content: noIndex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content: noIndex ? 'noindex, nofollow' : 'index, follow',
      },
      { name: 'keywords', content: site.keywords.join(', ') },
      { name: 'geo.region', content: 'PH' },
      { name: 'geo.placename', content: 'Philippines' },

      // Open Graph — Facebook, LinkedIn, Slack, Discord, etc.
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: locale },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:secure_url', content: imageUrl },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: String(OG_WIDTH) },
      { property: 'og:image:height', content: String(OG_HEIGHT) },
      { property: 'og:image:alt', content: `${site.name} — ${site.headline}` },

      // Twitter / X
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: `${site.name} — ${site.headline}` },
      ...(site.social.twitter
        ? [
            { name: 'twitter:site', content: site.social.twitter },
            { name: 'twitter:creator', content: site.social.twitter },
          ]
        : []),

      { name: 'linkedin:owner', content: site.name },
      { property: 'article:publisher', content: site.url },
    ],
    links: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hrefLang: 'en', href: url },
      { rel: 'alternate', hrefLang: 'x-default', href: url },
    ],
    scripts: [
      jsonLdScript(organizationJsonLd()),
      jsonLdScript(websiteJsonLd()),
      jsonLdScript(breadcrumbJsonLd(crumbTrail)),
    ],
  }
}

export { absoluteUrl, pageUrl, OG_IMAGE }
