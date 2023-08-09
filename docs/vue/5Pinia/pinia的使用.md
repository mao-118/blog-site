---
outline: "deep"
---

# pinia 的使用

## 概述

现有用户可能对 `Vuex` 更熟悉，它是 `Vue` 之前的官方状态管理库。由于 `Pinia` 在生态系统中能够承担相同的职责且能做得更好，因此 `Vuex` 现在处于维护模式。它仍然可以工作，但不再接受新的功能。对于新的应用，建议使用 `Pinia`。

事实上，`Pinia` 最初正是为了探索 `Vuex` 的下一个版本而开发的，因此整合了核心团队关于 `Vuex 5` 的许多想法。最终，我们意识到 `Pinia` 已经实现了我们想要在 `Vuex 5` 中提供的大部分内容，因此决定将其作为新的官方推荐。

相比于 `Vuex`，`Pinia` 提供了更简洁直接的 `API`，并提供了组合式风格的 `API`，最重要的是，在使用 `TypeScript` 时它提供了更完善的类型推导。

## 安装

```
yarn add pinia
# or with npm
npm install pinia
```

## 创建一个 pinia 实例

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

## 定义一个 store

### 1.选项式

```ts
//您可以将`defineStore（）`的返回值命名为任意名称，

//但最好使用store的名称，并用“use”将其包围

//（例如`useUserStore`、`useCartStore`和`useProductStore`）

//第一个参数是应用程序中存储的唯一id
export const useCounterStore = defineStore("counter", {
  //与 Vue 的选项 API 类似，我们也可以传递带有属性的选项对象。state actions getters
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

### 2.组合式

```ts
import { defineStore } from "pinia";
// 你可以这样记忆
//state => data
//getters => computed
//actions => methods
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
```

## 使用

```ts
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useCounterStore();
    //结构并赋予响应性
    const { name, doubleCount } = storeToRefs(store);
    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
};
```

## state

```ts
//给 state 加上类型推导
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userList: [] as UserInfo[],
      user: null as UserInfo | null,
    };
  },
});

interface UserInfo {
  name: string;
  age: number;
}
//或者给整个state加上类型推导
interface State {
  userList: UserInfo[];
  user: UserInfo | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      userList: [],
      user: null,
    };
  },
});

interface UserInfo {
  name: string;
  age: number;
}
```

### 访问 state

```ts
const store = useStore();

store.count++;
```

### 重置状态

```ts
const store = useStore();

store.$reset();
```

### 改变 state

```ts
//1.直接改变
store.count++;
//2.$patch
store.$patch({
  count: store.count + 1,
  age: 120,
  name: "DIO",
});
//或
cartStore.$patch((state) => {
  state.items.push({ name: "shoes", quantity: 1 });
  state.hasChanged = true;
});
```

## getters

### 定义

```ts
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
//添加类型约束
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.count * 2;
    },
    // the return type **must** be explicitly set
    doublePlusOne(): number {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1;
    },
  },
});
```

### 访问

```vue
<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>

<script>
export default {
  setup() {
    const store = useCounterStore();

    return { store };
  },
};
</script>
```

### 访问其他 getter

```ts
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1;
    },
  },
});
```

### 将参数传递给获取者

```ts
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
//组件中使用
<script>
export default {
  setup() {
    const store = useStore()

    return { getUserById: store.getUserById }
  },
}
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

## actions

### 定义

```ts
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // 因为我们依赖“this”，所以不能使用箭头函数
    increment() {
      this.count++;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
});
//与 getter 一样，操作通过完全键入（和自动完成✨）支持来访问整个商店实例。与 getter 不同，操作可以是异步的
import { mande } from "mande";

const api = mande("/api/users");

export const useUsers = defineStore("users", {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password });
        showTooltip(`Welcome back ${this.userData.name}!`);
      } catch (error) {
        showTooltip(error);
        // let the form component display the error
        return error;
      }
    },
  },
});
```

### 使用

```ts
export default {
  setup() {
    const store = useCounterStore();

    store.randomizeCounter();
  },
};
```
