# 什么是 http 模块
回顾：什么是客户端、什么是服务器？

在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器。

http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，

就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

如果要希望使用 http 模块创建 Web 服务器，则需要先导入它：
```js
const http = require('http')
```
## 进一步理解 http 模块的作用
服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件，例如：IIS、Apache 等。通过安装这些服务器软件，就能把一台普通的电脑变成一台 web 服务器。

在 Node.js 中，我们不需要使用 IIS、Apache 等这些第三方 web 服务器软件。因为我们可以基于 Node.js 提供的http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 web 服务。
## 服务器相关的概念
## 1. IP 地址
IP 地址就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP地
址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

IP 地址的格式：通常用“点分十进制”表示成（a.b.c.d）的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。例如：用
点分十进表示的 IP地址（192.168.1.1）
::: warning
- 互联网中每台 Web 服务器，都有自己的 IP 地址，例如：大家可以在 Windows 的终端中运行 ping www.baidu.com 命
令，即可查看到百度服务器的 IP 地址。
- 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个
IP 地址，就能把自己的电脑当做一台服务器进行访问了
:::
## 2. 域名和域名服务器
尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套
字符型的地址方案，即所谓的域名（Domain Name）地址。

IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器(DNS，Domain name server)的电脑中。使用者
只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供 IP 地址和域名
之间的转换服务的服务器。
:::warning
- 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
- 在开发测试期间， 127.0.0.1 对应的域名是 localhost，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。
:::
## 3. 端口号
计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖
送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的
网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理。
:::warning
- 每个端口号不能同时被多个 web 服务占用。
- 在实际应用中，URL 中的 80 端口可以被省略。
:::
## 创建最基本的 web 服务器
## 1. 创建 web 服务器的基本步骤
- 导入 http 模块
- 创建 web 服务器实例
- 为服务器实例绑定 request 事件，监听客户端的请求
- 启动服务器

## 2.导入 http 模块
如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块：
```js
const http = require('http')
```
## 3.创建 web 服务器实例
调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：
```js
const http = require('http')
const server = http.createServer()
```
## 4.为服务器实例绑定 request 事件，监听客户端的请求
为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：
```js
// 使用服务器实例的on方法，为服务器绑定一个request事件
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    // 只要有客户端来请求我们的服务器，就会触发request事件
    console.log('someone visit our web server')
})
```
## 5.启动服务器
调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：
```js
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1:80')
})
```
## req 请求对象
只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。

如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：
```js
server.on('request',(req)=>{
    //req是请求对象，它包含了与客户端相关的数据和属性，例如：
    // req.url是客户端请求的URL地址
    // req.method是客户端请求方式
    console.log(req.url,req.method)
})
```
## res 响应对象
在服务器的 request 事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：
```js
server.on('request',(req,res)=>{
    //res是响应对象，它包含了与服务器相关的数据和属性，例如：
    // 要发送到客户端的字符串
    res.end('服务器返回的字符串')
})
```
## 解决中文乱码问题
当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：
```js
server.on('request',(req,res)=>{
    //发送的内容包含中文，可能发生乱码
    //设置响应头
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('服务器返回的字符串')
})
```
## 根据不同的 url 响应不同的 html 内容
核心实现步骤:
- 获取请求的 url 地址
- 设置默认的响应内容为 404 Not found
- 判断用户请求的是否为 / 或 /index.html 首页
- 判断用户请求的是否为 /about.html 关于页面
- 设置 Content-Type 响应头，防止中文乱码
- 使用 res.end() 把内容响应给客户端
代码例子：
```js
server.on('request',(req,res)=>{
    const url = req.url
    let content = '<h1>404 Not Found!</h1>'
    if(url==='/'||url==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url==='/about.html'){
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
})

```