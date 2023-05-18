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
      {
        text:'大前端修炼',
        // 斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝
        //修仙者境界划分为下境界、中境界和上境界三大阶段，每个境界分为初、中、后期和大圆满。 1、下境界：炼气、筑基、结丹、 元婴 、化神。 2、中境界：炼虚、合体、大乘。 3、上境界：渡劫。
        items:[ //基础：html，css,js,进阶：typescript,vue,react,uniapp,wxss，electron,微前端，构建工具：webpack,vite,超神：nodejs,express,算法，数据结构
          { text: "三剑客基础篇", link: "/base/" },
          { text: "typescript", link: "/typescript/" },
          { text: "vue系列", link: "/" },
          { text: "react系列", link: "/" },
          { text: "uniapp", link: "/" },
          { text: "微信小程序", link: "/" },
          { text: "electron", link: "/" },
          { text: "微前端", link: "/" },
          { text: "webpack", link: "/webpack/" },
          { text: "vite", link: "/" },
          { text: "nodejs", link: "/" },
          { text: "express", link: "/" },
          { text: "算法及数据结构", link: "/" },
          { text: "设计模式", link: "/" },

        ] 
      },
      { text: "项目预览", link: "https://mao-118.gitee.io/fast-vue-admin/" },
    ],
    sidebar: {
      ...getSideBar("base"),
      ...getSideBar("blog"),
      ...getSideBar("webpack"),
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
