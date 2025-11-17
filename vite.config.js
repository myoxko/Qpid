import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Qpid/', // ✔ 레포 이름 맞음
  build: {
    outDir: 'docs',
  },
})