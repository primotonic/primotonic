import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'
import { nav, site } from '../content/site'

type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

type SitemapEntry = {
  path: string
  priority: number
  changefreq: ChangeFreq
}

const defaults: Omit<SitemapEntry, 'path'> = {
  priority: 0.9,
  changefreq: 'monthly',
}

const overrides: Record<string, Partial<Omit<SitemapEntry, 'path'>>> = {
  '/': { priority: 1, changefreq: 'weekly' },
  '/team': { priority: 0.8 },
}

export function getSitemapEntries(): SitemapEntry[] {
  return nav.map(({ to }) => ({
    path: to,
    ...defaults,
    ...overrides[to],
  }))
}

export function buildSitemapXml(
  host = site.url,
  lastmod = new Date().toISOString().slice(0, 10),
): string {
  const base = host.replace(/\/$/, '')
  const urls = getSitemapEntries()
    .map(({ path, priority, changefreq }) => {
      const loc = path === '/' ? `${base}/` : `${base}${path}`
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function buildRobotsTxt(host = site.url): string {
  const base = host.replace(/\/$/, '')
  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`
}

export function writeSitemapFiles(publicDir: string, host = site.url) {
  const lastmod = new Date().toISOString().slice(0, 10)
  writeFileSync(resolve(publicDir, 'sitemap.xml'), buildSitemapXml(host, lastmod))
  writeFileSync(resolve(publicDir, 'robots.txt'), buildRobotsTxt(host))
}

/** Vite plugin: regenerates sitemap + robots from site.ts on build/dev. */
export function primotonicSitemapPlugin(): Plugin {
  const publicDir = resolve(process.cwd(), 'public')
  const siteFile = resolve(process.cwd(), 'src/content/site.ts')

  const regenerate = () => {
    writeSitemapFiles(publicDir, site.url)
  }

  return {
    name: 'primotonic-sitemap',
    buildStart() {
      regenerate()
    },
    configureServer(server) {
      regenerate()
      server.watcher.add(siteFile)
      server.watcher.on('change', (file) => {
        if (file === siteFile || file.endsWith('/content/site.ts')) {
          regenerate()
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}
