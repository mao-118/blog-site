# Vue3 在 setup 中如何定义组件的 name 属性
## 方法一
- 新增一个script标签， 在这个script标签定义一个name属性（注意多个script使用时 lang的值要一致）
```vue
<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<script setup lang="ts">
</script>

<template>
  <div>layout</div>
</template>

<style lang="less" scoped></style>

```
## 方法二
- 使用unplugin-vue-define-options插件
1. 安装插件 `yarn add unplugin-vue-define-options -D`
2. 集成插件 在 `vite.config.ts` 文件引入插件 `unplugin-vue-define-options`
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
})

```
3. 集成完成之后，那么可以直接使用了，如果在TypeScript中报错了（比如在d.ts的配置文件中加入描述）
```vue
<script setup lang="ts">
  defineOptions({
    name: 'Layout'
  })
</script>
<template>
  <div>layout</div>
</template>
<style lang="less" scoped></style>

```
## 方法三
- 使用 vite-plugin-vue-setup-extend插件
1. 安装插件 yarn add vite-plugin-vue-setup-extend -D
2. 集成插件 在vite.config.ts文件引入vite-plugin-vue-setup-extend
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [vue(), vueSetupExtend()]
})

```
3. vue文件的setup中直接使用name属性
```vue
<script setup lang="ts" name="Layout">

</script>
<template>
  <div>layout</div>
</template>

<style lang="less" scoped></style>

```