---
title: 第二章：安装 Claude Code
description: 在你的电脑上安装 Claude Code
---

# 第二章：安装 Claude Code

::: tip 学习目标
学完这章，你能在自己电脑上成功安装 Claude Code。
:::

## 什么是终端/命令行？

在开始之前，我们需要先了解什么是**终端**（Terminal）。

终端是一个让你用文字命令来操作电脑的程序。就像电影里黑客用的那种黑底绿字的界面。

- **Windows**：叫 PowerShell 或 Windows Terminal
- **Mac**：叫 Terminal（在 Applications > Utilities 里）
- **Linux**：通常是 GNOME Terminal 或 Konsole

## Windows 用户安装步骤

### 1. 安装 Windows Terminal（如果你没有的话）

Windows 11 自带 Windows Terminal。如果你是 Windows 10，可以从 Microsoft Store 免费安装。

### 2. 安装 Claude Code

打开 PowerShell 或 Windows Terminal，输入以下命令：

```bash
npm install -g @anthropic-ai/claude-code
```

::: tip 小提示
如果你看到提示需要管理员权限，右键选择"以管理员身份运行"终端。
:::

### 3. 验证安装成功

安装完成后，输入：

```bash
claude --version
```

如果看到版本号（比如 `0.1.0`），说明安装成功！

## Mac 用户安装步骤

### 1. 打开 Terminal

按 `Command + Space`，搜索"Terminal"，回车打开。

### 2. 安装 Claude Code

在 Terminal 里输入：

```bash
npm install -g @anthropic-ai/claude-code
```

### 3. 验证安装成功

输入：

```bash
claude --version
```

看到版本号就说明安装成功了。

## Linux 用户安装步骤

### 1. 安装 Node.js（如果没有）

大多数 Linux 发行版可以通过包管理器安装 Node.js：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs

# Arch Linux
sudo pacman -S nodejs npm
```

### 2. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 3. 验证安装成功

```bash
claude --version
```

## 前置知识

会开关电脑、会打字。

## 常见问题

**Q: 提示"找不到命令"？**

A: 可能需要重启终端。或者尝试完全关闭再重新打开。

**Q: 杀毒软件报警？**

A: 这是正常的，因为 Claude Code 会读写文件。信任该软件即可。

## 练习题

在终端里输入 `claude --version`，确认看到版本号。

把截图发到评论区，和大家分享你的安装成功！

## 下一章

安装完成后，下一章我们会学习如何获取和配置 API Key。

[:point_right: 第三章：API Key 获取与配置](/guide/1-getting-started/3-api-key-setup)