# vue3 + ts 中配置 eslint+prettier+standard，并且保存自动修复

## vscode 插件

`vscode` 打开插件库，搜索 `eslint`、`prettier`、`editorconfig` 进行下载

## vscode 配置

不要把配置文件加入到 gitignore

根目录下创建 `.vscode/settings.json`

```json
{
  // 保存时格式化
  "editor.formatOnSave": true,
  // 保存时候按eslint规则进行修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true, // 启用ESLint作为已验证文件的格式化程序
  "vetur.validation.script": false // 禁用vetur的校验
}
```

## 安装 eslint

```js
npm install eslint --save-dev
```

## 初始化配置文件

```js
//执行命令
./node_modules/.bin/eslint --init

// 1.选择第三个
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

// 2. 选择es6模块化导入
? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

// 3. 选择vue
? Which framework does your project use? ...
  React
> Vue.js
  None of these

// 4.安装ts
? Does your project use TypeScript? » No / Yes

// 5.选择推荐风格，这里我们直接选第一个跟着引导去选择aribn或者standard (本文中案例使用了standard)
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

// 6.选择yes，安装这些依赖
? The style guide "standard" requires eslint@^7.12.1. You are currently using eslint@8.12.0.
  Do you want to downgrade? » No / Yes
```

修改初始化文件如下：

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "standard", // standard风格
    "plugin:vue/vue3-recommended", //eslint-plugin-vue 风格规范
    "plugin:@typescript-eslint/recommended", // ts风格
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser", // ts解析器
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint", // ts插件
  ],
  rules: {},
};
```

## 添加忽略文件

根目录下创建 `.eslintignore` 文件

## 集成 prettier

```js
// 安装 prettier
npm i -D prettier
// eslint prettier插件
npm i -D eslint-plugin-prettier
//解决eslint和prettier冲突
npm i -D eslint-config-prettier
```

## 配置 prettier

1. eslint 文件配置 prettier 插件

```json{5}
"extends": [
    "standard", // standard风格
    "plugin:vue/vue3-recommended", //eslint-plugin-vue 风格规范
    "plugin:@typescript-eslint/recommended", // ts风格
    "plugin:prettier/recommended"// 配置prettier风格插件
],
"parser": "vue-eslint-parser",
"parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
},
"rules": { //配置一些规则
    "space-before-function-paren": 0,
    "camelcase": 0,
    "vue/attribute-hyphenation": 0,
    "vue/multi-word-component-names": 0,
  },
```

2. 根目录下创建 `.prettierrc` 配置文件

```json
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "es5",
  "endOfLine": "lf"
}
```

之后在文件中右键鼠标，将默认格式化工具设置为`prettier`，以后写完代码`ctrl + s`将自动格式化代码

## 命令

```js
//一键格式化项目，如果项目过大，可能会很缓慢，使用命令之前别忘记配置忽略文件
npx prettier --write .
// 格式化指定文件
npx prettier --write file.ts
// 查看项目是否已经格式化（只检查文件是否已格式化，而不是覆盖它们）
npx prettier --check .

```

## package.json 文件中配置命令

```json
"scripts": {
  "lint": "eslint --ext .js,.ts,.vue src --fix", // eslint检查
  "prettier": "prettier --write ." // 按照prettier一键修复所有文件
}
```

## 忽略文件

根目录下创建`.prettierignore`文件即可

```
/dist/*
/node_modules/*
/static/*
/public/*
/*-lock.json
.DS_Store

```

## 配置 editorConfig

根目录下创建 `.editorconfig`

```json
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab

```

## 友情链接

[eslint](http://eslint.cn/)

[prettier](https://prettier.io/)

[editorconfig](https://editorconfig.org/)
