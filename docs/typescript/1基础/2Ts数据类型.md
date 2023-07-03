# TS中的数据类型

## 基础数据类型 

- number类型： 双精度 64 位浮点值。它可以用来表示整数和分数。

- boolean类型：表示逻辑值：true 和 false。
- string类型：一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式

```ts

// 数值类型 number
let money:number; // 定义了一个名称叫做money的变量, 这个变量中将来只能存储数值类型的数据
money = 20;
// money = "200000"; // 会报错
// 注意点: 其它的用法和JS一样
// money = 0x00;
// money = 0o00;
// money = 0b00;
console.log(money); 

// 布尔类型 boolean
let flag:boolean;
flag = true;
// flag = 1; // 会报错  c语言
console.log(flag);

// 字符串类型 string
let beauty:string;
beauty = "李一桐";
let dream = `我的女神是${beauty},为了她，我想月入${money}k`;
console.log(dream); 

```
总结：
数值，字符串和布尔值是我们开发中最常使用的基础数据类型，与js中的数值，字符串和布尔完全一致，
在ts中我们主要做类型校验使用


## 数组

> 数组：声明变量的一组集合称之为数组。

```typescript

// 数组类型
// 方式一
// 表示定义了一个名称叫做 beautyList 的数组, 这个数组中将来只能够存储字符串类型的数据
let beautyList:string[]; 
beautyList = ['李嘉欣', '王祖贤', '邱淑贞'];
// arr2 = ['李嘉欣', '王祖贤', '邱淑贞', 200000]; // 报错
console.log(beautyList); 

// 方式二
// 表示定义了一个名称叫做 moneyList 的数组, 这个数组中将来只能够存储数值类型的数据
let moneyList:Array<number>;  
moneyList = [10, 30, 500];
// moneyList = ['a', 30, 500]; // 报错
console.log(moneyList);


// 方式三 联合类型
// 表示定义了一个名称叫做 dream 的数组, 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据
let dream:(number | string)[];
dream = [10, 30, 500, "李一桐", "赵露思", "白鹿"];
// dream = [10, 30, 500, "李一桐", "赵露思", "白鹿", false]; // 报错
console.log(dream);


// 方式四 任意类型
// 表示定义了一个名称叫做 arbitrarily 的数组, 这个数组中将来可以存储任意类型的数据
let arbitrarily:any[]; 
arbitrarily = [100, '关之琳', true];
console.log(arbitrarily);

/* 
  数组是我们前端开发过程中，最常用的引用类型之一,在发送请求获取响应时，我们往往会使用到数组类型，
  因此我们务必要掌握好数组的几种定义方式
*/

```

## 元组

- 元祖类型 Tuple
- TS中的元祖类型其实就是数组类型的扩展
- 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同

```ts

// 元祖类型 Tuple
// TS中的元祖类型其实就是数组类型的扩展
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同

// 表示定义了一个名称叫做 tup1 的元祖, 这个元祖中将来可以存储3个元素, 
// 第一个元素必须是字符串类型, 第二个元素必须是数字类型, 第三个元素必须是布尔类型
let tup1:[string, number, boolean]; 
tup1 = ['宋祖儿', 100, false];
// tup1 = ['宋祖儿', 100, true, 200]; // 超过指定的长度会报错
// tup1 = [100,"宋祖儿", true];
// tup1 = ['杨超越', 100, true];
console.log(tup1); 

/* 
  总结:
  定义: ['', '', ...]
  作用:元祖用于保存定长定数据类型的数据
*/
```

## any与void

- any:  表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any

- void:  当一个函数没有返回值时，你通常会见到其返回值类型是 void

```ts

// any类型
// any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any
// 在TS中任何数据类型的值都可以负责给any类型

// 使用场景一
// 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
let salary: any = 1800;    // 数字类型
salary = 'my salary is 18k';    // 字符串类型
salary = false;    // 布尔类型

// 使用场景二
// 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let x: any = 4;
x.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
x.toFixed();    // 正确 

// 使用场景三
// 定义存储各种类型数据的数组时
let beautyList: any[] = [1, false, 'fine'];
beautyList[1] = 100;

// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 在TS中只有null和undefined可以赋值给void类型
function makeMoney(): void {
  console.log("I want to make much money and marry a wife!!!");
  // return "100K beauty" // 报错
}

makeMoney()

let value:void; 
// 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined
// value = 100; // 报错
// value = "杨紫";// 报错
// value = true;// 报错
// 注意点: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型
// 严格模式下会null报错
// value = null; // 不会报错  
value = undefined;// 不会报错
```

## null与undefined

- TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大
- 非严格模式下，可以把 null和undefined赋值给number类型的变量。

```typescript

// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
// 和 void相似，它们的本身的类型用处不是很大

let x: undefined = undefined;
let y: null = null;

let money:number = 100;


// 非严格模式下，可以把 null和undefined赋值给number类型的变量。
money = y;
money = x;

```

## never与object

> **never类型**: 
>
> 表示的是那些永不存在的值的类型;
>
> never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型; 
>
> 变量也可能是 never类型，当它们被永不为真的类型保护所约束



> **object类型**：
>
> `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型
>
> 定义了一个只能保存对象的变量
>
> 我们后面更常用的是 `接口` 与 `类型别名`



```typescript
// Never类型
// never类型表示的是那些永不存在的值的类型
// 例如: never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
//      变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// 注意点:never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
//  即使 any也不可以赋值给never

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

error("鞠婧祎");

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}


// Object类型
// 表示一个对象
// 定义了一个只能保存对象的变量
let goddess:object; 
// goddess = 1;
// goddess = "123";
// goddess = true;
goddess = {name:'白鹿', age:27};
console.log(goddess);
```



## 枚举

- `enum`类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```typescript
// 枚举用于表示固定的几个取值
// 例如: 人的性别只能是男或者女

enum Gender{ 
  Male,
  Femal
}

// 定义了一个名称叫做val的变量, 这个变量中只能保存Male或者Femal
let val:Gender; 
val = Gender.Male;
val = Gender.Femal;
// val = 'nan'; // 报错
// val  = false;// 报错


// 注意点: TS中的枚举底层实现的本质其实就是数值类型, 所以赋值一个数值不会报错
val = 666; // 不会报错
console.log(Gender.Male); // 0
console.log(Gender.Femal);// 1

// 注意点: TS中的枚举类型的取值, 默认是从上至下从0开始递增的
//         虽然默认是从0开始递增的, 但是我们也可以手动的指定枚举的取值的值
// 注意点: 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增
enum Gender2{ 
  Male=5,
  Femal
}
console.log(Gender2.Male); // 5
console.log(Gender2.Femal);// 6

// 注意点: 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响
enum Gender3{ 
  Male,
  Femal=10
}
console.log(Gender3.Male); // 0
console.log(Gender3.Femal);// 10

// 注意点: 我们还可以同时修改多个枚举值的取值, 如果同时修改了多个, 那么修改的是什么最后就是什么
enum Gender4{ 
  Male=100,
  Femal=200
}
console.log(Gender4.Male); // 100
console.log(Gender4.Femal);// 200

// 我们可以通过枚举值拿到它对应的数字
console.log(Gender.Male); // 0
// 我们还可以通过它对应的数据拿到它的枚举值
console.log(Gender[0]); // Male

```
## bight与symbol

```typescript

// bight类型: 表示非常大的数
// symbol类型: 表示全局唯一引用
// ES2020可用

// const Hundred1: bigint = BigInt(100)
// const Hundred2: bigint = 100n

// const firstName = Symbol("name")
// const secondName = Symbol("name")

// if (firstName === secondName) {
//   console.log('ok')
// }
```


## 变量声明与解构

- 与js中完全一致，我们简单复习一下解构
- ‘数组解构与对象解构

```typescript
// 变量声明的方式
// var | let | const

// 数组解构
let goddess = ["邱淑贞", "赵雅芝"];
let [first, second] = goddess;
console.log(first); // 邱淑贞
console.log(second); // 李紫婷



let [third, ...rest] = ["赵今麦", "蒋依依", "欧阳娜娜", "李庚希"];
console.log(third); //  赵今麦
console.log(rest); // ["蒋依依", "欧阳娜娜", "李庚希"];


let [, fourth, , fifth] = [1, 2, 3, 4];
console.log(fourth); // 2
console.log(fifth); // 4



// 对象解构
let beauty  = {
  uname: "杨超越",
  age: 20,
  sex: "女",
}

let { uname, age} = beauty;
console.log(uname);
console.log(age);

```

## 类型断言

- 什么是类型断言?

   类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

   通俗的说就是我相信我自己在定义什么类型

- 语法格式

  `<类型>值`

  `值 as 类型`

```typescript
/*
  1.什么是类型断言?

  类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
  通俗的说就是我相信我自己在定义什么类型

  2.语法格式
    2.1 <类型>值
    2.2 值 as 类型
*/

let str = "世界上最遥远的距离就是,你是if而我是else, 似乎一直相伴但又永远相离";

// 方式一
// let len = (<string>str).length;
// console.log(len);


// 方式二
// let len = (str as string).length;
// console.log(len);



// function TypeAs(x: number | string){
//   console.log(x.length);
  
// }

// TypeAs("世界上最痴心的等待,是我当case你当switch,或许永远都选不上自己")


function TypeAs(x: number | string){
  let len = (x as string).length;
  // let len = (<string>x).length;
  console.log(len);
  
}
TypeAs("世界上最痴心的等待,是我当case而你当switch,或许永远都选不上自己")

```

## type别名

- 类型别名就是给一个类型起个新名字, 但是它们都代表同一个类型

例如: 你的女神叫邱淑贞, 她的外号叫女神, 女神就是邱淑贞的别名, 邱淑贞和女神都表示同一个人

```typescript

// 第一种
type beautys = "邱淑贞" | "赵雅芝" | "王祖贤" | "朱茵"
let one:beautys;

one = "邱淑贞";
// one = 100 // 报错


// 第二种
type myfun = (a:number, b:number) => number;

let fun:myfun = (a:number, b:number) => a + b;
fun(10, 20);


// 第三种
type myGoddass = {
  name: string,
  age: number,
  sex: string,
  actor?: boolean
}

let shuzhen:myGoddass = {
  name: "邱淑贞",
  age: 18,
  sex: "女"
}

```