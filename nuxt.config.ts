// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/Summer_Camp/', // 仓库名称
    buildAssetsDir: 'assets', // 不要使用_nuxt
  },
  plugins: [
    { src: '@/plugins/global.js', mode: 'client' }
  ],
  css: [
    '@/assets/global.css',
  ],
})
