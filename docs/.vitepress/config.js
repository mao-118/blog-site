import { getSideBar } from "../utils";
// import fs from "fs";
// import path from "path";
// const obj = {
//   ...getSideBar("blog"),
//   ...getSideBar("webpack5"),
//   ...getSideBar("typescript"),
// };
// fs.writeFileSync(
//   path.join(__dirname, ".") + "/data.json",
//   JSON.stringify(obj),
//   "utf-8"
// );
// https://vitepress.vuejs.org/guide/what-is-vitepress.html
module.exports = {
  title: "Mao Lihang's blog",
  description: "vue&js&node&html&css",
  base: "/blog-site/",
  head: [
    ["link", { rel: "icon", href: "/blog-site/logo.png", crossorigin: "" }],
    ["meta", { name: "referrer", content: "never" }],
  ],
  themeConfig: {
    // logo: '/avt.jpg',
    outlineTitle: "当前页面",
    socialLinks: [{ icon: "github", link: "https://github.com/mao-118" }],
    nav: [
      { text: "blog", link: "/blog/" },
      { text: "webpack5", link: "/webpack5/" },
      { text: "typescript", link: "/typescript/1快速入门" },
      { text: "项目预览", link: "https://mao-118.github.io/fast-vue-admin/" },
    ],
    sidebar: {
      ...getSideBar("blog"),
      ...getSideBar("webpack5"),
      ...getSideBar("typescript"),
    },
    algolia: {
      appId: "CBJNVS1RP1",
      apiKey: "f2f4a9df81166f6b151fdf2c2aec1cdb",
      indexName: "mao-118",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present maolihang",
    },
  },
};
