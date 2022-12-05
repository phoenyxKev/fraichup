// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Fraichup06.fr',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: 'Fraichup | Livraison de frites fraîches' },
        { name: 'google', content: 'notranslate' }
      ]
    }
  },
  modules: ['nuxt-icon']
  // runtimeConfig: {
  //   MAILHOST: process.env.MAILHOST,
  //   MAILPORT: process.env.MAILPORT,
  //   MAILUSER: process.env.MAILUSER,
  //   MAILPASSWORD: process.env.MAILPASSWORD,
  //   CONTACTMAIL: process.env.MAILCONTACT
  // }
})