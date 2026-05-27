import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenCyvis',
  description: 'The open-source AI phone.',

  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-light.svg' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: navEn(),
        sidebar: sidebarEn(),
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: '你的开源 AI 手机。',
      themeConfig: {
        nav: navZh(),
        sidebar: sidebarZh(),
      },
    },
  },

  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/opencyvis/opencyvis-phone' },
    ],
  },
})

function navEn() {
  return [
    { text: 'Start', link: '/start/getting-started', activeMatch: '/start/' },
    { text: 'Features', link: '/features/virtual-display', activeMatch: '/features/' },
    { text: 'Guides', link: '/guides/privacy', activeMatch: '/guides/' },
  ]
}

function navZh() {
  return [
    { text: '开始', link: '/zh/start/getting-started', activeMatch: '/zh/start/' },
    { text: '功能', link: '/zh/features/virtual-display', activeMatch: '/zh/features/' },
    { text: '指南', link: '/zh/guides/privacy', activeMatch: '/zh/guides/' },
  ]
}

function sidebarEn() {
  return {
    '/start/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/start/getting-started' },
          { text: 'Standard Mode', link: '/start/standard-mode' },
          { text: 'System App Mode', link: '/start/system-app-mode' },
          { text: 'LLM Configuration', link: '/start/llm-config' },
        ],
      },
    ],
    '/features/': [
      {
        text: 'Features',
        items: [
          { text: 'Virtual Display', link: '/features/virtual-display' },
          { text: 'IM Remote Control', link: '/features/im-remote' },
          { text: 'Routines', link: '/features/routines' },
          { text: 'Provider Profiles', link: '/features/provider-profiles' },
          { text: 'Supported Models', link: '/features/models' },
        ],
      },
    ],
    '/guides/': [
      {
        text: 'Guides',
        items: [
          { text: 'Privacy & Security', link: '/guides/privacy' },
          { text: 'Architecture', link: '/guides/architecture' },
          { text: 'Troubleshooting', link: '/guides/troubleshooting' },
        ],
      },
    ],
    '/about/': [
      {
        text: 'About',
        items: [
          { text: 'Contributing', link: '/about/contributing' },
          { text: 'Credits', link: '/about/credits' },
        ],
      },
    ],
  }
}

function sidebarZh() {
  return {
    '/zh/start/': [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/zh/start/getting-started' },
          { text: '标准模式', link: '/zh/start/standard-mode' },
          { text: '系统 App 模式', link: '/zh/start/system-app-mode' },
          { text: 'LLM 配置', link: '/zh/start/llm-config' },
        ],
      },
    ],
    '/zh/features/': [
      {
        text: '功能',
        items: [
          { text: '虚拟显示器', link: '/zh/features/virtual-display' },
          { text: 'IM 远程控制', link: '/zh/features/im-remote' },
          { text: '例行任务', link: '/zh/features/routines' },
          { text: 'Provider 配置方案', link: '/zh/features/provider-profiles' },
          { text: '支持的模型', link: '/zh/features/models' },
        ],
      },
    ],
    '/zh/guides/': [
      {
        text: '指南',
        items: [
          { text: '隐私 & 安全', link: '/zh/guides/privacy' },
          { text: '架构', link: '/zh/guides/architecture' },
          { text: '常见问题排查', link: '/zh/guides/troubleshooting' },
        ],
      },
    ],
    '/zh/about/': [
      {
        text: '关于',
        items: [
          { text: '参与贡献', link: '/zh/about/contributing' },
          { text: '致谢', link: '/zh/about/credits' },
        ],
      },
    ],
  }
}
