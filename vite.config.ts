import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import RemixRouter from 'vite-plugin-remix-router'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cooperativa-agricola-dei-colli/',
  plugins: [
    react(), 
    RemixRouter(),
  ],
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
},
})
