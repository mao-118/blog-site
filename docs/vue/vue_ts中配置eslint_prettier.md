# vue3 + ts 中配置 eslint+prettier，并且保存自动修复

## 安装 eslint

```js
npm install eslint --save-dev
```

## 初始化配置文件

```js
//执行命令
./node_modules/.bin/eslint --init

//根据提示一步一步选择，会根据情况安装一些依赖并且默认会初始化一些配置生成 .eslintrc文件

```

::: tip
注意：在 `ts` 项目中还需要配置 `@typescript-eslint/parser` 解析器，如下：

```json
"extends": [
    "eslint:recommended", //开启默认的eslint基础校验
    "plugin:vue/vue3-recommended", //开启eslint-plugin-vue规则校验
    "plugin:vue/vue3-essential", //vue3核心的lint的规则
    "plugin:@typescript-eslint/recommended" //ts
],
"parser": "vue-eslint-parser", //这里需要写入 vue-eslint-parser
"parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser", //这里写入 @typescript-eslint/parser
    "sourceType": "module"
}
```

:::

## 添加忽略文件

根目录下创建 `.eslintignore` 文件

## 配置规则

- 更多规则可以查看 `eslint` 的[官方文档](http://eslint.cn/docs/rules/)

```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

## 保存修复

vscode 中打开设置 setting.json 文件中加入配置 `"eslint.autoFixOnSave": true` 即可

## vscode 插件

`vscode` 打开插件库，搜索 `eslint` 进行下载

## 集成 prettier

```js
// eslint prettier插件
npm i -D eslint-plugin-prettier
//解决eslint和prettier冲突
npm i -D eslint-config-prettier
```

## 配置 prettier

1. eslint 文件配置 prettier 插件

```json{6}
"extends": [
    "eslint:recommended", //开启默认的eslint基础校验
    "plugin:vue/vue3-recommended", //开启eslint-plugin-vue规则校验
    "plugin:vue/vue3-essential", //vue3核心的lint的规则
    "plugin:@typescript-eslint/recommended", //ts
    "plugin:prettier/recommended"// 配置prettier插件
],
"parser": "vue-eslint-parser", //这里需要写入 vue-eslint-parser
"parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser", //这里写入 @typescript-eslint/parser
    "sourceType": "module"
}
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

## 命令

```js
//一键格式化项目，如果项目过大，可能会很缓慢，使用命令之前别忘记配置忽略文件
npx prettier --write .
// 格式化指定文件
npx prettier --write file.ts
// 查看项目是否已经格式化（只检查文件是否已格式化，而不是覆盖它们）
npx prettier --check .
```

## 忽略文件

根目录下创建`.prettierignore`文件即可

## vscode 插件

`vscode` 打开插件库，搜索 `prettier` 进行下载

## 配置 EditorConfig

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
