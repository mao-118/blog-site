# Vuex 的基本使用
## 安装 vuex 依赖包
```js
 npm install vuex --save
```
## 导入 vuex 包
```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
## 创建 store 对象
```js
const store = new Vuex.Store({
 // state 中存放的就是全局共享的数据
 state: { count: 0 }
})
export default store
```
## 将 store 对象挂载到 vue 实例中
```js
import store from './store'
new Vue({
 el: '#app',
 render: h => h(app),
 router,
 // 将创建的共享数据对象，挂载到 Vue 实例中
 // 所有的组件，就可以直接从 store 中获取全局的数据了
 store
})
```
## State
State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。
```js
 // 创建store数据源，提供唯一公共数据
 const store = new Vuex.Store({
 state: { count: 0 }
 })

// 组件访问 State 中数据的第一种方式：
this.$store.state.全局数据名称



```
```vue
<script>
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
export default{
    // 组件访问 State 中数据的第二种方式：
    // 计算属性：
    // 2. 将全局数据，映射为当前组件的计算属性
    computed: {
    ...mapState(['count'])
    }
}

</script>
```
##  Mutation
Mutation 用于变更 Store中 的数据。
- 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
- 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
```js
 // 定义 Mutation
 const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state,step) {
            // 变更状态
            state.count+=step
        }
    }
 })
 ```
 ```js
 // 触发mutation
 methods: {
    handle1() {
        // 触发 mutations 的第一种方式
        this.$store.commit('add',3)
    }
 }
 ```
### 触发 mutations 方式一
```js
 this.$store.commit('方法名','参数')
```
### 触发 mutations 方式二
```js
// 1. 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
// 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
 ...mapMutations(['add', 'addN'])
}
```
## Action
- Action 用于处理异步任务。
- 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
```js
 // 定义 Action
 const store = new Vuex.Store({
    // ...省略其他代码
    mutations: {
        add(state,step) {
            state.count+=step
        }
    },
    actions: {
        addAsync(context,step) {
            setTimeout(() => {
                context.commit('add',step)
            }, 1000)
        } 
    }
 }) 
 // 触发 Action
 methods: {
    handle() {
        // 触发 actions 的第一种方式
        this.$store.dispatch('addAsync',3)
    }
 } 

// 触发 actions 的第二种方式
 // 1. 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'
// 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
methods: {
 ...mapActions(['addASync', 'addNASync'])
}
 ```
## Getter
Getter 用于对 Store 中的数据进行加工处理形成新的数据。
- Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
- Store 中数据发生变化，Getter 的数据也会跟着变化。
```js
// 定义 Getter
 const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        showNum: state => {
            return '当前最新的数量是【'+ state.count +'】'
        }
    }
 })

//  使用 getters 的第一种方式：
this.$store.getters.showNum
// 使用 getters 的第二种方式：
import { mapGetters } from 'vuex'
computed: {
 ...mapGetters(['showNum'])
}
```