import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code 中文教程',
  description: '从零开始学习 Claude Code，一个友好的 AI 编程助手',

  lang: 'zh-CN',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '快速开始', link: '/guide/1-getting-started/' },
      { text: '基础用法', link: '/guide/2-basic-usage/' },
      { text: '实战工作流', link: '/guide/3-practical-workflows/' },
      { text: '高阶用法', link: '/guide/4-advanced-usage/' },
      { text: '继续学习', link: '/guide/5-next-steps/' }
    ],

    sidebar: {
      '/guide/1-getting-started/': [
        {
          text: '入门篇',
          items: [
            { text: '第一章：Claude Code 是什么', link: '/guide/1-getting-started/1-what-is-claude-code' },
            { text: '第二章：安装 Claude Code', link: '/guide/1-getting-started/2-installation' },
            { text: '第三章：API Key 获取与配置', link: '/guide/1-getting-started/3-api-key-setup' },
            { text: '第四章：首次对话', link: '/guide/1-getting-started/4-first-conversation' }
          ]
        }
      ],
      '/guide/2-basic-usage/': [
        {
          text: '基础篇',
          items: [
            { text: '第五章：读懂代码库', link: '/guide/2-basic-usage/5-understand-codebase' },
            { text: '第六章：编辑和创建代码', link: '/guide/2-basic-usage/6-edit-code' },
            { text: '第七章：多轮对话技巧', link: '/guide/2-basic-usage/7-multi-turn' }
          ]
        }
      ],
      '/guide/3-practical-workflows/': [
        {
          text: '实践篇',
          items: [
            { text: '第八章：调试和错误处理', link: '/guide/3-practical-workflows/08-debugging' },
            { text: '第九章：代码审查和优化', link: '/guide/3-practical-workflows/09-code-review' },
            { text: '第十章：Git 操作辅助', link: '/guide/3-practical-workflows/10-git-operations' },
            { text: '第十一章：CLAUDE.md', link: '/guide/3-practical-workflows/11-claude-md' },
            { text: '第十二章：日常工作流实战', link: '/guide/3-practical-workflows/12-realistic-workflow' }
          ]
        }
      ],
      '/guide/4-advanced-usage/': [
        {
          text: '高阶篇',
          items: [
            { text: '第十三章：MCP', link: '/guide/4-advanced-usage/13-mcp' },
            { text: '第十四章：Skill', link: '/guide/4-advanced-usage/14-skills' },
            { text: '第十五章：内置命令', link: '/guide/4-advanced-usage/15-builtin-commands' }
          ]
        }
      ],
      '/guide/5-next-steps/': [
        {
          text: '继续学习',
          items: [
            { text: '第十六章：继续学习之路', link: '/guide/5-next-steps/16-next-steps' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaojianfeng/claudecode-guide' }
    ],

    footer: {
      message: '基于 Claude Code 构建',
      copyright: 'MIT License'
    },

    editLink: {
      pattern: 'https://github.com/yaojianfeng/claudecode-guide/edit/master/docs/:path',
      text: '帮助改进这篇教程'
    }
  }
})