import{c as a,Q as n,j as p,m as i}from"./chunks/framework.8JjYC3xy.js";const k=JSON.parse('{"title":"第十五章：Command 命令","description":"熟练使用内置命令和自定义命令","frontmatter":{"title":"第十五章：Command 命令","description":"熟练使用内置命令和自定义命令"},"headers":[],"relativePath":"guide/4-advanced-usage/15-builtin-commands.md","filePath":"guide/4-advanced-usage/15-builtin-commands.md"}'),e={name:"guide/4-advanced-usage/15-builtin-commands.md"};function l(t,s,d,c,o,h){return n(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="第十五章-command-命令" tabindex="-1">第十五章：Command 命令 <a class="header-anchor" href="#第十五章-command-命令" aria-label="Permalink to &quot;第十五章：Command 命令&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">学习目标</p><p>学完这章，你会熟练使用 Claude Code 的内置命令和自定义命令，提高工作效率。</p></div><h2 id="命令与-skill-的区别" tabindex="-1">命令与 Skill 的区别 <a class="header-anchor" href="#命令与-skill-的区别" aria-label="Permalink to &quot;命令与 Skill 的区别&quot;">​</a></h2><p>很多初学者容易混淆 <strong>命令（Command）</strong> 和 <strong>Skill</strong>：</p><table tabindex="0"><thead><tr><th>维度</th><th>命令 (Command)</th><th>Skill (技能)</th></tr></thead><tbody><tr><td><strong>触发方式</strong></td><td><code>/命令名</code></td><td><code>/skill名</code></td></tr><tr><td><strong>实现形式</strong></td><td>纯文本文件</td><td>目录 + SKILL.md + 可选代码</td></tr><tr><td><strong>复杂程度</strong></td><td>简单文本替换</td><td>复杂 AI 工作流</td></tr><tr><td><strong>适用场景</strong></td><td>重复文本/指令</td><td>复杂可复用工作流</td></tr><tr><td><strong>存储位置</strong></td><td><code>.claude/commands/</code></td><td><code>.claude/skills/</code></td></tr></tbody></table><p><strong>简单理解</strong>：</p><ul><li><strong>命令</strong> = 快捷键，快速执行固定文本</li><li><strong>Skill</strong> = 工具包，封装复杂能力</li></ul><h2 id="内置命令" tabindex="-1">内置命令 <a class="header-anchor" href="#内置命令" aria-label="Permalink to &quot;内置命令&quot;">​</a></h2><p>输入 <code>/</code> 可以看到所有可用命令（Tab 补全支持模糊搜索）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/ask      /plan      /review    /init</span></span>
<span class="line"><span>/complete /rewind    /clear     /diff</span></span>
<span class="line"><span>/memory   /sessions  /export    /compact</span></span></code></pre></div><h3 id="常用内置命令详解" tabindex="-1">常用内置命令详解 <a class="header-anchor" href="#常用内置命令详解" aria-label="Permalink to &quot;常用内置命令详解&quot;">​</a></h3><h4 id="_1-ask-—-快速提问" tabindex="-1">1. <code>/ask</code> — 快速提问 <a class="header-anchor" href="#_1-ask-—-快速提问" aria-label="Permalink to &quot;1. \`/ask\` — 快速提问&quot;">​</a></h4><p>直接问一个问题，不需要在代码库上下文中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/ask 什么是 TypeScript 的泛型？</span></span></code></pre></div><p><strong>使用场景：</strong></p><ul><li>快速查概念</li><li>临时问答</li><li>不需要看代码的简单问题</li></ul><h4 id="_2-plan-—-生成任务计划" tabindex="-1">2. <code>/plan</code> — 生成任务计划 <a class="header-anchor" href="#_2-plan-—-生成任务计划" aria-label="Permalink to &quot;2. \`/plan\` — 生成任务计划&quot;">​</a></h4><p>让 Claude 分析代码库，生成修改计划：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/plan</span></span>
<span class="line"><span>帮我重构 auth 模块，把 session 改成 JWT</span></span></code></pre></div><p>Claude 会：</p><ol><li>分析现有代码结构</li><li>生成修改步骤</li><li>等待你确认后执行</li></ol><h4 id="_3-review-—-代码审查" tabindex="-1">3. <code>/review</code> — 代码审查 <a class="header-anchor" href="#_3-review-—-代码审查" aria-label="Permalink to &quot;3. \`/review\` — 代码审查&quot;">​</a></h4><p>对当前分支的代码进行全面审查：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/review</span></span></code></pre></div><p>Claude 会：</p><ol><li>检查代码质量问题</li><li>发现潜在 bug</li><li>给出优化建议</li></ol><h4 id="_4-init-—-初始化项目" tabindex="-1">4. <code>/init</code> — 初始化项目 <a class="header-anchor" href="#_4-init-—-初始化项目" aria-label="Permalink to &quot;4. \`/init\` — 初始化项目&quot;">​</a></h4><p>扫描当前代码库，生成 CLAUDE.md 项目规范文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/init</span></span></code></pre></div><p>Claude 会分析代码结构、模块关系、依赖管理方式，生成一份项目文档。适合接手新项目时快速了解全貌。</p><h4 id="_5-rewind-—-回退对话和文件" tabindex="-1">5. <code>/rewind</code> — 回退对话和文件 <a class="header-anchor" href="#_5-rewind-—-回退对话和文件" aria-label="Permalink to &quot;5. \`/rewind\` — 回退对话和文件&quot;">​</a></h4><p>同时回退两件事：</p><ol><li><strong>对话历史</strong> — 回到之前的某个对话节点</li><li><strong>文件状态</strong> — 文件也会恢复到那个节点的样子</li></ol><p>改坏了文件不用从 Git 逐个还原：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rewind</span></span></code></pre></div><h4 id="_8-diff-—-查看代码修改" tabindex="-1">8. <code>/diff</code> — 查看代码修改 <a class="header-anchor" href="#_8-diff-—-查看代码修改" aria-label="Permalink to &quot;8. \`/diff\` — 查看代码修改&quot;">​</a></h4><p>查看当前对话中所有文件变更的汇总：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/diff</span></span></code></pre></div><h4 id="_9-clear-—-清空对话" tabindex="-1">9. <code>/clear</code> — 清空对话 <a class="header-anchor" href="#_9-clear-—-清空对话" aria-label="Permalink to &quot;9. \`/clear\` — 清空对话&quot;">​</a></h4><p>清空当前对话历史：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span></code></pre></div><h4 id="_10-complete-—-标记完成" tabindex="-1">10. <code>/complete</code> — 标记完成 <a class="header-anchor" href="#_10-complete-—-标记完成" aria-label="Permalink to &quot;10. \`/complete\` — 标记完成&quot;">​</a></h4><p>标记任务完成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/complete</span></span></code></pre></div><h2 id="自定义命令" tabindex="-1">自定义命令 <a class="header-anchor" href="#自定义命令" aria-label="Permalink to &quot;自定义命令&quot;">​</a></h2><p>除了内置命令，你还可以创建自定义命令。</p><h3 id="什么是自定义命令" tabindex="-1">什么是自定义命令 <a class="header-anchor" href="#什么是自定义命令" aria-label="Permalink to &quot;什么是自定义命令&quot;">​</a></h3><p>自定义命令是将常用的文本或指令封装成快捷方式，方便重复使用。</p><p><strong>适用场景</strong>：</p><ul><li>固定格式的代码模板</li><li>常用的 Git 操作序列</li><li>重复性的文本输入</li></ul><h3 id="创建自定义命令" tabindex="-1">创建自定义命令 <a class="header-anchor" href="#创建自定义命令" aria-label="Permalink to &quot;创建自定义命令&quot;">​</a></h3><h4 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><p><strong>项目级</strong>（纳入 Git，团队共享）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>项目根目录/</span></span>
<span class="line"><span>└── .claude/</span></span>
<span class="line"><span>    └── commands/</span></span>
<span class="line"><span>        └── my-command.md</span></span></code></pre></div><p><strong>用户级</strong>（跨项目通用）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>~/.claude/</span></span>
<span class="line"><span>└── commands/</span></span>
<span class="line"><span>    └── my-command.md</span></span></code></pre></div><h4 id="命令文件格式" tabindex="-1">命令文件格式 <a class="header-anchor" href="#命令文件格式" aria-label="Permalink to &quot;命令文件格式&quot;">​</a></h4><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 命令名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">命令描述（可选）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你要执行的指令内容</span></span></code></pre></div><h3 id="实际案例" tabindex="-1">实际案例 <a class="header-anchor" href="#实际案例" aria-label="Permalink to &quot;实际案例&quot;">​</a></h3><h4 id="案例-1-代码模板命令" tabindex="-1">案例 1：代码模板命令 <a class="header-anchor" href="#案例-1-代码模板命令" aria-label="Permalink to &quot;案例 1：代码模板命令&quot;">​</a></h4><p><strong>场景</strong>：快速插入 React 组件模板</p><p><strong>创建</strong> <code>~/.claude/commands/react-component.md</code>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># react-component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生成 React 函数组件模板</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请生成以下格式的 React 函数组件：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`jsx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import React from &#39;react&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export function ComponentName({ props }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  return (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {/* 组件内容 */}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用 <code>{ComponentName}</code> 作为组件名。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**使用**：</span></span></code></pre></div><p>/react-component Button</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 案例 2：Git 提交命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**场景**：规范 Git 提交信息格式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**创建** \`~/.claude/commands/git-commit.md\`：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># git-commit</span></span>
<span class="line"><span>生成规范的 Git 提交信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请根据我刚才的修改生成符合 Conventional Commits 规范的提交信息。</span></span>
<span class="line"><span>格式：type(scope): description</span></span>
<span class="line"><span>类型：feat/fix/docs/style/refactor/test/chore</span></span></code></pre></div><p><strong>使用</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/git-commit</span></span></code></pre></div><h4 id="案例-3-项目文档命令" tabindex="-1">案例 3：项目文档命令 <a class="header-anchor" href="#案例-3-项目文档命令" aria-label="Permalink to &quot;案例 3：项目文档命令&quot;">​</a></h4><p><strong>场景</strong>：快速生成 API 文档模板</p><p><strong>创建</strong> <code>docs/.claude/commands/api-doc.md</code>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># api-doc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生成 API 文档模板</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请为以下 API 生成 Markdown 文档：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 接口名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">简要描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请求方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GET/POST/PUT/DELETE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请求参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 参数名 | 类型 | 必填 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|------|------|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 响应示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 案例 4：测试用例命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**场景**：快速生成测试文件模板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**创建** \`tests/.claude/commands/test-file.md\`：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># test-file</span></span>
<span class="line"><span>生成测试文件模板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请为 {filename} 生成 Jest 测试文件，使用以下模板：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>describe(&#39;模块名&#39;, () =&gt; {</span></span>
<span class="line"><span>  test(&#39;测试用例描述&#39;, () =&gt; {</span></span>
<span class="line"><span>    // Arrange</span></span>
<span class="line"><span>    const input = {};</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // Act</span></span>
<span class="line"><span>    const result = functionName(input);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // Assert</span></span>
<span class="line"><span>    expect(result).toBe(expected);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 管理自定义命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 操作 | 命令 |</span></span>
<span class="line"><span>|------|------|</span></span>
<span class="line"><span>| 查看所有命令 | 输入 \`/\` 查看 |</span></span>
<span class="line"><span>| 创建新命令 | 在 \`.claude/commands/\` 目录添加 \`.md\` 文件 |</span></span>
<span class="line"><span>| 编辑命令 | 修改对应 \`.md\` 文件 |</span></span>
<span class="line"><span>| 删除命令 | 删除对应 \`.md\` 文件 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 命令文件规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **文件名** = 命令名（不含扩展名）</span></span>
<span class="line"><span>2. **首行** = 命令名称（与文件名一致）</span></span>
<span class="line"><span>3. **第二行起** = 空行后可写描述</span></span>
<span class="line"><span>4. **分隔线** \`---\` 后是执行的指令内容</span></span>
<span class="line"><span>5. **占位符** 用 \`{变量名}\` 表示，调用时替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 命令行参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>除了斜杠命令，还可以在启动时加参数：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 基本参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 参数 | 说明 | 示例 |</span></span>
<span class="line"><span>|------|------|------|</span></span>
<span class="line"><span>| \`-p, --print\` | 只输出结果，不交互 | \`claude -p &quot;解释这段代码&quot;\` |</span></span>
<span class="line"><span>| \`-c, --cached\` | 使用缓存的对话 | \`claude -c\` |</span></span>
<span class="line"><span>| \`--model\` | 指定模型 | \`claude --model opus\` |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Agent 模式</span></span></code></pre></div><p>claude --agent</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>让 Claude 自主决策和执行多步骤任务。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 指定项目目录</span></span></code></pre></div><p>claude /path/to/project</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>在指定目录启动 Claude Code。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 快捷键</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 快捷键 | 功能 |</span></span>
<span class="line"><span>|--------|------|</span></span>
<span class="line"><span>| \`Ctrl+C\` | 中断当前操作 |</span></span>
<span class="line"><span>| \`Ctrl+D\` | 退出 Claude |</span></span>
<span class="line"><span>| \`Ctrl+L\` | 清空屏幕 |</span></span>
<span class="line"><span>| \`↑\` / \`↓\` | 切换历史命令 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 环境变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### CLAUDE_API_KEY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置 API Key（也可以用 \`claude --local\` 交互式设置）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>export CLAUDE_API_KEY=your-api-key</span></span></code></pre></div><h3 id="claude-base-url" tabindex="-1">CLAUDE_BASE_URL <a class="header-anchor" href="#claude-base-url" aria-label="Permalink to &quot;CLAUDE_BASE_URL&quot;">​</a></h3><p>使用代理或自定义端点：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLAUDE_BASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://your-proxy.com</span></span></code></pre></div><h3 id="claude-model" tabindex="-1">CLAUDE_MODEL <a class="header-anchor" href="#claude-model" aria-label="Permalink to &quot;CLAUDE_MODEL&quot;">​</a></h3><p>指定默认模型：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CLAUDE_MODEL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">opus</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p><strong>Q: <code>/plan</code> 和直接说&quot;帮我改&quot;有什么区别？</strong></p><p>A: <code>/plan</code> 会先分析代码，生成详细的修改计划，等你确认后再执行。更安全，适合大改动。</p><p><strong>Q: 命令和 Skill 哪个更好用？</strong></p><p>A: 简单重复任务用命令，复杂工作流用 Skill。命令是快捷键，Skill 是工具箱。</p><p><strong>Q: 命令行参数和配置文件哪个优先级高？</strong></p><p>A: 命令行参数 &gt; 配置文件 &gt; 默认值。</p><h2 id="练习题" tabindex="-1">练习题 <a class="header-anchor" href="#练习题" aria-label="Permalink to &quot;练习题&quot;">​</a></h2><ol><li>输入 <code>/</code> 查看所有可用命令（用 Tab 补全体验模糊搜索）</li><li>用 <code>/ask</code> 问一个简单问题</li><li>用 <code>/review</code> 审查一段代码</li><li>尝试 <code>/rewind</code> 回退对话</li><li>创建一个简单的自定义命令</li></ol><h2 id="下一章" tabindex="-1">下一章 <a class="header-anchor" href="#下一章" aria-label="Permalink to &quot;下一章&quot;">​</a></h2><p>恭喜你完成了高阶用法前三章！接下来学习 Hooks 与安全配置。</p><p><a href="/claude-code-guide/guide/4-advanced-usage/16-hooks-security.html">👉 第十六章：Hooks 与安全配置</a></p>`,97)])])}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
