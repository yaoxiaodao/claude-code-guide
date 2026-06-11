# CLAUDE.md

本文件为 Claude Code（claude.ai/code）在本仓库工作时提供指导。

## 项目概述

Claude Code 中文渐进式教程，一个面向零基础用户的 VitePress 静态网站。技术栈：VitePress + GitHub Pages + GitHub Actions CI/CD。

## 常用命令

```bash
npm run docs:dev      # 本地开发，实时预览
npm run docs:build     # 构建生产版本
npm run docs:preview   # 预览构建结果
```

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress 配置（导航、侧边栏、base 路径）
│   ├── dist/              # 构建产物（已纳入 git）
│   └── theme/
│       ├── index.ts        # 主题入口
│       └── style.css       # 自定义样式（配色、字体、代码高亮）
├── guide/                  # 教程内容
│   ├── 1-getting-started/  # 入门篇（4章）
│   ├── 2-basic-usage/      # 基础使用篇（3章）
│   ├── 3-practical-workflows/   # 实战篇（5章）
│   ├── 4-advanced-usage/   # 高阶篇（5章）
│   └── 5-next-steps/       # 继续学习（1章）
├── public/                 # 静态资源
└── index.md                # 首页
```

## 架构说明

- **主题定制**：通过 `docs/.vitepress/theme/style.css` 覆盖 VitePress CSS 变量实现橙色调色盘
- **代码高亮**：深色背景 + 亮色文字（淡黄 #E8C47C），关键词橙 #FFB347、函数浅蓝 #7DD3FC
- **部署**：
  - `base: '/claude-code-guide/'` 配置在 `config.ts` 中
  - `.github/workflows/deploy.yml` 实现 push 到 master 后自动部署到 GitHub Pages
  - 构建产物 `docs/.vitepress/dist/` 纳入 git，确保 GitHub Pages 能正确托管
- **多语言**：VitePress 配置中设置了 `lang: 'zh-CN'`

## 设计系统

设计决策在 `DESIGN.md` 中定义：
- 配色：橙色主色（#F97316）+ 米白背景（#FFFBF7）
- 字体：Noto Sans SC（正文）+ Noto Serif SC（标题）+ JetBrains Mono（代码）
- 布局：左侧导航 + 右侧内容

## 开发规范

遵循 Karpathy 的 LLM 编码准则：
1. **编码前思考** — 明确假设，呈现权衡
2. **简单优先** — 用最少的代码解决问题
3. **精准修改** — 只改必须改的
4. **目标驱动** — 定义可验证的成功标准

## Git 工作流

- **默认只提交本地** — 完成功能或修复后，用 `git add` + `git commit` 提交到本地，不自动推送到远端
- **推送需明确指令** — 只有用户明确要求"推送"、"push"、"推送到远端"时，才执行 `git push`
- **构建验证** — 每次提交前确保 `npm run docs:build` 构建通过，无 dead links

## Skill 路由

当用户请求匹配到可用 Skill 时，务必使用 Skill 工具作为第一操作。不要直接回答，不要先使用其他工具。

关键路由规则：
- 产品想法、"值不值得做"、头脑风暴 → invoke office-hours
- Bug、错误、"为什么坏了"、500 报错 → invoke investigate
- 交付、部署、推送、创建 PR → invoke ship
- QA、测试网站、找 Bug → invoke qa
- 代码审查、检查我的 diff → invoke review
- 交付后更新文档 → invoke document-release
- 周回顾 → invoke retro
- 设计系统、品牌 → invoke design-consultation
- 视觉审核、设计优化 → invoke design-review
- 架构评审 → invoke plan-eng-review
- 保存进度、检查点、恢复 → invoke checkpoint
- 代码质量、健康检查 → invoke health
