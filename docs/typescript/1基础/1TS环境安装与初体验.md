# TS环境安装与初体验

## 安装

```js
npm install -g typescript
// or
cnpm install -g typescript
// or
yarn global add typescript
```
## 运行
```js
// 编译生成js文件
tsc 文件名称.ts
// 监听文件变化
tsc --watch  
```

## js缺陷的演示

```js
/* 
  1.没有对类型进行检测
  2.没有对是否传参进行检测
*/
function test(msg) {
  console.log(msg.length);
}

test("邱淑贞") // 可以正常使用
test(666) // undefine
test() // error
```

采用TS书写同样的代码，我们可以看到，编译器非常友好的对我们进行了提示

```ts
function test(msg:string) {
  console.log(msg.length);
}

test("邱淑贞") // 可以正常使用
test(666) // 编译不通过
test() // 编译不通过
```

