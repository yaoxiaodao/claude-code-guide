---
title: 第十一章：CLAUDE.md — 给 AI 写说明书
description: 学会创建项目规范文件，让 Claude Code 更懂你的项目
---

# 第十一章：CLAUDE.md — 给 AI 写说明书

::: tip 学习目标
学完这章，你会创建自己的 CLAUDE.md 文件，并掌握进阶用法让 Claude Code 更准确地帮助你。
:::

## 什么是 CLAUDE.md

CLAUDE.md 是一个放在项目根目录的配置文件。它用自然语言告诉 Claude 关于你的项目的一切：

- 这个项目是做什么的
- 使用了什么技术栈
- 代码放在哪里
- 有哪些规范和约定
- 常用的命令是什么

当你打开一个项目并启动 Claude Code 时，Claude 会自动读取这个文件，就像拿到了项目说明书。

## 基础用法

### 基本格式

```markdown
# 项目名称

项目简介。

## 技术栈
- 技术1
- 技术2

## 项目结构
- `src/` — 源代码
- `tests/` — 测试文件

## 常用命令
npm run dev    # 开发模式
npm run build  # 构建
```

### 什么时候需要

**需要写的场景：**
- 项目超过一个文件
- 有特殊的技术栈或架构
- 团队有代码规范要求
- 想让 AI 更准确地产出

**可以暂时不写的场景：**
- 简单的单文件脚本
- 临时测试项目
- 一次性数据处理

## 进阶用法

### 1. 条件指令

根据用户说的话自动执行不同的操作：

```markdown
## 快捷指令

当用户说「启动」时：
→ 执行 `npm run dev`

当用户说「测试」时：
→ 执行 `npm test`

当用户说「构建」时：
→ 执行 `npm run build`
```

### 2. 项目约束规则

```markdown
## 开发规范

### 代码约束
- 禁止直接使用 `any` 类型
- 禁止提交未格式化代码
- 所有 API 调用必须有错误处理

### Git 约束
- commit message 必须符合 Conventional Commits
- 禁止强制推送 main 分支
- PR 必须通过 CI 才能合并
```

### 3. 自定义响应格式

```markdown
## 输出格式

### API 文档
当要求生成 API 文档时，使用以下格式：

## 接口名称
- 方法: GET/POST
- 路径: /api/xxx
- 参数: ...
- 返回: ...

### 代码审查
当要求审查代码时，输出以下结构：

## 问题列表
1. [严重] 文件:行号 - 问题描述
2. [中等] ...

## 优化建议
- ...
```

### 4. 技术栈特定指令

```markdown
## React/Next.js 规范

### 组件规则
- 组件文件放在 `components/` 目录
- 使用函数组件，不使用类组件
- 组件名称使用 PascalCase

### 状态管理
- 使用 Zustand 管理全局状态
- 组件内部状态使用 useState
- 避免 prop drilling，超过 3 层用 Context

## TypeScript 规范

### 类型定义
- 使用 interface 而不是 type
- 导出类型加 I 前缀
- 禁止使用 @ts-ignore
```

## 团队协作

### 团队级 CLAUDE.md 模板

```markdown
# 项目名称

## 团队规范

### 分支管理
- `main` - 生产环境
- `develop` - 开发环境
- `feature/*` - 功能分支
- `hotfix/*` - 热修复分支

### 代码审查
- 所有 PR 必须有测试
- 至少 1 人 review
- CI 通过后才能合并

### 发布流程
1. 从 develop 创建 release 分支
2. 测试通过后合并到 main
3. 打 tag 并发布
```

### 多项目共享片段

在 `~/.claude/shared-rules.md` 中定义通用规则：

```markdown
# 通用开发规范

## Git 规范
- 提交前运行测试
- commit message 用中文

## 代码质量
- 无 ESLint 错误
- 无 TypeScript 错误

## 安全
- 不在代码中硬编码密钥
- 使用环境变量
```

然后在项目 CLAUDE.md 中引用：

```markdown
## 通用规范

请同时遵循 ~/.claude/shared-rules.md 中的通用规范。
```

## 高级模式

### 1. 模块级 CLAUDE.md

在子目录创建独立的 CLAUDE.md：

```
src/
├── components/
│   └── CLAUDE.md    # 组件库专用规范
├── hooks/
│   └── CLAUDE.md    # Hooks 规范
└── utils/
    └── CLAUDE.md    # 工具函数规范
```

### 2. 环境特定配置

```markdown
## 开发环境

当环境是 `development` 时：
- 启用详细日志
- 使用 mock 数据
- 允许 console.log

## 生产环境

当环境是 `production` 时：
- 禁用调试日志
- 使用真实 API
- 严格错误处理
```

### 3. 任务特定指令

```markdown
## 任务类型指令

### 重构任务
- 保持原有功能不变
- 编写重构前后对比
- 确保测试全部通过

### 新功能任务
- 先写设计文档
- 编写单元测试
- 更新相关文档

### Bug 修复任务
- 先复现问题
- 编写失败的测试用例
- 修复后确保测试通过
```

## 实际案例

### 案例 1：前端项目

```markdown
# Vue 3 电商后台

这是一个使用 Vue 3 + Element Plus 的后台管理系统。

## 技术栈
- Vue 3.4 + Composition API
- TypeScript 5
- Pinia 状态管理
- Element Plus UI
- Vite 构建

## 项目结构
```
src/
├── api/          # API 接口
├── components/   # 公共组件
├── composables/ # 组合式函数
├── layouts/     # 布局组件
├── router/      # 路由配置
├── stores/      # Pinia stores
├── utils/       # 工具函数
└── views/       # 页面组件
```

## 组件规范
- 组件名用 PascalCase
- props 必须有类型定义
- 组件文件不超过 200 行

## API 规范
- RESTful 风格
- 统一错误处理
- 请求加 loading 状态
```

### 案例 2：Node.js 后端项目

```markdown
# Node.js API 服务

Express + TypeScript 后端 API 服务。

## 技术栈
- Node.js 20
- Express 4
- TypeScript 5
- Prisma ORM
- PostgreSQL

## 项目结构
```
src/
├── controllers/  # 控制器
├── middlewares/   # 中间件
├── models/       # 数据模型
├── routes/       # 路由定义
├── services/     # 业务逻辑
└── utils/        # 工具函数
```

## API 规范
- 统一响应格式: `{ code, data, message }`
- 错误码使用数字
- 分页使用 cursor 或 offset

## 安全规范
- 所有输入验证
- 禁止 SQL 注入
- 使用 prepared statements
```

## 常见问题

**Q: 一定要写吗？**

A: 不是强制的，但写了之后 Claude 的表现会明显提升。它能更快理解你的代码，减少重复解释。

**Q: 写在哪里？**

A: 项目根目录，文件名必须是 `CLAUDE.md`（全大写）。

**Q: 写多少合适？**

A: 从简到繁都可以。一个最基本的 CLAUDE.md 只需要 3-5 行。

**Q: 需要用英文写吗？**

A: 不需要。Claude 支持多语言，用中文写完全没问题。

**Q: 如何在多个项目间共享规则？**

A: 在 `~/.claude/shared-rules.md` 定义通用规则，然后在项目 CLAUDE.md 中引用。

**Q: CLAUDE.md 会泄露敏感信息吗？**

A: 可能。建议不要在 CLAUDE.md 中写入密钥、密码等敏感信息。

## 练习题

1. 给你现有的某个项目创建一个 CLAUDE.md
2. 添加条件指令，定义常用命令的快捷方式
3. 创建一个团队共享的规则模板

## 下一章

下一章我们会整合前面所学，体验一个完整的日常工作流。

[:point_right: 第十二章：日常工作流实战](/guide/3-practical-workflows/12-realistic-workflow)
