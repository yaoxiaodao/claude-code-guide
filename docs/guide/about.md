---
title: 关于本教程
description: 这份教程对齐到哪个版本、怎么判断内容是否过时、已知未覆盖的范围
lastVerified: "2026-02-24"
officialDoc: https://code.claude.com/docs/zh-CN/overview
---

# 关于本教程

::: tip 一句话
本教程按**官方文档 2026-02-24 的快照**校对，对应 Claude Code **v2.1.x**。每篇文章底部都标了它自己的最后核对日期。
:::

## 为什么需要这一页

Claude Code 更新非常快：新功能、新的默认行为、甚至术语改名（比如"Agent 模式"已经并入"权限模式"）几个月就会变一轮。

所以这份教程不再假装"永远正确"，而是明确告诉你：**哪一天对过的、对着哪个版本对的**。

## 怎么判断一篇内容是否过时

三步，30 秒：

1. 看文章底部的「本文最后按官方文档核对」
2. 如果超过 **3 个月**，把它当"可能过时"对待
3. 点同一行的「查看官方原文 ↗」，用官方最新说法覆盖本文

不确定的地方**永远以官方原文为准**，本文只是更容易读的转述。

## 全站核对状态

| 篇章 | 最后核对 |
|---|---|
| 入门篇（第 1-4 章） | 2026-02-24 |
| 基础篇（第 5-7 章） | 2026-02-24 |
| 实战篇（第 8-12 章） | 2026-02-24 |
| 高阶篇（第 13-19 章） | 2026-02-24 |
| 速查表 | 2026-02-24 |

## 每章对应的官方页

想深入某个主题，直接看官方原文最准：

| 本教程 | 官方页 |
|---|---|
| 第 1 章 是什么 | [概述](https://code.claude.com/docs/zh-CN/overview) |
| 第 2 章 安装 | [安装与设置](https://code.claude.com/docs/zh-CN/setup) |
| 第 3 章 第三方中转 | [身份验证](https://code.claude.com/docs/zh-CN/authentication) |
| 第 4 章 首次对话 | [快速开始](https://code.claude.com/docs/zh-CN/quickstart) |
| 第 5 章 读懂代码库 | [Claude Code 如何工作](https://code.claude.com/docs/zh-CN/how-claude-code-works) |
| 第 6 章 编辑代码 | [常见工作流](https://code.claude.com/docs/zh-CN/common-workflows) |
| 第 7 章 上下文与会话 | [管理会话](https://code.claude.com/docs/zh-CN/sessions) |
| 第 8 章 调试 | [故障排查](https://code.claude.com/docs/zh-CN/troubleshooting) |
| 第 9 章 代码审查 | [代码审查](https://code.claude.com/docs/zh-CN/code-review) |
| 第 10 章 Git | [常见工作流](https://code.claude.com/docs/zh-CN/common-workflows) |
| 第 11 章 CLAUDE.md | [记忆](https://code.claude.com/docs/zh-CN/memory) |
| 第 12 章 一天实战 | [最佳实践](https://code.claude.com/docs/zh-CN/best-practices) |
| 第 13 章 MCP | [MCP](https://code.claude.com/docs/zh-CN/mcp) |
| 第 14 章 Skill | [Skills](https://code.claude.com/docs/zh-CN/skills) |
| 第 15 章 命令 | [命令参考](https://code.claude.com/docs/zh-CN/commands) |
| 第 16 章 Hooks | [Hooks](https://code.claude.com/docs/zh-CN/hooks) |
| 第 17 章 权限模式 | [权限模式](https://code.claude.com/docs/zh-CN/permission-modes) |
| 第 18 章 GitHub Actions | [GitHub Actions](https://code.claude.com/docs/zh-CN/github-actions) |
| 第 19 章 Subagents | [Subagents](https://code.claude.com/docs/zh-CN/sub-agents) |
| 速查表 | [命令参考](https://code.claude.com/docs/zh-CN/commands) |

::: tip 一个官方提供的便利
官方站点支持在任意页面地址后加 `.md` 直接拿到干净的 Markdown 原文，例如
`https://code.claude.com/docs/zh-CN/overview.md`。想复制内容进 AI 里讨论时很方便。
:::

## 已知未覆盖（诚实清单）

这些是当前版本存在、但本教程还没单独成章的内容：

- **插件与 Marketplace**（`/plugin`、添加 marketplace）— 计划中
- **多端形态**：桌面应用、VS Code / JetBrains 扩展、网页版与云端会话、手机 Remote Control
- **Agent Teams / 后台会话管理**（`claude agents`）
- **企业级配置**：托管设置、SSO、云厂商（Bedrock / Vertex / Foundry）接入
- **Agent SDK**：把 Claude Code 当库来编程

覆盖优先级按"国内日常用户会不会用到"排，所以越靠前越可能先写。

## 教程的取舍

这份教程不是官方文档的中文翻译，刻意做了这些取舍：

- **只讲日常用得上的**，冷门参数不展开，需要时查官方
- **面向中国大陆用户**：网络、支付、中转的实际问题都写出来，哪怕官方文档不涉及
- **默认读者没写过命令行**：术语第一次出现时都会解释
- **不追版本号**：模型一律用 `opus` / `sonnet` / `haiku` 别名，避免写完就过时

## 发现错误怎么办

如果某段内容和官方对不上，以官方为准，并顺手提交一个 issue 或 PR —— 页面底部的链接就是用来核对这一点的。
