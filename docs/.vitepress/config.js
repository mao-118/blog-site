// https://vitepress.vuejs.org/guide/what-is-vitepress.html
module.exports = {
  title: "blog",
  description: "vue&js&node&html&css",
  base: "/blog-site/",
  head:[
    ['link', { rel: 'icon', href: '/blog-site/logo.jpg', crossorigin: '' }]
  ],
  themeConfig: {
    logo:'/avt.jpg',
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
        collapsible: true,
        items: [
          { text: "setup语法糖", link: "/" },
          { text: "vue的生命周期都做了什么", link: "/vue/简述生命周期以及每个阶段做的事" },
          { text: "vue项目打包优化", link: "/vue/vue项目打包优化" },
          { text: "setup中如何定义组件的name属性", link: "/vue/setup中如何定义组件的name属性" },
          { text: "vue中配置eslint保存自动修复", link: "/vue/vue中配置eslint保存自动修复" },
          { text: "vue自动导入文件", link: "/vue/vue自动导入文件" },
        ],
      },
      {
        text:'other',
        collapsible: true,
        items:[
          { text: "绿版vscode", link: "/other/绿版vscode" },
          { text: "代码自动同步并部署", link: "/other/代码自动同步并部署" },
          { text: "webpack", link: "/other/webpack基本配置" },
          { text: "H5与客户端交互", link: "/other/H5与客户端交互" },
          { text: "前端常见的十个手写功能", link: "/other/前端常见的十个手写功能" },
          { text: "开发中碰到的问题集合(碰到的坑)", link: "/other/开发中碰到的问题集合" },
        ]
      },
      {
        text:'git',
        collapsible:true,
        items:[
          {text:'git常用命令',link:"/git/git-base.md"}
        ]
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present maolihang",
    },
  },
};
