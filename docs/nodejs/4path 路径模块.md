# 什么是 path 路径模块
path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

例如：
- `path.join()` 方法，用来将多个路径片段拼接成一个完整的路径字符串
- `path.basename()` 方法，用来从路径字符串中，将文件名解析出来
如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它：
```js
const path = require('path')
```
## 路径拼接
使用 `path.join()` 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：
```js
path.join([...paths])
```
参数解读：
- ...paths `<string>` 路径片段的序列
- 返回值: `<string>`
## `path.join()` 的代码示例
使用 `path.join()` 方法，可以把多个路径片段拼接为完整的路径字符串：
```js
const path = require('path')
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr) // 输出 /a/b/d/e
const pathStr2 = path.join(__dirname,'./files/1.txt')
console.log(pathStr2) // 输出 当前文件所处目录/files/1.txt
```
::: warning
今后凡是涉及到路径拼接的操作，都要使用 `path.join()` 方法进行处理。不要直接使用 + 进行字符串的拼接。
:::
## 获取路径中的文件名
使用 `path.basename()` 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：
```js
path.basename(path[,ext])
```
参数解读：
- path `<string>` 必选参数，表示一个路径的字符串
- ext `<string>` 可选参数，表示文件扩展名
- 返回: `<string>` 表示路径中的最后一部分
## `path.basename()` 的代码示例
使用 `path.basename()` 方法，可以从一个文件路径中，获取到文件的名称部分：
```js
const fpath = '/a/b/c/index.html' //文件的存放路径
var fullName = path.basename(fpath)
console.log(fullName) //输出index.html
var nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt) //输出index

```
## 获取路径中的文件扩展名
使用 `path.extname()` 方法，可以获取路径中的扩展名部分，语法格式如下：
```js
path.extname(path)
```
参数解读：
- path `<string>`必选参数，表示一个路径的字符串
- 返回: `<string>` 返回得到的扩展名字符串
## `path.extname()` 的代码示例
使用 `path.extname()` 方法，可以获取路径中的扩展名部分：
```js
const fpath = '/a/b/c/index.html' //路径字符串
const fext = path.extname(fpath)
console.log(fext)//输出.html

```