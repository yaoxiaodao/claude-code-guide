# Claude Code 中文教程

面向零基础用户的 Claude Code 渐进式教程网站。

## 在线访问

- **GitHub Pages**: [https://yaoxiaodao.github.io/claude-code-guide/](https://yaoxiaodao.github.io/claude-code-guide/)
- **Gitee Pages**: [https://yaojianfeng.gitee.io/claudecode-guide/](https://yaojianfeng.gitee.io/claudecode-guide/)

## 本地开发

```bash
npm install
npm run docs:dev
```

浏览器打开 http://localhost:5173 查看实时预览。

## 部署

推送到 master 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

```bash
git push github master
```

## 教程大纲

**入门篇**
- Claude Code 是什么
- 安装与配置
- API Key 设置
- 第一次对话

**基础使用篇**
- 理解代码库
- 编辑代码
- 多轮对话技巧

**实战篇**
- 调试代码
- 代码审查
- Git 操作
- CLAUDE.md 使用
- 日常工作流

**高阶篇**
- MCP (Model Context Protocol)
- Skill 扩展
- 内置命令
- Plugin 开发
- Agent 模式

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 托管部署
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自动部署

## 设计

设计规范见 [DESIGN.md](./DESIGN.md)。

## 参与贡献

教程内容在 `docs/guide/` 目录下，按章节组织。
