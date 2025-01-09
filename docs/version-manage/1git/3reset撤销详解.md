---
outline: "deep"
---

# git 撤销详解

## 暂存区撤销

场景：当我们执行了`git add`之后想要撤销

```bash
# 查看暂存区
git status
# 撤销提交到暂存区的指定文件
git reset [file_name]
# 撤销提交到暂存区的所有文件
git reset .
```

## commit 撤销

场景：当我们执行了`git commit`之后想要撤销

### mixed

`--mixed`是`git reset`的默认值

```bash
# 撤销到指定的commit，会将当前git add提交状态的文件恢复到未提交之前的状态，保留修改的文件内容
git reset [commit_id]
```

### soft

撤销到指定`commit`并保留之前的更改

```bash
# 查看 commit 记录
git log
# 撤销到指定的commit，和mixed不同的是，不会改变暂存区的内容，保留修改的文件内容
git reset --soft [commit_id]
```

### hard（谨慎使用）

撤销到指定`commit`并但不保留之前的更改，也就是说一旦撤销之前修改的内容就会消失,

可以在进行版本回退时使用

```bash
# 查看 commit 记录
git log
# 撤销到指定的commit，不保留之前的更改
git reset --hard [commit_id]
```

### HEAD

使用`HEAD`可以替换掉上面的`[commit_id]`

如：

```bash
# 撤销到上一个版本
git reset --soft HEAD~1
```

> HEAD 表示当前版本

- HEAD^ 上一个版本

- HEAD^^ 上上一个版本

- HEAD^^^ 上上上一个版本

- 以此类推…

> 可以使用 ～数字表示

- HEAD~0 表示当前版本

- HEAD~1 上一个版本

- HEAD~2 上上一个版本

- HEAD~3 上上上一个版本

- 以此类推…

## 撤销远程并推送

使用了上面的命令进行了撤销之后，我们需要把远程的`push`也进行撤销，这个时候可以执行

如下命令：

```bash
git push -f
```

::: warning

- 本地撤销之后，`push`之前不需要进行`pull`，不然远程的会将本次撤销进行覆盖
- `push -f` 是 `push --force` 的简写形式,意思是强制推送`(force push)`
- 撤销之后，其他同事如果之前`git pull`过你的这次提交记录，那么他需要执行 `git reset --hard origin/分支名`将本地分支重置为与远程分支相同的状态，包括分支指针的位置和提交记录。
  :::
