const bodyParser = require('body-parser')
export default {
  server: {
    port: 8000 // default: 3000
  },
  head: {
    title: 'nuxt-blog-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/admin/AllComponents.js",
    "~/plugins/admin/toast.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: 'http://localhost:8000/api',
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: {url: '/auth/login', method: 'post'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/auth/user', method: 'post'},
        },
      },

      google: {
        clientId: '68558145813-959436nlciqg26ir1jvmpnoindro62m4.apps.googleusercontent.com',
        codeChallengeMethod: "",
        responseType: "id_token token",
      }
    },
  },

  serverMiddleware: [
    bodyParser.json(),
    "~/api/admin/content.js",
    "~/api/login/auth.js",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
