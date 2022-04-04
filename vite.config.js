import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: [
                './src/index.html',
                './src/css/index.html',
                './src/figma/index.html',
                './src/rAF/index.html',
                './src/tagging/index.html',
            ],
        },
    },
})
