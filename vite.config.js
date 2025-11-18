import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Qpid/',        // GitHub Pages 서브경로
  build: {
    outDir: 'docs',      // 빌드 결과를 docs 폴더로
  },
  plugins: [react()],
})
