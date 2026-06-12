---
title: 快速参考
description: Claude Code 常用命令和技巧速查
---

# Claude Code 快速参考

::: tip 随时查阅
这个页面汇集了最常用的命令和技巧，忘了就来这里查。
:::

## 斜杠命令

| 命令 | 用途 | 使用场景 |
|------|------|----------|
| `/review` | 代码审查 | 检查当前分支的代码质量 |
| `/plan` | 制定任务计划 | 让 Claude 分析后生成执行计划 |
| `/ask` | 快速提问 | 不需要代码上下文的问题 |
| `/compact` | 压缩上下文 | 对话太长时减少 token 消耗 |
| `/rewind` | 回退对话 | 回到之前的对话节点 |
| `/diff` | 查看代码变更 | 查看当前会话的所有修改 |
| `/clear` | 清空对话 | 开始新的对话 |
| `/init` | 初始化项目 | 生成 CLAUDE.md 项目规范 |

## 常用 Prompt 模板

### 代码审查
```
/review
重点关注：安全漏洞、潜在的 bug、性能问题
```

### 重构计划
```
/plan
帮我重构 auth 模块，把 session 改成 JWT 认证
```

### 快速解释
```
/ask 什么是 TypeScript 的 interface 和 type 的区别？
```

### 批量重命名（Agent 模式）
```
/agent
把 src/components 目录下所有 .js 文件改成 .jsx，并更新所有引用
```

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 中断当前操作 |
| `Ctrl+D` | 退出 Claude Code |
| `Ctrl+L` | 清空屏幕 |
| `↑` / `↓` | 切换历史命令 |

## 环境变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `CLAUDE_API_KEY` | API 密钥 | `sk-...` |
| `CLAUDE_BASE_URL` | 自定义端点 | `https://api.minimaxi.com/anthropic` |
| `CLAUDE_MODEL` | 默认模型 | `MiniMax-M3` |

## 命令行参数

| 参数 | 说明 |
|------|------|
| `claude -p "..."` | 非交互模式，只输出结果 |
| `claude -c` | 使用缓存的对话 |
| `claude --agent` | 启动 Agent 模式 |
| `claude --model opus` | 指定模型 |

## 文件操作技巧

- **直接告诉它位置**：`修改 src/utils/auth.ts 中的登录函数`
- **描述你要做什么**：`在 components 目录新建一个 Button 组件`
- **让它自己找**：`帮我找到这个项目中所有使用 fetch 的地方`

## 调试技巧

- **复制错误信息**：直接粘贴完整的错误日志
- **问原因**：`这个报错是什么意思？`
- **问修复**：`如何修复这个错误？`
- **分步骤**：`先帮我理解这个错误，然后告诉我怎么修`

---

[:point_left: 返回首页](/)　　[:point_right: 开始学习](/guide/1-getting-started/1-what-is-claude-code)
