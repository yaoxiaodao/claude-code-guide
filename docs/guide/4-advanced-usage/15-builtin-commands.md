---
title: 第十五章：内置命令与自定义命令
description: 按场景记住最常用的斜杠命令，并把自己的提示词变成可复用的命令
lastVerified: "2026-02-24"
officialDoc: https://code.claude.com/docs/zh-CN/commands
---

# 第十五章：内置命令与自定义命令

::: tip 学习目标
学完这章，你不用背命令表——按场景记住 8 个高频命令，并且能把自己的常用提示词变成 `/我的命令`。
:::

::: warning 先纠正一个常见误解
以前"**命令**（`.claude/commands/`）"和"**Skill**（`.claude/skills/`）"是两套东西。**现在它们已经合并了**：自定义命令就是 skill 的一种写法。

- 旧写法 `.claude/commands/deploy.md` 仍然有效，不需要改
- 新写的建议用 `.claude/skills/deploy/SKILL.md`
- 两者都一样触发 `/deploy`，行为一致

所以本章讲"内置命令 + 自定义命令"，第十四章讲 Skill 的完整能力。不用再纠结概念区别。
:::

## 有哪些命令

在会话里输入 `/` 就会弹出命令列表，继续输入字母可以模糊筛选。`/help` 查看帮助。

::: tip 命令菜单会藏东西
列表里不显示全部。有些命令必须完整输入名字才认（比如 `/heapdump`），有些要看你的平台和套餐才出现。
:::

## 按场景记，比背命令表有效

### 场景一：第一次进一个仓库

| 命令 | 作用 |
|---|---|
| `/init` | 读项目，生成 `CLAUDE.md` |
| `/memory` | 编辑 `CLAUDE.md`、开关自动记忆 |
| `/mcp` | 配置项目需要的 MCP 服务器 |
| `/permissions` | 设置 allow / ask / deny 规则 |

### 场景二：干活过程中

| 命令 | 作用 |
|---|---|
| `/plan` | 大改动前先要方案，一行代码不改 |
| `/model` | 切模型（`sonnet` / `opus` / `haiku`） |
| `/effort` | 调推理强度（`low` → `xhigh`） |
| `/context` | 看上下文被什么占满了 |
| `/compact` | 压缩历史，释放空间 |
| `/btw` | 问个旁支问题，不进对话历史 |

::: tip `/btw` 很实用
"这个项目为什么用 pnpm？"这种问题用 `/btw`，答案不会污染主对话的上下文。普通提问则会永久留在历史里。
:::

### 场景三：提交之前

| 命令 | 作用 |
|---|---|
| `/diff` | 看它到底改了什么 |
| `/code-review` | 审查当前分支改动（`--fix` 可直接改） |
| `/security-review` | 只看安全漏洞 |

### 场景四：出问题时

| 命令 | 作用 |
|---|---|
| `/rewind` | 回滚代码和对话到检查点（`Esc` 两下同效） |
| `/doctor` | 体检安装、配置、扩展、`CLAUDE.md` 并给修复建议 |
| `/debug` | 开启日志并从日志里排查问题 |
| `/status` | 看当前模型和配置状态 |

### 场景五：会话之间

| 命令 | 作用 |
|---|---|
| `/clear [名字]` | 开新对话（可带名字，方便以后找回） |
| `/resume` | 切到另一个会话 |
| `/branch` | 从当前对话分叉 |
| `/recap` | 生成一句话摘要 |
| `/export` | 导出对话文本 |
| `/exit` | 退出 |

## 自定义命令：把你的话术固定下来

如果你发现自己反复输入同一段指令，就该做成命令。

### 最简做法：直接让 Claude 帮你建

```
在 .claude/skills/ 下创建一个叫 pr-desc 的命令，
读当前分支的 git diff，生成一段 PR 描述：
改了什么、为什么改、怎么验证。输出直接给 markdown，不要解释过程。
```

它会生成 `.claude/skills/pr-desc/SKILL.md`。之后输入 `/pr-desc` 就能用。

### 手写也很简单

```markdown
---
name: pr-desc
description: 根据当前分支的改动生成 PR 描述。在准备提 PR 时使用。
---

读当前分支相对主分支的 diff，按下面格式输出，不要输出其他内容：

## 改了什么
（3 条以内）
## 为什么改
（2 条以内）
## 怎么验证
（可执行的命令）
```

两个字段的含义：

| 字段 | 作用 |
|---|---|
| `name` | 命令名，也就是 `/pr-desc` 里的那部分 |
| `description` | **Claude 靠它判断何时主动用这个 skill**，写清触发时机 |

### 传参数

命令名后面的文字会成为该命令的参数：

```
/pr-desc 重点突出数据库迁移的部分
```

### 放哪

| 位置 | 生效范围 |
|---|---|
| `.claude/skills/` | 当前项目，可提交进 git 与团队共享 |
| `~/.claude/skills/` | 你所有项目 |

::: warning 一个坑
如果你用的是旧的 `.claude/commands/` 目录，改完文件需要重启会话才生效；`.claude/skills/` 支持运行中改动即时生效（`/reload-skills` 可手动重扫）。
:::

## 命令行参数（不在会话里用）

| 参数 | 说明 |
|---|---|
| `claude` | 交互式启动 |
| `claude -p "..."` | 非交互模式，输出后退出，可接管道 |
| `claude --continue` | 接着当前目录上次的会话 |
| `claude --resume` | 从列表恢复 |
| `claude --model opus` | 指定模型 |
| `claude --permission-mode plan` | 指定启动权限模式 |
| `claude --worktree <名>` | 在独立 worktree 里开会话 |
| `claude doctor` | 体检 |
| `claude update` | 升级 |

管道用法（适合脚本和 CI）：

```bash
cat error.log | claude -p "这些报错的共同原因是什么？"
```

## 环境变量

| 变量 | 说明 |
|---|---|
| `ANTHROPIC_BASE_URL` | 自定义 API 端点（中转用） |
| `ANTHROPIC_AUTH_TOKEN` | 中转服务密钥 |
| `ANTHROPIC_API_KEY` | 官方 API 密钥 |
| `ANTHROPIC_MODEL` | 默认模型 |
| `CLAUDE_CONFIG_DIR` | 独立配置目录，用于多账号 |

::: warning 前缀是 `ANTHROPIC_`，不是 `CLAUDE_`
写成 `CLAUDE_API_KEY` 是无效的，不会报错但也不生效——这是新手最常踩的坑。想永久生效就写进 `~/.claude/settings.json` 的 `env` 字段。
:::

## 常见问题

**Q: 输入 `/` 没反应？**

A: 确认光标在输入框最前面。命令只在消息**开头**被识别。

**Q: 我的自定义命令不出现？**

A: 检查 `SKILL.md` 的 frontmatter 有没有 `name`，以及目录层级对不对（`.claude/skills/<名字>/SKILL.md`）。改完用 `/reload-skills` 重扫。

**Q: 一条消息能用多个命令吗？**

A: 能。`/command-a /command-b 具体任务`，最多串六个，末尾的文字会作为参数传给每个命令。

**Q: `/review` 和 `/code-review` 有什么区别？**

A: 没有，`/review` 是别名。新写的内容统一用 `/code-review`。

## 练习题

1. 输入 `/` 浏览一遍命令列表，用模糊搜索找一个你感兴趣的命令
2. 用 `/btw` 问一个旁支问题，然后确认它没出现在 `/context` 的历史里
3. 把一段你反复用的提示词做成 `/my-check` 命令，试用一次

## 下一章

[:point_right: 第十六章：Hooks 与安全配置](/guide/4-advanced-usage/16-hooks-security)
