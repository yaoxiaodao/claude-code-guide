---
title: 第二章：安装 Claude Code
description: 在你的电脑上安装 Claude Code
---

# 第二章：安装 Claude Code

::: tip 学习目标
学完这章，你能在自己电脑上成功安装 Claude Code，并了解编程中常用的几个运行环境。
:::

## 什么是终端/命令行？

**终端**（Terminal）是一个用文字命令来操作电脑的程序。就像电影里黑客用的那种黑底绿字的界面。

- **Windows**：PowerShell 或 Windows Terminal
- **Mac**：Terminal（在 Applications > Utilities 里）

## 编程运行环境简介

开始安装之前，先了解几个常用的运行环境，Claude Code 的安装和它们有关。

### Node.js — JavaScript 运行时

Node.js 让 JavaScript 可以在服务器端运行。Claude Code 本身就是用 Node.js 开发的，安装 Claude Code 需要先装 Node.js。

官网：https://nodejs.org

### Python — 数据和脚本语言

Python 适合数据分析、人工智能、自动化脚本。很多工具包括 AI 相关的库都用 Python 开发。

官网：https://python.org

### Git — 版本控制工具

Git 用来追踪代码的修改历史、团队协作。Claude Code 的很多操作会涉及 Git（比如查看修改、回退版本）。

官网：https://git-scm.com

::: tip 小提示
这些工具的安装教程见下方章节。已有安装经验的可以直接跳过。
:::

## Windows 用户安装步骤

### 1. 安装 Windows Terminal

Windows 11 自带 Windows Terminal。Windows 10 可以从 Microsoft Store 免费安装。

### 2. 安装 Node.js

从 https://nodejs.org 下载安装包，选择 LTS（长期支持版）。

### 3. 安装 Claude Code

打开 PowerShell 或 Windows Terminal，输入：

```bash
npm install -g @anthropic-ai/claude-code
```

::: tip 小提示
如果提示需要管理员权限，右键选择"以管理员身份运行"终端。
:::

### 4. 验证安装成功

```bash
claude --version
```

看到版本号就说明安装成功了。

## Mac 用户安装步骤

### 1. 打开 Terminal

按 `Command + Space`，搜索"Terminal"，回车打开。

### 2. 安装 Node.js

推荐用 Homebrew 安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

### 3. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 4. 验证安装成功

```bash
claude --version
```

## 常见问题

**Q: 提示"找不到命令"？**

A: 重启终端，或者完全关闭再重新打开。

**Q: 杀毒软件报警？**

A: 正常现象，因为 Claude Code 会读写文件。信任该软件即可。

## 练习题

1. 打开终端，输入 `node --version` 确认 Node.js 安装成功
2. 输入 `git --version` 确认 Git 安装成功
3. 输入 `claude --version` 确认 Claude Code 安装成功

## 下一章

安装完成后，下一章我们会学习如何获取和配置 API Key。

[:point_right: 第三章：API Key 获取与配置](/guide/1-getting-started/3-api-key-setup)
