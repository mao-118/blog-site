## 1. 认识Vue3

## 1) 了解相关信息

- Vue.js 3.0 "One Piece" 正式版在今年9月份发布
- 2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
- <span style="color:red;">Vue3支持vue2的大多数特性</span>
- <span style="color:red;">更好的支持Typescript</span>



## 2) 性能提升:

- 打包大小减少41%
- 初次渲染快55%, 更新渲染快133%
- 内存减少54%
- <span style="color:red;">使用Proxy代替defineProperty实现数据响应式</span>
- <span style="color:red;">重写虚拟DOM的实现和Tree-Shaking</span>



## 3) 新增特性 

- <span style="color:red;">Composition (组合) API</span>
- setup
  - ref 和 reactive
  - computed 和 watch
  - 新的生命周期函数
  - provide与inject
  - ...

- 新组件

  - Fragment - 文档碎片
  - Teleport - 瞬移组件的位置
  - Suspense - 异步加载组件的loading界面

- 其它API更新

  - 全局API的修改
  - 将原来的全局API转移到应用对象
  - 模板语法变化

## 2. 创建vue3项目

## 1) 使用 vue-cli 创建

文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```bash
## 安装或者升级
npm install -g @vue/cli
## 保证 vue cli 版本在 4.5.0 以上
vue --version
## 创建项目
vue create my-project
```

然后的步骤

- Please pick a preset - 选择 ***Manually select features***
- Check the features needed for your project - 选择上 ***TypeScript*** ，特别注意点空格是选择，点回车是下一步
- Choose a version of Vue.js that you want to start the project with - 选择 ***3.x (Preview)***
- Use class-style component syntax - 直接回车
- Use Babel alongside TypeScript - 直接回车
- Pick a linter / formatter config - 直接回车
-  Use history mode for router? - 直接回车
- Pick a linter / formatter config - 直接回车
- Pick additional lint features - 直接回车
- Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车
- Save this as a preset for future projects? - 直接回车

## 2) 使用 vite 创建

- 文档: https://v3.cn.vuejs.org/guide/installation.html

- vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，
- 它做到了***本地快速开发启动***, 在生产环境下基于 Rollup 打包。
  - 快速的冷启动，不需要等待打包操作；
  - 即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
  - 真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

```bash
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```