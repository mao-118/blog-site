# Vue 中使用 externals 和 CDN 来优化项目的体积

- externals 是 webpack 中的一个配置 [文档说明](https://www.webpackjs.com/configuration/externals/#externals)
- 主要是为了防止项目在打包的时候，将一些通过 import 引入的包也一起打包到 bundle 中，从而造成打包文件太大。通过运行的时候从外部获取这些包的依赖
  ::: tip
  在没有使用 externals 和 CDN 引入依赖包的时候，打包的项目代码体积比较大
  使用之后,指定的依赖项就不会被打包
  :::

## 在 vue.config.js 中对项目进行配置

- 说明：'vue':'Vue'的写法主要是因为项目中导入的import Vue from "vue"
- 引号前面的是项目中使用到的第三方引入的包名
- 引号后面的会从引入的CDN中查找相应的变量
```js
modules.exports = {
...
configureWebpack: {
    ...
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex':'Vuex',
        "element-ui": "ELEMENT"
        }
    }
}
```



## index.html 中引入

```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= webpackConfig.name %></title>
    <!-- 引入样式 elementUI -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

    <!-- 引入组件库 -->
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script> <!--vue-router -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!-- vue -->
    <script src="https://unpkg.com/vuex"></script> <!--vuex -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script> <!-- elementUI -->
</head>
```

## 注意 elementUI 的使用有所不同，在全部导入的时候我们在 main.js 中的写法是

```js
    import Vue from "vue"
    import App from "./App.vue"
    import router from "./router"
    import store from "./store"
    import ElementUI from "element-ui"
    import "element-ui/lib/theme-chalk/index.css"
    Vue.use(ElementUI)
```

但是使用 externals 之后就需要改变
```js
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import ElementUI from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
// Vue.use(ElementUI)
```


## 方式二,在 vue.config.js 中判断是否是开发还是生产,根据环境不同设置 externals

1. vue.config.js

```js
    // 配置 externals
    const externalsConfig = () => {
        return {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            'element-ui': 'ELEMENT',
            AMap: 'AMap',
            AMapUI: 'AMapUI',
            mavonEditor: 'mavonEditor'
        }
    }
    module.exports = {
        configureWebpack: {
            externals: process.env.NODE_ENV === 'production' ? externalsConfig : {},
            name: name,
            resolve: {
                alias: {
                    '@': resolve('src')
                }
            }
        },
    }
```

2. 根据环境注入
![vue打包优化](/vue-youhua.png)