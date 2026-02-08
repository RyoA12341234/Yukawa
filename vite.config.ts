import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      outputDir: 'dist',
      emptyOutDir: false,
      minify: true,
      external: [],
      // Cloudflare Pagesのルーティング設定
      cloudflarePages: {
        routes: {
          exclude: ['/static/*', '/data/*', '/admin/*']
        }
      }
    }),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ]
})
