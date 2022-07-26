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
        text: "技术博客",
        items: [
          { text: "homepage", link: "/" },
          { text: "代码自动同步并部署", link: "/代码自动同步并部署" },
          { text: "webpack", link: "/webpack基本配置" },
          { text: "vue项目打包优化", link: "/vue项目打包优化" }
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present maolihang",
    }
  },
};
