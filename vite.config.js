import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config = defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
})

export default config;
