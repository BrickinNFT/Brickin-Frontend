import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    {
      path: '/currentPool',
      component: 'currentPool',
    },
  ],

  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  jsMinifier: 'terser',
  title: 'Brickin',
  favicons: ['/'],
})
