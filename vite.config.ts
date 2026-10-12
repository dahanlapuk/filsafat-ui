import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [nitro(), tailwindcss(), tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [
        { path: '/', prerender: { enabled: true } },
        { path: '/en', prerender: { enabled: true } },
      ],
    }), viteReact()],
})

export default config
