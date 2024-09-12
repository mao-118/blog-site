# svn 的常用命令

## 检出 checkout ｜ co

从服务器拉取代码到本地

格式：svn co [svn 服务器 url] [检出本地的 path]

```bash
svn co svn://47.106.183.193/helloworld ./
# svn在检出的时候可以指定用户名和密码
svn co svn://47.106.183.193/helloworld --username=xxx --password=yyy ./
```

## 添加 add

将新增加的文件加入版本控制体系

```bash
svn add 文件名
```

## 提交 commit | ci

将本地变更的代码提交到 svn 服务器

格式：svn commit -m "xxx" [文件名]

```bash
svn ci -m "第一次提交" hello.txt
```

提交完之后，版本号自动增加了 1

## 更新 update ｜ up

把服务器端文件所产生的所有修改下载到本地

```bash
svn up
```

## 查看

```bash
# 查看版本信息
svn log
# 查看文件状态
svn status
# 查看差异
svn diff
```

## 版本回退

1. 还未提交

   当我们想放弃对文件的修改，可以使用 svn revert 命令，将撤销任何文件或目录里的局部更改，revert 操作不单单可以使单个文件恢复原状， 而且可以使整个目录恢复原状。恢复目录需要携带 -R 参数

```bash
svn revert 文件名
svn revert -R 目录名
```

2. 已经提交

   对于已经提交的修改，我们需要使用 merge 命令进行回退，同时需要携带 -r 参数

```bash
svn merge -r 最新版本号:目标版本号 目录名或文件名
## 如：从版本100 回退到版本99
svn merge -r 100:99 目录名或文件名
```

## 冲突解决

当多人开发同一个文件时，我们进行`commit`或者`update`的时候，可能会发生冲突

发生冲突时，我们本地除了原文件会多出三个文件，总共四个文件

- xxx 文件：整合后的 index.php 冲突文件
- xxx.mine 文件 ：发生冲突时本地文件内容
- xxx.r[小版本号]文件 ：发生冲突前文件内容
- xxx.r[大版本号]文件 ：发生冲突时服务器端文件内容

我们只需要关注 xxx 文件，因为它本身就是整合后的冲突文件，只需要将该文件内的冲突解决完即可，其他三个文件可以删除掉。

将 xxx 文件内容冲突解决之后，执行`svn ci`提交即可。
