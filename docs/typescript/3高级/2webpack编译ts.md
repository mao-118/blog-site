# 使用webpack打包TS文件

## 安装依赖

- 安装webpack环境 **npm i webpack webpack-cli webpack-dev-server -D**
- 安装TypeScript   **npm install typescript -D**
- 编译TS **npm install ts-loader -D**
- 热更新服务 **npm install  webpack-dev-server -D**
- HTML模板 **npm install html-webpack-plugin -D**

```json
{
  "name": "webpackProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack serve --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.3.1",
    "typescript": "^4.7.4",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3"
  }
}
```

## webpack.config.js

```js
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [
      {test: /\.ts$/, use: 'ts-loader', exclude:/node_modules/}
    ]
  },
  mode: "development",

  resolve: {
    extensions: [".ts", ".js"]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
```
