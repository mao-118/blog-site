# TS中的兼容性

## 自动类型推论

- 根据初始值进行类型推论

  不用明确告诉编译器具体是什么类型, 编译器就知道是什么类型

  根据初始化值自动推断

  **注意点：**  如果是先定义在初始化, 那么是无法自动推断的

- 上下文类型推论

  TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时

```typescript

// 最佳类型推断
// 等价于 let uanme: string = "陈乔恩";
let uname = "陈乔恩"; 
uname = "徐璐"
// uname = 123;  // 报错
// uname = true; // 报错

let uage;
uage = 123;
uage = true;

// 等价于 let x: (number | null)[] = [0, 1, null];
let x = [0, 1, null];
// x = [18, 28, 38, null, true];


// 上下文类型推断
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);
};
 
```

## 对象类型兼容性

- 可多不可少
- 会进行递归检查

```typescript

// 对象类型赋值给接口类型
// 注意点: 可多不可少
interface INameTest {
  name: string;
}

let n1 = {name: "祝绪丹"};
let n2 = {name: "江疏影", age: 18};
let n3 = {age: 18};

let val: INameTest;
val = n1;
val = n2;
// val = n3;



// 注意点: 必须一一对应，会进行递归检查
interface ITestInfo {
  name:string;
  children:{
      age:number
  };
}

let p1 = {name:'吴宣仪', children:{age:18}};
let p2 = {name:'陈小纭',children:{age:true}};

let t:ITestInfo;
t = p1;
// t = p2; 
```

## 函数类型兼容性

- 参数个数
- 参数类型
- 参数返回值
- 双向协变
- 函数重载
- 可选参数及剩余参数

```typescript
// 参数个数
// 注意点: 可少不可多
/*
let func1 = (a:number, b:number) => {};
let func2 = (x:number) => {};
func1 = func2;
func2 = func1; 
*/



// 参数类型
// 注意点: 参数类型必须相同
/*
let func1 = (x:number)=>{};
let func2 = (x:number)=>{};
let func3 = (x:string)=>{};
func1 = func2;
func2 = func1;
func1 = func3; 
func3 = func1;
*/

// 返回值类型
// 注意点: 返回值类型必须相同
/*
let func1 = ():number=> 18;
let func2 = ():number=> 28;
let func3 = ():string=> 'TS真好玩';
func1 = func2;
func2 = func1;
func1 = func3; 
func3 = func1;
*/


// 函数双向协变
// 1.参数的双向协变
/*
let func1 = (x:(number | string)) =>{};
let func2 = (x:number) =>{};
func1 = func2;
func2 = func1;
*/

// 2.返回值双向协变
// 不能将返回值是联合类型的赋值给具体类型的
// 可以将返回值是具体类型的赋值给联合类型的
/*
let func1 = (x:boolean):(number | string) => x ? 18 : '张含韵';
let func2 = (x:boolean):number => 28;
// func1 = func2; 
func2 = func1;
*/ 


// 函数重载
// 不能将重载少的赋值给重载多的
// 可以将重载多的赋值给重载少
/*
function add(x:number, y:number):number;
function add(x:string, y:string):string;
function add(x, y) {
    return x + y;
}

function sub(x:number, y:number):number;
function sub(x, y) {
    return x - y;
}

// let fn = add;
// fn = sub; 

let fn = sub;
fn = add; 
*/

// 可选参数及剩余参数
// 当一个函数有剩余参数时，它被当做无限个可选参数
function func(args: any[], callback: (...args: any[]) => void) {
}

func([1, 2], (x, y, z) => console.log(x + ', ' + y + z));
func([1, 2], (x?, y?) => console.log(x + ', ' + y));
func([1, 2], (x, y?, z?) => console.log(x + ', ' + y));
```

## 枚举类型知识点补充

TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举

- 数字枚举

  > 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果
  >
  > 2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增
  >
  > 3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化

- 字符串枚举

  >1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值
  >
  >2.采用[index]的形式不能获取到内容,需要传入[key]
  >
  >3.字符串枚举不能使用常量或者计算结果给枚举值赋值
  >
  >4.它可以使用内部的其它枚举值来赋值

- 异构枚举：枚举中既包含数字又包含字符串, 我们就称之为异构枚举

  	> 1.如果是字符串枚举, 那么无法通过原始值获取到枚举值

- 把枚举成员当做类型来使用

```typescript

// TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举
// 1.数字枚举
// 默认情况下就是数字枚举
// 注意点: 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果
//        2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增
//        3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化

// enum Gender{
//     Male,
//     Female
// }
// console.log(Gender.Male);
// console.log(Gender.Female);
// console.log(Gender[0]);


// const val = 100;
// const num = () => 200;
// enum Gender{
//   // Male = 1,
//   // Female

//   Male = val,
//   Female = num()
// }


// 2.字符串枚举
// 注意点: 1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值
//        2.采用[index]的形式不能获取到内容,需要传入[key]
//        3.字符串枚举不能使用常量或者计算结果给枚举值赋值
//        4.它可以使用内部的其它枚举值来赋值
// enum Direction {
//   up = "UP",
//   down = "DOWN"
// }
// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction[0]); // undefined
// console.log(Direction["up"]); // UP

// const val = "金晨";
// const res = () => "王鸥";
// enum User {
//   // a = val,
//   // b = res()
//    c = "HTML",
//    d = c
// }


// 3.异构枚举
// 枚举中既包含数字又包含字符串, 我们就称之为异构枚举
// 注意点: 如果是字符串枚举, 那么无法通过原始值获取到枚举值
// enum Gender{
//   Male = 1,
//   Female = '女'
// }

// console.log(Gender.Male);
// console.log(Gender.Female);
// console.log(Gender[1]);
// console.log(Gender['女']);


// 4.把枚举成员当做类型来使用
enum Gender{
  Male ,
  Female
}
interface ITestInterface {
  age: Gender // age: (Gender.Male | Gender.Female)
}
class Person implements ITestInterface{
  // age: Gender.Male
  age: Gender.Female
}

```

## 枚举类型兼容性

- 数字枚举与数字兼容
- 数字枚举与数字枚举不兼容
- 字符串枚举与字符串不兼容

```typescript

// 数字枚举与数字兼容
/*
enum Gender{
    Male,
    Female
}
let value:Gender;
value = Gender.Male;
value = 100;
 */

// 数字枚举与数字枚举不兼容
/*
enum Gender{
    Male, // 0
    Female // 1
}
enum Animal{
    Dog, // 0
    Cat // 1
}
let value:Gender;
value = Gender.Male;
value = Animal.Dog; // 报错
*/

// 字符串枚举与字符串不兼容

// enum Gender{
//     Male = '张若昀',
//     Female  = '唐艺昕'
// }
// let value:Gender;
// value = Gender.Male;
// value = Gender.Female;
// value = "娃嘻嘻"
```

## 类的兼容性

类的工作方式与对象字面类型和接口类似，但有一个例外：它们同时具有静态和实例类型。当比较一个
类类型的两个对象时，只有实例的成员被比较。静态成员和构造函数不影响兼容性。

一个类中的私有成员和保护成员会影响其兼容性。当一个类的实例被检查兼容性时，如果目标类型包含
一个私有成员，那么源类型也必须包含一个源自同一类的私有成员。同样地，这也适用于有保护成员的
实例。这允许一个类与它的超类进行赋值兼容，但不允许与来自不同继承层次的类进行赋值兼容，否则
就会有相同的形状。

- `public`: 可多不可少
- `private / protected`: 不能互相赋值

```typescript

// public
/*
class Animal {
  feet: number;
  age: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}

// 可多不可少
let a: Animal;
let s: Size;
s = a; // 正确
a = s; // 错误
*/


// private / protected
/*
class Animal {
  private feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  private feet: number;
  constructor(numFeet: number) {}
}

let a: Animal;
let s: Size;
s = a; // 错误
a = s; // 错误
*/
```

## 泛型的兼容性

```typescript
// 因为TypeScript是一个结构化的类型系统，类型参数只在作为成员类型的一部分被消耗时影响到结果类型。
/*
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
x = y; // 正确，因为y符合x的结构
*/


// 在上面， x 和 y 是兼容的，因为它们的结构没有以区分的方式使用类型参数。通过给 Empty<T> 增加一
// 个成员来改变这个例子，显示了这是如何工作的
/*
interface NotEmpty<T> {
   data: T;
 }
 let x: NotEmpty<number>;
 let y: NotEmpty<string>;
 x = y; // 错误，因为x和y不兼容
 */
```


