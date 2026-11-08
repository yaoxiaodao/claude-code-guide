---
title: 第十七章：权限模式与自动执行
description: 五种权限模式、Shift+Tab 切换、自动模式的分类器边界，以及计划模式怎么用
lastVerified: "2026-02-24"
officialDoc: https://code.claude.com/docs/zh-CN/permission-modes
---

# 第十七章：权限模式与自动执行

::: tip 学习目标
学完这章，你知道 Claude 什么时候会自己动手、什么时候必须问你，以及怎么在"少点确认"和"别乱来"之间调到自己舒服的位置。
:::

::: warning 概念先澄清
"Agent 模式"这个说法已经过时了。以前它指"让 Claude 自主连续执行"，现在这件事由**权限模式**控制：默认的自动模式（auto mode）就是让它在安全范围内自己动手。而 **subagent**（子代理）是另一个东西——派一个独立的助手去干一件事，见第十九章。
:::

## 五种模式，一张表看完

| 模式 | 不问你就能做什么 | 什么时候用 |
|---|---|---|
| `default`（界面上叫 **Manual**） | 只能读 | 敏感代码、陌生项目，想逐条看 |
| `acceptEdits` | 读 + 改文件 + `mkdir`/`mv`/`cp` 这类文件操作 | 改自己盯着审的代码 |
| `plan` | 读 + 探索性命令，**不能改文件** | 动手前先要一份方案 |
| `auto`（默认） | 基本一切，后台有分类器审查 | 长任务、不想被反复打断 |
| `dontAsk` | 只跑预批准的工具，其他一律拒绝 | CI、脚本 |
| `bypassPermissions` | 一切，无审查 | 只在容器/虚拟机里 |

::: warning 最后两种别在本地日常用
`bypassPermissions` 等于把刹车拆了，官方明确只建议在隔离容器或虚拟机里用。`dontAsk` 是给 CI 用的，日常用起来会频繁被拒。
:::

## 切换：`Shift + Tab`

按一下 `Shift + Tab`，输入框下方的状态栏会变：

```
⏵⏵ auto mode on        ← 默认
⏸ manual mode on       ← 手动，每条都问
⏵⏵ accept edits on     ← 改动自动通过
⏸ plan mode on         ← 只出方案，不改代码
```

循环顺序是 `auto → default → acceptEdits → plan → auto`。

启动时指定，或设成默认：

```bash
claude --permission-mode plan     # 这次以计划模式启动
```

```json
// .claude/settings.json —— 项目默认用计划模式
{
  "permissions": {
    "defaultMode": "plan"
  }
}
```

## 自动模式到底放行了什么

它的做法是：动手前让一个分类器看一眼这个操作危险不危险。安全就过，危险就拦下来问你。

**默认会拦的**（节选，都是日常真会碰到的）：

1. `curl ... | bash` 这类"下载再执行"
2. 生产环境部署、数据库迁移、`terraform destroy` 之类的销毁操作
3. `git push --force`、`git reset --hard`、`git clean -fd`、`git stash drop`
4. 对别人已经推上去的提交做 `git commit --amend`
5. 批量删除云存储、改 IAM/仓库权限、改 DNS 或证书
6. 把密钥、令牌打印到终端或写进文件
7. 合并没有人工批准的 PR，或批准 Claude 自己开的 PR
8. 不可逆地删除会话开始前就存在的文件

::: tip 为什么"帮我清理一下"经常被拦
`rm` 掉一个已经存在的文件属于不可逆操作，分类器会拦。这不是它不懂你，是安全边界在起作用。想让它清理，先把要删的清单列出来给你确认，再逐条执行。
:::

**任何模式都不自动批准的**（连 `bypassPermissions` 也拦）：显式 `ask` 规则命中的工具、需要你交互才能完成的工具、以及 `rm` 掉关键路径（如 `~`、`/`、`.git`）的操作。

## 计划模式：动代码前先看方案

这是日常最值得养成的习惯。大改动之前：

```
/plan 把认证从 session 改成 JWT，涉及哪些文件
```

它会去读代码、跑探查命令，然后给你一份计划，**一行代码都不改**。计划出来后你会看到三个选项：

- **Yes, and use auto mode** —— 批准，然后以自动模式开始改
- **Yes, manually approve edits** —— 批准，但每处改动都让你过目
- **No, keep planning** —— 不满意，继续聊方案

按 `Ctrl + G` 还能把计划拉到编辑器里直接改。

::: tip 一句话判断
改动超过 3 个文件、或你不确定它理解对不对 → 先 `/plan`。改一行拼写 → 直接说。
:::

## 更细的控制：权限规则

模式是粗粒度开关。想精确到"允许 `npm test`，但 `git push` 一定要问"，用 `/permissions` 打开规则界面，或直接写进 `.claude/settings.json`：

```json
{
  "permissions": {
    "allow": ["Bash(npm test:*)", "Bash(npm run lint:*)"],
    "ask": ["Bash(git push:*)"],
    "deny": ["Read(./.env)", "Read(./secrets/**)"]
  }
}
```

规则和模式是叠加关系：**拒绝规则在任何模式下都生效**，包括 `bypassPermissions`。

## 再加一层：沙箱

模式管"要不要问你"，沙箱管"就算它想干也访问不到"。开启 Bash 沙箱后，shell 命令只能在指定目录和网络白名单里活动。

```bash
/sandbox
```

沙箱 + 自动模式是推荐的组合：省掉大部分确认，同时危险动作在系统层面就被挡住。macOS、Linux、WSL2 支持内置沙箱。

::: warning Windows 用户
原生 Windows 上内置 Bash 沙箱不可用。用 WSL2，或者更需要隔离时上 dev container。
:::

## 按场景选配置

| 你的情况 | 建议 |
|---|---|
| 第一次碰一个陌生仓库 | `manual`（手动）+ 先 `/plan` |
| 日常改自己熟悉的项目 | `auto`（默认）+ 关键目录设 `deny` 规则 |
| 做重构、动很多文件 | `plan` 出方案 → 批准后用 `auto` 执行 |
| 跑自动化脚本 / CI | `dontAsk` + 明确的 `allow` 列表 |
| 在 Docker 里批量跑 | `bypassPermissions`，但必须是隔离环境 |
| 要跑会联网的命令 | 开沙箱，限制网络白名单 |

## 常见问题

**Q: 它一直问我，很烦？**

A: 看状态栏确认是不是在 `manual`。按 `Shift + Tab` 切到 `auto`。如果是某条命令反复问，用 `/permissions` 把它加进 `allow`。

**Q: 它自己跑了个我不想让它跑的命令？**

A: 先 `Esc` 中断，再 `/rewind` 回滚。然后检查是不是模式开得太松，或把那条命令加进 `deny`。

**Q: 为什么我在 `auto` 模式下它还是问？**

A: 三种可能：操作被判为危险、命中了你的 `ask` 规则、或者需要你本人交互（比如填表、做选择）。

**Q: 自动模式可以关掉吗？**

A: 可以。设置 `permissions.defaultMode` 为 `default`，或让管理员在托管设置里禁用。

## 练习题

1. 按 `Shift + Tab` 把四种模式各切一遍，记下状态栏的文字变化
2. 用 `/plan` 让它规划一个你手上的小改动，看完计划先选 "No, keep planning" 试试对话
3. 用 `/permissions` 把 `npm test` 加进 allow 列表，再跑一次看是否还问

## 下一章

[:point_right: 第十八章：GitHub Actions 集成](/guide/4-advanced-usage/18-github-actions)
