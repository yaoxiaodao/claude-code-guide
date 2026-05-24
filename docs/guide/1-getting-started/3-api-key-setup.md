---
title: 第三章：API Key 获取与配置
description: 获取 Anthropic 官方的 API Key 并配置到 Claude Code
---

# 第三章：API Key 获取与配置

::: tip 学习目标
学完这章，你能拿到 Anthropic 官方的 API Key，并配置到 Claude Code。
:::

## 什么是 API Key？

API Key 就像一把钥匙，允许你的电脑连接到 Claude 的服务。

- 没有 Key = 无法使用 Claude Code
- 有 Key = 可以无限使用（按用量付费）

## 注册 Anthropic 账号

### 1. 打开官网

在浏览器里打开 [anthropic.com](https://anthropic.com)

### 2. 注册账号

点击 "Sign Up"，可以用 Google 账号直接登录。

### 3. 登录 Console

注册完成后，打开 [console.anthropic.com](https://console.anthropic.com)，用你的账号登录。

## 创建 API Key

### 1. 进入 API Keys 页面

登录后，在左侧菜单找到 "API Keys"，点击进入。

### 2. 创建新 Key

点击 "Create Key" 按钮。

### 3. 复制 Key

**重要**：Key 只显示一次！复制后妥善保存。

## 配置 Claude Code

### 1. 打开终端

### 2. 运行 Claude Code

输入：

```bash
claude
```

Claude Code 会提示你输入 API Key。粘贴刚才复制的 Key，回车。

### 3. 验证成功

看到类似下面的消息就说明配置成功了：

```
✓ API Key configured successfully
You can now start chatting!
```

## 安全注意事项

::: warning 非常重要
API Key = 你的银行卡密码
:::

- **不要分享**：不要把 Key 发给任何人
- **不要提交到 GitHub**：在 `.gitignore` 里排除包含 Key 的文件
- **如果泄露了**：立刻到官网删除那个 Key，重新生成一个新的

## 前置知识

会注册网站账号。

## 常见问题

**Q: API Key 要钱吗？**

A: 有免费额度，新用户可以用很久。后期如果用量大才需要付费。

**Q: Key 泄露了怎么办？**

A: 立刻到 [console.anthropic.com](https://console.anthropic.com) 删除那个 Key，重新生成一个。

**Q: 看不到 Create Key 按钮？**

A: 可能账号没激活，检查邮箱有没有收到验证邮件。

## 练习题

成功在 Claude Code 里问"你好"，并收到回复。

## 下一章

配置好之后，下一章我们会进行第一次真正的对话！

[:point_right: 第四章：首次对话](/guide/1-getting-started/4-first-conversation)