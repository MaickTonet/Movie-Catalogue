import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const ReactCompilerConfig = {
  target: '18', // '17' | '18' | '19'
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
