---
outline: "deep"
---

# node 开发

使用 express 进行 node 开发

## express

1. 安装

```
npm i express@4.17.1
```

2. 使用

```js
// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();
// write your code here...
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log("api server running at http://127.0.0.1:3007");
});
```

## cors 跨域

1. 安装

```
npm i cors@2.8.5
```

2. 使用

```js
// 导入 cors 中间件
const cors = require("cors");
// 将 cors 注册为全局中间件
app.use(cors());
```

## 配置解析 application/json 格式数据的内置中间件

```js
app.use(express.json());
```

## 配置解析表单数据的中间件

- 通过如下的代码，配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：

```js
app.use(express.urlencoded({ extended: false }));
```

## 使用 nodemon

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。

这样做的坏处是：代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。

这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

```js
// 安装
npm install nodemon -g
// 使用nodemon运行js文件，这样修改了js代码之后会自动刷新
nodemon app.js
```

## 使用路由

- 可以单独定义路由文件，以下用 `user.js` 用户路由为例

1. 创建路由

```js
const express = require("express");
// 创建路由对象
const router = express.Router();
// 注册新用户
router.post("/reguser", (req, res) => {
  res.send("reguser OK");
});
// 登录
router.post("/login", (req, res) => {
  res.send("login OK");
});
// 将路由对象共享出去
module.exports = router;
```

2. 使用路由

```js
// 导入并注册用户路由模块
const userRouter = require("./router/user");
// 使用路由并设置路由前缀 /api
app.use("/api", userRouter);
```

:::tip
路由获取请求参数：

`/api/userinfo/:id => req.params` 获取

`/api/userinfo?id=1 => req.query` 获取

`json或者表单 => req.body` 获取（需要不同的中间件解析）

:::

## 中间件

Express 的中间件，本质上就是一个 function 处理函数

1. 定义一个中间件

```js
// 中间件的三个参数
const mw = function (req, res, next) {
  console.log("这是一个中间件");
  //处理业务之后，必须调用next函数，流向下一步
  next();
};
```

2. 使用中间件

```js
//全局生效 客户端发起的任何请求，到达服务器之后，都会触发该中间件
app.use(mw);
// 局部生效
app.get("/", mw, function (req, res) {
  res.send("hello");
});
//中间件可以有多个
app.get("/", [mw, mw1], function (req, res) {
  res.send("hello");
});
```

3. 了解中间件的 5 个使用注意事项

- 一定要在路由之前注册中间件
- 客户端发送过来的请求，可以连续调用多个中间件进行处理
- 执行完中间件的业务代码之后，不要忘记调用 next() 函数
- 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码
- 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象

## 中间件的分类

为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分成了 5 大类，分别是：

- 应用级别的中间件
- 路由级别的中间件
- 错误级别的中间件
- Express 内置的中间件
- 第三方的中间件

### 1. 应用级别的中间件

通过 app.use() 或 app.get() 或 app.post() ，绑定到 app 实例上的中间件，叫做应用级别的中间件，代码示例如下：

```js
app.use((req, res, next) => {
  next();
});
app.get("/", mw, (req, res) => {
  res.send("hello");
});
```

### 2. 路由级别的中间件

绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上，代码示例如下：

```js
var app = express();
var router = express.Router();
// 路由级别中间件
router.use((req, res, next) => {
  next();
});
app.use("/", router);
```

### 3. 错误级别的中间件

错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

格式：错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。

```js
app.get("/", (req, res) => {
  throw new Error("服务器发生了错误");
  res.send("hello");
});
app.use((err, req, res, next) => {
  //发生错误时触发
  res.send("Error!" + err.message);
});
```

### 4. Express 内置的中间件

自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：

- express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
- express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
- express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）

### 5. 第三方的中间件

非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。

例如：在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。使用步骤如下：

- 运行 npm install body-parser 安装中间件
- 使用 require 导入中间件
- 调用 app.use() 注册并使用中间件
  :::warning
  Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。
  :::

### 6. 中间件注意事项

:::warning
错误级别的中间件，必须注册在所有路由之后！

其他中间件注册在所有路由之前。

:::

## mysql 的使用

1. 安装

```
npm i mysql@2.18.1
```

2. 使用

```js
// 导入 mysql 模块
const mysql = require("mysql");
// 创建数据库连接对象
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "my_db_01",
});
// 向外共享 db 数据库连接对象
module.exports = db;
```

3. 执行 sql

```js
const express = require("express");
// 创建路由对象
const router = express.Router();
// 数据库对象
const db = require("../db/index");
// 注册新用户
router.get("/getUsername", (req, res) => {
  const sql = `select * from ev_users where username=?`;
  const username = "jack";
  db.query(sql, [username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({ status: 1, message: err.message });
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.send({
        status: 1,
        message: "用户名被占用，请更换其他用户名！",
      });
    }
    // TODO: 用户名可用，继续后续流程...
  });
});
```

:::tip
查询语句 `results` 等于查询到的结果集合

增删改语句 `results` 中包含 `affectedRows` 字段，代表影响行数

```js
if (results.affectedRows !== 1)
  return res.send({
    status: 1,
    message: "影响行数不唯一，失败！",
  });
```

:::

## bcryptjs 加密

1. 安装

```
npm i bcryptjs@2.4.3
```

2. 使用

```js
const bcrypt = require("bcryptjs");
// 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
userinfo.password = bcrypt.hashSync(userinfo.password, 10);
```

## 表单数据验证

- 在实际开发中，前后端都需要对表单的数据进行合法性的验证，而且，后端做为数据合法性验证的最后一个关口，在拦截非法数据方面，起到了至关重要的作用。
- 单纯的使用 if...else... 的形式对数据合法性进行验证，效率低下、出错率高、维护性差。
- 因此，推荐使用第三方数据验证模块，来降低出错率、提高验证的效率与可维护性，让后端程序员把更多的精力放在核心业务逻辑的处理上。

1. 安装 joi 包，为表单中携带的每个数据项，定义验证规则：

```
npm install joi
```

2. 安装 @escook/express-joi 中间件，来实现自动对表单数据进行验证的功能：

```
npm i @escook/express-joi
```

3. 新建 /schema/user.js 用户信息验证规则模块，并初始化代码如下：

```js
const joi = require("joi");
/**
 * string() 值必须是字符串 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */
// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
// 密码的验证规则
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required();
// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: { username, password },
};
```

4. 修改 /router/user.js 中的代码如下：

```js
const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')
// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

// 注册新用户
// 3. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件 中进行处理
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)

// 登录
router.post('/login', userHandler.login) module.exports = router
```

5. 在 app.js 的全局错误级别中间件中，捕获验证失败的错误，并把验证失败的结果响应给客户端：

```js
const joi = require("joi");
// 错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError)
    return res.send({ message: err, status: 1 });
  // 未知错误
  res.send({ status: err, status: 3 });
});
```

## 生成 JWT 的 Token 字符串

:::warning

- 核心注意点：在生成 Token 字符串的时候，一定要剔除敏感字段，如 密码 和 头像 的值

:::

1. 安装

```
npm i jsonwebtoken@8.5.1
```

2. 使用

```js
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
//加密 和 还原 Token 的 jwtSecretKey 字符串
const jwtSecretKey: 'itNo1. ^_^'
const user={username:'jack',age:12}
// 生成 Token 字符串
const tokenStr = jwt.sign(user,jwtSecretKey, {
     expiresIn: '10h', // token 有效期为 10 个小时
})
//
res.send({
    status: 0,
    message: '登录成功！',
    // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
    token: 'Bearer ' + tokenStr
    })
```

## 解析 token

- 配置解析 Token 的中间件 1.安装

```
npm i express-jwt@5.3.3
```

2. 使用

```js
// 解析 token 的中间件
const expressJWT = require("express-jwt");
const jwtSecretKey: 'itNo1. ^_^'
/**
 *  使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
 *  token 解析失败会进入到错误中间件
 *  token 解析成功会在请求路由req对象里面挂载一个user对象，里面包含了用户生成token的对应字段
*/
app.use(
  expressJWT({ secret: jwtSecretKey }).unless({ path: [/^\/api\//] })
);
```

3. 捕获错误

```js
// 错误中间件
app.use(function (err, req, res, next) {
  // 省略其它代码...
  // 捕获身份认证失败的错误
  if (err.name === "UnauthorizedError")
    return res.send({ message: "身份认证失败！", status: -1 });
  // 未知错误...
});
```

## 解析`multipart/form-data`表单数据

1. 安装

```
npm i multer@1.4.2
```

2. 使用

```js
// 导入解析 formdata 格式表单数据的包
const multer = require("multer");
// 导入处理路径的核心模块
const path = require("path");
// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({ dest: path.join(__dirname, "../uploads") });

// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 将文本类型的数据，解析并挂载到 req.body 属性中
router.post("/add", upload.single("cover_img"), (req, res) => {
  console.log(req.body);
  // 文本类型的数据
  console.log("--------分割线----------");
  console.log(req.file);

  if (!req.file || req.file.fieldname !== "cover_img")
    return res.send({ message: "文章封面是必选 参数！", status: 1 });
  // 文件类型的数据
  res.send("ok");
});
```

## 托管静态资源文件

```js
//使用 express.static() 中间件，将 uploads 目录中的图片托管为静态资源
app.use("/uploads", express.static("./uploads"));
// 配置之后 http:/127.0.0.1/uploads 可以直接访问到静态资源
```
