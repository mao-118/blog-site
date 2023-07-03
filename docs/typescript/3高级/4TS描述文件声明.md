# TS描述文件声明

TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

假如我们想使用第三方库，比如 jQuery等等

声明文件以 **.d.ts** 为后缀 如：`hello.d.ts`

声明文件或模块的语法格式如下：`declare module Module_Name { }`

**很多流行的第三方库的声明文件不需要我们定义了**

- https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
- https://www.typescriptlang.org/dt/search?search=
