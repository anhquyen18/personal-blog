import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, vnNavbar } from "./navbar/index.js";
import { enSidebar, vnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.linkedin.com/in/anh-quyen-tran-188394216/",

  author: {
    name: "Tran Anh Quyen",
    url: "https://www.linkedin.com/in/anh-quyen-tran-188394216/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/images/luffy-chilling-gear5-round.png",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  blog: {
    medias: {
      Linkedin: "https://www.linkedin.com/in/anh-quyen-tran-188394216/",
      Email: "mailto:anhquyen.dut@gmail.com",
      Facebook: "https://www.facebook.com/paigethigh18",
      GitHub: "https://github.com/anhquyen18",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "google.com",
      // },
    },
  },

  locales: {
      "/": {
      author: {
        name: "Trần Anh Quyền",
        url: "https://www.linkedin.com/in/anh-quyen-tran-188394216/",
      },
      
      // navbar
      navbar: vnNavbar,

      // sidebar
      sidebar: vnSidebar,

      footer: "Cuộc đời hạnh phúc nhất là được đi ngủ",

      displayFooter: true,

      blog: {
        description: "Chưa biết mình là cái gì",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      author: {
        name: "Tran Anh Quyen",
        url: "https://www.linkedin.com/in/anh-quyen-tran-188394216/",
      },
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar:  enSidebar,

      footer: "Sleep is more important than code",

      displayFooter: true,

      blog: {
        description: "Don't what i am",
        intro: "/en/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * English locale config
     */
  
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //     "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,
    search: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
