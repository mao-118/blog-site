# [parcel](https://v2.parceljs.cn/getting-started/webapp/)

可以快速的基于静态资源搭建一个本地服务器。

相对于 webpack 以及 vite 基本可以说是零配置。

## 安装

```
//本地初始化 package.json
npm init -y

//安装
yarn add --dev parcel
// or
npm install --save-dev parcel

```

## 配置

```json
{
  "name": "my-project",
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}
```
