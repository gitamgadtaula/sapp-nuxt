import webpack from "webpack";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sapp-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/all.min.css',
    // '@/assets/css/animate.min.css',
    // '@/assets/css/aos.css',
    // '@/assets/css/bootstrap.min.css',
    // '@/assets/css/flaticon.css',
    // '@/assets/css/jquery.fancybox.min.css',
    // '@/assets/css/owl.carousel.min.css',
    "@/assets/css/responsive.css",
    // '@/assets/css/slick.css',
    "@/assets/css/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/assets/js/bootstrap.min.js",
    "@/assets/js/jquery-3.3.1.min.js",
    // '@/assets/js/plugins.min.js',
    // "@/assets/js/popper.min.js",
    "@/assets/js/scripts.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  },
  scripts: [
    { src: "https://unpkg.com/jquery@3.2.1/dist/jquery.min.js" },
    {
      src: "@/assets/js/bootstrap.min.js"
    },
    {
      src: "@/assets/js/plugins.min.js"
    },
    // {
    //   src: "@/assets/js/popper.min.js"
    // },
    {
      src: "@/assets/js/scripts.js"
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    },
    { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    }
  ]
};
