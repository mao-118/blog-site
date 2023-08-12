# 小程序 WXML 模板语法

## 属性绑定

在小程序中不管是属性值，还是标签的内容，数据绑定统一都是用两对花括号 `{{  }}`

```js
// ✅ 正确写法
autoplay="{{false}}"          值是布尔类型

// ❌ 常见错误
autoplay="false"       		  值是字符串
:autoplay="false"		      这是 Vue 的写法，小程序不不生效
```

## 变量绑定

1. 在 `js` 文件中定义变量和值

```js
Page({
  /** * 页面的初始数据 */
  data: {
    // msg 变量可以直接在页面中通过 {{ msg }}  使用
    msg: '狠话',
    activeIndex: 0,
  },
})
```

2. 在 `wxml` 模板文件中使用。

```jsx
<view>{{ msg }}</view>

<button class="{{  activeIndex === 0 ? 'active' : ''  }}">选中</button>
```

## 列表渲染

1. 在 `js` 文件中定义数组

```jsx
Page({
  /** * 页面的初始数据 */
  data: {
    foodsList : [
      { id:1, food:'猪脚饭',price:13 },
      { id:2, food:'黄焖鸡米饭',price:15 },
      { id:3, food:'煲仔饭',price:16 },
      { id:4, food:'肠粉',price:4.5 },
    ],
    searchTips: ['鞋子','衣服','帽子','老婆']
  },
})
```

2. 在 `wxml` 文件中列表渲染

```jsx
// ✅ 正确写法      wx:for   和   wx:key 
<view wx:for="{{ foodsList }}" wx:key="id">
  {{ index }} 食物名称：{{ item.food }}  -- 价格： {{ item.price }}
</view>

// ✅ 正确写法 - 变量改名      wx:for-item  和   wx:for-index
<view 
  wx:for="{{ foodsList }}" 
  wx:for-item="aa"
  wx:for-index="bb"
  wx:key="id"  
>
  {{ bb }} 食物名称：{{ aa.food }}  -- 价格： {{ aa.price }}
</view>


// ✅ 特殊的 key 值写法，无重复项的字符串数组    *this    
<view wx:for="{{ searchTips }}" wx:key="*this">
   {{ item }}
</view>



// ❌ 常见错误 - Vue 的写法在小程序中不支持
<view v-for="(item,index) in foodsList" :key="item.id">
  食物名称：{{ item.food }}  -- 价格： {{ item.price }}
</view>
```

## 列表渲染写法对比小结

1. `wx:key="id"` ，直接写对象的属性名即可， 无需写 `item.`  。
2. `wx:for="{{ 数组 }}"`   无需写 `item` 和 `index`，`wx:for` 结构内可直接使用 `item` 和 `index` 变量。
3. 列表嵌套时，可通过 `wx:for-item`  和 `wx:for-index` 属性修改 `item` 和 `index` 的变量名。
4. 每项是`字符串`或`数字`的数组 (无重复项)，`wx:key` 的值用 `*this`（官方规定）。

## 条件渲染

`wx:if`  `wx:elif`   `wx:else`功能和 `v-if`   `v-else-if`    `v-else` 一样。

```jsx
// ❓❓ 思考：页面中共渲染输出多少个内容 ？
<view wx:if="{{ true }}">条件渲染的内容1</view>
<view wx:elif="{{ true }}">条件渲染的内容2</view>
<view wx:elif="{{ true }}">条件渲染的内容3</view>
<view wx:else>条件渲染的内容4</view>
```

> 注意：一组完整的 `wx:if`  `wx:elif`   `wx:else` 结构，只渲染其中的一个。