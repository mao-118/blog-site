# Pinia持久化
Pinia保存的状态在刷新之后是会丢失的，

为了避免这一问题，我们使用一个[Pinia的插件](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)来进行自动持久化操作。

## 安装
```js
pnpm i pinia-plugin-persistedstate
// or
npm i pinia-plugin-persistedstate
// or
yarn add pinia-plugin-persistedstate
```
## 使用
在 Pinia 实例上面使用该插件
```js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```
## 开启持久化
### 1.选项式
```js
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: '你好 pinia',
    }
  },
  persist: true,
})
```
### 2.组合式
```js
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('你好 pinia')
    return { someState }
  },
  {
    persist: true,
  }
)
```
配置好了之后，操作相关的store状态，会自动进行持久化操作，保存到`localStorage`里面