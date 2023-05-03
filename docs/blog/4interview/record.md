# 记录开发中遇到的问题

## 两个字符串类型的数字比较
```js
//这种比较为ASCII码比较，依次取每个字符，字符转为ASCII码进行比较，ASCII码先大的即为大
//因为第一个字符1比2小所以后面就不用考虑了
'11' < '2' ; //true
```

## `v-for` 和 `$refs` 使用

当 ref 和 v-for 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组

## flex布局最后一个元素无法对齐
如果`box-list`中的元素如下排列，元素不足的话，最后一行会参差不齐

```css
.box-list{
    display:flex;
    justify-content:space-between;
}
/* 这样可以让三个元素的行进行对齐 */
.box-list::after{
    content:'';
    width:33.33%; /*每个元素的宽度*/
    height:0;
}
/* 也可以在box-list中放一些空标签，但显然这不是一个很好的方案 */
```
但是如果不是三个元素的情况下该如何做呢？
## Object.keys顺序问题
Object.keys(obj).sort()

## keep-alive多级缓存失效
```js
function handleKeepAlive(to) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i]
      if (element.components.default.name === 'Emptyout') {
        to.matched.splice(i, 1)
        handleKeepAlive(to)
      }
      // 如果没有按需加载完成则等待加载
      if (typeof element.components.default === 'function') {
        element.components.default()
        handleKeepAlive(to)
      }
    }
  }
}
```