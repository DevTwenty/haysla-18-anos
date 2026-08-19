import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

declare const process: { env: Record<string, string | undefined> }

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/haysla-18-anos/' : '/',
  test: { environment: 'jsdom', setupFiles: './src/tests/setup.ts' },
})
