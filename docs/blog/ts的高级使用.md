## 一、类型
## unknown
unknown 指的是不可预先定义的类型，在很多场景下，它可以替代 any 的功能同时保留静态检查的能力。
```ts
const num: number = 10;
(num as unknown as string).split('');  	// 注意，这里和any一样完全可以通过静态检查
```
这个时候 unknown 的作用就跟 any 高度类似了，你可以把它转化成任何类型，不同的地方是，在静态编译的时候，unknown 不能调用任何方法，而 any 可以。
```ts
const foo: unknown = 'string';
foo.substr(1);   	// Error: 静态检查不通过报错
const bar: any = 10;
any.substr(1);		// Pass: any类型相当于放弃了静态检查
```
unknown 的一个使用场景是，避免使用 any 作为函数的参数类型而导致的静态类型检查 bug：
```ts
function test(input: unknown): number {
  if (Array.isArray(input)) {
    return input.length;    // Pass: 这个代码块中，类型守卫已经将input识别为array类型
  }
  return input.length;      // Error: 这里的input还是unknown类型，静态检查报错。如果入参是any，则会放弃检查直接成功，带来报错风险
}
```
## void
在 TS 中，void 和 undefined 功能高度类似，可以在逻辑上避免不小心使用了空指针导致的错误。
```ts
function foo() {}  	// 这个空函数没有返回任何值，返回类型缺省为void
const a = foo();	// 此时a的类型定义为void，你也不能调用a的任何属性方法
```
void 和 undefined 类型最大的区别是，你可以理解为 undefined 是 void 的一个子集，当你对函数返回值并不在意时，使用 void 而不是 undefined。举一个 React 中的实际的例子。
```ts
// Parent.tsx
function Parent(): JSX.Element {
  const getValue = (): number => { return 2 };   	/* 这里函数返回的是number类型 */
  // const getValue = (): string => { return 'str' };	/* 这里函数返回的string类型，同样可以传给子属性 */
  return <Child getValue={getValue} />
}
```
```ts
// Child.tsx
type Props = {
  getValue: () => void;  // 这里的void表示逻辑上不关注具体的返回值类型，number、string、undefined等都可以
}
function Child({ getValue }: Props) => <div>{getValue()}</div>
```
## never
never 是指没法正常结束返回的类型，一个必定会报错或者死循环的函数会返回这样的类型。
```ts
function foo(): never { throw new Error('error message') }  // throw error 返回值是never
function foo(): never { while(true){} }  // 这个死循环的也会无法正常退出
function foo(): never { let count = 1; while(count){ count ++; } }  // Error: 这个无法将返回值定义为never，因为无法在静态编译阶段直接识别出
```
还有就是永远没有相交的类型：
```ts
type human = 'boy' & 'girl' // 这两个单独的字符串类型并不可能相交，故human为never类型
```
不过任何类型联合上 never 类型，还是原来的类型：
```ts
type language = 'ts' | never   // language的类型还是'ts'类型
```
关于 never 有如下特性：
- 在一个函数中调用了返回 never 的函数后，之后的代码都会变成deadcode
```ts
function test() {
  foo();  		// 这里的foo指上面返回never的函数
  console.log(111); 	// Error: 编译器报错，此行代码永远不会执行到
}
```
- 无法把其他类型赋给 never：
```ts
let n: never;
let o: any = {};
n = o;  // Error: 不能把一个非never类型赋值给never类型，包括any
```
## 二、运算符
## 非空断言运算符 !
这个运算符可以用在变量名或者函数名之后，用来强调对应的元素是非 null|undefined 的
```ts
function onClick(callback?: () => void) {
  callback!();		// 参数是可选入参，加了这个感叹号!之后，TS编译不报错
}
```
你可以查看编译后的 ES5 代码，居然没有做任何防空判断。
```ts
function onClick(callback) {
  callback();
}
```
这个符号的场景，特别适用于我们已经明确知道不会返回空值的场景，从而减少冗余的代码判断，如 React 的 Ref。
```ts
function Demo(): JSX.Elememt {
  const divRef = useRef<HTMLDivElement>();
  useEffect(() => {
    divRef.current!.scrollIntoView();	 // 当组件Mount后才会触发useEffect，故current一定是有值的
  }, []);
  return <div ref={divRef}>Demo</div>
}
```
## 可选链运算符 ?.
相比上面!作用于编译阶段的非空判断，?.这个是开发者最需要的运行时(当然编译时也有效)的非空判断。
```ts
obj?.prop    obj?.[index]    func?.(args)
```
?.用来判断左侧的表达式是否是 null | undefined，如果是则会停止表达式运行，可以减少我们大量的&&运算。

比如我们写出a?.b时，编译器会自动生成如下代码
```ts
a === null || a === void 0 ? void 0 : a.b;
```
这里涉及到一个小知识点:undefined这个值在非严格模式下会被重新赋值，使用void 0必定返回真正的 undefined。
## 空值合并运算符 ??
??与||的功能是相似的，区别在于 ??在左侧表达式结果为 null 或者 undefined 时，才会返回右侧表达式 。

比如我们书写了let b = a ?? 10，生成的代码如下：
```ts
let b = a !== null && a !== void 0 ? a : 10;
```
而 || 表达式，大家知道的，则对 false、''、NaN、0 等逻辑空值也会生效，不适于我们做对参数的合并。
## 数字分隔符_
```ts
let num:number = 1_2_345.6_78_9
```
_可以用来对长数字做任意的分隔，主要设计是为了便于数字的阅读，编译出来的代码是没有下划线的，请放心食用。
## 三、操作符
## 键值获取 keyof
keyof 可以获取一个类型所有键值，返回一个联合类型，如下：
```ts
type Person = {
  name: string;
  age: number;
}
type PersonKey = keyof Person;  // PersonKey得到的类型为 'name' | 'age'
```
keyof 的一个典型用途是限制访问对象的 key 合法化，因为 any 做索引是不被接受的。
```ts
function getValue (p: Person, k: keyof Person) {
  return p[k];  // 如果k不如此定义，则无法以p[k]的代码格式通过编译
}
```
总结起来 keyof 的语法格式如下
```ts
类型 = keyof 类型
```
## 实例类型获取 typeof
typeof 是获取一个对象/实例的类型，如下：
```ts
const me: Person = { name: 'gzx', age: 16 };
type P = typeof me;  // { name: string, age: number | undefined }
const you: typeof me = { name: 'mabaoguo', age: 69 }  // 可以通过编译
```
typeof 只能用在具体的对象上，这与 js 中的 typeof 是一致的，并且它会根据左侧值自动决定应该执行哪种行为。
```ts
const typestr = typeof me;   // typestr的值为"object"
```
typeof 可以和 keyof 一起使用(因为 typeof 是返回一个类型嘛)，如下：
```ts
type PersonKey = keyof typeof me;   // 'name' | 'age'
```
总结起来 typeof 的语法格式如下
```
类型 = typeof 实例对象
```
## 遍历属性 in
in 只能用在类型的定义中，可以对枚举类型进行遍历，如下：
```ts
// 这个类型可以将任何类型的键值转化成number类型
type TypeToNumber<T> = {
  [key in keyof T]: number
}
```
keyof返回泛型 T 的所有键枚举类型，key是自定义的任何变量名，中间用in链接，外围用[]包裹起来(这个是固定搭配)，冒号右侧number将所有的key定义为number类型。
于是可以这样使用了：
```ts
const obj: TypeToNumber<Person> = { name: 10, age: 10 }
```
总结起来 in 的语法格式如下：
```
[ 自定义变量名 in 枚举类型 ]: 类型
```
## 四、TypeScript 装饰器
##  装饰器是什么
- 它是一个表达式
- 该表达式被执行后，返回一个函数
- 函数的入参分别为 target、name 和 descriptor
- 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
## 装饰器的分类
- 类装饰器（Class decorators）
- 属性装饰器（Property decorators）
- 方法装饰器（Method decorators）
- 参数装饰器（Parameter decorators）
::: warning
需要注意的是，若要启用实验性的装饰器特性，你必须在命令行或 tsconfig.json 里启用 experimentalDecorators 编译器选项：
### 命令行：
```ts
tsc --target ES5 --experimentalDecorators
```
### tsconfig.json：
```json
{
  "compilerOptions": {
     "target": "ES5",
     "experimentalDecorators": true
   }
}
```
:::
## 类装饰器
类装饰器声明：
```ts
declare type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
```
类装饰器顾名思义，就是用来装饰类的。它接收一个参数：
- target: TFunction - 被装饰的类
看完第一眼后，是不是感觉都不好了。没事，我们马上来个例子：
```ts
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log("Hello Semlinker!");
  };
}

@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello Semlinker!';
```
上面的例子中，我们定义了 Greeter 类装饰器，同时我们使用了 @Greeter 语法糖，来使用装饰器。
:::info
友情提示：读者可以直接复制上面的代码，在 TypeScript Playground 中运行查看结果。
:::
有的读者可能想问，例子中总是输出 Hello Semlinker! ，能自定义输出的问候语么 ？这个问题很好，答案是可以的。

具体实现如下：
```ts
function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}

@Greeter("Hello TS!")
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello TS!';
```
## 属性装饰器
属性装饰器声明：
```ts
declare type PropertyDecorator = (target:Object, 
  propertyKey: string | symbol ) => void;
```
属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：

- target: Object - 被装饰的类
- propertyKey: string | symbol - 被装饰类的属性名
趁热打铁，马上来个例子热热身：
```ts
function logProperty(target: any, key: string) {
  delete target[key];

  const backingField = "_" + key;

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  });

  // property getter
  const getter = function (this: any) {
    const currVal = this[backingField];
    console.log(`Get: ${key} => ${currVal}`);
    return currVal;
  };

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`);
    this[backingField] = newVal;
  };

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person { 
  @logProperty
  public name: string;

  constructor(name : string) { 
    this.name = name;
  }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";
```
以上代码我们定义了一个 logProperty 函数，来跟踪用户对属性的操作，当代码成功运行后，在控制台会输出以下结果：
```ts
Set: name => semlinker
Set: name => kakuqo
```
## 方法装饰器
方法装饰器声明：
```ts
declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol, 	 	
  descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
```
方法装饰器顾名思义，用来装饰类的方法。它接收三个参数：

- target: Object - 被装饰的类
- propertyKey: string | symbol - 方法名
- descriptor: TypePropertyDescript - 属性描述符
废话不多说，直接上例子：
```ts
function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log("wrapped function: before invoking " + propertyKey);
    let result = originalMethod.apply(this, args);
    console.log("wrapped function: after invoking " + propertyKey);
    return result;
  };
}

class Task {
  @log
  runTask(arg: any): any {
    console.log("runTask invoked, args: " + arg);
    return "finished";
  }
}

let task = new Task();
let result = task.runTask("learn ts");
console.log("result: " + result);
```
以上代码成功运行后，控制台会输出以下结果：
```
"wrapped function: before invoking runTask" 
"runTask invoked, args: learn ts" 
"wrapped function: after invoking runTask" 
"result: finished" 
```
## 参数装饰器
参数装饰器声明：
```ts
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, 
  parameterIndex: number ) => void
```
参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数：

- target: Object - 被装饰的类
- propertyKey: string | symbol - 方法名
- parameterIndex: number - 方法中参数的索引值
```ts
function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
	been decorated`);
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
	this.greeting = phrase; 
  }
}
```
以上代码成功运行后，控制台会输出以下结果：
```
"The parameter in position 0 at Greeter has been decorated" 
```
## 五、编译上下文
## tsconfig.json 的作用
- 用于标识 TypeScript 项目的根路径；
- 用于配置 TypeScript 编译器；
- 用于指定编译的文件。
## tsconfig.json 重要字段
- files - 设置要编译的文件的名称；
- include - 设置需要进行编译的文件，支持路径模式匹配；
- exclude - 设置无需进行编译的文件，支持路径模式匹配；
- compilerOptions - 设置与编译流程相关的选项。
## compilerOptions 选项
compilerOptions 支持很多选项，常见的有 baseUrl、 target、baseUrl、 moduleResolution 和 lib 等。

compilerOptions 每个选项的详细说明如下：
```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```