// https://vitepress.vuejs.org/guide/what-is-vitepress.html
module.exports = {
  title: "blog",
  description: "vue&js&node&html&css",
  base: "/blog-site/",
  themeConfig: {
    outlineTitle: "当前页面",
    socialLinks: [{ icon: "github", link: "https://github.com/mao-118" }],
    nav: [
      { text: "项目预览", link: "https://mao-118.github.io/fast-vue-admin/" },
      {
        text: "项目文档",
        link: "https://mao-118.github.io/fast-vue-admin-doc/",
      },
    ],
    sidebar: [
      {
        text: "vue",
        items: [
          { text: "setup语法糖", link: "/" },
          { text: "vue的生命周期都做了什么", link: "/简述生命周期以及每个阶段做的事" },
          { text: "vue项目打包优化", link: "/vue项目打包优化" }
        ],
      },
      {
        text:'other',
        items:[
          { text: "代码自动同步并部署", link: "/代码自动同步并部署" },
          { text: "webpack", link: "/webpack基本配置" },
        ]
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present maolihang",
    }
  },
};
