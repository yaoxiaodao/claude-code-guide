---
title: 第十一章：CLAUDE.md — 给 AI 写说明书
description: 学会创建项目规范文件，让 Claude Code 更懂你的项目
---

# 第十一章：CLAUDE.md — 给 AI 写说明书

::: tip 学习目标
学完这章，你会创建自己的 CLAUDE.md 文件，让 Claude Code 更准确地帮助你。
:::

## 什么是 CLAUDE.md

CLAUDE.md 是一个放在项目根目录的配置文件。它用自然语言告诉 Claude 关于你的项目的一切：

- 这个项目是做什么的
- 使用了什么技术栈
- 代码放在哪里
- 有哪些规范和约定
- 常用的命令是什么

当你打开一个项目并启动 Claude Code 时，Claude 会自动读取这个文件，就像拿到了项目说明书。

## 什么时候需要 CLAUDE.md

**需要写的场景：**
- 项目超过一个文件
- 有特殊的技术栈或架构
- 团队有代码规范要求
- 想让 AI 更准确地产出

**可以暂时不写的场景：**
- 简单的单文件脚本
- 临时测试项目
- 一次性数据处理

## 怎么写 CLAUDE.md

一个基本的 CLAUDE.md 长这样：

```markdown
# 项目名称

这是一个做什么的项目。

## 技术栈

- Python 3.11
- Flask
- SQLite

## 项目结构

- `app.py` — 主程序入口
- `models.py` — 数据库模型
- `static/` — 静态文件

## 常用命令

```bash
python app.py          # 启动程序
flask db upgrade       # 更新数据库
```
```

## 实际案例

假设你有一个 Python Flask 网站项目，CLAUDE.md 可以这样写：

```markdown
# 我的个人博客

这是一个用 Flask 开发的个人博客系统。

## 技术栈

- Python 3.11 + Flask
- SQLite 数据库
- Jinja2 模板引擎

## 项目结构

```
app.py        — Flask 应用入口
models.py     — 数据库模型（用户、文章、评论）
routes.py     — 路由定义
static/       — CSS、JS、图片
templates/    — HTML 模板
```

## 代码规范

- 使用中文注释
- 函数命名用 snake_case
- 路由函数放在 routes.py

## 常用命令

```bash
python app.py              # 开发模式启动
flask db upgrade           # 迁移数据库
flask shell               # 进入交互模式
```
```

## 操作步骤

1. 打开你的项目目录
2. 在根目录创建 `CLAUDE.md` 文件
3. 复制上面的模板，修改成你自己的内容
4. 启动 Claude，输入"请帮我看看这个项目"
5. 观察 Claude 是否正确理解了项目结构

## 常见问题

**Q: 一定要写吗？**

A: 不是强制的，但写了之后 Claude 的表现会明显提升。它能更快理解你的代码，减少重复解释。

**Q: 写在哪里？**

A: 项目根目录，文件名必须是 `CLAUDE.md`（全大写）。

**Q: 写多少合适？**

A: 从简到繁都可以。一个最基本的 CLAUDE.md 只需要 3-5 行。

**Q: 需要用英文写吗？**

A: 不需要。Claude 支持多语言，用中文写完全没问题。

## 练习题

给你现有的某个项目创建一个 CLAUDE.md，然后问 Claude：

1. "这个项目是做什么的？"
2. "帮我写一个 README.md"

看看 Claude 的回答是否准确。

## 下一章

下一章我们会整合前面所学，体验一个完整的日常工作流。

[:point_right: 第十二章：日常工作流实战](/guide/4-next-steps/12-realistic-workflow)
