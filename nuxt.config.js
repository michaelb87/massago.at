
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Heilmassage Andrea Orlovits',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
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
  },
  maps: {
    key: 'AIzaSyBeI4IJiIjiJucrK2UhC_2wvzXWHrH_xzM',
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
  }
}
