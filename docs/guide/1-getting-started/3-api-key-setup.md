---
title: 第三章：API Key 获取与配置
description: 给 Claude Code 配置国产模型 MiniMax Token Plan
---

# 第三章：API Key 获取与配置

::: tip 学习目标
学完这章，你会把 Claude Code 接入国产模型 MiniMax，享受更低成本和更稳定的国内访问。
:::

## 为什么选择 MiniMax？

- **国内访问稳定**：无需翻墙，API 直连国内服务器
- **成本更低**：相比官方 API，价格更优惠
- **模型能力强**：MiniMax-M2.7 在编程任务上表现优秀
- **Token Plan 权益**：订阅即可使用多种模态模型

## 邀请有礼

邀请好友订阅 MiniMax Token Plan，双方都能获得优惠！

### 邀请权益

- **好友立享**：9 折专属优惠 + Builder 权益
- **邀请人获赠**：返利 + 社区特权

### 我的邀请链接

[:point_right: 点击邀请好友](https://platform.minimaxi.com/subscribe/token-plan?code=C61zBA8mDM&source=link)

![MiniMax Token Plan 邀请海报](/image/MiniMax_TokenPlan_UsageReport.png)

## 配置步骤

### 第一步：安装 Claude Code

如果你还没有安装 Claude Code，先执行安装：

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：

```bash
claude --version
```

### 第二步：获取 MiniMax API Key

1. 访问 [MiniMax Token Plan](https://platform.minimaxi.com/docs/token-plan/claude-code)
2. 选择合适的套餐订阅
3. 在控制台获取你的 API Key

### 第三步：配置 Claude Code

编辑 Claude Code 配置文件：

**Windows**: `C:\Users\你的用户名\.claude\settings.json`

**macOS/Linux**: `~/.claude/settings.json`

添加以下配置（将 `MINIMAX_API_KEY` 替换为你的密钥）：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.minimaxi.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "MINIMAX_API_KEY",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ANTHROPIC_MODEL": "MiniMax-M2.7",
    "ANTHROPIC_SMALL_FAST_MODEL": "MiniMax-M2.7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "MiniMax-M2.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "MiniMax-M2.7"
  }
}
```

### 第四步：验证配置

在命令行启动 Claude Code：

```bash
claude
```

输入 `/model` 查看当前使用的模型，确认已切换到 MiniMax。

## 可用模型

| 模型名称 | 说明 |
|---------|------|
| `MiniMax-M2.7` | 主力模型，适合复杂编程任务 |
| `MiniMax-M2.7-highspeed` | 高速模型，响应更快 |
| `MiniMax-M2.1` | 轻量模型，适合简单任务 |

## 安全注意事项

::: warning 非常重要
API Key = 你的银行卡密码
:::

- **不要分享**：不要把 Key 发给任何人
- **不要提交到 GitHub**：在 `.gitignore` 里排除包含 Key 的文件
- **如果泄露了**：立刻到 MiniMax 控制台删除那个 Key，重新生成一个新的

## 常见问题

**Q: 配置后还是用官方模型？**

A: 确保重启 Claude Code（新开命令行窗口），配置文件的修改需要重新加载。

**Q: 提示 API Key 无效？**

A: 检查 `settings.json` 中的 `ANTHROPIC_AUTH_TOKEN` 是否正确复制。

**Q: 请求超时？**

A: 检查网络连接，或将 `API_TIMEOUT_MS` 值调大。

## 下一章

配置好之后，下一章我们会进行第一次真正的对话！

[:point_right: 第四章：首次对话](/guide/1-getting-started/4-first-conversation)
