# vue-router
vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目中组件的切换。

[vue-router 的官方文档地址](https://router.vuejs.org/zh/)
## 安装 vue-router 包
```js
npm install vue-router
```
## 创建路由模块
在 src 源代码目录下，新建 router/index.js 路由模块，并初始化如下的代码：
```js
// 导入包
import VueRouter from 'vue-router'
// 将vue-router挂载到vue上
// 创建vue-router实例对象
const router = new VueRouter()
export default router
```
## 导入并挂载路由模块
在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：
```js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
Vue.use(VueRouter)
new Vue({
    render:h=>h(App),
    router
}).$mount('#app')

```
## 声明路由链接和占位符
在 src/App.vue 组件中，使用 vue-router 提供的 `<router-link>` 和 `<router-view>` 声明路由链接和占位符：
```vue
<template>
    <!-- 路由跳转 -->
    <router-link to="/home">首页</router-link>
    <!-- 路由展示 -->
    <router-view />
</template>
```
## 声明路由的匹配规则
在 src/router/index.js 路由模块中，通过 routes 数组声明路由的匹配规则。示例代码如下：
```js
import VueRouter from 'vue-router'
const router = new VueRouter({
    routes:[
        {path:'/home',component:()=>import('./Home.vue')}
    ]
}) 
```