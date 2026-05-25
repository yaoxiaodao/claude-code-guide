import{_ as a,H as n,f as p,i as l}from"./chunks/framework.Cvt1eIE0.js";const r=JSON.parse('{"title":"第十一章：CLAUDE.md — 给 AI 写说明书","description":"学会创建项目规范文件，让 Claude Code 更懂你的项目","frontmatter":{"title":"第十一章：CLAUDE.md — 给 AI 写说明书","description":"学会创建项目规范文件，让 Claude Code 更懂你的项目"},"headers":[],"relativePath":"guide/3-practical-workflows/11-claude-md.md","filePath":"guide/3-practical-workflows/11-claude-md.md"}'),i={name:"guide/3-practical-workflows/11-claude-md.md"};function e(t,s,c,d,h,k){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="第十一章-claude-md-—-给-ai-写说明书" tabindex="-1">第十一章：CLAUDE.md — 给 AI 写说明书 <a class="header-anchor" href="#第十一章-claude-md-—-给-ai-写说明书" aria-label="Permalink to &quot;第十一章：CLAUDE.md — 给 AI 写说明书&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">学习目标</p><p>学完这章，你会创建自己的 CLAUDE.md 文件，让 Claude Code 更准确地帮助你。</p></div><h2 id="什么是-claude-md" tabindex="-1">什么是 CLAUDE.md <a class="header-anchor" href="#什么是-claude-md" aria-label="Permalink to &quot;什么是 CLAUDE.md&quot;">​</a></h2><p>CLAUDE.md 是一个放在项目根目录的配置文件。它用自然语言告诉 Claude 关于你的项目的一切：</p><ul><li>这个项目是做什么的</li><li>使用了什么技术栈</li><li>代码放在哪里</li><li>有哪些规范和约定</li><li>常用的命令是什么</li></ul><p>当你打开一个项目并启动 Claude Code 时，Claude 会自动读取这个文件，就像拿到了项目说明书。</p><h2 id="什么时候需要-claude-md" tabindex="-1">什么时候需要 CLAUDE.md <a class="header-anchor" href="#什么时候需要-claude-md" aria-label="Permalink to &quot;什么时候需要 CLAUDE.md&quot;">​</a></h2><p><strong>需要写的场景：</strong></p><ul><li>项目超过一个文件</li><li>有特殊的技术栈或架构</li><li>团队有代码规范要求</li><li>想让 AI 更准确地产出</li></ul><p><strong>可以暂时不写的场景：</strong></p><ul><li>简单的单文件脚本</li><li>临时测试项目</li><li>一次性数据处理</li></ul><h2 id="怎么写-claude-md" tabindex="-1">怎么写 CLAUDE.md <a class="header-anchor" href="#怎么写-claude-md" aria-label="Permalink to &quot;怎么写 CLAUDE.md&quot;">​</a></h2><p>一个基本的 CLAUDE.md 长这样：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 项目名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个做什么的项目。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Python 3.11</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SQLite</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`app.py\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 主程序入口</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`models.py\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 数据库模型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`static/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 静态文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 常用命令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 启动程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 更新数据库</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 实际案例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>假设你有一个 Python Flask 网站项目，CLAUDE.md 可以这样写：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># 我的个人博客</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个用 Flask 开发的个人博客系统。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术栈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Python 3.11 + Flask</span></span>
<span class="line"><span>- SQLite 数据库</span></span>
<span class="line"><span>- Jinja2 模板引擎</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 项目结构</span></span></code></pre></div><p>app.py — Flask 应用入口 models.py — 数据库模型（用户、文章、评论） routes.py — 路由定义 static/ — CSS、JS、图片 templates/ — HTML 模板</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 代码规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 使用中文注释</span></span>
<span class="line"><span>- 函数命名用 snake_case</span></span>
<span class="line"><span>- 路由函数放在 routes.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>python app.py              # 开发模式启动</span></span>
<span class="line"><span>flask db upgrade           # 迁移数据库</span></span>
<span class="line"><span>flask shell               # 进入交互模式</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 操作步骤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 打开你的项目目录</span></span>
<span class="line"><span>2. 在根目录创建 \`CLAUDE.md\` 文件</span></span>
<span class="line"><span>3. 复制上面的模板，修改成你自己的内容</span></span>
<span class="line"><span>4. 启动 Claude，输入&quot;请帮我看看这个项目&quot;</span></span>
<span class="line"><span>5. 观察 Claude 是否正确理解了项目结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常见问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Q: 一定要写吗？**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A: 不是强制的，但写了之后 Claude 的表现会明显提升。它能更快理解你的代码，减少重复解释。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Q: 写在哪里？**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A: 项目根目录，文件名必须是 \`CLAUDE.md\`（全大写）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Q: 写多少合适？**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A: 从简到繁都可以。一个最基本的 CLAUDE.md 只需要 3-5 行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Q: 需要用英文写吗？**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A: 不需要。Claude 支持多语言，用中文写完全没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 练习题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>给你现有的某个项目创建一个 CLAUDE.md，然后问 Claude：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. &quot;这个项目是做什么的？&quot;</span></span>
<span class="line"><span>2. &quot;帮我写一个 README.md&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>看看 Claude 的回答是否准确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 下一章</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下一章我们会整合前面所学，体验一个完整的日常工作流。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[:point_right: 第十二章：日常工作流实战](/guide/3-practical-workflows/12-realistic-workflow)</span></span></code></pre></div>`,18)])])}const u=a(i,[["render",e]]);export{r as __pageData,u as default};
