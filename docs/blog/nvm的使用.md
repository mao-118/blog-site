# nvm的使用
## 安装
1. [下载地址](https://github.com/coreybutler/nvm-windows/releases)

![](https://img-blog.csdnimg.cn/1bb6b5e17e4945768ae430e76c6c4030.png)

2. 解压安装完成后,默认安装在C盘,如果想安装在D盘.可选择相对应的安装路径,一般推荐安装默认路径就好,安装过程中,如出现该电脑已存在某个node版本,是否管理,请选择是。
![](https://img-blog.csdnimg.cn/0e66354555574642a83ef19ccb966ddf.png)

3. 如要更改环境变量,可根据以下的两个变量进行值修改,一般不推荐更改环境变量,上一步采用默认可忽略此步
![](https://img-blog.csdnimg.cn/9d5c4b81d4564b7fbcf531abc8d5c82b.png)
NVM_HOME应为nvm的安装目录，D:\SoftWare\nvm\nvm
NVM_SYMLINK应为nvm的安装目录加"\nodejs"，注意用户变量和系统变量都需要更改，然后确定-确定-确定。如下图是我安装的目录：
D:\SoftWare\nvm\nvm\nodejs

4. 查看安装版本是否成功,出现版本号表示已经安装成功
```
nvm -v
```
![](https://img-blog.csdnimg.cn/ed5e2d989d1c4a3e92b40d0bf6910b40.png)

5. 在nvm的安装路径下,一定要在setting文件中加入下面两行代码,替换为淘宝镜像,否则会非常的慢
![](https://img-blog.csdnimg.cn/cf6dc1f2ad56452db2d4c7ee3c579285.png)
```
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
::: warning tip:
如果使用命令窗口的时候报错,可采用重启或者以管理员身份运行进行解决
:::

## nvm命令
```js
//查看版本
nvm -v  

//显示所有可下载的版本
nvm list available

//安装指定版本 node
nvm install 18.9.0

//卸载指定版本node
nvm uninstall 14.17.3 

//列出所有已安装的 node 版本
nvm ls
//或
nvm list 

//切换到指定版本 node
nvm use [node版本号]

//列出所有远程服务器的版本（官方node version list）
nvm ls-remote

//安装最新版 node
nvm install stable 

//当前 node 版本
nvm current

//给不同的版本号添加别名
nvm alias [别名] [node版本号] 

//删除已定义的别名
nvm unalias [别名] 

//设置默认版本
nvm alias default [node版本号] 
```