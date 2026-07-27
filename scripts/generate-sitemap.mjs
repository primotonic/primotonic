/**
 * Automated sitemap generator.
 * Reads host + routes from src/content/site.ts, writes public/sitemap.xml + robots.txt.
 *
 * Usage: npm run sitemap
 * Also runs on: prebuild, vite buildStart, vite dev server start
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sitePath = resolve(root, 'src/content/site.ts')
const publicDir = resolve(root, 'public')

const source = readFileSync(sitePath, 'utf8')

const urlMatch = source.match(/url:\s*['"]([^'"]+)['"]/)
if (!urlMatch) {
  console.error('Could not find site.url in src/content/site.ts')
  process.exit(1)
}
const siteUrl = urlMatch[1]

const navBlock = source.match(/export const nav = \[([\s\S]*?)\] as const/)
if (!navBlock) {
  console.error('Could not find nav in src/content/site.ts')
  process.exit(1)
}

const paths = [...navBlock[1].matchAll(/to:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
if (!paths.length) {
  console.error('No nav routes found in src/content/site.ts')
  process.exit(1)
}

const overrides = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/team': { priority: 0.8, changefreq: 'monthly' },
}

const base = siteUrl.replace(/\/$/, '')
const lastmod = new Date().toISOString().slice(0, 10)

const urls = paths
  .map((path) => {
    const { priority = 0.9, changefreq = 'monthly' } = overrides[path] ?? {}
    const loc = path === '/' ? `${base}/` : `${base}${path}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Host: ${base}
Sitemap: ${base}/sitemap.xml
`

writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap)
writeFileSync(resolve(publicDir, 'robots.txt'), robots)
console.log(`Wrote sitemap.xml + robots.txt → ${publicDir}`)
console.log(`Host: ${siteUrl} (${paths.length} URLs: ${paths.join(', ')})`)
