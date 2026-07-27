import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import { site } from './src/content/site'
import {
  getSitemapEntries,
  primotonicSitemapPlugin,
} from './src/lib/sitemap'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    primotonicSitemapPlugin(),
    netlify(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        concurrency: 8,
        failOnError: true,
      },
      sitemap: {
        enabled: true,
        host: site.url,
        outputPath: 'sitemap.xml',
      },
      pages: getSitemapEntries().map(({ path, priority, changefreq }) => ({
        path,
        sitemap: { priority, changefreq },
      })),
    }),
    viteReact(),
  ],
})

export default config
