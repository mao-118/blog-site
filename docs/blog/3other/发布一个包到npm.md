# 发布一个包到 npm

准备工作：

- 需要发布的包（代码）`.gitignore` 忽略 `node_modules`
- README 描述文件
- package.json 中配置作者、版本号等信息

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
npm adduser
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
