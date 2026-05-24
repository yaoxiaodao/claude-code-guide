# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
│   ├── config.ts          # VitePress 配置（导航、侧边栏、多语言）
│   └── theme/
│       ├── index.ts        # 主题入口
│       └── style.css       # 自定义样式（配色、字体、代码高亮）
├── guide/                  # 教程内容（按章节组织）
│   ├── 1-getting-started/  # 入门篇（4章）
│   ├── 2-basic-usage/     # 基础使用篇（3章）
│   └── 3-practical-workflows/  # 实战篇（3章）
├── public/                 # 静态资源（logo 等）
└── index.md                # 首页
```

## 架构说明

- **主题定制**：通过 `docs/.vitepress/theme/style.css` 覆盖 VitePress CSS 变量实现橙色调色盘
- **代码高亮**：深色背景 + 亮色文字（淡黄 #E8C47C），关键词橙 #FFB347、函数浅蓝 #7DD3FC
- **部署**：`.github/workflows/deploy.yml` 实现 push 到 master 后自动部署到 GitHub Pages
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
