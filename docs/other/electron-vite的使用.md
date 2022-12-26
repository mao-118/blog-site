# electron-vite

## 现实问题

得益于 Vite 卓越的前端开发体验，越来越多的 Electron 项目也开始应用它来构建开发。翻阅各种社区资源可以发现很多基于 Vite 搭建的 Electron 开发模板，但都存在着一些共同的问题：

- 配置相对复杂，繁琐

- 需要辅助脚本来配合编译开发

- 无法举一反三，自主选择前端框架（Vue、React 和 Svelte 等）

- 无法保护源代码

electron-vite 旨在解决这些问题，为 Electron 提供更快、更精简的开发体验。

## 使用

使用 NPM

```
npm create @quick-start/electron

```

使用 Yarn

```
yarn create @quick-start/electron

```

使用 PNPM

```
pnpm create @quick-start/electron

```

然后按照提示操作即可!

```
✔ Project name: … <electron-app>
✔ Select a framework: › vue
✔ Add TypeScript? … No / Yes
✔ Add Electron updater plugin? … No / Yes
✔ Enable Electron download mirror proxy? … No / Yes

Scaffolding project in ./<electron-app>...
Done.

```

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Electron + Vue 项目，运行:

```
# npm 6.x
npm create @quick-start/electron my-app --template vue

# npm 7+, extra double-dash is needed:
npm create @quick-start/electron my-app -- --template vue

# yarn
yarn create @quick-start/electron my-app --template vue

# pnpm
pnpm create @quick-start/electron my-app --template vue

```

## 更多

[参考 electron-vite 官方教程](https://cn-evite.netlify.app/guide/introduction.html)
