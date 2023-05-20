# 什么是 fs 文件系统模块
fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：
- `fs.readFile()` 方法，用来读取指定文件中的内容
- `fs.writeFile()` 方法，用来向指定的文件中写入内容
如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：
```js
const fs = require('fs')
```
## 读取指定文件中的内容
使用 `fs.readFile()` 方法，可以读取指定文件中的内容，语法格式如下：
```js
fs.readFile(path[,options],callback)
```
参数解读：
- 参数1：必选参数，字符串，表示文件的路径。
- 参数2：可选参数，表示以什么编码格式来读取文件。
- 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
## `fs.readFile()` 的示例代码
以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：
```js
const fs = require('fs')
fs.readFile('./files/11.txt','utf8',function(err,dataStr){
    console.log(err)
    console.log('-----')
    console.log(dataStr)
})
```
## 判断文件是否读取成功
可以判断 err 对象是否为 null，从而知晓文件读取的结果：
```js
const fs = require('fs')
fs.readFile('./files/11.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败：'+err.message)
    }
    console.log('文件读取成功，内容是：'+dataStr)
})
```
## 向指定的文件中写入内容
使用 `fs.writeFile()` 方法，可以向指定的文件中写入内容，语法格式如下：
```js
fs.writeFile(file,data[,options],callback)
```
参数解读：
- 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
- 参数2：必选参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数4：必选参数，文件写入完成后的回调函数。
## `fs.writeFile()` 的示例代码
向指定的文件路径中，写入文件内容：
```js
const fs = require('fs')
fs.writeFile('./files/2.txt','hello nodejs!',function(err){
    console.log(err)
})
```
## 判断文件是否写入成功
可以判断 err 对象是否为 null，从而知晓文件写入的结果：
```js
const fs = require('fs')
fs.writeFile('./files/2.txt','hello nodejs!',function(err){
    if(err){
        return console.log('文件写入失败：'+err.message)
    }
    console.log('文件写入成功')
})
```
## fs 模块 - 路径动态拼接的问题
- 在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。
- 原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。
- 解决方案：在使用 fs 模块操作文件时，直接提供完整的路径，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。
```js
const fs = require('fs')
// __dirname 表示当前文件所处的目录
fs.readFile(__dirname + '/files/11.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败：'+err.message)
    }
    console.log('文件读取成功，内容是：'+dataStr)
})
```