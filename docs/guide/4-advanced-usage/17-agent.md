---
title: 第十七章：Agent 模式与代理配置
description: 学会使用 Agent 模式自主完成任务，以及配置代理访问 Claude API
---

# 第十七章：Agent 模式与代理配置

::: tip 学习目标
学完这章，你会熟练使用 Agent 模式自主完成任务，并学会配置代理访问 Claude API。
:::

## Agent 模式

### 什么是 Agent 模式

普通模式下，Claude 每次回复都需要你确认。Agent 模式下，Claude 可以自主决策并执行一系列操作。

```
普通模式：你 → Claude → 你确认 → Claude 执行
Agent 模式：你 → Claude → Claude 自主决策执行 → 完成
```

### 何时使用 Agent 模式

**适合 Agent 模式：**
- 批量重命名文件
- 整理项目结构
- 自动生成测试用例
- 重复性的代码迁移
- 需要多步骤才能完成的任务

**不适合 Agent 模式：**
- 需要精确控制的操作
- 高风险操作（删除、重写）
- 第一次探索不熟悉的代码库

### 启动 Agent 模式

**方法一：命令行参数**

```bash
claude --agent
```

**方法二：斜杠命令**

```
/agent
帮我整理 src 目录，把组件移到 components 文件夹
```

**方法三：在配置中启用**

::: warning 配置仅供参考
Claude Code 的配置文件格式可能随版本变化，请以官方文档为准。当前示例基于社区经验总结。
:::

```json
// ~/.claude/settings.json
{
  "agent": {
    "enabled": true,
    "maxSteps": 10
  }
}
```

### Agent 模式配置

以下配置项为社区经验总结，实际可用选项请参考官方文档：

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| enabled | 是否启用 Agent 模式 | false |
| maxSteps | 最大自主步骤数 | 5 |

::: tip 提示
Agent 模式的完整配置选项和最新说明，请查阅 [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)。
:::

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| enabled | 是否启用 Agent 模式 | false |
| maxSteps | 最大自主步骤数 | 5 |
| confirmBeforeExecute | 执行前是否确认 | true |
| dangerousActions | 高风险操作列表 | [] |

## Agent 模式实战

### 例子一：批量重命名

```
你：/agent
把 src/components 目录下所有 .js 文件改成 .jsx，并更新所有引用

Claude：
（开始自主执行）
1. 扫描 src/components 目录
2. 重命名所有 .js 文件
3. 更新 import 引用
4. 更新配置文件
完成：已将 15 个文件从 .js 重命名为 .jsx
```

### 例子二：项目整理

```
你：/agent
整理这个项目：
1. 把 src/utils 下的函数按功能分类
2. 创建新的目录结构
3. 更新所有导入路径

Claude：
（开始自主执行）
1. 分析现有代码结构
2. 制定整理方案
3. 创建新目录
4. 移动文件
5. 更新所有引用
```

### 例子三：通过代理使用

```bash
# 启动时指定代理
claude --proxy http://127.0.0.1:7890

# 或者设置环境变量
export HTTPS_PROXY=http://127.0.0.1:7890
claude
```

## 高阶 Agent 技巧

### 指定 Agent 行为

```
/agent --max-steps 20 --no-confirm
```

参数说明：
- `--max-steps N` — 最大步骤数
- `--no-confirm` — 不确认直接执行
- `--dry-run` — 模拟运行不实际执行

### Agent 日志

Agent 执行的每一步都会被记录：

```
[Step 1/10] 扫描 src/components 目录
[Step 2/10] 发现 15 个 .js 文件
[Step 3/10] 重命名 Button.js → Button.jsx
...
```

### 取消 Agent

如果 Agent 开始做不正确的事：

```
Ctrl+C
```

会立即停止 Agent 的执行。

## 常见问题

**Q: Agent 模式会不会做危险操作？**

A: 可以配置 `dangerousActions` 来限制危险操作。但建议始终开启确认模式。

**Q: 代理速度慢怎么办？**

A: 尝试不同的代理节点，选择延迟最低的。或者考虑使用国内镜像。

**Q: Agent 模式卡住了怎么办？**

A: 使用 Ctrl+C 取消，然后换一种描述方式重新开始。

**Q: 如何知道 Agent 在做什么？**

A: 每一步操作都会显示日志，方便你追踪和理解。

## 练习题

1. 尝试用 Agent 模式整理一个小项目的文件结构
2. 配置代理，确保 Claude 能正常访问
3. 用 `--dry-run` 参数模拟一次大批量操作

## 继续学习

恭喜你完成了高阶用法篇！接下来进入最后一章。

[:point_right: 第十九章：继续学习之路](../5-next-steps/19-next-steps)
