require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Heilmassage Massago',
    htmlAttrs: {
      lang: 'de-at',
      class: 'has-navbar-fixed-top',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: 'Massage,Steyr,Verspannungen,Rückenschmerzen,Nackenschmerzen' },
      { hid: 'description', name: 'description', content: 'Schmerzen müssen nicht sein! Heilmassage jetzt neu im Vitalogikum in Aschach an der Steyr' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/route',
    '~/plugins/hotjar',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    'nuxt-google-maps-module',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sitemap',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.massago.at': 'http://localhost:3000'
  },
  maps: {
    key: process.env.GOOGLE_MAPS_KEY,
  },
  optimizedImages: {
    optimizeImages: true
  },
  sitemap: {
    hostname: 'https://www.massago.at',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**',
      '/symptome',
      '/therapien',
      '/impressum',
      '/gutscheine/konfigurieren',
      '/gutscheine/bestellen',
    ],
    routes: [
      '/symptome/rueckenschmerzen',
      '/symptome/haltungsbedingte_verspannungen',
      '/symptome/kopfschmerzen',
      '/symptome/schwindel',
      '/symptome/lymphoedem',
      '/symptome/belastung',
      '/symptome/stress',
      '/symptome/cervikalsyndrom',
      '/symptome/lumbalgie',
      '/symptome/skoliose',
      '/therapien/klassische_massage',
      '/therapien/lymphdrainage',
      '/therapien/fussreflexzonen',
      '/therapien/triggerpunkt',
      '/therapien/schroepfen',
      '/therapien/taping',
      '/therapien/bindegewebsmassage',
      '/therapien/segmentzonen',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  serverMiddleware: [
    {
      path: 'api/callback',
      handler: '~/server/api/callback.js'
    },
    {
      path: 'api/voucher',
      handler: '~/server/api/voucher.js'
    }
  ]
}
