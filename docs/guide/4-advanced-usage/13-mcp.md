---
title: 第十三章：MCP — 连接外部工具
description: 学会使用 Model Context Protocol 连接数据库、GitHub 等外部工具
---

# 第十三章：MCP — 连接外部工具

::: tip 学习目标
学完这章，你会安装和配置 MCP 工具，让 Claude 连接到数据库、GitHub、浏览器等外部工具。
:::

## 什么是 MCP

MCP（Model Context Protocol，模型上下文协议）是一种让 Claude 连接外部工具的标准方式。

举个例子：没有 MCP 之前，Claude 只能读写你的本地文件。有了 MCP 之后，Claude 可以：
- 直接查询你的数据库
- 操作 GitHub 仓库（创建 PR、评论代码）
- 控制浏览器自动化
- 发送 Slack/Discord 消息

## MCP 的工作原理

MCP 就像一个"转接器"：

```
Claude ↔ MCP Client ↔ MCP Server ↔ 外部工具
```

- **MCP Server**：每个外部工具对应一个 MCP 服务器
- **MCP Client**：Claude Code 内置的客户端

你只需要安装 MCP 服务器，Claude Code 会自动连接它们。

## 安装 MCP 工具

### 方法一：通过 Claude Code 官方包

Claude Code 团队维护了一些常用的 MCP 服务器：

```bash
# 安装 GitHub MCP 服务器
claude mcp install github

# 安装文件系统 MCP 服务器
claude mcp install filesystem

# 安装 Slack MCP 服务器
claude mcp install slack
```

### 方法二：通过 npm 安装社区包

```bash
npm install -g @modelcontextprotocol/server-sqlite
```

### 方法三：通过 Homebrew 安装

```bash
brew install mcp-server-filesystem
```

## 常用 MCP 服务器推荐

### 1. GitHub MCP 服务器

让 Claude 直接操作 GitHub：

```bash
npm install -g @modelcontextprotocol/server-github
```

**可以做的事：**
- 查看、创建、合并 PR
- 评论代码审查
- 管理 Issues
- 查看 Actions 运行状态

### 2. Filesystem MCP 服务器

增强文件操作能力：

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**可以做的事：**
- 批量重命名文件
- 递归搜索和替换
- 一次性移动多个文件

### 3. SQLite MCP 服务器

直接查询数据库：

```bash
npm install -g @modelcontextprotocol/server-sqlite
```

**可以做的事：**
- 执行 SQL 查询
- 查看数据库结构
- 验证数据迁移

### 4. 浏览器自动化 MCP

```bash
npm install -g @modelcontextprotocol/server-browser
```

**可以做的事：**
- 自动化网页操作
- 截图
- 填写表单

## 配置 MCP 服务器

安装后，需要在 Claude Code 中启用：

```bash
# 查看已安装的 MCP 服务器
claude mcp list

# 启用某个服务器
claude mcp enable github

# 禁用某个服务器
claude mcp disable github
```

## 实战例子

### 例子一：用 Claude 管理 GitHub PR

```
你：帮我看看最近一周有哪些新的 PR，需要代码审查
Claude：
（连接 GitHub MCP，列出最近的 PR 列表）
```

### 例子二：自动化数据库操作

```
你：帮我查一下 users 表里注册时间最近 100 个用户
Claude：
（连接 SQLite MCP，执行查询，返回结果）
```

### 例子三：批量文件操作

```
你：把 src/components 目录下所有 .js 文件改成 .jsx
Claude：
（连接 Filesystem MCP，批量重命名文件）
```

## 常见问题

**Q: MCP 安全吗？**

A: MCP 服务器有完整的权限控制。在使用前，Claude 会告诉你它需要什么权限。

**Q: 哪里可以找到更多 MCP 服务器？**

A: GitHub 上搜索 "mcp-server"，或者访问 [mcp.so](https://mcp.so) 查看社区维护的列表。

**Q: MCP 需要付费吗？**

A: MCP 本身免费，但某些外部服务（如 GitHub API）可能有用量限制。

## 练习题

1. 安装一个 MCP 服务器（如 filesystem）
2. 让 Claude 帮你批量重命名项目中的几个文件
3. 如果有 GitHub 账号，尝试安装 GitHub MCP 服务器

## 下一章

下一章我们会学习如何安装和使用 Skill 扩展。

[:point_right: 第十四章：Skill 的安装与使用](/guide/4-advanced-usage/14-skills)
