import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/jhonklose/react-nick-and-morty-john-mercado",
  plugins: [react()],
})
