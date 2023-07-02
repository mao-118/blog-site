# axios 的使用及封装

## axios 是什么？

Axios 是一个基于 promise 网络请求库，作用于 node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和 node.js 中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

## 安装

```js
npm i axios
```

## 使用

## 1. get

```js
import axios from "axios";
// 向给定ID的用户发起请求
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });

// 上述请求也可以按以下方式完成（可选）
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

## 2. post

```js
import axios from "axios";
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 向 axios 传入配置

```ts
import axios from "axios";
// 发起一个post请求
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});
```

为了方便起见，已经为所有支持的请求方法提供了别名。

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

## 创建一个 axios 的实例

```js
import axios from "axios";
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
```

## 封装一个 axios

```js
import axios from "axios";
const instance = axios.create({
  baseURL: "", //请求域名
  timeout: 5000,
  headers: {
    token: getToken(), //添加头信息
  },
});
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在请求之前做一些操作
    return config;
  },
  (error) => {
    console.log(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    /**
     * 请求结束之后做一些操作
     * 比如对状态码进行一下判断
     *  */
    const res = response.data;
    if (res.code !== 200) {
      return Promise.reject(res);
    }
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 导出
export default instance;
```
