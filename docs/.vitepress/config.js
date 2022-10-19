// https://vitepress.vuejs.org/guide/what-is-vitepress.html
module.exports = {
  title: "blog",
  description: "vue&js&node&html&css",
  base: "/blog-site/",
  head: [
    ['link', { rel: 'icon', href: '/blog-site/logo.png', crossorigin: '' }],
    ['meta', { name: 'referrer', content: 'never' }]
  ],
  themeConfig: {
    // logo: '/avt.jpg',
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
          { text: "开箱即用的中后台管理模版", link: "/" },
          { text: "看一遍就会的setup语法糖", link: "/vue/看一遍就会的setup语法糖" },
          { text: "vue的生命周期都做了什么", link: "/vue/简述生命周期以及每个阶段做的事" },
          { text: "vue项目打包优化", link: "/vue/vue项目打包优化" },
          { text: "setup中如何定义组件的name属性", link: "/vue/setup中如何定义组件的name属性" },
          { text: "vue中配置eslint保存自动修复", link: "/vue/vue中配置eslint保存自动修复" },
          { text: "vue批量导入文件", link: "/vue/vue批量导入文件" },
          { text: "unplugin-auto-import自动导入组合api", link: "/vue/unplugin-auto-import自动导入组合api" },
          { text: "vite打包配置(gzip、文件分类等)", link: "/vue/vite打包配置(gzip、文件分类等)" },
          { text: "h5兼容低版本浏览器", link: "/vue/h5兼容低版本浏览器" },
          // { text: "开箱即用的中后台管理模版", link: "/vue/开箱即用的中后台管理模版" },
          { text: "Composition API_常用部分", link: "/vue/Composition API_常用部分" },
          { text: "Composition API_其它部分", link: "/vue/Composition API_其它部分" },
          { text: "手写组合API", link: "/vue/手写组合API" },
          { text: "Composition VS Option", link: "/vue/Composition VS Option" },
          { text: "创建vue3项目", link: "/vue/创建vue3项目" },
          { text: "pinia的使用", link: "/vue/pinia的使用" },
        ],
      },
      {
        text: 'typescript',
        collapsible: true,
        items: [
          { text: 'ts常用语法', link: "/typescript/ts常用语法.md" },
          { text: 'ts的高级使用', link: "/typescript/ts的高级使用.md" },
          { text: 'Typescript中的常用高级类型', link: "/typescript/Typescript中的常用高级类型.md" },
        ]
      },
      {
        text: 'other',
        collapsible: true,
        items: [
          { text: "绿版vscode", link: "/other/绿版vscode" },
          { text: "代码自动同步并部署", link: "/other/代码自动同步并部署" },
          { text: "webpack", link: "/other/webpack基本配置" },
          // { text: "H5与客户端交互", link: "/other/H5与客户端交互" },
          { text: "前端常见的十个手写功能", link: "/other/前端常见的十个手写功能" },
          { text: 'git常用命令', link: "/other/git-base.md" },
          { text: 'webAPI实用知识点', link: "/other/webAPI实用知识点.md" },
          { text: 'nvm的使用', link: "/other/nvm的使用.md" },
        ]
      },
      {
        text: 'interview',
        collapsible: true,
        items: [
          { text: "Event Loop详解", link: "/interview/Event-Loop" },
          { text: "开发中碰到的问题集合(碰到的坑)", link: "/interview/开发中碰到的问题集合" },
        ]
      }
    ],
    algolia: {
      appId: 'CBJNVS1RP1',
      apiKey: 'f2f4a9df81166f6b151fdf2c2aec1cdb',
      indexName: 'mao-118'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present maolihang",
    },
  },
};