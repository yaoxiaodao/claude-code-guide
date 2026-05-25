---
title: 第十五章：Claude 内置命令
description: 学会使用 Claude Code 的斜杠命令和快捷操作
---

# 第十五章：Claude 内置命令

::: tip 学习目标
学完这章，你会熟练使用 Claude Code 的内置命令，提高工作效率。
:::

## 什么是内置命令

Claude Code 有一系列以 `/` 开头的内置命令（也叫斜杠命令）。输入 `/` 可以看到所有可用命令。

```
/ask      /plan      /review    /test
/complete /undo      /retry     /clear
```

## 常用命令详解

### 1. `/ask` — 快速提问

直接问一个问题，不需要在代码库上下文中：

```
/ask 什么是 TypeScript 的泛型？
```

**使用场景：**
- 快速查概念
- 临时问答
- 不需要看代码的简单问题

### 2. `/plan` — 生成任务计划

让 Claude 分析代码库，生成修改计划：

```
/plan
帮我重构 auth 模块，把 session 改成 JWT
```

Claude 会：
1. 分析现有代码结构
2. 生成修改步骤
3. 等待你确认后执行

### 3. `/review` — 代码审查

对当前分支的代码进行全面审查：

```
/review
```

Claude 会：
1. 检查代码质量问题
2. 发现潜在 bug
3. 给出优化建议

### 4. `/test` — 生成测试

为当前代码生成测试用例：

```
/test
帮我给这个函数写单元测试
```

### 5. `/complete` — 标记完成

标记任务完成：

```
/complete
```

### 6. `/undo` — 撤销上一步

撤销 Claude 最近的操作：

```
/undo
```

### 7. `/retry` — 重试

让 Claude 重新思考刚才的回答：

```
/retry
上一个方案太复杂了，换个简单的
```

### 8. `/clear` — 清空对话

清空当前对话历史：

```
/clear
```

### 9. `/init` — 初始化项目

在当前目录创建 Claude Code 配置文件：

```
/init
```

### 10. `/claude` — 查看版本信息

查看 Claude Code 版本：

```
/claude
```

## 命令行参数

除了斜杠命令，还可以在启动时加参数：

### 基本参数

| 参数 | 说明 | 示例 |
|------|------|------|
| `-p, --print` | 只输出结果，不交互 | `claude -p "解释这段代码"` |
| `-c, --cached` | 使用缓存的对话 | `claude -c` |
| `--model` | 指定模型 | `claude --model opus` |

### Agent 模式

```
claude --agent
```

让 Claude 自主决策和执行多步骤任务。

### 指定项目目录

```
claude /path/to/project
```

在指定目录启动 Claude Code。

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 中断当前操作 |
| `Ctrl+D` | 退出 Claude |
| `Ctrl+L` | 清空屏幕 |
| `↑` / `↓` | 切换历史命令 |

## 环境变量

### CLAUDE_API_KEY

设置 API Key（也可以用 `claude --local` 交互式设置）：

```bash
export CLAUDE_API_KEY=your-api-key
```

### CLAUDE_BASE_URL

使用代理或自定义端点：

```bash
export CLAUDE_BASE_URL=https://your-proxy.com
```

### CLAUDE_MODEL

指定默认模型：

```bash
export CLAUDE_MODEL=opus
```

## 配置文件

在项目根目录创建 `.claude.json` 可以配置项目级设置：

```json
{
  "model": "sonnet",
  "maxTokens": 4096,
  "temperature": 0.7
}
```

## 常见问题

**Q: `/plan` 和直接说"帮我改"有什么区别？**

A: `/plan` 会先分析代码，生成详细的修改计划，等你确认后再执行。更安全，适合大改动。

**Q: 可以自定义斜杠命令吗？**

A: 可以，通过 Skill 系统可以添加自定义命令。

**Q: 命令行参数和配置文件哪个优先级高？**

A: 命令行参数 > 配置文件 > 默认值。

## 练习题

1. 输入 `/` 查看所有可用命令
2. 用 `/ask` 问一个简单问题
3. 用 `/review` 审查一段代码
4. 尝试 `/undo` 撤销刚才的操作

## 下一章

恭喜你完成了高阶用法前三章！接下来学习 Plugin 插件系统。

[:point_right: 第十六章：Plugin 插件系统](/guide/4-advanced-usage/16-plugin)
