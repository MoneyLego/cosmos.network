import getRoutes from './utils/getRoutes'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) => {
      // If head.title is undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Cosmos Hub` : 'Cosmos Hub'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Welcome to the Cosmos Hub, the economic center of Cosmos – an ever-expanding ecosystem of interconnected blockchains.',
      },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Cosmos Hub' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Cosmos Hub',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Welcome to the Cosmos Hub, the economic center of Cosmos – an ever-expanding ecosystem of interconnected blockchains.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://beta.cosmos.network',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://beta.cosmos.network/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Cosmos Hub',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Welcome to the Cosmos Hub, the economic center of Cosmos – an ever-expanding ecosystem of interconnected blockchains.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://beta.cosmos.network/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Cosmos Hub',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon-svg.svg' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: 'black',
      },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/ga.client.js',
    '~/plugins/vue-scrollto.client.js',
    '~/plugins/nuxt-swiper-plugin.client.js',
    '~/plugins/vue-stripe-menu.client.js',
  ],
  env: {
    GITHUB_PERSONAL_TOKEN: process.env.GITHUB_PERSONAL_TOKEN,
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  // To fix flashes on the clientside
  // Set preference as dark
  // https://color-mode.nuxtjs.org/#caveats
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark',
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
  sitemap: {
    hostname: 'https://beta.cosmos.network',
    exclude: ['/design/**', '/learn/tag/**'],
    routes() {
      return getRoutes()
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },
}
