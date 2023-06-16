import { defineConfig } from 'umi'

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],

  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  jsMinifier: 'terser',
  title: 'Brickin',
  favicons: ['/'],
})
