# vue批量导入文件

## webpack
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

## vite
- vite中使用 `import.meta.glob` 实现自动导入
```js
//Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：
const modules = import.meta.glob('./dir/*.js')
//以上将会被转译为下面的样子：
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js')
}
//你可以遍历 modules 对象的 key 值来访问相应的模块：
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
//匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），
//你可以传入 { eager: true } 作为第二个参数：
const modules = import.meta.glob('./dir/*.js', { eager: true })
//以上会被转译为下面的样子：
// vite 生成的代码
import * as __glob__0_0 from './dir/foo.js'
import * as __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1
}
//具名导入,也可能你只想要导入模块中的部分内容，那么可以利用 import 选项。
const modules = import.meta.glob('./dir/*.js', { import: 'setup' })
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js').then((m) => m.setup),
  './dir/bar.js': () => import('./dir/bar.js').then((m) => m.setup)
}
//当与 eager 一同存在时，甚至可能可以对这些模块进行 tree-shaking。
const modules = import.meta.glob('./dir/*.js', { import: 'setup', eager: true })

```