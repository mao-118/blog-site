import { getSideBar } from "../utils";
// https://vitepress.vuejs.org/guide/what-is-vitepress.html
module.exports = {
  title: "Mao Lihang's blog",
  description: "vue,js,node,html,css,react,前端,微前端,webpack,vite,vue3",
  base: "./",
  head: [
    ["link", { rel: "icon", href: "/avtt.svg", crossorigin: "" }],
    ["meta", { name: "referrer", content: "never" }],
  ],
  themeConfig: {
    logo: "/avtt.svg",
    outlineTitle: "当前页面",
    // socialLinks: [{ icon: "github", link: "https://github.com/mao-118" }],
    nav: [
      { text: "blog", link: "/blog/看一遍就会的setup语法糖" },
      {
        text: "大前端修炼",
        // 斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝
        //修仙者境界划分为下境界、中境界和上境界三大阶段，每个境界分为初、中、后期和大圆满。 1、下境界：炼气、筑基、结丹、 元婴 、化神。 2、中境界：炼虚、合体、大乘。 3、上境界：渡劫。
        items: [
          //基础：html，css,js,进阶：typescript,vue,react,uniapp,微信小程序，electron,微前端，构建工具：webpack,vite,超神：nodejs,express,算法，数据结构
          // { text: "三剑客基础篇", link: "/base/" },
          { text: "typescript", link: "/typescript/" },
          { text: "vue系列", link: "/vue/1vue/1vue入门" },
          { text: "react系列", link: "/react/1react/1react介绍" },
          { text: "uniapp", link: "/uniapp/uniapp/1uni-app基础" },
          { text: "微信小程序", link: "/mp-weixin/1微信小程序/1小程序介绍" },
          // { text: "electron", link: "/" },
          { text: "微前端", link: "/minweb/微前端/1微前端的概念" },
          { text: "webpack", link: "/webpack/1基础/1前言" },
          { text: "nodejs", link: "/nodejs/1认识nodejs" },
          { text: "版本管理", link: "/version-manage/1git/1git常用命令" },

          // { text: "算法及数据结构", link: "/" },
          { text: "设计模式", link: "/设计模式/1观察者模式" },
        ],
      },
      // { text: "案例精选", link: "/demo/1高德地图的使用" },
      { text: "项目预览", link: "https://admin.spicyboy.cn/" },
    ],
    sidebar: {
      ...getSideBar("base"),
      ...getSideBar("blog"),
      ...getSideBar("webpack"),
      ...getSideBar("version-manage"),
      ...getSideBar("typescript"),
      ...getSideBar("vue"),
      ...getSideBar("nodejs"),
      ...getSideBar("minweb"),
      ...getSideBar("react"),
      ...getSideBar("uniapp"),
      ...getSideBar("mp-weixin"),
      ...getSideBar("设计模式"),
    },
    algolia: {
      appId: "CBJNVS1RP1",
      apiKey: "f2f4a9df81166f6b151fdf2c2aec1cdb",
      indexName: "mao-118",
    },
    footer: {
      message: "转载请注明出处",
      copyright: "Copyright © 2025-present maolihang",
    },
  },
};
