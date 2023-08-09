# 18 个 Js 优化技巧

## 1 使用箭头函数简化函数定义

```js
// 传统函数定义
function add(a, b) {
  return a + b;
}
// 箭头函数简化
const add = (a, b) => a + b;
```

## 2. 使用解构赋值简化变量声明

```js
// 传统变量声明
const firstName = person.firstName;
const lastName = person.lastName;
// 解构赋值简化
const { firstName, lastName } = person;
```

## 3. 使用模板字面量进行字符串拼接

```js
// 传统字符串拼接
const greeting = "Hello, " + name + "!";
// 模板字面量简化
const greeting = `Hello, ${name}!`;
```

## 4. 使用展开运算符进行数组和对象操作

```js
// 合并数组
const combined = [...array1, ...array2];
// 复制对象
const clone = { ...original };
```

## 5. 使用数组的高阶方法简化循环和数据操作

```js
// 遍历数组并返回新数组
const doubled = numbers.map((num) => num * 2);
// 过滤数组
const evens = numbers.filter((num) => num % 2 === 0);
```

## 6. 使用条件运算符简化条件判断

```js
// 传统条件判断
let message;
if (isSuccess) {
 message = 'Operation successful';
} else {  
 message = 'Operation failed';
}
// 条件运算符简化
const message = isSuccess ? 'Operation successful' : 'Operation failed'; `
```

## 7. 使用对象解构和默认参数简化函数参数

```js
// 传统参数设置默认值
function greet(name) {
  const finalName = name || "Guest";
  console.log(`Hello, ${finalName}!`);
}
// 对象解构和默认参数简化
function greet({ name = "Guest" }) {
  console.log(`Hello, ${name}!`);
}
```

## 8. 使用函数式编程概念如纯函数和函数组合

```js
// 纯函数
function add(a, b) {
  return a + b;
}
// 函数组合
const multiplyByTwo = (value) => value * 2;
const addFive = (value) => value + 5;
const result = addFive(multiplyByTwo(3));
```

## 9. 使用对象字面量简化对象的创建和定义

```js
// 传统对象创建
const person = { firstName: "John", lastName: "Doe", age: 30 };
// 对象字面量简化
const firstName = "John";
const lastName = "Doe";
const age = 30;
const person = { firstName, lastName, age };
```

## 10. 使用适当的命名和注释来提高代码可读性

```js
// 不好的
const x = 10;
// 设置x的值为10
function a(b) {
  return b * 2;
  // 返回b的两倍
}
// 好的
const speed = 10;
// 设置速度为10
function double(value) {
  return value * 2; // 返回输入值的两倍
}
```

## 11. 优雅的写条件判断代码

简单的条件判断逻辑用`if else`  或者 三元运算符, 一眼看过去还能知道说的啥，但是大量的`if else`和叠加在一起的三元运算符就是接盘侠的噩梦~~~

给大家上一个三元运算符叠加的案例，我是真实在项目中遇到过，cpu 直接干爆~~~

```html
<view>
  {{status===1?'成功': status===2 ? '失败' : status===3 ? '进行中' : '未开始' }}
</view>
```

大概是这样的，具体的项目代码不好放在这里，小伙伴们意会就行。

复杂逻辑推荐使用对象 Map 写法，符合人脑的逻辑，可读性高，看着舒服~~~

### 1，普通的 if else

```js
let txt = "";
if (falg) {
  txt = "成功";
} else {
  txt = "失败";
}
```

### 2，三元运算符

```js
let txt = flag ? "成功" : "失败";
```

### 3，多个 if else

```js
// param {status} status 活动状态：1：成功 2：失败 3:进行中 4：未开始
let txt = "";
if (status == 1) {
  txt = "成功";
} else if (status == 2) {
  txt = "失败";
} else if (status == 3) {
  txt = "进行中";
} else {
  txt = "未开始";
}
```

### 4，switch case

```js
let txt = "";
switch (status) {
  case 1:
    txt = "成功";
    break;
  case 2:
    txt = "成功";
    break;
  case 3:
    txt = "进行中";
    break;
  default:
    txt = "未开始";
}
```

### 5，对象写法

```js
const statusMap = { 1: "成功", 2: "失败", 3: "进行中", 4: "未开始" };
//调用直接 statusMapp[status]
```

### 6，Map 写法

```js
const actions = new Map([
  [1, "成功"],
  [2, "失败"],
  [3, "进行中"],
  [4, "未开始"],
]);
// 调用直接 actions.get(status)
```

## 12. 封装条件语句

同上，if 里的条件越多越不利于接盘侠的维护，不利于人脑的理解，一眼看过去又是一堆逻辑。多个逻辑应该`化零为整`。

```js
// 不好的
if (fsm.state === 'fetching' && isEmpty(listNode)) {  
    // ...
}
// 好的
shouldShowSpinner(fsm, listNode){
 return fsm.state === 'fetching' && isEmpty(listNode)
}
if(shouldShowSpinner(fsm, listNode)){
 //...doSomething
}
```

## 13. 函数应该只做一件事

函数式写法推崇`柯里化`, 一个函数一个功能，可拆分可组装。

```js
// 不好的
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
// 好的
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

再来一个栗子

函数要做的事情如下：

- 遍历 clients 数组
- 遍历过程中，通过 lookup 函数得到一个新的对象 clientRecord
- 判断 clientRecord 对象中 isActive 函数返回的是不是 true,
-

- isActive 函数返回 true,执行 email 函数并把当前成员带过去

```js
// 不好的
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
// 好的
function emailClients(clients) {
  clients.filter(isClientRecord).forEach(email);
}
function isClientRecord(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

上面不好的栗子一眼看过去是不是感觉一堆代码在那，一时半会甚至不想去看了。

好的栗子，是不是逻辑很清晰，易读。

- 巧用 filter 函数，把 filter 的回调单开一个函数进行条件处理，返回符合条件的数据
- 符合条件的数据再巧用 forEach，执行 email 函数

## 14. Object.assign 给默认对象赋默认值

```js
// 不好的
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true,
};
function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable === undefined ? config.cancellable : true;
}
createMenu(menuConfig);
// 好的
const menuConfig = {
  title: "Order",
  buttonText: "Send",
  cancellable: true,
};
function createMenu(config) {
  Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true,
    },
    config
  );
}
createMenu(menuConfig);
```

## 15. 函数参数两个以下最好

说一千道一万，就是为了优雅，就是为了可读性好。

```js
// 不好的
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
// 好的
const menuConfig = {
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
};
function createMenu(config) {
  // ...
}
createMenu(menuConfig);
```

## 16. 使用解释性的变量

省流，用了扩展运算符，为了可读性（`saveCityZipCode(city, zipCode)`可读性很好，知道参数是干嘛的）

```js
// 不好的
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);
// 好的
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
cosnt [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode) `
```

### 想对类中的属性进行更多自定义取/增/改的操作时，使用 set/get

第一次见这个写法，不知道是啥意思的小伙伴，把他当成 vue2 中的 defineProperty

```js
Object.defineProperty(data1, "age", {
  set: function (newAge) {
    console.log(this.name + "现在" + newAge + "岁");
  },
  get: function () {
    return 18;
  },
});
```

是一个意思，赋值的时候 set 会被触发，取值的时候 get 会被触发。

巧用自带属性，提升性能。

```
``class BankAccount {  constructor(balance = 1000) {    this._balance = balance;  }  // It doesn't have to be prefixed with `get` or `set` to be a  //getter/setter  set balance(amount) {    console.log('set')    if (verifyIfAmountCanBeSetted(amount)) {      this._balance = amount;    }  }  get balance() {    console.log('get')    return this._balance;  }  verifyIfAmountCanBeSetted(val) {    // ...  } } const bankAccount = new BankAccount(); // Buy shoes... bankAccount.balance -= 100; // Get balance let balance = bankAccount.balance; ``
```

## 17. 让对象拥有私有成员-通过闭包来实现

闭包天生就是做私有化的

```js
// 不好的
const Employee = function (name) {
  this.name = name;
};
Employee.prototype.getName = function getName() {
  return this.name;
};
const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`);
// Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined
// 好的
const Employee = function (name) {
  this.getName = function () {
    return name;
  };
};
const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`);
// Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined
```

第一个示例

优点：

- 通过`原型链共享方法`，节省了内存空间。所有实例对象共享同一个  `getName`  方法，而不是每个实例对象都创建一个独立的方法。

缺点：

- 在构造函数中无法直接定义私有属性或方法，`所有属性和方法都会被暴露在原型链上`。

第二个示例

优点：

- 可以在构造函数内部`定义私有属性和方法`，不会暴露在对象的原型链上，提供了更好的封装性。

缺点：

- 每次创建实例对象时，都会创建一个独立的方法，`每个实例对象都有`自己的  `getName`  方法,占用更多的内存空间。

## 18. 使用方法链

`链式写法`也是代码优雅之道的重头戏。

ps：发明这个的程序员肯定是后端出身的，这种写法在 PHP 的 CI 框架中见过。

```js
// 不好的
class Car {
  constructor() {
    this.make = "Honda";
    this.model = "Accord";
    this.color = "white";
  }
  setMake(make) {
    this.make = make;
  }
  save() {
    console.log(this.make, this.model, this.color);
  }
}
const car = new Car();
car.setMake("Ford");
car.save();
// 好的
class Car {
  constructor() {
    this.make = "Honda";
    this.model = "Accord";
    this.color = "white";
  }
  setMake(make) {
    this.make = make;
    // NOTE: return this是为了用链式写法
    return this;
  }
  save() {
    console.log(this.make, this.model, this.color);
    // NOTE:return this是为了用链式写法
    return this;
  }
}
const car = new Car().setMake("Ford").save();
```

看完上面的这么多栗子，小伙伴的思路是不是清晰了很多，在你们的项目里练练手吧。
