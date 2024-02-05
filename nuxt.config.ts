// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon",'@nuxtjs/google-fonts'],
  vite: {
    define: {
      __NUXT_ASYNC_CONTEXT__: false
    }
  },
  googleFonts: { 
    families: {      
      'DM+Sans': {
        wght: '200..900'
      },
      Pacifico: true
    }
  }

});
