import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // リポジトリ名と一致させる
  plugins: [react()],
})
