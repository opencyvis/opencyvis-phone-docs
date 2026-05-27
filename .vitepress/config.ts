import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenCyvis',
  description: 'The open-source AI phone',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
    },
  },
})
