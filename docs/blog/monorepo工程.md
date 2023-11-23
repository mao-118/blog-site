---
outline: "deep"
---

# Monorepo 工程

`Monorepo` 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。

`Monorepo` 提倡了开放、透明、共享的组织文化，这种方法已经被很多大型公司广泛使用，如 `Google`、`Facebook` 和 `Microsoft` 等。

通俗解释：

- 以往我们的项目大多都是单仓库、单项目的形式，`Monorepo` 简单来说就是单仓库、多项目的形式。
- 我们可以将公共的代码放到`Monorepo`工程中，也方便其他项目的引用和后期的维护迭代
- 我们可以把多个项目使用到的依赖统一安装到`Monorepo`工程到根目录中，子项目都可以进行使用

## 对比

![图片](/imgs/Snipaste_2023-11-23_15-37-18.png)

## pnpm

pnpm 的特点：快速、高效利用磁盘空间。

它将 workspace 的所有依赖都下载到.pnpm 目录下，然后再根据各个 package 的情况，在其目录下通过软连接方式将依赖添加进来，这样所有的依赖只需要下载一次，那么不仅快，而且磁盘体积也小

而且它原生 cli 支持基本的 workspace 管理，这也是我对比下来选择 pnpm 的原因

```bash
# 全局安装pnpm
npm i -g pnpm
```

## 创建 monorepo 工程

### 初始化

```bash
# 初始化pnpm项目
pnpm init
```

### 目录结构

```bash
├── libs # 存放项目核心库，如工具类或者ui组件
│   ├── core
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
│   ├── ui
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
│   ├── utils
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
├── projects # 存放项目
│   ├── demo
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml # 统一关联所有项目

```

### 利用 workspace 关联项目

- 首先将每个项目里面的 package.json 的 name 改为项目名
- 然后在 pnpm-workspace.yaml 中添加项目名

```bash
# pnpm-workspace.yaml
packages:
    - "libs/**"
    - "projects/**"

```

完成以上两步，我们就可以使用`pnpm`方便快捷的操作对应的子项目了

### 安装依赖

- 通过 `pnpm-workspace.yaml`进行了项目管理, 我们只需要在根目录下面执行 `pnpm i` ，
  这样所有的子项目即可全部安装依赖。
- 如果需要指定安装某个项目的依赖，可以单独执行 `pnpm i -F <project-name>`

### 项目之间的引用

比如我们的`demo`项目需要使用到`/libs/utils`里面的方法，

这时我们只需要执行 `pnpm i <utils-name> -F <project-name>`,

这样我们的`demo`工程多了一个`utils`的依赖，就可以直接使用`utils`里面的方法了

```json
{
  "dependencies": {
    // * 代表默认同步最新版本，正常安装完应该是 ^1.0.0
    // 即使是该依赖中的代码变更了，也无需重新安装
    "@libs/core": "workspace:*"
  }
}
```
