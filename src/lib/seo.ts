import { caseStudies } from '#/content/case-studies'
import { faqs } from '#/content/faqs'
import { services } from '#/content/services'
import { site } from '#/content/site'
import { team } from '#/content/team'

export type BreadcrumbItem = {
  name: string
  path: string
}

type JsonLd = Record<string, unknown>

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
  /** Extra JSON-LD graphs merged into page head scripts. */
  jsonLd?: JsonLd[]
  /** Skip default Organization / WebSite schemas (e.g. 404). */
  skipSiteGraph?: boolean
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

function jsonLdScript(data: JsonLd) {
  return {
    type: 'application/ld+json' as const,
    children: JSON.stringify(data),
  }
}

function organizationId() {
  return `${site.url.replace(/\/$/, '')}/#organization`
}

function websiteId() {
  return `${site.url.replace(/\/$/, '')}/#website`
}

function organizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': organizationId(),
    name: site.name,
    legalName: site.name,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo-face.png'),
      width: 320,
      height: 352,
    },
    image: absoluteUrl(OG_IMAGE),
    description: site.description,
    email: site.email,
    slogan: site.headline,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PH',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PH',
    },
    areaServed: [
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    priceRange: '$$',
    knowsAbout: [...site.knowsAbout],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        availableLanguage: ['English'],
        url: pageUrl('/contact'),
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: site.email,
        availableLanguage: ['English'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${site.name} services`,
      itemListElement: services.map((service, index) => ({
        '@type': 'OfferCatalog',
        name: service.title,
        position: index + 1,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.summary,
              url: `${pageUrl('/services')}#${service.id}`,
              provider: { '@id': organizationId() },
            },
          },
        ],
      })),
    },
    ...(site.social.profiles.length
      ? { sameAs: [...site.social.profiles] }
      : {}),
  }
}

function websiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(),
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en-PH',
    publisher: { '@id': organizationId() },
  }
}

function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
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

export function faqPageJsonLd(items = faqs): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function servicesItemListJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} services`,
    description:
      'Full-stack web development, mobile apps, technical support, and web pentesting.',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${pageUrl('/services')}#${service.id}`,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        provider: { '@id': organizationId() },
      },
    })),
  }
}

export function workItemListJsonLd(): JsonLd {
  const featured = caseStudies.filter((c) => c.featured)
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} case studies`,
    description: 'Selected full-stack systems and confidential client work.',
    numberOfItems: featured.length,
    itemListElement: featured.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: study.title,
      url: `${pageUrl('/work')}#${study.id}`,
      item: {
        '@type': 'CreativeWork',
        name: study.title,
        description: study.purpose,
        about: study.clientContext,
        keywords: study.stack.join(', '),
        creator: { '@id': organizationId() },
      },
    })),
  }
}

export function teamJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} team`,
    numberOfItems: team.length,
    itemListElement: team.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.summary,
        image: absoluteUrl(member.image),
        url: member.portfolioUrl,
        worksFor: { '@id': organizationId() },
        knowsAbout: member.skills,
      },
    })),
  }
}

export function contactPageJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: pageUrl('/contact'),
    description: `Contact ${site.name} for full-stack development, mobile apps, support, or web pentesting.`,
    mainEntity: { '@id': organizationId() },
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
  jsonLd = [],
  skipSiteGraph = false,
}: PageSeo) {
  const fullTitle =
    title === site.name
      ? `${site.name} · Full-Stack Development & Web Pentesting Philippines`
      : `${title} · ${site.name}`
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

  const scripts = [
    ...(!skipSiteGraph && !noIndex
      ? [jsonLdScript(organizationJsonLd()), jsonLdScript(websiteJsonLd())]
      : []),
    jsonLdScript(breadcrumbJsonLd(crumbTrail)),
    ...jsonLd.map(jsonLdScript),
  ]

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
        content: noIndex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'bingbot', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'keywords', content: site.keywords.join(', ') },
      { name: 'geo.region', content: 'PH' },
      { name: 'geo.placename', content: 'Philippines' },
      { name: 'language', content: 'en-PH' },
      { name: 'rating', content: 'general' },
      { name: 'category', content: 'technology' },

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
      { rel: 'alternate', hrefLang: 'en-PH', href: url },
      { rel: 'alternate', hrefLang: 'x-default', href: url },
    ],
    scripts,
  }
}

export { absoluteUrl, pageUrl, OG_IMAGE }
