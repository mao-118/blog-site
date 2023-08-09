# js 简写技巧

分享一些自己常用的 js 简写技巧，长期更新，会着重挑选一些实用的简写技巧，使自己的代码更简洁优雅~

> 这里只会收集一些大多数人不知道的用法，但是确实能提高自己的编码技巧，像 ES6 那些基础的简写语法或者是三目运算符代替`if else`那些我觉得是基础，没必要写在这里浪费精力。

## If-Else 用 || 或 ?? 运算符进行简化

逻辑或操作符`||`，这里要注意的是`0`和`''`也会认为是 false

如果`||`前面的值是`0 '' false null undefined NaN`其中的任意一种，则直接返回`||`后面的值

```js
function(obj){
  var a = obj || {}
}
// 等价于 =>>
function(obj){
  var a;
  if(
    obj === 0 ||
    obj === "" ||
    obj === false ||
    obj === null ||
    obj === undefined ||
    isNaN(obj)
  ){
     a = {}
   } else {
     a = obj;
  }
}

```

空值合并操作符`??`如果没有定义左侧返回右侧。如果是，则返回左侧。

这种方法非常实用，有时候仅仅只是想判断一个字段有没有值，而不是把空字符串或者 0 也当做 false 处理

```js
function(obj){
  var a = obj ?? {}
}
// 等价于 =>>
function(obj){
  var a;
  if(
    obj === null ||
    obj === undefined
  ){
     a = {}
   } else {
     a = obj;
  }
}

```

输入框非空的判断（有时候不想把 0 当成 false 可以用此方法。比如分数 0 也是个值，这种情况就不能认为是 false）

```js
if (value !== null && value !== undefined && value !== "") {
}
// 等价于 ==>
if ((value ?? "") !== "") {
}
```

## includes 的正确使用姿势

在上面逻辑或操作符`||`代码段里有一个 if 判断比较长，这时候就可以用`includes`去简化代码

```js
if (
  obj === 0 ||
  obj === "" ||
  obj === false ||
  obj === null ||
  obj === undefined
) {
  // ...
}
// 使用includes简化
if ([0, "", false, null, undefined].includes(obj)) {
  // ...
}
```

## 防止崩溃的可选链(?.)

可选链操作符`?.`  如果访问未定义的属性，则会产生错误。这就是可选链的用武之地。 在未定义属性时使用可选链运算符，undefined 将返回而不是错误。这可以防止你的代码崩溃。

```js
const student = {
  name: "lwl",
  address: {
    state: "New York",
  },
};
// 一层一层判断
console.log(student && student.address && student.address.ZIPCode); // 输出：undefined
// 使用可选链操作符
console.log(student?.address?.ZIPCode); // 输出：undefined
```

可选链运算符也可以用于方法调用。如果方法存在，它将被调用，否则将返回  `undefined`。例如：

```js
const obj = {
  foo() {
    console.log("Hello from foo!");
  },
};
obj.foo?.(); // 输出：'Hello from foo!'
obj.bar?.(); // 输出：undefined，因为 bar 方法不存在
```

同样，数组也可以使用。例如：

```js
const arr = [1, 2, 3, 4];
console.log(arr[0]); // 输出：1
console.log(arr[4]); // 输出：undefined
// 使用可选链运算符
console.log(arr?.[0]); // 输出：1
console.log(arr?.[4]); // 输出：undefined
console.log(arr?.[0]?.toString()); // 输出：'1'
```

## 逻辑空赋值(??=)

逻辑空赋值`??=`  逻辑空赋值运算符`(x ??= y)`仅在 x 是 nullish (null 或 undefined) 时对其赋值。

```js
const a = { duration: 50 };
a.duration ??= 10;
console.log(a.duration);
// expected output: 50
a.speed ??= 25;
console.log(a.speed);
// expected output: 25
```

## 快速生成 1-10 的数组

生成 0-9，利用了数组的下标值

```js
// 方法一
const arr1 = [...new Array(10).keys()];
// 方法二
const arr2 = Array.from(Array(10), (v, k) => k);
```

生成 1-10，通过 map 的特性

```js
const arr2 = [...Array(10)].map((v, i) => i + 1);
```

## 快速生成 10 个 0 的数组

```js
const arr = new Array(10).fill(0);
```

## 快速生成 10 个`[]`的数组（二维数组）

注意：  二维数组不能直接写成`new Array(10).fill([])`（也就是 fill 方法不能传引用类型的值，`[]`换成`new Array()`也不行）,因为`fill`里传入引用类型值会导致每一个数组都指向同一个地址，改变一个数据的时候其他数据也会随之改变，详见 mdn 官方说明

```js
// 错误写法
const arr = new Array(10).fill([]); // 注意这是错误写法，不要这么写
// 正确写法
const arr = new Array(10).fill().map(() => new Array());
```

## 数组降维

你是否还在用递归给一个多维数组降维？如果是，那你应该知道一下 es6 的  flat()  方法。

如果不确定需要降维的数组有多深，可以传入最大值作为参数`Infinity`，默认值深度为 1

```js
const arr = [1, [2, [3, 4], 5], 6];
const flatArr = arr.flat(Infinity); // 输出 [1, 2, 3, 4, 5, 6]
```

你是否在使用`map`的时候想要对数组降维？大概像这样：

```js
const arr = [1, 2, 3, 4];
const result = arr.map((v) => [v, v * 2]).flat();
console.log(result); // 输出 [1, 2, 2, 4, 3, 6, 4, 8]
```

其实 js 也提供了更简便的方法，那就是 flatMap()，可以改成这样：

```js
const result = arr.flatMap((v) => [v, v * 2]);
```

## 从数组中删除重复项

在 JavaScript 中，Set 是一个集合，它允许你仅存储唯一值。这意味着删除任何重复的值。

因此，要从数组中删除重复项，你可以将其转换为集合，然后再转换回数组。

```js
const numbers = [1, 1, 20, 3, 3, 3, 9, 9];
const uniqueNumbers = [...new Set(numbers)]; // -> [1, 20, 3, 9]
```

它是如何工作的？

1.  `new Set(numbers)`从数字列表中创建一个集合。创建集合会自动删除所有重复值。
2.  展开运算符`...`将任何可迭代对象转换为数组。这意味着将集合转换回数组。`[...new Set(numbers)]`

## 在没有第三个变量的情况下交换两个变量

在 JavaScript 中，你可以使用解构从数组中拆分值。这可以应用于交换两个变量而无需第三个

比较简单，es6 语法

```js
let x = 1;
let y = 2;
// 交换变量
[x, y] = [y, x];
```

## 将对象的值收集到数组中

用于`Object.values()`将对象的所有值收集到一个新数组中

```js
const info = { name: "Matt", country: "Finland", age: 35 };
// LONGER FORM
let data = [];
for (let key in info) {
  data.push(info[key]);
}
// SHORTHAND
const data = Object.values(info);
```

## 指数运算符（用的不多）

你`Math.pow()`习惯把一个数字提高到一个幂吗？你知道你也可以使用`**`运算符吗？

虽然可以简写，不过我还是建议写成`Math.pow()`方法，代码更有语义化。

注意：`**`运算符要求操作数为数值类型，不过在 js 里也能正常运行。

```js
Math.pow(2, 3); // 输出: 8
2 ** 3; // 输出: 8
Math.pow(4, 0.5); // 输出: 2
4 ** 0.5; // 输出: 2
Math.pow(3, -2); // 输出: 0.1111111111111111
3 ** -2; // 输出: 0.1111111111111111
Math.pow("2", "3"); // 输出: 8 (参数被自动转换为数字)
"2" ** "3"; // js中输出: 8，其他语言可能报错
```

## Math.floor() 简写（用的不多）

向下取整`Math.floor()`并不是什么新鲜事。但是你知道你也可以使用`~~`运算符吗？

同上虽然可以简写，不过我还是建议写成`Math.floor()`方法，代码更有语义化。

注意：对于正数而言两者都是直接去掉小数位，但对于负数来说`Math.floor()`是向下取整，`~~`依然是只去掉小数位，整数位不变。  请看下面输出结果：

```js
Math.floor(3.14); // 输出: 3
Math.floor(5.7); // 输出: 5
Math.floor(-2.5); // 输出: -3
Math.floor(10); // 输出: 10
~~3.14; // 输出: 3
~~5.7; // 输出: 5
~~-2.5; // 输出: -2
~~10; // 输出: 10
```

## 逗号运算符(,)

> 逗号（ `,` ）运算符对它的每个操作数从左到右求值，并返回最后一个操作数的值。这让你可以创建一个复合表达式，其中多个表达式被评估，复合表达式的最终值是其成员表达式中最右边的值。这通常用于为  `for`  循环提供多个参数。

这里只说一下函数 return 的时候用逗号运算符简化代码的技巧，其他用法请直接点击查看官方文档。

举一个简单的例子：

```js
// 简化前
const result = (arr) => {
  arr.push("a");
  return arr;
};
console.log(result([1, 2])); // 输出：[1, 2, 'a']
```

这段代码需要返回修改后的数组，不能直接`return arr.push('a')`，因为`push`的返回值是修改后数组的长度，这时候可以用逗号运算符简化成一行代码。

```js
// 简化后
const result = (arr) => (arr.push("a"), arr);
console.log(result([1, 2])); // 输出：[1, 2, 'a']
```

## Array.map()的简写

比如想要拿到接口返回的特定字段的值，可以用解构赋值和对象的简写方法对 map 方法简写，详细解释请移步 js map 方法应用场景 处理对象数组。

比如接口返回数据，此时如果只想要数据里的`id`和`name`，就可以用下面的简写方式。

```js
// 接口返回数据
res = [
  {
    id: 1,
    name: "zhangsan",
    age: 16,
    gender: 0,
  },
  {
    id: 2,
    name: "lisi",
    age: 20,
    gender: 1,
  },
];
// 第一种方法：箭头函数、 解构赋值
const data = res.map(({ id, name }) => ({ id, name }));
// 第二种方法：箭头函数、返回对象（相对更容易理解）
const data = res.map((v) => ({ id: v.id, name: v.name }));
```
