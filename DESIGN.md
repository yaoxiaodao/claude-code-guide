# Design System — Claude Code 中文教程

## Product Context

- **What this is:** 面向零基础用户的中文 Claude Code 教程网站
- **Who it's for:** 高校学生、教师、刚入行的开发者 — 用过代码但没用过 AI 辅助编程工具的人
- **Space/industry:** 编程教育 / 技术教程
- **Project type:** 文档教程网站（VitePress + GitHub Pages）

## Aesthetic Direction

- **Direction:** Warm Learning Companion（温暖的学习伙伴）
- **Decoration level:** Intentional — 有温度，但不失专业
- **Mood:** 像一个耐心的朋友在教你，不是冷冰冰的技术文档
- **Reference:** 阮一峰的网络日志风格 + Notion 的温暖感

## Typography

- **Display/Hero:** "Noto Serif SC", serif — 有个性的中文衬线，用于标题
- **Body:** "Noto Sans SC", system-ui — 清晰易读，用于正文
- **UI/Labels:** Same as body
- **Code:** "JetBrains Mono", "Fira Code" — 等宽字体，程序员习惯
- **Loading:** Google Fonts CDN

**字体选择理由：**
- Noto Sans SC：Google 官方中文字体，清晰度高
- Noto Serif SC：中文衬线，给标题增加个性
- JetBrains Mono：代码高可读性，有连字特性

## Color

- **Approach:** Warm & Inviting — 橙色为主，温暖不冷淡

```
Primary (橙色):     #F97316  — 活力、鼓励行动
Primary Light:      #FB923C  — 柔和过渡
Accent Green:       #22C55E  — 成功、完成、成就感
Background Warm:    #FFFBF7  — 米白，温暖不刺眼
Surface:           #FFFFFF  — 卡片/内容区背景
Text Dark:         #1F2937  — 深灰，正文
Text Muted:        #6B7280  — 浅灰，辅助文字
Border:            #E5E7EB  — 边框
Code Background:    #1E1E1E  — VS Code 深色风格
```

**暗色模式：** 支持切换，代码块始终深色，正文区域反转为深底浅字

## Spacing

- **Base unit:** 8px
- **Density:** Comfortable — 教程内容需要足够呼吸空间
- **Scale:** 4(0.25rem) / 8(0.5rem) / 12(0.75rem) / 16(1rem) / 24(1.5rem) / 32(2rem) / 48(3rem) / 64(4rem)

## Layout

- **Approach:** Hybrid — 文档侧边栏 + 教程章节结构
- **导航：** 左侧固定侧边栏，显示章节列表和完成状态
- **内容区：** 最大宽度 800px，居中阅读
- **顶部：** 进度条（显示学习进度）+ 搜索按钮 + 暗色切换
- **响应式：** 移动端侧边栏收起为汉堡菜单

## Motion

- **Approach:** Minimal-functional with warmth — 只在必要处动画，增加温度感
- **页面切换：** 淡入淡出（150ms ease-out）
- **交互反馈：** 按钮 hover 轻微放大（scale 1.02）
- **复制成功：** 按钮变绿 + "已复制" 文字（1.5s 后恢复）
- **滚动：** 章节标题吸顶（sticky）

## Component Specs

### 侧边导航项状态
- **Default:** 白底灰字
- **Hover:** 浅橙背景 (#FFF7ED)
- **Active/Current:** 橙色背景 (#FFF7ED) + 橙色文字
- **Completed:** 灰色 + ✓ 前缀
- **Current Chapter:** 橙色背景 + 白色文字 + → 前缀

### 代码块
- 深色背景 (#1E1E1E)
- 顶部显示语言标签
- 右上角复制按钮
- 复制成功：按钮变绿 + "已复制"

### 终端块
- macOS 风格三色点标题栏
- 深色背景 (#0D1117)
- 命令提示符灰色，输出绿色/白色

### 提示框（Tip Box）
- 浅橙背景 (#FFF7ED) + 橙色边框
- 图标 + 标题 + 内容
- 语气友好，不是冰冷的"注意"

### 练习题框
- 浅绿渐变背景 (linear-gradient #F0FDF4 → #DCFCE7)
- 绿色边框 + 绿色文字
- "🎯 练习题" 标题

### 进度条
- 顶部 Header 下方
- 3px 高度
- 橙色 (#F97316)
- 平滑跟随滚动

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-24 | 温暖友好风格选定 | 用户明确选择，不是冷冰冰的技术文档 |
| 2026-05-24 | 橙黄暖色系 | 活力、鼓励行动，区别于蓝紫 AI 产品常见配色 |
| 2026-05-24 | Noto 中文字体 | Google 官方字体，清晰度高，CDN 易获取 |
| 2026-05-24 | JetBrains Mono 代码 | 程序员最爱的代码字体，有连字特性 |
| 2026-05-24 | 左侧导航 + 进度条 | 教程需要清晰的学习路径和成就感追踪 |
