---
title: 第十八章：GitHub Actions 集成
description: 将 Claude Code 集成到 CI/CD 流水线
---

# 第十八章：GitHub Actions 集成

::: tip 学习目标
学完这章，你会配置 GitHub Actions 让 Claude Code 自动审查 PR、执行代码检查。
:::

## 为什么需要 CI/CD 集成

将 Claude Code 集成到 CI/CD 可以实现：

- **自动 PR 审查**：每次提交自动检查代码质量
- **自动化测试**：运行测试套件并分析结果
- **文档生成**：自动更新 CHANGELOG 和文档
- **安全扫描**：检测依赖漏洞和敏感信息泄露

## 基础配置

### 准备工作

1. 在 GitHub 仓库 Settings → Secrets 中添加 `ANTHROPIC_API_KEY`
2. 确保仓库有读写权限

### 基础工作流

创建 `.github/workflows/claude-review.yml`：

```yaml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Run Claude Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "/review"
```

## 自动化代码审查

### PR 描述生成

```yaml
name: Claude PR Description

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  describe:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Generate PR Description
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "为这个 PR 生成描述，包含：1. 主要改动 2. 改动原因 3. 测试情况"
```

### 增量代码审查

只审查本次 PR 改动的文件：

```yaml
name: Claude Incremental Review

on:
  pull_request:

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed files
        id: changed
        run: |
          CHANGED_FILES=$(git diff --name-only origin/main...HEAD)
          echo "files=$CHANGED_FILES" >> $GITHUB_OUTPUT

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Review Changed Files
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          CHANGED_FILES: ${{ steps.changed.outputs.files }}
        run: |
          claude --print "审查以下文件：$CHANGED_FILES"
```

## 自动化测试与检查

### 运行测试套件

```yaml
name: CI with Claude Analysis

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        id: test
        run: npm test

      - name: Analyze Test Results
        if: failure()
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "测试失败了，请分析以下测试输出并给出修复建议：
          ${{ steps.test.outputs.result }}"
```

### 安全扫描

```yaml
name: Security Scan with Claude

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 0 * * 0'  # 每周一次

jobs:
  security:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Run npm audit
        id: audit
        run: npm audit --json > audit-output.json || true

      - name: Analyze Security Issues
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "分析以下 npm audit 输出，识别高危漏洞并给出修复建议：
          $(cat audit-output.json)"
```

## 自动化学任务

### CHANGELOG 自动生成

```yaml
name: Auto CHANGELOG

on:
  push:
    branches: [main]
    tags:
      - 'v*'

jobs:
  changelog:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Generate CHANGELOG
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          TAG: ${{ github.ref_name }}
        run: |
          claude --print "根据从上一个 tag 到现在的 commit 记录，生成 CHANGELOG 内容"
```

### 自动代码格式化检查

```yaml
name: Code Format Check

on:
  pull_request:

jobs:
  format-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Check formatting
        id: format
        run: npx prettier --check . 2>&1 || true

      - name: Fix formatting with Claude
        if: failure()
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "代码格式检查失败，请自动修复格式问题"
```

## GitHub App 集成

除了 Actions，还可以通过 GitHub App 集成：

### 安装 Claude GitHub App

1. 访问 https://github.com/apps/claude
2. 选择要授权的仓库
3. 配置所需权限

**所需权限**：
- Contents: 读写（读取代码、创建提交）
- Issues: 读写（评论 Issue）
- Pull requests: 读写（评论 PR）

### App 触发方式

在 PR 或 Issue 中 @claude 即可触发：

```
@claude 请审查这个 PR 的安全性
```

## 最佳实践

### 1. 使用只读 API Key

在 CI/CD 中使用只有读取权限的 API Key，降低泄露风险：

```yaml
env:
  ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY_READONLY }}
```

### 2. 限制 CI/CD 中的操作

```json
// .claude.json in repo
{
  "permissions": {
    "allow": ["Read", "Bash(npm test)", "Bash(npm run build)"],
    "deny": ["Bash(rm -rf *)", "Bash(git push)"],
    "defaultMode": "ask"
  }
}
```

### 3. 控制 Token 消耗

```yaml
env:
  CLAUDE_MAX_TOKENS: "2000"  # 限制单次响应长度
```

## 常见问题

**Q: CI/CD 中 Claude 响应慢怎么办？**

A: 使用 `--print` 参数减少输出，使用 `ANTHROPIC_BASE_URL` 选择更快的节点。

**Q: 如何避免 CI/CD 产生额外费用？**

A: 合理设置触发条件（避免每次 push 都触发），使用 `workflow_dispatch` 手动触发。

**Q: API Key 在 CI/CD 中安全吗？**

A: 使用 GitHub Secrets，密钥不会暴露在日志中。确保只授予必要权限。

**Q: 可以同时审查多个 PR 吗？**

A: 可以，但建议设置并发限制避免 API 限流。

## 练习题

1. 创建一个基础 Claude Review Action
2. 配置增量审查，只检查 PR 改动的文件
3. 设置定时安全扫描任务

## 下一章

恭喜你完成了高阶用法篇！接下来进入最后一章，总结所学并探索下一步。

[:point_right: 第十九章：继续学习之路](../5-next-steps/19-next-steps)
