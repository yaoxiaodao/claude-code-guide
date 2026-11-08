# AGENTS.md

> AI 编程助手与人类开发者的共同开发规范，由 pi-init 生成，请结合实际修订。

## 1. 项目概述

Claude Code 中文渐进式教程网站，面向零基础用户，从"什么是 Claude Code"讲到 MCP、Skill、Hooks、Agent 等高阶用法，共 19 章。站点由 VitePress 构建为静态站点，推送 `master` 分支后经 GitHub Actions 自动部署到 GitHub Pages（镜像仓库在 Gitee）。

**核心技术栈**

| 类别 | 技术 |
| --- | --- |
| 静态站点框架 | VitePress `^1.5.0` |
| UI 运行时 | Vue `^3.5.0` |
| 包管理 | npm（`package-lock.json` 为主，CI 用 `npm ci`） |
| 部署 | GitHub Actions → GitHub Pages |
| 语言 | Markdown 内容 + TypeScript 配置（`config.ts`、`theme/index.ts`） |

项目**没有** ESLint / Prettier / TypeScript 配置文件，也**没有**测试框架。质量闸口只有一个：`npm run docs:build` 通过且无 dead links。

## 2. 快速命令

```bash
# 安装依赖
npm install

# 本地开发（热更新，http://localhost:5173）
npm run docs:dev

# 生产构建（唯一的质量闸口，必须通过）
npm run docs:build

# 预览构建产物
npm run docs:preview
```

| 任务 | 命令 | 备注 |
| --- | --- | --- |
| 安装依赖 | `npm install` | 使用 npm，不要混用 pnpm/yarn |
| 本地启动 | `npm run docs:dev` | VitePress dev server |
| 构建 | `npm run docs:build` | 输出到 `docs/.vitepress/dist/` |
| 预览 | `npm run docs:preview` | 验证构建结果 |
| 测试 | 待补充 | 项目无测试框架 |
| Lint / 格式化 | 待补充 | 项目无 lint、格式化配置 |

⚠️ `package.json` 中的 `push` 脚本（`git add -A && git commit -m 'chore: update' && git push ...`）会产生空泛提交信息并直接推两个远端。**不要用它**，按第 6 节手动提交。

## 3. 目录结构说明

```
.
├── docs/
│   ├── index.md                    # 首页（layout: home，hero + features）
│   ├── guide/                      # 教程正文，按篇章分目录
│   │   ├── 1-getting-started/      # 入门篇 第 1-4 章
│   │   ├── 2-basic-usage/          # 基础篇 第 5-7 章
│   │   ├── 3-practical-workflows/  # 实战篇 第 8-12 章
│   │   ├── 4-advanced-usage/       # 高阶篇 第 13-18 章
│   │   ├── 5-next-steps/           # 继续学习 第 19 章
│   │   └── cheatsheet.md           # 速查表
│   ├── public/logo.svg             # 原样拷贝到站点根的资源
│   ├── image/                      # 正文引用的图片
│   └── .vitepress/
│       ├── config.ts               # 站点配置：base、nav、sidebar、搜索、editLink
│       ├── theme/index.ts           # 主题入口，extends DefaultTheme
│       ├── theme/style.css         # 设计系统落地：配色、字体、代码高亮
│       ├── cache/                  # 构建缓存（git 忽略）
│       └── dist/                   # 构建产物（已纳入 git，见第 5 节）
├── DESIGN.md                       # 设计系统规范（配色、字体、间距的唯一来源）
├── CLAUDE.md                       # Claude Code 工作说明
├── .github/workflows/deploy.yml    # push master → 构建 → 部署 Pages
└── README.md                       # 项目简介与在线地址
```

**关键入口文件**

- `docs/.vitepress/config.ts` —— 新增章节必须在这里注册 `nav` 和 `sidebar`，否则页面不可达
- `docs/.vitepress/theme/style.css` —— 所有视觉改动集中于此，不要在 Markdown 里写内联样式
- `docs/index.md` —— 首页，`base: '/claude-code-guide/'` 决定所有绝对链接前缀

## 4. 代码风格与规范

### Markdown 内容（主要工作量）

- 每篇文章必须带 frontmatter，至少 `title` + `description`：
  ```markdown
  ---
  title: 第九章：代码审查和优化
  description: 一句话说明本章解决什么问题
  ---
  ```
- 一级标题 `#` 只出现一次，与 frontmatter `title` 一致；正文用 `##` / `###`
- 每章开头用提示框写学习目标：`::: tip 学习目标` … `:::`
- 警示、易错点用 `::: warning` / `::: danger`
- 面向零基础读者：先解释"为什么"，再给命令，最后给可复制的最小示例
- 中文排版：中英文之间留空格，代码、命令、路径全部放进反引号

### 文件与命名约定

- 章节文件名 `{序号}-{kebab-case-slug}.md`，序号与章节号对应
  - ⚠️ 现存不一致：第 1-7 章为 `1-`/`2-`…，第 8-19 章为 `08-`/`09-`…（两位数）。**修改已有文件时保持原名，新增章节沿用所在目录的现有风格**，不要为了整齐重命名（会破坏外部链接与搜索索引）
- 每个章节目录内有 `index.md` 作为该篇的落地页
- 目录名 `{序号}-{kebab-case}`，如 `4-advanced-usage`

### TypeScript / CSS

- `config.ts` 使用 `defineConfig`，不引入额外抽象层
- 缩进 2 空格，单引号，语句不加分号（与现有文件一致）
- 样式优先覆盖 VitePress CSS 变量（`--vp-c-brand-*` 等），不硬编码重复色值；颜色来源见 `DESIGN.md`

### 设计系统（不可随意偏离）

橙色主色 `#F97316`、米白背景 `#FFFBF7`、代码高亮淡黄 `#E8C47C`；标题 Noto Serif SC、正文 Noto Sans SC、代码 JetBrains Mono。改动设计前先读 `DESIGN.md`。

## 5. 禁止规则（NEVER Rules）

- 🚫 **不要手改 `docs/.vitepress/dist/`**。它虽然被 git 跟踪，但只能用 `npm run docs:build` 生成；手改会在下次构建时被覆盖，且 CI 用 `npm ci` 重新构建部署，手改内容不会上线。
- 🚫 **不要手改 `node_modules/`、`docs/.vitepress/cache/`**。前者是依赖，后者是构建缓存，都在 `.gitignore` 中。
- 🚫 **不要随意修改锁文件**。`package-lock.json` 只在依赖变更时通过 `npm install <pkg>` 更新；`pnpm-lock.yaml` 是历史遗留，不要用它装包，也不要手动编辑。
- 🚫 **不要混用包管理器**。CI 执行 `npm ci`，仓库只用 npm。
- 🚫 **不要在代码或文档中硬编码真实 API Key、Token、账号密码**。教程示例统一用 `sk-xxxx` 或 `<your-api-key>` 占位。
- 🚫 **不要跳过构建验证就提交**。每次提交前必须 `npm run docs:build` 通过，无 dead links。
- 🚫 **不要在未注册 nav/sidebar 的情况下新增页面**——用户点不到，等同于不存在。
- 🚫 **不要执行 `npm run push`**，也不要未经用户明确指示 `git push`。
- 🚫 **不要删除 `.github/workflows/deploy.yml` 中的 `path: docs/.vitepress/dist`**，这是部署产物路径。
- ⚠️ 不要修改 `base: '/claude-code-guide/'`。改错会导致线上所有资源 404，本地 dev 却正常。
- 🚫 不要提交 `.idea/`、`.DS_Store`、`.claude/` 等本地环境文件（已在 `.gitignore` 中，保持不被跟踪）。
- ✅ 提交前自查：`git status` 是否只包含预期的 `.md` / `config.ts` / `style.css` / `dist` 变更。

## 6. Git 工作流

**分支策略**

- 主分支 `master`，直接提交（无 PR 流程，单人维护）
- 两个远端：`github`（`yaoxiaodao/claude-code-guide`，Pages 部署源）与 `origin`（Gitee 镜像）
- 默认**只提交本地**。仅在用户明确说"推送 / push / 推送到远端"时才 `git push`；推远端时确认推哪个（`github` / `origin` / 两者）

**提交信息规范（Conventional Commits，与现有历史一致）**

```
<type>: <简短描述，中文即可>

fix: use VitePress built-in local search instead of incompatible plugin
feat: add cheat sheet, local search, and enhanced chapter 9
docs: rebuild with updated installation and skills content
chore: bump vitepress to 1.6.0
```

- 常用 type：`feat`（新章节/新功能）、`fix`（错误修正）、`docs`（正文内容调整）、`chore`（构建、依赖、配置）、`style`（仅样式）
- 描述聚焦"改了什么"，不超过 60 字符，不加句号

**提交前检查清单**

1. `npm run docs:build` 通过
2. 新增页面已在 `config.ts` 的 `nav` + `sidebar` 注册
3. `git status` 无意外文件（尤其无 `.DS_Store`、`.idea/`）

## 7. 常见任务指南

### 新增一章教程（约 40-90 分钟）

1. 确定所属篇目目录，如 `docs/guide/4-advanced-usage/`
2. 按目录现有命名风格创建文件，如 `19-new-topic.md`
3. 写 frontmatter（`title` + `description`）+ 学习目标提示框 + 正文
4. 在 `docs/.vitepress/config.ts` 的对应 `sidebar` 数组追加条目
5. 如需顶部导航入口，同步更新 `nav`
6. `npm run docs:dev` 目视检查，然后 `npm run docs:build`
7. 提交：`git add docs && git commit -m 'feat: add chapter about X'`

### 修改视觉样式

1. 读 `DESIGN.md` 确认是否已有约定
2. 只改 `docs/.vitepress/theme/style.css`，优先覆盖 CSS 变量
3. `npm run docs:dev` 验证浅色/深色两种模式
4. 涉及新色值时先更新 `DESIGN.md`，再改 CSS

### 添加图片

1. 图片放 `docs/image/`（正文引用）或 `docs/public/`（需要根路径访问的资源）
2. 正文引用用相对路径或 `base` 前缀的绝对路径，避免 `/image/x.png` 这种忽略 base 的写法
3. 图片尽量压缩；`docs/image/` 已有大图，注意仓库体积

### 调试构建问题

- **dead link 报错**：VitePress 会列出死链路径，检查 `config.ts` 的 link 是否缺少 `/` 开头或指向了不存在的文件
- **样式不生效**：`docs/.vitepress/cache/` 可能是旧缓存，删除后重跑 `npm run docs:dev`
- **线上 404 但本地正常**：几乎总是 `base` 配置或 Markdown 中的绝对路径缺少 `/claude-code-guide/` 前缀
- **GitHub Actions 失败**：先看 `npm ci` 是否因锁文件与 `package.json` 不同步而失败，本地跑一次 `npm install` 再提交更新后的 `package-lock.json`

### 新增依赖

```bash
npm install <package>          # 运行时依赖
npm install -D <package>       # 开发依赖（VitePress 相关通常放这里）
```

提交时同时包含 `package.json` 与 `package-lock.json`。引入影响构建产物的依赖后，务必提交重新生成的 `docs/.vitepress/dist/`。
