---
title: 第十章：Git 操作辅助
description: 学会让 Claude 辅助 Git 操作
---

# 第十章：Git 操作辅助

::: tip 学习目标
学完这章，你会让 Claude 帮你处理 Git 操作。
:::

## Git 基础回顾

Git 是版本控制工具，常用命令：

- `git add` - 暂存文件
- `git commit` - 提交
- `git push` - 推送到远程
- `git pull` - 拉取更新
- `git branch` - 管理分支

## 让 Claude 帮你写 Commit Message

### 查看修改

```
帮我看看这些修改
```

### 写 Commit Message

```
帮我写一个 commit message
```

Claude 会根据你的修改内容，写一个清晰的 commit message。

## 处理 Merge 冲突

### 遇到冲突时

把冲突信息粘贴给 Claude：

```
这个冲突怎么解决？
```

Claude 会解释冲突是什么，以及如何合并。

## 写 PR 描述

在 GitHub 上创建 Pull Request 时：

```
帮我写一个 PR 描述，说明这个 PR 做了什么
```

## 前置知识

知道 Git 是什么（不知道也没关系）。

## 常见问题

**Q: merge 冲突太复杂？**

A: 让 Claude 先解释冲突是什么，再决定怎么合并。

**Q: 误操作了？**

A: `git reflog` 可以找回之前的版本。

## 练习题

1. 修改文件，用 Claude 帮你写 commit message
2. 制造一个 merge 冲突，让 Claude 帮你分析

## 继续学习

恭喜你完成了入门篇和基础篇！

现在你可以：
- 安装和配置 Claude Code
- 读懂代码库
- 编写和修改代码
- 调试问题
- 代码审查
- Git 操作

## 下一步

查看 [继续学习之路](/guide/4-next-steps/12-realistic-workflow) 了解进阶话题。