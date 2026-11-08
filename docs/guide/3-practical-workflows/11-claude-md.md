---
title: 第十一章：CLAUDE.md — 给 AI 写说明书
description: 学会创建项目规范文件，让 Claude Code 更懂你的项目
lastVerified: "2026-02-24"
officialDoc: https://code.claude.com/docs/zh-CN/memory
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

## 三种「说明书」：CLAUDE.md、AGENTS.md 和自动记忆

学这章之前先把全貌看清楚。Claude Code 能读的指令文件不止一个：

| 文件 | 作用域 | 适合写什么 |
|---|---|---|
| `./CLAUDE.md` | 当前项目，可提交进 git | 团队共享的技术栈、命令、约定 |
| `./CLAUDE.local.md` | 当前项目，**不提交**（列入 `.gitignore`） | 你个人的偏好 |
| `~/.claude/CLAUDE.md` | 你所有项目 | 跨项目的个人习惯 |
| 子目录里的 `CLAUDE.md` | 只在该子目录干活时加载 | 模块级细那么 |

多层文件会**全部拼起来加载**，不是互相覆盖。

### 已经有 `AGENTS.md`？不用搬家

如果你用 Cursor、Codex、Gemini CLI 之类的工具，仓库里可能已经有 `AGENTS.md` 了。Claude Code **可以直接读它**，不需要改成 `CLAUDE.md`。

它遵循这几条规则：

| 你的仓库里有什么 | Claude 会读什么 |
|---|---|
| 只有 `AGENTS.md` | 读 `AGENTS.md` |
| `AGENTS.md` 和 `CLAUDE.md` 都有 | 只读 `CLAUDE.md` |
| `CLAUDE.md` 里写了 `@AGENTS.md` | 都读（通过导入） |

::: tip 两种工具都要用？更推荐这行
在 `CLAUDE.md` 里写一行导入，一份内容两边共享，不用维护两份：

```markdown
@AGENTS.md
```
:::

::: warning 版本要求
直接读 `AGENTS.md` 需要 Claude Code **v2.1.277 或更高**。比这旧的版本请用上面的 `@` 导入写法。
:::

### 自动记忆：它会自己记笔记

除了你写的文件，Claude Code 还会**自己记笔记**，不需要你动手。它分四类：

| 类型 | 记什么 |
|---|---|
| `user` | 你的角色、专业水平、工作习惯 |
| `feedback` | 你给过的纠正、你确认过的方法 |
| `project` | 在做的事、截止时间、从代码里推不出来的决策 |
| `reference` | 外面哪儿能查到信息（工单系统、看板地址） |

它**不会**记能直接从代码里推出来的东西（架构、文件路径、某个 bug 怎么修的），也不会记 `CLAUDE.md` 已经说过的内容。

- 存储位置：`~/.claude/projects/<项目>/memory/`
- 默认 **开启**；在会话里用 `/memory` 可以开关
- 单项目关闭：设置 `autoMemoryEnabled: false`；全局关闭：环境变量 `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`

::: tip 分工记住这一句
**规则写 `CLAUDE.md`，经验交给自动记忆。** 你想控制的东西必须写进文件（记忆不保证被记、也会被删），它自己摸索出来的东西你不用管。
:::

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

A: 项目根目录的 `CLAUDE.md`（全大写）。个人笔记放 `CLAUDE.local.md`，跨项目习惯放 `~/.claude/CLAUDE.md`。已经有 `AGENTS.md` 的仓库可以直接用它，格式见本章开头的对照表。

**Q: 写多长合适？**

A: 目标 **200 行以内**。太长的文件不仅占上下文，还会降低遵命度——它记不住那么多条。细节拆到子目录的 `CLAUDE.md` 或按路径生效的规则里。

**Q: 怎么快速生成一份？**

A: 在项目里运行 `/init`，它读完代码后生成初稿，然后用 `/memory` 打开编辑。生成的内容不一定全对，删掉不准确的比补上缺的更重要。

**Q: 需要用英文写吗？**

A: 不需要。Claude 支持多语言，用中文写完全没问题。

**Q: 如何在多个项目间共享规则？**

A: 两种做法：一是把通用规则放 `~/.claude/CLAUDE.md`（自动对所有项目生效）；二是在项目 `CLAUDE.md` 里用 `@路径` 导入共用文件：

```markdown
# 个人偏好
@~/.claude/my-conventions.md
```

导入支持嵌套，最多四层。路径含空格时用反斜杠转义（`@Design\ Docs/api.md`）。

**Q: CLAUDE.md 会泄露敏感信息吗？**

A: 可能。建议不要在 CLAUDE.md 中写入密钥、密码等敏感信息。

**Q: 自动记忆会不会乱记东西？**

A: 它只记四类内容，而且跳过能从代码推导的东西。想看看它记了什么，运行 `/memory` 就能查看和删除。不想要就用 `/memory` 里的开关关掉。

**Q: 压缩上下文后，`CLAUDE.md` 会丢吗？**

A: 不会。`CLAUDE.md` 和记忆每次会话重新加载，`/compact` 只压缩对话历史。所以重要规则一定要写进文件，不要只靠嘴说。

## 练习题

1. 给你现有的某个项目创建一个 CLAUDE.md
2. 添加条件指令，定义常用命令的快捷方式
3. 创建一个团队共享的规则模板
4. 如果仓库里已有 `AGENTS.md`，用 `@AGENTS.md` 导入的方式让它生效，确认两边内容一致
5. 运行 `/memory` 看看自动记忆已经记下了什么，删掉一条不准确的

## 下一章

下一章我们会整合前面所学，体验一个完整的日常工作流。

[:point_right: 第十二章：日常工作流实战](/guide/3-practical-workflows/12-realistic-workflow)
