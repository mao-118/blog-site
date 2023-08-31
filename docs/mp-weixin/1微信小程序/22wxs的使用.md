# WXS

WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。

WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。

WXS 代码可以编写在 wxml 文件中的 `<wxs>` 标签内，或以 .wxs 为后缀名的文件内。

每一个 .wxs 文件和 `<wxs>` 标签都是一个单独的模块。

每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

一个模块要想对外暴露其内部的私有变量与函数，只能通过 module.exports 实现。

## .wxs 文件

在微信开发者工具里面，右键可以直接创建 .wxs 文件，在其中直接编写 WXS 脚本。

```js
// /pages/comm.wxs

var foo = "'hello world' from comm.wxs";
var bar = function (d) {
  return d;
};
module.exports = {
  foo: foo,
  bar: bar,
};
```

上述例子在 `/pages/comm.wxs` 的文件里面编写了 WXS 代码。该 .wxs 文件可以被其他的 .wxs 文件 或 WXML 中的 `<wxs>` 标签引用。

## module 对象

每个 wxs 模块均有一个内置的 module 对象。

exports: 通过该属性，可以对外共享本模块的私有变量与函数。

```js
// /pages/tools.wxs

var foo = "'hello world' from tools.wxs";
var bar = function (d) {
  return d;
}
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";

// <!-- page/index/index.wxml -->
<wxs src="./../tools.wxs" module="tools" />
<view> {{tools.msg}} </view>
<view> {{tools.bar(tools.FOO)}} </view>

// 页面输出
// some msg
// 'hello world' from tools.wxs
```

## require 函数

在.wxs 模块中引用其他 wxs 文件模块，可以使用 require 函数。

引用的时候，要注意如下几点：

- 只能引用 .wxs 文件模块，且必须使用相对路径。
- wxs 模块均为单例，wxs 模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个 wxs 模块对象。
- 如果一个 wxs 模块在定义之后，一直没有被引用，则该模块不会被解析与运行。

```js
// /pages/tools.wxs

var foo = "'hello world' from tools.wxs";
var bar = function (d) {
  return d;
};
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";
// /pages/logic.wxs

var tools = require("./tools.wxs");

console.log(tools.FOO);
console.log(tools.bar("logic.wxs"));
console.log(tools.msg);

// <!-- /page/index/index.wxml -->
<wxs src="./../logic.wxs" module="logic" />;

// 控制台输出：
// 'hello world' from tools.wxs
// logic.wxs
// some msg
```

## `<wxs>` 标签

- module 属性：当前 `<wxs>` 标签的模块名。必填字段。

```js
<wxs module="foo">
var some_msg = "hello world";
module.exports = {
  msg : some_msg,
}
</wxs>
<view> {{foo.msg}} </view>
// 输出 hello world
```

- src 属性：当前 `<wxs>` 引用 .wxs 文件的相对路径。仅当本标签为单闭合标签或标签的内容为空时有效。

```js
Page({
  data: {
    msg: "'hello wrold' from js",
  }
})

// <!-- /pages/index/index.wxml -->

<wxs src="./../comm.wxs" module="some_comms"></wxs>
// <!-- 也可以直接使用单标签闭合的写法
// <wxs src="./../comm.wxs" module="some_comms" />
// -->

// <!-- 调用 some_comms 模块里面的 bar 函数，且参数为 some_comms 模块里面的 foo -->
<view> {{some_comms.bar(some_comms.foo)}} </view>
// <!-- 调用 some_comms 模块里面的 bar 函数，且参数为 page/index/index.js 里面的 msg -->
<view> {{some_comms.bar(msg)}} </view>
```

## 注意事项

:::warning

- `<wxs>` 模块只能在定义模块的 WXML 文件中被访问到。使用 `<include>` 或 `<import>` 时，`<wxs>` 模块不会被引入到对应的 WXML 文件中。
- `<template>` 标签中，只能使用定义该 `<template>` 的 WXML 文件中定义的 `<wxs>` 模块。
  :::
