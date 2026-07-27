import { site } from '#/content/site'

type PageSeo = {
  title: string
  description?: string
  path?: string
}

export function pageHead({ title, description, path = '/' }: PageSeo) {
  const fullTitle =
    title === site.name ? site.name : `${title} · ${site.name}`
  const desc = description ?? site.description
  const url = `${site.url}${path === '/' ? '' : path}`

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: desc },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: `${site.url}/logo-lockup.svg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
