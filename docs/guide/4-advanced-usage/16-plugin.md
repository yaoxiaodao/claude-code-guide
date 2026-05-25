---
title: 第十六章：Plugin 插件系统
description: 深入了解 Claude Code 的插件系统及开发方法
---

# 第十六章：Plugin 插件系统

::: tip 学习目标
学完这章，你会理解 Claude Code 的插件架构，知道如何安装、使用和开发插件。
:::

## 什么是 Plugin

Plugin（插件）是扩展 Claude Code 功能的另一种方式。与 Skill 不同，Plugin 更偏向于底层系统集成。

简单理解：
- **Skill** — 增加新能力（浏览网页、生成设计图）
- **Plugin** — 扩展底层功能（自定义命令、新文件类型支持）

## 官方插件

### 1. GitHub Plugin

增强 GitHub 集成能力：

```bash
claude plugin install github
```

**功能：**
- 自动生成符合规范的 commit message
- 智能创建 PR 描述
- 代码审查意见自动同步

### 2. Docker Plugin

Docker 环境支持：

```bash
claude plugin install docker
```

**功能：**
- 容器内直接运行 Claude
- 多容器项目管理
- 自动环境隔离

### 3. Terminal Plugin

增强终端能力：

```bash
claude plugin install terminal
```

**功能：**
- 多终端会话管理
- 自动命令补全
- 历史命令智能搜索

## 安装插件

### 基本命令

```bash
# 安装插件
claude plugin install <plugin-name>

# 查看已安装插件
claude plugin list

# 更新插件
claude plugin update <plugin-name>

# 卸载插件
claude plugin uninstall <plugin-name>
```

### 配置文件

在 `~/.claude/plugins.json` 中管理插件：

```json
{
  "plugins": [
    "github",
    "docker",
    "terminal"
  ],
  "settings": {
    "github": {
      "defaultBranch": "main",
      "autoReview": true
    }
  }
}
```

## 开发自定义插件

### 插件项目结构

```
my-plugin/
├── manifest.json        # 插件元信息
├── src/
│   ├── index.ts       # 入口文件
│   ├── commands/      # 命令实现
│   └── hooks/         # 钩子函数
└── README.md
```

### manifest.json 示例

```json
{
  "name": "my-custom-plugin",
  "version": "1.0.0",
  "description": "我的自定义插件",
  "author": "your-name",
  "commands": [
    {
      "name": "hello",
      "description": "打招呼命令",
      "handler": "hello"
    }
  ],
  "hooks": {
    "onMessage": "handleMessage"
  }
}
```

### 入口文件示例

```typescript
// src/index.ts

export const hello = async (args: string[]) => {
  const name = args[0] || 'World';
  return `Hello, ${name}!`;
};

export const handleMessage = async (message: string) => {
  // 消息处理钩子
  if (message.includes('hello')) {
    return 'Hello! How can I help you?';
  }
  return null; // 返回 null 表示不拦截
};
```

## 插件市场

访问 [claude.ai/code/plugins](https://claude.ai/code/plugins) 浏览更多插件。

## 常见问题

**Q: Plugin 和 Skill 哪个更好用？**

A: 如果只是增加功能，Skill 更简单。如果需要深度系统集成，Plugin 更灵活。

**Q: 插件会影响性能吗？**

A: 会的。每个插件都会占用一定内存。按需安装，不要安装太多。

**Q: 如何调试插件？**

A: 使用 `claude plugin dev <plugin-name>` 进入调试模式。

## 练习题

1. 查看官方有哪些可用插件
2. 安装一个你感兴趣的插件并使用
3. 尝试开发一个简单的自定义插件

## 下一章

下一章我们会学习 Agent 模式，了解如何使用代理。

[:point_right: 第十七章：Agent 模式](/guide/4-advanced-usage/17-agent)
