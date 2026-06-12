---
title: 第十四章：Skill 的安装与使用
description: 学会使用 Claude Code 的 Skill 技能扩展
---

# 第十四章：Skill 的安装与使用

::: tip 学习目标
学完这章，你会安装和使用 Skill 技能扩展，增强 Claude Code 的能力。
:::

## 什么是 Skill

Skill（技能）是 Claude Code 的扩展包，每个 Skill 封装了特定领域的工作能力。

**简单理解**：
- Skill = 工具包，给 Claude 添加专业技能
- 不同于 MCP（连接外部服务），Skill 更像是内置的工作流助手

**常见 Skill 示例**：
- `browse`：网页浏览和截图
- `review`：代码审查
- `design`：UI 设计生成
- `qa`：自动化测试

## 安装与管理

### 查找 Skill

访问 [claude.ai/code/skills](https://claude.ai/code/skills) 查看官方和社区 Skill 列表。

### 安装 Skill

在 Claude Code 对话界面中直接操作，或通过命令行：

```bash
# 在对话中输入
/install browse

# 或使用 skills 子命令
claude skills install browse
```

### 查看已安装的 Skill

在 Claude Code 中输入 `/skills` 查看所有已安装的技能。

### 卸载 Skill

删除 `~/.claude/skills/<skill-name>/` 目录即可。

## 使用 Skill

### 在对话中触发

```
你：@browse 打开 github.com 并截图
Claude：
（使用 browse skill 打开网页并截图）
```

### 命令行使用

```bash
claude --skill browse "打开 github.com 并截图"
```

## 常用 Skill 推荐

### 1. Browse Skill

让 Claude 具备网页浏览能力：

```bash
claude skills install browse
```

**使用场景**：
- 打开网站并截图
- 自动化网页测试
- 填写网页表单

### 2. Review Skill

增强代码审查能力：

```bash
claude skills install review
```

**使用场景**：
- 代码审查
- 发现潜在 bug
- 安全漏洞扫描

### 3. Design Skill

生成 UI 设计稿：

```bash
claude skills install design
```

**使用场景**：
- 生成网站设计稿
- 创建移动端界面原型
- 制作对比图

### 4. QA Skill

自动化 QA 测试：

```bash
claude skills install qa
```

**使用场景**：
- 端到端测试
- 回归测试
- 自动化验收

## 自定义 Skill

### 目录结构

```
~/.claude/skills/
└── my-skill/
    └── SKILL.md    # Skill 定义文件
```

### SKILL.md 格式

```markdown
---
name: my-skill
description: 我的自定义技能
---

# 我的自定义技能

## 功能说明
这是技能的详细描述。

## 使用方法
`/my-skill [参数]`

## 示例
输入：
```
/my-skill hello
```
```

### 手动安装社区 Skill

```bash
# 1. 创建目录
mkdir -p ~/.claude/skills

# 2. 下载 Skill
git clone https://github.com/user/claude-skill.git /tmp/my-skill

# 3. 复制到 skills 目录
cp -r /tmp/my-skill ~/.claude/skills/
```

## 常见问题

**Q: Skill 和 MCP 有什么区别？**

A: MCP 是让 Claude 连接外部工具（如数据库、GitHub API），Skill 是给 Claude 添加预定义的工作流能力。打个比方：MCP 是"让 Claude 能用筷子"，Skill 是"直接喂饭给 Claude 吃"。

**Q: 安装命令中的 @anthropics 是什么？**

A: 这是命名空间，标识 Skill 的发布来源。官方 Skill 用 `@anthropics`，社区 Skill 用作者的用户名。

**Q: Skill 安全吗？**

A: 官方 Skill 经过审核。社区 Skill 使用前建议查看源码确认没有恶意行为。

**Q: 可以同时使用多个 Skill 吗？**

A: 可以，Claude Code 支持同时启用多个 Skill。

## 练习题

1. 安装 `browse` skill
2. 让 Claude 打开一个网页并截图
3. 尝试安装 `review` skill 体验代码审查

## 下一章

下一章我们会学习 Claude Code 的内置命令。

[:point_right: 第十五章：claude 命令](/guide/4-advanced-usage/15-builtin-commands)
