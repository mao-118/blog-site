# Vue3.2 看一遍就会的setup语法糖

1. 起初 Vue3.0 暴露变量必须 return 出来，template中才能使用；
2. Vue3.2 中 只需要在 script 标签上加上 setup 属性，组件在编译的过程中代码运行的上下文是在 setup() 函数中，无需return，template可直接使用。

## 文件结构
```vue
<template>
  // Vue2中，template标签中只能有一个根元素，在Vue3中没有此限制
  // ...
</template>
 
<script setup>
  // ...
</script>
 
<style lang="scss" scoped>
  // 支持CSS变量注入v-bind(color)
</style>
```
## data
```vue
<script setup>
import { reactive, ref, toRefs } from 'vue'

// ref声明响应式数据，用于声明基本数据类型
const name = ref('Jerry')
// 修改
name.value = 'Tom'

// reactive声明响应式数据，用于声明引用数据类型
const state = reactive({
name: 'Jerry',
sex: '男'
})
// 修改
state.name = 'Tom'

// 使用toRefs解构
const {name, sex} = toRefs(state)
// template可直接使用{{name}}、{{sex}}
</script>
```
## method
```vue
<template>
  // 调用方法
  <button @click='changeName'>按钮</button>  
</template>
 
<script setup>
  import { reactive } from 'vue'
 
  const state = reactive({
    name: 'Jery'
  })
 
  // 声明method方法
  const changeName = () => {
    state.name = 'Tom'
  }  
</script>
```
## computed
```vue
<script setup>
  import { computed, ref } from 'vue'
 
  const count = ref(1)
 
  // 通过computed获得doubleCount
  const doubleCount = computed(() => {
    return count.value * 2
  })
</script>
```
## watch
```vue
<script setup>
  import { watch, reactive } from 'vue'
 
  const state = reactive({
    count: 1
  })
 
  // 声明方法
  const changeCount = () => {
    state.count = state.count * 2
  }
 
  // 监听count
  watch(
    () => state.count,
    (newVal, oldVal) => {
      console.log(state.count)
      console.log(`watch监听变化前的数据：${oldVal}`)
      console.log(`watch监听变化后的数据：${newVal}`)
    },
    {
      immediate: true, // 立即执行
      deep: true // 深度监听
    }
  )
</script>
```
## props父传子

1. 子组件
```vue
<template>
  <span>{{props.name}}</span>
  // 可省略【props.】
  <span>{{name}}</span>
</template>
 
<script setup>
  // import { defineProps } from 'vue'
  // defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineProps: true】
 
  // 声明props
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })  
</script>
```
2. 父组件
```vue
<template>
  <child name='Jerry'/>  
</template>
 
<script setup>
  // 引入子组件(组件自动注册)
  import child from './child.vue'
</script>
```
## emit子传父

1. 子组件
```vue
<template>
  <span>{{props.name}}</span>
  // 可省略【props.】
  <span>{{name}}</span>
  <button @click='changeName'>更名</button>
</template>
 
<script setup>
  // import { defineEmits, defineProps } from 'vue'
  // defineEmits和defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
	
  // 声明props
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  }) 
  // 声明事件
  const emit = defineEmits(['updateName'])
  
  const changeName = () => {
    // 执行
    emit('updateName', 'Tom')
  }
</script>
```
2. 父组件
```vue
<template>
  <child :name='state.name' @updateName='updateName'/>  
</template>
 
<script setup>
  import { reactive } from 'vue'
  // 引入子组件
  import child from './child.vue'
 
  const state = reactive({
    name: 'Jerry'
  })
  
  // 接收子组件触发的方法
  const updateName = (name) => {
    state.name = name
  }
</script>
```
## v-model

1. 子组件
```vue
<template>
  <span @click="changeInfo">我叫{{ modelValue }}，今年{{ age }}岁</span>
</template>
 
<script setup>
  // import { defineEmits, defineProps } from 'vue'
  // defineEmits和defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
 
  defineProps({
    modelValue: String,
    age: Number
  })
 
  const emit = defineEmits(['update:modelValue', 'update:age'])
  const changeInfo = () => {
    // 触发父组件值更新
    emit('update:modelValue', 'Tom')
    emit('update:age', 30)
  }
</script>
```

2. 父组件
```vue
<template>
  // v-model:modelValue简写为v-model
  // 可绑定多个v-model
  <child
    v-model="state.name"
    v-model:age="state.age"
  />
</template>
 
<script setup>
  import { reactive } from 'vue'
  // 引入子组件
  import child from './child.vue'
 
  const state = reactive({
    name: 'Jerry',
    age: 20
  })
</script>
```
## nextTick

```vue
<script setup>
  import { nextTick } from 'vue'
	
  nextTick(() => {
    // ...
  })
</script>
```
## 子组件ref变量和defineExpose 
- 在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
- 如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 defineExpose 来完成。

1. 子组件
```vue
<template>
  <span>{{state.name}}</span>
</template>
 
<script setup>
  import { defineExpose, reactive, toRefs } from 'vue'
	
  // 声明state
  const state = reactive({
    name: 'Jerry'
  }) 
	
  // 声明方法
  const changeName = () => {
    // 执行
    state.name = 'Tom'
  }
  
  // 将方法、变量暴露给父组件使用，父组见才可通过ref API拿到子组件暴露的数据
  defineExpose({
    // 解构state
    ...toRefs(state),
    changeName
  })
</script>
```
2. 父组件
```vue
<template>
  <child ref='childRef'/>  
</template>
 
<script setup>
  import { ref, nextTick } from 'vue'
  // 引入子组件
  import child from './child.vue'
 
  // 子组件ref
  const childRef = ref('childRef')
  
  // nextTick
  nextTick(() => {
    // 获取子组件name
    console.log(childRef.value.name)
    // 执行子组件方法
    childRef.value.changeName()
  })
</script>
```
## 插槽slot
1. 子组件
```vue
<template>
  <!-- 匿名插槽 -->
  <slot/>
  <!-- 具名插槽 -->
  <slot name='title'/>
  <!-- 作用域插槽 -->
  <slot name="footer" :scope="state" />
</template>
 
<script setup>
  import { useSlots, reactive } from 'vue'
  const state = reactive({
    name: '张三',
    age: '25岁'
  })
  
  const slots = useSlots()
  // 匿名插槽使用情况
  const defaultSlot = reactive(slots.default && slots.default().length)
  console.log(defaultSlot) // 1
  // 具名插槽使用情况
  const titleSlot = reactive(slots.title && slots.title().length)
  console.log(titleSlot) // 3
</script>
```
2. 父组件
```vue
<template>
  <child>
    <!-- 匿名插槽 -->
    <span>我是默认插槽</span>
    <!-- 具名插槽 -->
    <template #title>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
    </template>
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，年龄{{ scope.age }}</footer>
    </template>
  </child> 
</template>
 
<script setup>
  // 引入子组件
  import child from './child.vue'
</script>
```
## 路由useRoute和useRouter
```vue
<script setup>
  import { useRoute, useRouter } from 'vue-router'
	
  // 必须先声明调用
  const route = useRoute()
  const router = useRouter()
	
  // 路由信息
  console.log(route.query)
 
  // 路由跳转
  router.push('/newPage')
</script>
```
## 路由导航守卫
```vue
<script setup>
  import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
	
  // 添加一个导航守卫，在当前组件将要离开时触发。
  onBeforeRouteLeave((to, from, next) => {
    next()
  })
 
  // 添加一个导航守卫，在当前组件更新时触发。
  // 在当前路由改变，但是该组件被复用时调用。
  onBeforeRouteUpdate((to, from, next) => {
    next()
  })
</script>
```
## store
* Vue3 中的Vuex不再提供辅助函数写法
```vue
<script setup>
  import { useStore } from 'vuex'
  import { key } from '../store/index'
 
  // 必须先声明调用
  const store = useStore(key)
	
  // 获取Vuex的state
  store.state.xxx
 
  // 触发mutations的方法
  store.commit('fnName')
 
  // 触发actions的方法
  store.dispatch('fnName')
 
  // 获取Getters
  store.getters.xxx
</script>
```
## 生命周期
- 通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子。
- 下表包含如何在 Option API 和 setup() 内部调用生命周期钩子

| Option API        | setup中 |
| ------------- |:-------------:|
| beforeCreate  | 不需要 |
| created      | 不需要      |
| beforeMount | onBeforeMount     |
| mounted | onMounted     |
| beforeUpdate | onBeforeUpdate     |
| updated | onUpdated     |
| beforeUnmount | onBeforeUnmount     |
| unmounted | onUnmounted     |
| errorCaptured | onErrorCaptured     |
| renderTracked | onRenderTracked     |
| renderTriggered | onRenderTriggered     |
| activated | onActivated     |
| deactivated | onDeactivated     |

## CSS变量注入
```vue
<template>
  <span>Jerry</span>  
</template>
 
<script setup>
  import { reactive } from 'vue'
 
  const state = reactive({
    color: 'red'
  })
</script>
  
<style scoped>
  span {
    // 使用v-bind绑定state中的变量
    color: v-bind('state.color');
  }  
</style>
```
## 原型绑定与组件内使用
1. main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
 
// 获取原型
const prototype = app.config.globalProperties
 
// 绑定参数
prototype.name = 'Jerry'
```
2. 组件内使用
```vue
<script setup>
  import { getCurrentInstance } from 'vue'
 
  // 获取原型
  const { proxy } = getCurrentInstance()
  
  // 输出
  console.log(proxy.name)
</script>
````
## 对 await 的支持
- 不必再配合 async 就可以直接使用 await 了，这种情况下，组件的 setup 会自动变成 async setup 。
```vue
<script setup>
  const post = await fetch('/api').then(() => {})
</script>
```

## 定义组件的name
```vue
<script>
//用单独的<script>块来定义
  export default {
    name: 'ComponentName',
  }
</script>
```
## provide和inject
1. 父组件
```vue
<template>
  <child/>
</template>
 
<script setup>
  import { provide } from 'vue'
  import { ref, watch } from 'vue'
  // 引入子组件
  import child from './child.vue'
 
  let name = ref('Jerry')
  // 声明provide
  provide('provideState', {
    name,
    changeName: () => {
      name.value = 'Tom'
    }
  })
 
  // 监听name改变
  watch(name, () => {
    console.log(`name变成了${name}`)
    setTimeout(() => {
      console.log(name.value) // Tom
    }, 1000)
  })
</script>
```
2. 子组件
```vue
<script setup>
  import { inject } from 'vue'
	// 注入
  const provideState = inject('provideState')
  
  // 子组件触发name改变
  provideState.changeName()
</script>
```
## Vue3中使用echarts
```js
// 安装
cnpm i echarts --save
 
// 组件内引入
import * as echarts from 'echarts'
```