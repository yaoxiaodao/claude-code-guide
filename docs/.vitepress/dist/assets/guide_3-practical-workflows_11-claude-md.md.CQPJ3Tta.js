import{c as i,Q as a,j as n,m as l}from"./chunks/framework.8JjYC3xy.js";const g=JSON.parse('{"title":"第十一章：CLAUDE.md — 给 AI 写说明书","description":"学会创建项目规范文件，让 Claude Code 更懂你的项目","frontmatter":{"title":"第十一章：CLAUDE.md — 给 AI 写说明书","description":"学会创建项目规范文件，让 Claude Code 更懂你的项目"},"headers":[],"relativePath":"guide/3-practical-workflows/11-claude-md.md","filePath":"guide/3-practical-workflows/11-claude-md.md"}'),p={name:"guide/3-practical-workflows/11-claude-md.md"};function h(t,s,e,k,d,r){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="第十一章-claude-md-—-给-ai-写说明书" tabindex="-1">第十一章：CLAUDE.md — 给 AI 写说明书 <a class="header-anchor" href="#第十一章-claude-md-—-给-ai-写说明书" aria-label="Permalink to &quot;第十一章：CLAUDE.md — 给 AI 写说明书&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">学习目标</p><p>学完这章，你会创建自己的 CLAUDE.md 文件，并掌握进阶用法让 Claude Code 更准确地帮助你。</p></div><h2 id="什么是-claude-md" tabindex="-1">什么是 CLAUDE.md <a class="header-anchor" href="#什么是-claude-md" aria-label="Permalink to &quot;什么是 CLAUDE.md&quot;">​</a></h2><p>CLAUDE.md 是一个放在项目根目录的配置文件。它用自然语言告诉 Claude 关于你的项目的一切：</p><ul><li>这个项目是做什么的</li><li>使用了什么技术栈</li><li>代码放在哪里</li><li>有哪些规范和约定</li><li>常用的命令是什么</li></ul><p>当你打开一个项目并启动 Claude Code 时，Claude 会自动读取这个文件，就像拿到了项目说明书。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><h3 id="基本格式" tabindex="-1">基本格式 <a class="header-anchor" href="#基本格式" aria-label="Permalink to &quot;基本格式&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 项目名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目简介。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 技术1</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 技术2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目结构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`src/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 源代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`tests/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 测试文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 常用命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run dev    # 开发模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run build  # 构建</span></span></code></pre></div><h3 id="什么时候需要" tabindex="-1">什么时候需要 <a class="header-anchor" href="#什么时候需要" aria-label="Permalink to &quot;什么时候需要&quot;">​</a></h3><p><strong>需要写的场景：</strong></p><ul><li>项目超过一个文件</li><li>有特殊的技术栈或架构</li><li>团队有代码规范要求</li><li>想让 AI 更准确地产出</li></ul><p><strong>可以暂时不写的场景：</strong></p><ul><li>简单的单文件脚本</li><li>临时测试项目</li><li>一次性数据处理</li></ul><h2 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h2><h3 id="_1-条件指令" tabindex="-1">1. 条件指令 <a class="header-anchor" href="#_1-条件指令" aria-label="Permalink to &quot;1. 条件指令&quot;">​</a></h3><p>根据用户说的话自动执行不同的操作：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 快捷指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当用户说「启动」时：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">→ 执行 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`npm run dev\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当用户说「测试」时：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">→ 执行 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`npm test\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当用户说「构建」时：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">→ 执行 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`npm run build\`</span></span></code></pre></div><h3 id="_2-项目约束规则" tabindex="-1">2. 项目约束规则 <a class="header-anchor" href="#_2-项目约束规则" aria-label="Permalink to &quot;2. 项目约束规则&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 开发规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码约束</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止直接使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`any\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止提交未格式化代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有 API 调用必须有错误处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Git 约束</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commit message 必须符合 Conventional Commits</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止强制推送 main 分支</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PR 必须通过 CI 才能合并</span></span></code></pre></div><h3 id="_3-自定义响应格式" tabindex="-1">3. 自定义响应格式 <a class="header-anchor" href="#_3-自定义响应格式" aria-label="Permalink to &quot;3. 自定义响应格式&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 输出格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### API 文档</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当要求生成 API 文档时，使用以下格式：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 接口名称</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 方法: GET/POST</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 路径: /api/xxx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 参数: ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 返回: ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码审查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当要求审查代码时，输出以下结构：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 问题列表</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">严重</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 文件:行号 - 问题描述</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">中等</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 优化建议</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span></code></pre></div><h3 id="_4-技术栈特定指令" tabindex="-1">4. 技术栈特定指令 <a class="header-anchor" href="#_4-技术栈特定指令" aria-label="Permalink to &quot;4. 技术栈特定指令&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## React/Next.js 规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 组件规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 组件文件放在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`components/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 目录</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用函数组件，不使用类组件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 组件名称使用 PascalCase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 状态管理</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 Zustand 管理全局状态</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 组件内部状态使用 useState</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 避免 prop drilling，超过 3 层用 Context</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## TypeScript 规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 类型定义</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 interface 而不是 type</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 导出类型加 I 前缀</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止使用 @ts-ignore</span></span></code></pre></div><h2 id="团队协作" tabindex="-1">团队协作 <a class="header-anchor" href="#团队协作" aria-label="Permalink to &quot;团队协作&quot;">​</a></h2><h3 id="团队级-claude-md-模板" tabindex="-1">团队级 CLAUDE.md 模板 <a class="header-anchor" href="#团队级-claude-md-模板" aria-label="Permalink to &quot;团队级 CLAUDE.md 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 项目名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 团队规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 分支管理</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`main\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 生产环境</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`develop\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 开发环境</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`feature/*\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 功能分支</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`hotfix/*\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 热修复分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码审查</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有 PR 必须有测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 至少 1 人 review</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CI 通过后才能合并</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 发布流程</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从 develop 创建 release 分支</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试通过后合并到 main</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 打 tag 并发布</span></span></code></pre></div><h3 id="多项目共享片段" tabindex="-1">多项目共享片段 <a class="header-anchor" href="#多项目共享片段" aria-label="Permalink to &quot;多项目共享片段&quot;">​</a></h3><p>在 <code>~/.claude/shared-rules.md</code> 中定义通用规则：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 通用开发规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Git 规范</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 提交前运行测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commit message 用中文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 代码质量</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 无 ESLint 错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 无 TypeScript 错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 安全</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不在代码中硬编码密钥</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用环境变量</span></span></code></pre></div><p>然后在项目 CLAUDE.md 中引用：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 通用规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请同时遵循 ~/.claude/shared-rules.md 中的通用规范。</span></span></code></pre></div><h2 id="高级模式" tabindex="-1">高级模式 <a class="header-anchor" href="#高级模式" aria-label="Permalink to &quot;高级模式&quot;">​</a></h2><h3 id="_1-模块级-claude-md" tabindex="-1">1. 模块级 CLAUDE.md <a class="header-anchor" href="#_1-模块级-claude-md" aria-label="Permalink to &quot;1. 模块级 CLAUDE.md&quot;">​</a></h3><p>在子目录创建独立的 CLAUDE.md：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── components/</span></span>
<span class="line"><span>│   └── CLAUDE.md    # 组件库专用规范</span></span>
<span class="line"><span>├── hooks/</span></span>
<span class="line"><span>│   └── CLAUDE.md    # Hooks 规范</span></span>
<span class="line"><span>└── utils/</span></span>
<span class="line"><span>    └── CLAUDE.md    # 工具函数规范</span></span></code></pre></div><h3 id="_2-环境特定配置" tabindex="-1">2. 环境特定配置 <a class="header-anchor" href="#_2-环境特定配置" aria-label="Permalink to &quot;2. 环境特定配置&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 开发环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当环境是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`development\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 时：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 启用详细日志</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 mock 数据</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 允许 console.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 生产环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当环境是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`production\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 时：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁用调试日志</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用真实 API</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 严格错误处理</span></span></code></pre></div><h3 id="_3-任务特定指令" tabindex="-1">3. 任务特定指令 <a class="header-anchor" href="#_3-任务特定指令" aria-label="Permalink to &quot;3. 任务特定指令&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 任务类型指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 重构任务</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 保持原有功能不变</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编写重构前后对比</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 确保测试全部通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 新功能任务</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 先写设计文档</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编写单元测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新相关文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Bug 修复任务</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 先复现问题</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编写失败的测试用例</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复后确保测试通过</span></span></code></pre></div><h2 id="实际案例" tabindex="-1">实际案例 <a class="header-anchor" href="#实际案例" aria-label="Permalink to &quot;实际案例&quot;">​</a></h2><h3 id="案例-1-前端项目" tabindex="-1">案例 1：前端项目 <a class="header-anchor" href="#案例-1-前端项目" aria-label="Permalink to &quot;案例 1：前端项目&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Vue 3 电商后台</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个使用 Vue 3 + Element Plus 的后台管理系统。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue 3.4 + Composition API</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 5</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pinia 状态管理</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Element Plus UI</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vite 构建</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目结构</span></span></code></pre></div><p>src/ ├── api/ # API 接口 ├── components/ # 公共组件 ├── composables/ # 组合式函数 ├── layouts/ # 布局组件 ├── router/ # 路由配置 ├── stores/ # Pinia stores ├── utils/ # 工具函数 └── views/ # 页面组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 组件规范</span></span>
<span class="line"><span>- 组件名用 PascalCase</span></span>
<span class="line"><span>- props 必须有类型定义</span></span>
<span class="line"><span>- 组件文件不超过 200 行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## API 规范</span></span>
<span class="line"><span>- RESTful 风格</span></span>
<span class="line"><span>- 统一错误处理</span></span>
<span class="line"><span>- 请求加 loading 状态</span></span></code></pre></div><h3 id="案例-2-node-js-后端项目" tabindex="-1">案例 2：Node.js 后端项目 <a class="header-anchor" href="#案例-2-node-js-后端项目" aria-label="Permalink to &quot;案例 2：Node.js 后端项目&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Node.js API 服务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Express + TypeScript 后端 API 服务。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node.js 20</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Express 4</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 5</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma ORM</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PostgreSQL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目结构</span></span></code></pre></div><p>src/ ├── controllers/ # 控制器 ├── middlewares/ # 中间件 ├── models/ # 数据模型 ├── routes/ # 路由定义 ├── services/ # 业务逻辑 └── utils/ # 工具函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## API 规范</span></span>
<span class="line"><span>- 统一响应格式: \`{ code, data, message }\`</span></span>
<span class="line"><span>- 错误码使用数字</span></span>
<span class="line"><span>- 分页使用 cursor 或 offset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 安全规范</span></span>
<span class="line"><span>- 所有输入验证</span></span>
<span class="line"><span>- 禁止 SQL 注入</span></span>
<span class="line"><span>- 使用 prepared statements</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p><strong>Q: 一定要写吗？</strong></p><p>A: 不是强制的，但写了之后 Claude 的表现会明显提升。它能更快理解你的代码，减少重复解释。</p><p><strong>Q: 写在哪里？</strong></p><p>A: 项目根目录，文件名必须是 <code>CLAUDE.md</code>（全大写）。</p><p><strong>Q: 写多少合适？</strong></p><p>A: 从简到繁都可以。一个最基本的 CLAUDE.md 只需要 3-5 行。</p><p><strong>Q: 需要用英文写吗？</strong></p><p>A: 不需要。Claude 支持多语言，用中文写完全没问题。</p><p><strong>Q: 如何在多个项目间共享规则？</strong></p><p>A: 在 <code>~/.claude/shared-rules.md</code> 定义通用规则，然后在项目 CLAUDE.md 中引用。</p><p><strong>Q: CLAUDE.md 会泄露敏感信息吗？</strong></p><p>A: 可能。建议不要在 CLAUDE.md 中写入密钥、密码等敏感信息。</p><h2 id="练习题" tabindex="-1">练习题 <a class="header-anchor" href="#练习题" aria-label="Permalink to &quot;练习题&quot;">​</a></h2><ol><li>给你现有的某个项目创建一个 CLAUDE.md</li><li>添加条件指令，定义常用命令的快捷方式</li><li>创建一个团队共享的规则模板</li></ol><h2 id="下一章" tabindex="-1">下一章 <a class="header-anchor" href="#下一章" aria-label="Permalink to &quot;下一章&quot;">​</a></h2><p>下一章我们会整合前面所学，体验一个完整的日常工作流。</p><p><a href="/claude-code-guide/guide/3-practical-workflows/12-realistic-workflow.html">👉 第十二章：日常工作流实战</a></p>`,67)])])}const E=i(p,[["render",h]]);export{g as __pageData,E as default};
