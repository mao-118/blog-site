# 什么是SVN
- SVN全称SubVersion
- SVN是近年来崛起的版本管理工具，是CVS的接班人。目前，绝大多数软件公司都使用SVN作为代码版本管理软件。
## 特点
- 操作简单，入门容易
- 支持跨平台（Window/Linux/MacOS)
- 支持版本回退功能（时间机器）

## 获取SVN软件
属于C/S结构软件（客户端与服务器端）

服务端软件：[VisualSVN](./static/VisualSVN-Server-2.7.7.msi)

客户端软件：TortoiseSVN

[win64](./static/TortoiseSVN-1.8.10.26129-x64-svn-1.8.11.msi)

[win64中文包](./static/LanguagePack_1.8.10.26129-x64-zh_CN.msi)

[win32](./static/TortoiseSVN-1.8.10.26129-win32-svn-1.8.11.msi)

[win32中文包](./static/LanguagePack_1.8.10.26129-win32-zh_CN.msi)

点击下一步直至安装结束即可。

## 服务端配置
## 一、创建版本仓库
1. 首先在SVN服务器端创建一个公有目录WebApp做为项目目录

2. 在WebApp目录下创建Shop文件夹，做为Shop（版本仓库）
![](./static/images/1.png)

3. 创建版本仓库，基本语法：

svnadmin create Shop 文件夹路径（Shop仓库）
![](./static/images/2.png)

如果Shop仓库配置成功，那么Shop文件夹会显示以下目录结构
![](./static/images/3.png)

## 二、启动服务端
Apachehttp://localhost或(ip地址)访问到htdocs目录下的相关文件（监管）

SVNsvn://localhost或(ip地址)访问到相关数据仓库（如Shop仓库）

基本语法：
svnserve  -d（后台运行）  -r（监管目录） 版本仓库目录
![](./static/images/4.png)
通过以上指令，我们的svn://localhost或ip地址就可以直接指向Shop版本仓库
## 三、权限控制
### 匿名用户权限控制
默认情况下，SVN服务器是不允许匿名用户上传文件到服务器端的，所以必须更改系统相关配置文件。
![](./static/images/5.png)
更改第19行代码，去除前面的空格以及#号，更改其值为write（可读写）
![](./static/images/6.png)
### 账号权限控制
1. 关闭匿名用户权限控制
![](./static/images/22.png)
2. 开启authz授权文件和passwd认证文件
![](./static/images/23.png)
3. 编写认证文件定义相关用户名与密码
![](./static/images/24.png)
4. 编写授权文件
![](./static/images/25.png)
![](./static/images/26.png)
:::tip
组中如有多个用户用逗号分开，如：admin = admin,root

r：可读

w：可写

*：其他所有用户
:::
5. 配置成功后重新拉取或提交文件需要用户登录
![](./static/images/27.png)
## svn客户端软件连接SVN服务器
## 1. Checkout检出
首先在你的项目目录鼠标右键TortoiseSVN版本库浏览器输出SVN服务器地址：
![](./static/images/10.png)
![](./static/images/7.png)
svn://SVN服务器地址 Shop项目（仓库）
![](./static/images/8.png)
检出成功之后该目录下会多出一个.svn隐藏文件，代表检出成功
![](./static/images/9.png)