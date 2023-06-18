import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    {
      path: '/currentPool',
      component: 'currentPool',
    },
    { path: '/prompt', component: 'prompt' },
    {
      path:'/processingScreen',component:'processingScreen'
    },
    {
      path:'/successScreen',component:'successScreen'
    }
  ],

  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  jsMinifier: 'terser',
  title: 'Brickin',
  favicons: ['/'],
})
