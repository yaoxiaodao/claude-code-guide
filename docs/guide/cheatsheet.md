---
title: 快速参考
description: Claude Code 常用命令、快捷键、配置速查
---

# Claude Code 快速参考

::: tip 随时查阅
忘了就来这里查。全部条目都已按当前版本校对过。
:::

## 会话里最常用的 8 个命令

| 命令 | 用途 | 什么时候按 |
|---|---|---|
| `/init` | 生成 `CLAUDE.md` | 第一次进项目 |
| `/context` | 看上下文占用 | 变慢、变糊涂的时候 |
| `/compact` | 压缩对话历史 | 同一任务聊太长了 |
| `/clear` | 清空对话（保留项目记忆） | 换任务 |
| `/rewind` | 回滚代码 + 对话 | 改坏了 |
| `/diff` | 看当前改动的差异面板 | 提交前 |
| `/code-review` | 审查当前分支改动 | 提交前（`/review` 是它的别名） |
| `/plan` | 进入计划模式 | 大改动之前 |

## 会话管理

| 命令 | 用途 |
|---|---|
| `claude --continue` | 接着当前目录最近一次会话 |
| `claude --resume` | 打开会话列表挑一个 |
| `/resume` | 在会话内切换到另一个会话 |
| `/branch` | 从当前对话分叉，试另一个方向 |
| `/subtask <任务>` | 分叉去干旁支活，主对话继续 |
| `/fork` | 复制对话到后台会话 |
| `/recap` | 生成当前会话的一句话摘要 |
| `/export` | 导出对话为文本 |
| `/exit` | 退出 |

## 权限与安全

| 命令 / 按键 | 用途 |
|---|---|
| `Shift + Tab` | 循环权限模式：auto → manual → accept edits → plan |
| `/permissions` | 管理 allow / ask / deny 规则 |
| `/sandbox` | 配置 Bash 沙箱（目录与网络白名单） |

五种模式速记：

- **auto**（默认）— 安全的自己做，危险的问你
- **manual**（`default`）— 每条都问
- **acceptEdits** — 改文件不问
- **plan** — 只出方案，不改代码
- **bypassPermissions** — 全不问，只在容器里用

## 上下文与成本

| 命令 | 用途 |
|---|---|
| `/context` | 上下文占用明细，找浪费 |
| `/compact [重点]` | 压缩历史，可指定保留重点 |
| `/usage` | 额度用量（`/cost` 是其别名） |
| `/autocompact` | 调整自动压缩的触发窗口 |
| `/status` | 当前模型、配置等状态 |

## 模型与推理强度

```bash
/model sonnet          # 切模型：best / fable / opus / sonnet / haiku
/effort high           # 推理强度：low → medium → high → xhigh → max
```

::: tip 别记具体版本号
模型会持续更新，用别名（`opus` / `sonnet` / `haiku`）就不会过时。
:::

## 扩展

| 命令 | 用途 |
|---|---|
| `/memory` | 编辑 `CLAUDE.md`、查看自动记忆 |
| `/hooks` | 查看 hook 配置 |
| `/mcp` | 管理 MCP 服务器连接与授权 |
| `@"名字 (agent)"` | 点名派某个 subagent |
| `claude --agent <名字>` | 整个会话以某个 subagent 身份运行 |
| `claude --worktree <名>` | 在独立 git worktree 里开会话 |

## 常用 Prompt 模板

### 代码审查

```
/code-review --fix
重点关注：安全漏洞、潜在的 bug
```

### 大改动前的计划

```
/plan 把 auth 模块从 session 改成 JWT，列出涉及文件和迁移步骤，先别改
```

### 不需要进历史的旁支问题

```
/btw 这个项目为什么用 pnpm 而不是 npm？
```

### 批量操作（先要清单）

```
把 src/components 下所有 .js 改成 .jsx 并更新引用。
先列出要改的文件清单和影响范围，等我确认再动手。
```

### 让它自己验收

```
改完后跑 npm test 和 npm run lint，全绿了再告诉我
```

## 快捷键

| 快捷键 | 功能 |
|---|---|
| `Esc` | 中断当前生成 |
| `Esc` `Esc` | 打开回滚菜单（等同 `/rewind`） |
| `Shift + Tab` | 切换权限模式 |
| `Ctrl + C` | 中断 / 连按两次退出 |
| `Ctrl + D` | 退出 |
| `Ctrl + G` | 把计划拉到编辑器里改 |
| `Ctrl + L` | 清屏 |
| `↑` / `↓` | 历史命令 |
| `@` | 引用文件 |
| `!` | 直接执行 shell 命令 |

## 环境变量

| 变量 | 说明 | 示例 |
|---|---|---|
| `ANTHROPIC_BASE_URL` | 自定义 API 端点（中转用） | `https://api.minimaxi.com/anthropic` |
| `ANTHROPIC_AUTH_TOKEN` | 中转服务的密钥 | `sk-...` |
| `ANTHROPIC_API_KEY` | 官方 API 密钥 | `sk-ant-...` |
| `ANTHROPIC_MODEL` | 默认模型 | `MiniMax-M3` |
| `CLAUDE_CONFIG_DIR` | 独立配置目录（多账号并行） | `~/.claude-work` |
| `DISABLE_AUTOUPDATER` | 关闭自动更新检查 | `1` |

::: warning 别记错名字
前缀是 **`ANTHROPIC_`**，不是 `CLAUDE_`。把它写进 `~/.claude/settings.json` 的 `env` 字段可以永久生效。
:::

## 命令行参数

| 参数 | 说明 |
|---|---|
| `claude` | 交互式启动 |
| `claude -p "..."` | 非交互模式，输出后退出（可管道输入） |
| `claude --continue` | 接着上次会话 |
| `claude --resume` | 从列表恢复会话 |
| `claude --model opus` | 指定模型 |
| `claude --permission-mode plan` | 指定启动权限模式 |
| `claude --worktree <名>` | 在独立 worktree 里开 |
| `claude --chrome` | 启用浏览器集成 |
| `claude doctor` | 体检安装与配置 |
| `claude update` | 升级到最新版 |
| `claude auth login` | 登录 |

## 文件操作技巧

- **直接指定位置**：`修改 src/utils/auth.ts 中的登录函数`
- **描述你要做什么**：`在 components 目录新建一个 Button 组件`
- **让它自己找**：`找出项目里所有使用 fetch 的地方`
- **精确引用**：`@src/auth/login.ts 这里的超时是怎么设的？`

## 调试技巧

- **贴完整错误**：直接粘贴报错全文和触发命令
- **先要解释**：`先解释这个报错的原因，别改代码`
- **给验收标准**：`修完后跑 npm test，把失败的那条贴给我看`
- **卡住就回滚**：`/rewind` 比硬着头皮改快得多

---

[:point_left: 返回首页](/)　　[:point_right: 开始学习](/guide/1-getting-started/1-what-is-claude-code)
