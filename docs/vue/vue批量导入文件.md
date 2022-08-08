# vue批量导入文件

## require.context
- webpack中使用 `require.context` 实现自动导入
```js
const files = require.context('./modules', false, /\.ts$/);
const modules = {};
files.keys().forEach((key) => {
     if (key === './index.ts') { return; }
     modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default;
});
export default modules;
```

## import.meta.globEager（官方提示已弃用，推荐使用 `import.meta.glob`）
- vite中使用 `import.meta.globEager` 实现自动导入
- 和 `import.meta.glob` 的区别：`import.meta.glob` 导入的是懒加载，`import.meta.globEager` 是直接加载
```js
const files = import.meta.globEager("./*.ts")
const modules: any = {};

for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
    }
}

export default modules;
```
## import.meta.glob
```js
const files = import.meta.glob("./*.ts")
```