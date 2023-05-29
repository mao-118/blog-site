# vue3 组件通信方式

- `props`可以实现父子组件、子父组件、甚至兄弟组件通信

- `emit自定义事件`可以实现子父组件通信

- `全局事件总线EventBus`可以实现任意组件通信

- `v-model`数据双向绑定

- `useAttrs` 获取组件的属性与事件

- `ref和$parent`获取组件实例方法和属性

- `Provide 与 Inject` 可以实现隔辈组件传递参数

- `pinia`集中式状态管理容器，实现任意组件通信

- `slot`插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信

## props

props 可以实现父子组件通信,在 vue3 中我们可以通过 defineProps 获取父组件传递的数据。且在组件内部不需要引入 defineProps 方法可以直接使用！

**父组件给子组件传递数据**

```vue
<Child info="我爱祖国" :money="money"></Child>
```

**子组件获取父组件传递数据:方式 1**

```ts
let props = defineProps({
  info: {
    type: String, //接受的数据类型
    default: "默认参数", //接受默认数据
  },
  money: {
    type: Number,
    default: 0,
  },
});
```

**子组件获取父组件传递数据:方式 2**

```ts
let props = defineProps(["info", "money"]);
```

:::warning 注意
子组件获取到 props 数据就可以在模板中使用了,但是切记 props 是只读的(只能读取，不能修改)
:::

## 自定义事件

在 vue 框架中事件分为两种:一种是原生的 DOM 事件，另外一种自定义事件。

原生 DOM 事件可以让用户与网页进行交互，比如 click、dbclick、change、mouseenter、mouseleave....

自定义事件可以实现子组件给父组件传递数据

#### 1. 原生 DOM 事件

代码如下:

```vue
<pre @click="handler">
      我是祖国的老花骨朵
 </pre>
```

当前代码级给 pre 标签绑定原生 DOM 事件点击事件,默认会给事件回调注入 event 事件对象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做$event.

```vue
<div @click="handler1(1, 2, 3, $event)">我要传递多个参数</div>
```

在 vue3 框架 click、dbclick、change(这类原生 DOM 事件),不管是在标签、自定义标签上(组件标签)都是原生 DOM 事件。

::: warning 注意
vue2 中却不是这样的,在 vue2 中组件标签需要通过 native 修饰符才能变为原生 DOM 事件
:::

#### 2. 自定义事件

自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。

比如在父组件内部给子组件(Event2)绑定一个自定义事件

```vue
<Event2 @xxx="handler3"></Event2>
```

在 Event2 子组件内部触发这个自定义事件

```vue
<template>
  <div>
    <h1>我是子组件2</h1>
    <button @click="handler">点击我触发xxx自定义事件</button>
  </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(["xxx"]);
const handler = () => {
  $emit("xxx", "法拉利", "茅台");
};
</script>
<style scoped></style>
```

我们会发现在 script 标签内部,使用了 defineEmits 方法，此方法是 vue3 提供的方法,不需要引入直接使用。defineEmits 方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit 方法用于触发自定义事件。

当点击按钮的时候，事件回调内部调用$emit 方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N 个参数即为传递给父组件的数据。
::: warning 需要注意的是:

```vue
<Event2 @xxx="handler3" @click="handler"></Event2>
```

正常说组件标签书写@click 应该为原生 DOM 事件,但是如果子组件内部通过 defineEmits 定义就变为自定义事件了

```ts
let $emit = defineEmits(["xxx", "click"]);
```

:::

## 全局事件总线

全局事件总线可以实现任意组件通信，在 vue2 中可以根据 VM 与 VC 关系推出全局事件总线。

但是在 vue3 中没有 Vue 构造函数，也就没有 Vue.prototype.以及组合式 API 写法没有 this，

那么在 Vue3 想实现全局事件的总线功能就有点不现实啦，如果想在 Vue3 中使用全局事件总线功能

可以使用插件 [mitt](https://www.npmjs.com/package/mitt) 实现。
**安装**

```js
npm install --save mitt
```

**使用**

```js
import mitt from "mitt";

const emitter = mitt();

// 监听事件
emitter.on("foo", (e) => console.log("foo", e));

// 监听所有事件
emitter.on("*", (type, e) => console.log(type, e));

// 触发事件
emitter.emit("foo", { a: "b" });

// 清除所有事件
emitter.all.clear();

// working with handler references:
function onFoo() {}
emitter.on("foo", onFoo); // 监听事件
emitter.off("foo", onFoo); // 解除事件
```

## v-model

v-model 指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。

而 v-model 实指利用 props[modelValue]与自定义事件[update:modelValue]实现的。

下方代码:相当于给组件 Child 传递一个 props(modelValue)与绑定一个自定义事件 update:modelValue

实现父子组件数据同步

```vue
<Child v-model="msg"></Child>
```

在 vue3 中一个组件可以通过使用多个 v-model,让父子组件多个数据同步,下方代码相当于给组件 Child 传递两个 props 分别是 pageNo 与 pageSize，以及绑定两个自定义事件 update:pageNo 与 update:pageSize 实现父子数据同步

```vue
<Child v-model:pageNo="msg" v-model:pageSize="msg1"></Child>
```

## useAttrs

在 Vue3 中可以利用 useAttrs 方法获取组件的属性与事件(包含:原生 DOM 事件或者自定义事件),次函数功能类似于 Vue2 框架中$attrs属性与$listeners 方法。

比如:在父组件内部使用一个子组件 my-button

```vue
<my-button
  type="success"
  size="small"
  title="标题"
  @click="handler"
></my-button>
```

子组件内部可以通过 useAttrs 方法获取组件属性与事件.因此你也发现了，它类似于 props,可以接受父组件传递过来的属性与属性值。需要注意如果 defineProps 接受了某一个属性，useAttrs 方法返回的对象身上就没有相应属性与属性值。

```vue
<script setup lang="ts">
import { useAttrs } from "vue";
let $attrs = useAttrs();
</script>
```

## ref 与 $parent

ref,提及到 ref 可能会想到它可以获取元素的 DOM 或者获取子组件实例的 VC。既然可以在父组件内部通过 ref 获取子组件实例 VC，那么子组件内部的方法与响应式数据父组件可以使用的。

比如:在父组件挂载完毕获取组件实例

父组件内部代码:

```vue
<template>
  <div>
    <h1>ref与$parent</h1>
    <Son ref="son"></Son>
  </div>
</template>
<script setup lang="ts">
import Son from "./Son.vue";
import { onMounted, ref } from "vue";
const son = ref();
onMounted(() => {
  console.log(son.value);
});
</script>
```

但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过 `defineExpose` 对外暴露,因为 vue3 中组件内部的数据对外“关闭的”，外部不能访问

```vue
<script setup lang="ts">
import { ref } from "vue";
//数据
let money = ref(1000);
//方法
const handler = () => {};
defineExpose({
  money,
  handler,
});
</script>
```

`$parent` 可以获取某一个组件的父组件实例 VC,因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过 defineExpose 方法对外暴露

```vue
<template>
  <button @click="handler($parent)">点击我获取父组件实例</button>
</template>
<script setup>
const handler = (p) => {
  console.log(p);
};
</script>
```

## provide 与 inject

**provide[提供]**

**inject[注入]**

vue3 提供两个方法 provide 与 inject,可以实现隔辈组件传递参数

组件组件提供数据:

provide 方法用于提供数据，此方法执需要传递两个参数,分别提供数据的 key 与提供数据 value

```vue
<script setup lang="ts">
import { provide } from "vue";
provide("token", "admin_token");
</script>
```

后代组件可以通过 inject 方法获取数据,通过 key 获取存储的数值

```vue
<script setup lang="ts">
import { inject } from "vue";
let token = inject("token");
</script>
```

## [pinia](https://pinia.web3doc.top/)

pinia 也是集中式管理状态容器,类似于 vuex。但是核心概念没有 mutation、modules,使用方式参照官网

## slot

插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.

**默认插槽:**

在子组件内部的模板中书写 slot 全局组件标签

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
```

在父组件内部提供结构：Todo 即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件

注意开发项目的时候默认插槽一般只有一个

```vue
<Todo>
  <h1>我是默认插槽填充的结构</h1>
</Todo>
```

**具名插槽：**

顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。

下面是一个子组件内部,模板中留两个插槽

```vue
<template>
  <div>
    <h1>todo</h1>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
```

父组件内部向指定的具名插槽传递结构。需要注意 v-slot：可以替换为#

```vue
<template>
  <div>
    <h1>slot</h1>
    <Todo>
      <template v-slot:a>
        <!-- 可以用#a替换 -->
        <div>填入组件A部分的结构</div>
      </template>
      <template v-slot:b>
        <!-- //可以用#b替换 -->
        <div>填入组件B部分的结构</div>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
</script>
<style scoped></style>
```

**作用域插槽**

作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)

子组件 Todo 代码如下:

```vue
<template>
  <div>
    <h1>todo</h1>
    <ul>
      <!--组件内部遍历数组-->
      <li v-for="(item, index) in todos" :key="item.id">
        <!--作用域插槽将数据回传给父组件-->
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps(["todos"]); //接受父组件传递过来的数据
</script>
<style scoped></style>
```

父组件内部代码如下:

```vue
<template>
  <div>
    <h1>slot</h1>
    <Todo :todos="todos">
      <template v-slot="{ $row, $index }">
        <!--父组件决定子组件的结构与外观-->
        <span :style="{ color: $row.done ? 'green' : 'red' }">{{
          $row.title
        }}</span>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
import { ref } from "vue";
//父组件内部数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
]);
</script>
<style scoped></style>
```
