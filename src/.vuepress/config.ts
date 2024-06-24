import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {

    "/": {
      lang: "vi-VN",
      title: "Trần Anh Quyền",
      description: "Anh Quyền tập viết blog",
    },
    "/en/": {
      lang: "en-US",
      title: "Tran Anh Quyen",
      description: "Anh Quyen learned to write a blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
