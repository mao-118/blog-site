## 路由重定向
路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。

通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：
```js
import VueRouter from 'vue-router'
const router = new VueRouter({
    routes:[
        // 重定向到Home组件
        {path:'/',redirect:'/home'},
        {path:'/home',component:()=>import('./Home.vue')}
    ]
}) 
```
## 嵌套路由
```js
import VueRouter from 'vue-router'
const router = new VueRouter({
    routes:[
        // 重定向到Home组件
        {path:'/',redirect:'/home'},
        {path:'/home',component:()=>import('./Home.vue')},
        {
            path:'/page',
            component:Layout,
            children:[ //嵌套路由
                {path:'/page/page1',component:()=>import('./page1.vue')}
            ]
        },
    ]
}) 
```
## 编程式路由
vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：
1. this.$router.push('地址')
跳转到指定 hash 地址，并增加一条历史记录
2. this.$router.replace('地址')
跳转到指定的 hash 地址，并替换掉当前的历史记录
3. this.$router.go(数值 n)
实现导航历史前进、后退
4. $router.back()
在历史记录中，后退到上一个页面
5. $router.forward()
在历史记录中，前进到下一个页面

## 路由传参
## 1. params传参
```js
import VueRouter from 'vue-router'
const router = new VueRouter({
    routes:[
        // 定义参数
        {path:'/home/:id',component:()=>import('./Home.vue')},
    ]
}) 

// 使用 $router.push传参
this.$router.push('/home/1')
//接收参数
this.$router.params.id
```
## 2. query传参
```js
// 使用 $router.push传参
this.$router.push({path:'/home/',query:{id:1}})
//接收参数
this.$router.query.id
```
## 全局前置守卫
```js
import VueRouter from 'vue-router'
const router = new VueRouter({})
router.beforeEach((to,from,next)=>{
    // to 将要访问的路由信息对象
    // from 将要离开的路由信息对象
    next()
    //  当前用户拥有后台主页的访问权限，直接放行：next()
    // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
    // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
})
```
## 全局后置守卫
```js
import VueRouter from 'vue-router'
const router = new VueRouter({})
router.afterEach((to,from,next)=>{
    // to 将要访问的路由信息对象
    // from 将要离开的路由信息对象
    next()
    //  当前用户拥有后台主页的访问权限，直接放行：next()
    // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
    // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
})
```