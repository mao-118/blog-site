# 发布一个包到 npm

## 准备工作：

- 需要发布的包（代码）`.gitignore` 忽略 `node_modules`
- README 描述文件
- package.json 中配置作者、版本号等信息

```json
{
  "name": "xxx-utils", // 包名，必须要独一无二
  "version": "1.0.0", // 版本号
  "author": "xxx", // 作者
  "description": "common toolkit", // 描述信息
  "keywords": ["utils", "format", "money", "phone"], // 关键词，提升SEO
  "repository": {
    // 代码托管位置
    "type": "git",
    "url": "https://github.com/xxx/xxx-utils"
  },
  "license": "ISC", // 许可证
  "homepage": "https://your-package.org", // 包的主页或者文档首页
  "bugs": "https://github.com/xxx/xxx-utils/issues", // 用户问题反馈地址
  "main": "index.js", // 入口文件
  "bin": {
    // package.json运行时寻找的入口
    "xxx-utils": "bin/xxx-utils.js"
  },
  "scripts": {
    // 存放可执行脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    // 运行依赖
  },
  "devDependencies": {
    // 开发依赖
  }
}
```

## 编写代码

[图片压缩插件](https://gitee.com/mao-118/tinify-images)

## 实现脚本自动化

1. 在代码里面创建一个`lib`目录
2. 运行的脚本第一行必须写上 `#!/usr/bin/env node` 否则 `npm run` 运行的时候会报错，这是源于`shell`程序
3. 在 `package.json` 中配置 `bin` 节点
4. 代码发布到`npm`
5. 下载`npm`包，在项目`package.json`中配置`scripts`节点即可使用`npm run xxx`运行

## 注册账号

[npmjs](https://www.npmjs.com/)

## 查看包名是否存在

```ts
npm view 包名
```

## 登陆

:::tip
这里需要切换`npm`镜像，如果使用淘宝镜像可能登陆不上去

```
nrm ls
nrm use npm
```

:::

```ts
npm login
// 根据提示输入用户名密码邮箱
```

## 查看是否登陆成功

```ts
npm whoami
//如果出现用户名就证明登陆成功了
```

## 发布

在需要发布的包路径下面操作

```
npm publish
```

## 版本图标生成

[shields](https://shields.io/)

复制生成好的地址到`README`描述文件中使用即可

## npm 更新命令

```ts
// 自动更改版本号，并且commit
// npm version xxx

// 控制台会返回下一个小版本号 如v1.0.1
npm version patch

// minor：次版本号，增加新功能，如 v1.0.0->v1.1.0
npm version minor

// major：主版本号，不兼容的修改，如 v1.0.0->v2.0.0
npm version major

// 重新发布
npm publish
```
