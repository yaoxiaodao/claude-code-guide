---
title: 第十四章：Skill 的安装与使用
description: 学会使用 Claude Code 的 Skill 扩展增强功能
---

# 第十四章：Skill 的安装与使用

::: tip 学习目标
学完这章，你会安装和使用 Skill 扩展，增强 Claude Code 的能力。
:::

## 什么是 Skill

Skill（技能扩展）是 Claude Code 的插件系统。你可以把它理解为"给 Claude 添加的超能力"。

例如：
- `browse` skill：让 Claude 能够浏览网页
- `review` skill：增强代码审查能力
- `design` skill：生成 UI 设计稿

## 官方常用 Skill

### 1. Browse Skill

让 Claude 能够在浏览器中打开网页、截图、填写表单。

```bash
claude skill install browse
```

**使用场景：**
- 打开网站并截图
- 自动化网页测试
- 填写网页表单

### 2. Review Skill

增强代码审查能力，自动检查代码质量、安全漏洞。

```bash
claude skill install review
```

**使用场景：**
- 代码审查
- 发现潜在 bug
- 安全漏洞扫描

### 3. Design Skill

生成 UI 设计稿和原型图。

```bash
claude skill install design
```

**使用场景：**
- 生成网站设计稿
- 创建移动端界面原型
- 制作对比图

### 4. QA Skill

自动化 QA 测试，验证功能是否正常。

```bash
claude skill install qa
```

**使用场景：**
- 端到端测试
- 回归测试
- 自动化验收

## 安装 Skill

### 基本安装

```bash
# 安装官方 skill
claude skill install <skill-name>

# 例如安装 browse
claude skill install browse
```

### 查看已安装的 Skill

```bash
claude skill list
```

### 更新 Skill

```bash
claude skill update <skill-name>
```

### 卸载 Skill

```bash
claude skill uninstall <skill-name>
```

## 使用 Skill

安装后，在对话中直接使用：

```
你：@browse 打开 github.com 并截图
Claude：
（使用 browse skill 打开网页并截图）
```

或者在命令行使用：

```bash
claude --skill browse "打开 github.com 并截图"
```

## 社区 Skill

除了官方 Skill，还有社区维护的扩展：

### 常用社区 Skill

| Skill 名称 | 功能 | 安装命令 |
|-----------|------|---------|
| claude-code-review | 增强代码审查 | `claude skill install claude-code-review` |
| api-designer | API 设计 | `claude skill install api-designer` |
| db-migration | 数据库迁移 | `claude skill install db-migration` |

### 查找更多 Skill

访问 [claude.ai/code/skills](https://claude.ai/code/skills) 查看完整列表。

## 自定义 Skill

如果你有编程能力，可以自己写 Skill。

### Skill 的基本结构

```
my-skill/
├── manifest.json    # Skill 元信息
├── src/
│   └── index.ts    # Skill 逻辑
└── README.md       # 使用说明
```

### manifest.json 示例

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "description": "我的自定义技能",
  "commands": [
    {
      "name": "greet",
      "description": "打招呼",
      "handler": "greet"
    }
  ]
}
```

## 常见问题

**Q: Skill 和 MCP 有什么区别？**

A: MCP 是让 Claude 连接外部工具，Skill 是给 Claude 添加新能力。简单说：MCP 是"把手伸到外面"，Skill 是"长出新技能"。

**Q: Skill 安全吗？**

A: 官方 Skill 经过审核。社区 Skill 使用前建议查看源码。

**Q: 可以同时使用多个 Skill 吗？**

A: 可以，Claude Code 支持同时启用多个 Skill。

## 练习题

1. 安装 `browse` skill
2. 让 Claude 打开一个网页并截图
3. 尝试安装 `review` skill 体验代码审查

## 下一章

下一章我们会学习 Claude Code 内置的命令。

[:point_right: 第十五章：Claude 内置命令](/guide/4-advanced-usage/15-builtin-commands)
