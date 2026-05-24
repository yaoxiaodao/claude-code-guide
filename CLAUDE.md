# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目状态

本项目正在开发中 — 已有设计文档和内容大纲，正在搭建 VitePress 项目架子。

## 仓库结构

```
/
├── docs/
│   ├── design-preview.html    # 设计预览（HTML 原型）
│   └── yaojianfeng-*-design-*.md  # office-hours 设计文档
├── DESIGN.md                 # 设计系统规范
├── README.md                 # 项目说明
└── .idea/                   # JetBrains IDE 配置
```

## 设计系统

所有视觉和 UI 决策都在 DESIGN.md 中定义：
- 配色：橙色主色 + 米白背景
- 字体：Noto Sans SC（正文）+ Noto Serif SC（标题）+ JetBrains Mono（代码）
- 布局：左侧导航 + 右侧内容 + 顶部进度条

## 开发说明

**技术栈：** VitePress + GitHub Pages

**目录结构（规划中）：**
```
docs/
├── .vitepress/
│   └── config.ts         # VitePress 配置
├── public/              # 静态资源
└── guide/                # 教程文章
    ├── 1-getting-started/
    ├── 2-basic-usage/
    ├── 3-practical-workflows/
    └── 4-next-steps/
```

## 项目规范

本项目遵循以下编码准则（源自 Andrej Karpathy 的 LLM 编码最佳实践）：

1. **编码前思考** — 明确假设，呈现权衡，不隐藏困惑
2. **简单优先** — 用最少的代码解决问题，不做投机性功能
3. **精准修改** — 只改必须改的，清理自己造成的孤儿代码
4. **目标驱动** — 定义可验证的成功标准，循环验证直到达成

## 备注

- 根据 README.md，本项目是一个关于学习和使用 Claude Code 的指南/教程项目
- 仓库使用 `.idea/` 目录管理 IDE 设置（JetBrains）
