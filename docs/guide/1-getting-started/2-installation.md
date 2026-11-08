---
title: 第二章：安装 Claude Code
description: 在 Windows / Mac 上安装 Claude Code，含国内网络与镜像方案
lastVerified: "2026-02-24"
officialDoc: https://code.claude.com/docs/zh-CN/setup
---

# 第二章：安装 Claude Code

::: tip 学习目标
学完这章，你能在自己电脑上装好并跑通 `claude`。装不上也能按排错表自救。
:::

## 什么是终端

**终端**（Terminal）就是用打字来操作电脑的窗口。本教程所有命令都在这里输入。

- **Windows**：PowerShell（开始菜单搜索即可）或 Windows Terminal
- **Mac**：Terminal（`Command + Space` 搜 "Terminal"）

看到类似 `PS C:\Users\you>` 或 `you@MacBook ~ %` 的提示符，就是在终端里了，可以输命令。

::: tip 粘贴命令
Windows：右键粘贴或 `Ctrl + Shift + V`。Mac：`Command + V`。
:::

## 选一种装法

Claude Code 提供多种安装渠道。国内用户按下面顺序试，装上一种就够。

### 方案 A：原生安装脚本（推荐，不需要 Node.js）

这是官方首推的方式，装的是独立二进制，**后台自动更新**，也不用先装 Node.js。

**Mac / Linux / WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows（PowerShell）：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows（CMD）：**

```bat
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

::: warning 国内网络可能卡在这一步
安装脚本要从 Anthropic 的服务器下载二进制。如果你没有代理，这一步可能超时或 403。别硬试，直接用下面的方案 B。
:::

### 方案 B：npm 安装（国内最稳，走镜像）

npm 是 Node.js 的包管理器，它的国内镜像 `registry.npmmirror.com` 在国内可直连，所以这条路对国内用户最可靠。

**1. 先装 Node.js（需要 22 或更高版本）**

从 https://nodejs.org 下载 LTS 安装包，一路下一步即可。装完验证：

```bash
node --version    # 应显示 v22.x 或更高
```

**2. 换国内镜像（只需做一次）**

```bash
npm config set registry https://registry.npmmirror.com
```

**3. 安装 Claude Code**

```bash
npm install -g @anthropic-ai/claude-code
```

::: tip 小提示
- **不要**加 `sudo`，会导致后续自动更新失败和权限问题
- 如果提示权限不足，改用方案 A，或修复 npm 全局目录权限
- 以后升级：`npm install -g @anthropic-ai/claude-code@latest`
:::

### 方案 C：Homebrew（Mac 用户）

```bash
brew install --cask claude-code
```

升级：`brew upgrade claude-code`。注意 Homebrew 装的**不会自动更新**。

### 方案 D：WinGet（Windows 用户）

```powershell
winget install Anthropic.ClaudeCode
```

升级：`winget upgrade Anthropic.ClaudeCode`。同样不会自动更新。

## 验证装好了没有

```bash
claude --version
```

看到类似 `2.1.xxx (Claude Code)` 的版本号就成功了。

再跑一次体检：

```bash
claude doctor
```

它会检查版本、自动更新、PATH 和配置，有问题会直接告诉你。

## 装不上？对照排错

| 现象 | 原因 | 解决 |
|---|---|---|
| `curl` 报 403 / 超时 / `syntax error near unexpected token '<'` | 网络到不了 Anthropic，或拿到的是错误页面 | 改用方案 B 的 npm 镜像 |
| `command not found: claude` | 安装目录不在 PATH 里 | 重开一个新终端窗口；仍不行看 `claude doctor` 的提示 |
| `EACCES` / 权限错误 | npm 全局目录不可写 | 不要用 `sudo`，改 npm 前缀：`npm config set prefix ~/.npm-global` 并把 `~/.npm-global/bin` 加进 PATH |
| PowerShell 里 `&&` 报错 | 你在 PowerShell 里用了 CMD 的语法 | 换用上面的 PowerShell 命令 |
| CMD 里 `irm` 不识别 | 你在 CMD 里用了 PowerShell 的语法 | 换用 CMD 那条，或直接开 PowerShell |
| npm 装完找不到二进制 | 镜像缺平台包，或包管理器禁用了 optionalDependencies | 临时切官方源：`npm install -g @anthropic-ai/claude-code --registry=https://registry.npmjs.org` |
| 安装成功但每次启动都提示更新失败 | 用了 `sudo` 安装 | 卸载后用普通权限重装 |

## 顺带装两个工具（强烈建议）

这两个不是必须的，但会让后面顺畅很多：

```bash
git --version      # 版本控制，Claude 的很多操作要用它
python --version   # 数据分析、脚本类任务常用
```

没装的话：

- **Git**：https://git-scm.com （Windows 装完会自带 Git Bash，Claude Code 在 Windows 上会优先用它当 shell，体验更好）
- **Python**：https://python.org

## 练习题

1. 打开终端，输入 `claude --version`，记下你的版本号
2. 运行 `claude doctor`，看有没有标红的项
3. 输入 `git --version`，确认 Git 可用

## 下一章

装好了，但还不能用——需要给它配一个能调用的账号。

[:point_right: 第三章：第三方 API 中转配置](/guide/1-getting-started/3-api-key-setup)
