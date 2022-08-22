# vue3 + ts 中配置eslint，并且保存自动修复
基于 [eslint-plugin-vue](https://eslint.vuejs.org/) 校验规则，也可以搭配 [prettier](https://www.prettier.cn/)使用

## 安装
```js
npm install eslint --save-dev
```
## 初始化配置文件
```js
//执行命令
./node_modules/.bin/eslint --init

//根据提示一步一步选择，会根据情况安装一些依赖并且默认会初始化一些配置生成 .eslintrc文件

```

##  注意：在vite中使用这种方法生成文件之后需要改变一下配置文件，如下：
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

vscode中打开设置setting.json文件中加入配置 `"eslint.autoFixOnSave": true` 即可