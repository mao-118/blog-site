# alova 的使用

[官网](https://alova.js.org/zh-CN/)

## 什么是 alova

轻量级的请求策略库，它针对不同请求场景分别提供了具有针对性的请求策略，来提升应用可用性、流畅性，降低服务端压力，让应用如智者一般具备卓越的策略思维。alova 核心模块提供了各类适配器接口、中间件机制来保证高扩展能力，从而实现更多的请求场景。如果你有期待的请求场景但我们未实现的，也欢迎贡献你为 alova 贡献你不可替代的力量。

更完整的特性如下：

1.  🕶 在 vue、react、svelte 3 个 UI 框架，以及 uniapp、taro 环境下提供统一的使用体验，无缝移植
2.  📑 与 axios 相似的 api 设计，更简单熟悉
3.  🍵 开箱即用的高性能场景化请求策略，让应用更流畅
4.  🐦 4kb+，只有 axios 的 30%+
5.  🔩 高灵活性，兼容任意请求库，如 axios、superagent 或 fetch-api
6.  🔋 3 种数据缓存模式，提升请求性能，同时降低服务端压力
7.  🔌 丰富的扩展功能，可以自定义请求适配器、存储适配器、中间件，以及 states hook
8.  🖥️ [2.2.0+]服务端渲染（SSR）
9.  💕 请求共享，避免同时发送相同请求
10. 🪑 数据预拉取，这意味着用户可以更快看到信息，无需等待
11. 🦾 实时自动状态管理
12. 🎪 交互式文档和示例
13. 🎈 Typescript 支持
14. ⚡ 支持 tree shaking，这意味着 alova 的生产体积往往小于 4kb
    ::: warning 注意

            使用 alova 时，请确保 UI 框架符合以下版本要求：
            React: >= v16.8
            Vue: 2.7、3.x
            Svelte: 任意

    :::

## 安装

```js
npm i alova
```

## 使用

```vue
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <span v-else>responseData: {{ data }}</span>
</template>

<script setup>
import { createAlova, useRequest } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import VueHook from "alova/vue";

// 1. 创建alova实例
const alovaInstance = createAlova({
  // VueHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: VueHook,

  // 请求适配器，推荐使用fetch请求适配器
  requestAdapter: GlobalFetch(),

  // 全局的响应拦截器
  responded: (response) => response.json(),
});

// 2. 使用alova实例创建method并传给useRequest即可发送请求
const { loading, data, error } = useRequest(
  alovaInstance.Get("https://api.alovajs.org/profile", {
    params: {
      id: 1,
    },
  })
);
</script>
```

## 手动发送请求

```js
const getter = () => {
  return alovaInstance.Get("https://api.alovajs.org/profile", {
    params: {
      id: 1,
    },
  });
};
const { loading, data, send } = useRequest(getter, {
  immediate: false, // 设置immediate为false
});
const handleClick = () => {
  send(); //手动调用send函数即可发送请求，send本质是一个Promise函数，可用async await
};
```

## 初始化请求数据

```js
const {
  // loading是加载状态值，当加载时它的值为true，结束后自动更新为false
  // 它是一个Ref类型的值，你可以通过loading.value访问它，或直接绑定到界面中
  loading,

  // 响应数据，同样是Ref值
  data,

  // 请求错误对象，Ref值，请求错误时有值，否则为undefined
  error,

  // 直接将Method实例传入即可发送请求
} = useRequest(todoListGetter, {
  // 请求响应前，data的初始值
  initialData: [],
});
```

## 绑定请求回调

```js
const {
  // ...

  // 成功回调绑定
  onSuccess,

  // 失败回调绑定
  onError,

  // 完成回调绑定，回调在成功或失败都会调用
  onComplete
} = useRequest(todoListGetter);
onSuccess(event => {
  console.log('请求成功，响应数据为:', event.data);
  console.log('本次请求的method实例为:', event.method);
  console.log('响应数据是否来自缓存:', event.fromCache);
});
onError(event => {
  console.log('请求失败，错误信息为:', event.error);
  console.log('本次请求的method实例为:', event.method);
});
onComplete(event => {
  // event.status在成功时为success，失败时为error
  console.log('请求完成，状态为：', event.status);
  console.log('本次请求的method实例为:', event.method);
  console.log('响应数据是否来自缓存:', event.fromCache);
  if (event.data) {
    console.log('请求数据：'，event.data)
  } else if (event.error) {
    console.log('错误信息：'，event.error)
  }
});
```

## 监听状态变化

```vue
<template>
  <!-- keyword随着输入内容变化而变化 -->
  <input v-model="keyword" />

  <!-- 渲染筛选后的todo列表 -->
  <div v-if="loading">Loading...</div>
  <template v-else>
    <div v-for="todo in data">
      <div class="todo-title">{{ todo.title }}</div>
      <div class="todo-time">{{ todo.time }}</div>
    </div>
  </template>
</template>

<script setup>
// 创建method实例
const filterTodoList = (keyword) => {
  return alovaInstance.Get("/todo/list/search", {
    params: {
      keyword,
    },
  });
};
const keyword = ref("");
const {
  loading,
  data,
  error,

  // 第一个参数必须为返回method实例的函数
} = useWatcher(
  () => filterTodoList(keyword.value),

  // 被监听的状态数组，这些状态变化将会触发一次请求
  [keyword],
  {
    // 设置500ms防抖，如果keyword频繁变化，只有在停止变化后500ms才发送请求
    debounce: 500,
  }
);
</script>
```

## 拦截器

```js
const alovaInstance = createAlova({
  /*
    other options...
  */
  // 请求拦截器
  // 函数参数为一个method实例，包含如url、params、data、headers等请求数据
  // 你可以自由修改这些数据
  beforeRequest(method) {
    // 假设我们需要添加token到请求头
    method.config.headers.token = 'token';
  }
  //响应拦截器
  // 使用数组的两个项，分别指定请求成功的拦截器和请求失败的拦截器
  responded: {
    // 请求成功的拦截器
    // 当使用GlobalFetch请求适配器时，第一个参数接收Response对象
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onSuccess: async (response, method) => {
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      if (json.code !== 200) {
        // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
        throw new Error(json.message);
      }

      // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
      return json.data;
    },

    // 请求失败的拦截器
    // 请求错误时将会进入该拦截器。
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onError: (err, method) => {
      alert(error.message);
    }
  }
});
```
