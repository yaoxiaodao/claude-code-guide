---
title: 第十六章：Hooks 与安全配置
description: 学会使用 Hooks 系统和配置安全策略
---

# 第十六章：Hooks 与安全配置

::: tip 学习目标
学完这章，你会使用 Hooks 系统自定义 Claude Code 行为，并配置企业级安全策略。
:::

## Claude Code 扩展体系

在深入 Hooks 之前，先了解 Claude Code 的完整扩展体系：

| 扩展方式 | 用途 | 复杂度 |
|---------|------|--------|
| **Commands** | 自定义斜杠命令 | ⭐ 简单 |
| **Skills** | 封装复杂工作流 | ⭐⭐⭐ |
| **Hooks** | 在关键节点插入自定义逻辑 | ⭐⭐ |
| **MCP** | 连接外部工具和服务 | ⭐⭐⭐ |

## 什么是 Hooks

Hooks 让你在 Claude Code 执行的关键节点插入自定义逻辑：

```
代码编辑前 → Hook → 执行编辑
代码执行前 → Hook → 执行命令
对话开始时 → Hook → 初始化上下文
```

## 创建 Hook

### Hook 存放位置

**用户级**（所有项目通用）：
```
~/.claude/hooks/
└── my-hook.js
```

**项目级**（仅当前项目）：
```
项目根目录/.claude/hooks/
└── my-hook.js
```

### Hook 示例：自动通知

创建一个 Windows 通知 Hook：

**文件**：`~/.claude/hooks/notify.js`

```javascript
#!/usr/bin/env node
const { spawnSync } = require('child_process');

const HOOK_MARKER = process.env.CLAUDE_HOOK_MARKER || 'claude-cc-ask';

function sendNotification(title, body) {
  const ps = spawnSync('powershell', [
    '-Command',
    `Write-Host "${title}: ${body}"`
  ], { encoding: 'utf8' });
}

const input = JSON.parse(require('fs').readFileSync(0, 'utf8'));

// Claude 完成思考时触发
if (input.hook === 'onthinking_complete') {
  const action = input.action;
  if (action.type === 'Edit' || action.type === 'Bash') {
    sendNotification('Claude Code', `执行: ${action.type}`);
  }
}

console.log(JSON.stringify({ proceed: true }));
```

### Hook 通信协议

Claude Code 通过 stdin/stdout 与 Hook 通信：

**输入**（Claude Code 发送给 Hook）：
```json
{
  "hook": "onthinking_complete",
  "action": { "type": "Edit", "path": "src/app.py" },
  "context": { "project": "/path/to/project" }
}
```

**输出**（Hook 返回给 Claude Code）：
```json
{
  "proceed": true,
  "hookSpecificOutput": { ... }
}
```

## 常用 Hook 场景

### 1. 自动保存工作进度

```javascript
// auto-save.js - 每次编辑后自动记录
const fs = require('fs');
const path = require('path');

const input = JSON.parse(require('fs').readFileSync(0, 'utf8'));

if (input.hook === 'ontool_use' && input.action.type === 'Write') {
  const logPath = path.join(process.env.HOME, '.claude', 'edit-log.json');
  const logs = JSON.parse(fs.readFileSync(logPath, 'utf8') || '[]');
  logs.push({
    time: new Date().toISOString(),
    file: input.action.path,
    type: 'Write'
  });
  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
}

console.log(JSON.stringify({ proceed: true }));
```

### 2. 敏感操作二次确认

```javascript
// confirm-dangerous.js - 高风险操作前确认
const input = JSON.parse(require('fs').readFileSync(0, 'utf8'));

const dangerousPatterns = [
  /rm\s+-rf/i,
  /DROP\s+TABLE/i,
  /\.delete\(\)/i
];

if (input.hook === 'onconfirm') {
  const command = input.action.command || '';
  for (const pattern of dangerousPatterns) {
    if (pattern.test(command)) {
      console.log(JSON.stringify({
        proceed: false,
        hookSpecificOutput: {
          message: '⚠️ 检测到危险操作！'
        }
      }));
      return;
    }
  }
}

console.log(JSON.stringify({ proceed: true }));
```

### 3. 自定义文件过滤

```
Claude Code 文件扫描优先级：
1. .gitignore（自动生效）
2. .claudeignore（软过滤）
3. permissions.deny（硬过滤）
```

**`.claudeignore` 示例**：
```
# 忽略测试文件和文档
*.test.js
*.spec.js
docs/
*.md

# 忽略构建产物
dist/
build/
*.log
```

**`permissions.deny` 示例**：
```
# 硬性禁止访问（企业敏感文件）
.ssh/
*.pem
*.key
config/secrets.json
```

## 安全配置

### 多层安全体系

```
Layer 1: .gitignore     ← 自动生效，默认信任
Layer 2: .claudeignore  ← 软过滤，排除无关文件
Layer 3: permissions.deny ← 硬过滤，禁止访问敏感文件
Layer 4: 环境变量        ← API Key 和凭证
```

### API Key 安全存储

**❌ 不推荐：写在配置文件**
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-xxxxxx"
  }
}
```

**✅ 推荐：使用环境变量**
```bash
# ~/.bashrc 或 ~/.zshrc
export ANTHROPIC_AUTH_TOKEN="sk-xxxxxx"
```

**✅ 企业级：密钥管理服务**
```bash
# 使用 AWS Secrets Manager
export ANTHROPIC_AUTH_TOKEN=$(aws secretsmanager get-secret-value --secret-id claude-api-key --query SecretString --output text)

# 或使用 HashiCorp Vault
export ANTHROPIC_AUTH_TOKEN=$(vault read -field=key secret/claude)
```

### 权限配置

在 `~/.claude/settings.json` 中配置权限：

```json
{
  "permissions": {
    "allow": ["Edit", "Write", "Read", "Bash(npm:*)"],
    "deny": ["Bash(rm -rf /*)"],
    "defaultMode": "bypass"
  }
}
```

### 企业安全清单

```markdown
## 企业部署安全检查

- [ ] API Key 存储在环境变量或密钥管理服务
- [ ] 配置 .claudeignore 排除敏感目录
- [ ] 配置 permissions.deny 禁止访问密钥文件
- [ ] 使用 --dangerously-skip-permissions 时格外谨慎
- [ ] 定期审计 .claude 目录的访问权限
- [ ] 在 CI/CD 中使用只读 API Key
```

## 常见问题

**Q: Hook 在哪里配置？**

A: 在 `~/.claude/hooks/` 或项目 `.claude/hooks/` 目录中添加 `.js` 文件。

**Q: 如何调试 Hook？**

A: 在 Hook 脚本中添加 `console.error` 输出，Claude Code 会将错误信息显示在日志中。

**Q: permissions.deny 和 .claudeignore 有什么区别？**

A: `.claudeignore` 是软过滤，Claude 会尝试访问但可被覆盖；`permissions.deny` 是硬过滤，Claude 完全无法访问。

**Q: 企业如何批量部署安全配置？**

A: 将安全配置文件纳入配置管理（Ansible、Salt、Chef 等），在用户主目录模板中包含 `.claudeignore` 和 `permissions.deny`。

## 练习题

1. 创建一个 Hook，在每次 Claude 执行 Bash 命令后打印通知
2. 配置项目级 `.claudeignore`，排除 `node_modules` 和构建目录
3. 创建 `permissions.deny`，禁止访问 `.ssh` 目录

## 下一章

下一章我们会学习 Agent 模式与代理配置。

[:point_right: 第十七章：Agent 模式与代理配置](/guide/4-advanced-usage/17-agent)
