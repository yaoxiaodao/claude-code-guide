---
title: 第十五章：Command 命令
description: 熟练使用内置命令和自定义命令
---

# 第十五章：Command 命令

::: tip 学习目标
学完这章，你会熟练使用 Claude Code 的内置命令和自定义命令，提高工作效率。
:::

## 命令与 Skill 的区别

很多初学者容易混淆 **命令（Command）** 和 **Skill**：

| 维度 | 命令 (Command) | Skill (技能) |
|------|--------------|-------------|
| **触发方式** | `/命令名` | `/skill名` |
| **实现形式** | 纯文本文件 | 目录 + SKILL.md + 可选代码 |
| **复杂程度** | 简单文本替换 | 复杂 AI 工作流 |
| **适用场景** | 重复文本/指令 | 复杂可复用工作流 |
| **存储位置** | `.claude/commands/` | `.claude/skills/` |

**简单理解**：
- **命令** = 快捷键，快速执行固定文本
- **Skill** = 工具包，封装复杂能力

## 内置命令

输入 `/` 可以看到所有可用命令：

```
/ask      /plan      /review    /test
/complete /rewind    /retry     /clear
```

### 常用内置命令详解

#### 1. `/ask` — 快速提问

直接问一个问题，不需要在代码库上下文中：

```
/ask 什么是 TypeScript 的泛型？
```

**使用场景：**
- 快速查概念
- 临时问答
- 不需要看代码的简单问题

#### 2. `/plan` — 生成任务计划

让 Claude 分析代码库，生成修改计划：

```
/plan
帮我重构 auth 模块，把 session 改成 JWT
```

Claude 会：
1. 分析现有代码结构
2. 生成修改步骤
3. 等待你确认后执行

#### 3. `/review` — 代码审查

对当前分支的代码进行全面审查：

```
/review
```

Claude 会：
1. 检查代码质量问题
2. 发现潜在 bug
3. 给出优化建议

#### 4. `/test` — 生成测试

为当前代码生成测试用例：

```
/test
帮我给这个函数写单元测试
```

#### 5. `/complete` — 标记完成

标记任务完成：

```
/complete
```

#### 6. `/rewind` — 回退对话和文件

同时回退两件事：
1. **对话历史** — 回到之前的某个对话节点
2. **文件状态** — 文件也会恢复到那个节点的样子

改坏了文件不用挨个从 Git 还原，直接 `/rewind` 就能一起退回去。

```
/rewind
```

#### 7. `/retry` — 重试

让 Claude 重新思考刚才的回答：

```
/retry
上一个方案太复杂了，换个简单的
```

#### 8. `/clear` — 清空对话

清空当前对话历史：

```
/clear
```

#### 9. `/init` — 初始化项目

在当前目录创建 Claude Code 配置文件：

```
/init
```

#### 10. `/claude` — 查看版本信息

查看 Claude Code 版本：

```
/claude
```

## 自定义命令

除了内置命令，你还可以创建自定义命令。

### 什么是自定义命令

自定义命令是将常用的文本或指令封装成快捷方式，方便重复使用。

**适用场景**：
- 固定格式的代码模板
- 常用的 Git 操作序列
- 重复性的文本输入

### 创建自定义命令

#### 目录结构

**项目级**（纳入 Git，团队共享）：
```
项目根目录/
└── .claude/
    └── commands/
        └── my-command.md
```

**用户级**（跨项目通用）：
```
~/.claude/
└── commands/
    └── my-command.md
```

#### 命令文件格式

```markdown
# 命令名称
命令描述（可选）

---

你要执行的指令内容
```

### 实际案例

#### 案例 1：代码模板命令

**场景**：快速插入 React 组件模板

**创建** `~/.claude/commands/react-component.md`：

```markdown
# react-component
生成 React 函数组件模板

---

请生成以下格式的 React 函数组件：

```jsx
import React from 'react';

export function ComponentName({ props }) {
  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
}
```

使用 `{ComponentName}` 作为组件名。
```

**使用**：
```
/react-component
Button
```

#### 案例 2：Git 提交命令

**场景**：规范 Git 提交信息格式

**创建** `~/.claude/commands/git-commit.md`：

```markdown
# git-commit
生成规范的 Git 提交信息

---

请根据我刚才的修改生成符合 Conventional Commits 规范的提交信息。
格式：type(scope): description
类型：feat/fix/docs/style/refactor/test/chore
```

**使用**：
```
/git-commit
```

#### 案例 3：项目文档命令

**场景**：快速生成 API 文档模板

**创建** `docs/.claude/commands/api-doc.md`：

```markdown
# api-doc
生成 API 文档模板

---

请为以下 API 生成 Markdown 文档：

## 接口名称
[简要描述]

## 请求方式
GET/POST/PUT/DELETE

## 请求参数
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|

## 响应示例
```json
{
  "code": 0,
  "data": {}
}
```
```

#### 案例 4：测试用例命令

**场景**：快速生成测试文件模板

**创建** `tests/.claude/commands/test-file.md`：

```markdown
# test-file
生成测试文件模板

---

请为 {filename} 生成 Jest 测试文件，使用以下模板：

```javascript
describe('模块名', () => {
  test('测试用例描述', () => {
    // Arrange
    const input = {};
    
    // Act
    const result = functionName(input);
    
    // Assert
    expect(result).toBe(expected);
  });
});
```
```

### 管理自定义命令

| 操作 | 命令 |
|------|------|
| 查看所有命令 | 输入 `/` 查看 |
| 创建新命令 | 在 `.claude/commands/` 目录添加 `.md` 文件 |
| 编辑命令 | 修改对应 `.md` 文件 |
| 删除命令 | 删除对应 `.md` 文件 |

### 命令文件规范

1. **文件名** = 命令名（不含扩展名）
2. **首行** = 命令名称（与文件名一致）
3. **第二行起** = 空行后可写描述
4. **分隔线** `---` 后是执行的指令内容
5. **占位符** 用 `{变量名}` 表示，调用时替换

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

## 常见问题

**Q: `/plan` 和直接说"帮我改"有什么区别？**

A: `/plan` 会先分析代码，生成详细的修改计划，等你确认后再执行。更安全，适合大改动。

**Q: 命令和 Skill 哪个更好用？**

A: 简单重复任务用命令，复杂工作流用 Skill。命令是快捷键，Skill 是工具箱。

**Q: 命令行参数和配置文件哪个优先级高？**

A: 命令行参数 > 配置文件 > 默认值。

## 练习题

1. 输入 `/` 查看所有可用命令
2. 用 `/ask` 问一个简单问题
3. 用 `/review` 审查一段代码
4. 尝试 `/rewind` 回退对话
5. 创建一个简单的自定义命令

## 下一章

恭喜你完成了高阶用法前三章！接下来学习 Hooks 与安全配置。

[:point_right: 第十六章：Hooks 与安全配置](/guide/4-advanced-usage/16-hooks-security)
