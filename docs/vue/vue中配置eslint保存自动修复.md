# vue中配置eslint，并且保存自动修复

## 安装
```js
npm install eslint --save-dev
```
## 初始化配置文件
```js
./node_modules/.bin/eslint --init
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