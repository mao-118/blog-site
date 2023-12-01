# tag 标签详解

## 查看

```bash
# 列出所有tag
git tag
# 查看指定tag信息
git show [tag_name]
```

## 创建

```bash
# 基于指定的commit创建tag
git tag [tag_name] [commit_id]
# 基于指定的commit创建tag，并进行备注
git tag [tag_name] [commit_id] -m [message]
```

## 提交

```bash
# 将tag提交到远程仓库
git push origin [tag_name]
# 将所有tag提交到远程仓库
git push origin --tags
```

## 删除

```bash
# 删除本地tag
git tag -d [tag_name]
# 删除远程tag
git push origin :refs/tags/[tag_name]
# 另一种更直观的删除远程tag
git push origin --delete [tag_name]
```

`tag`和分支是相互独立的，删除了`tag`并不影响分支。

## 切换

```bash
# 切换到指定tag
git checkout [tag_name]
```

## 重命名

```bash
# 重命名tag
git tag -a [new_tag_name] [old_tag_name]
```
