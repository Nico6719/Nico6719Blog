import { defineConfig } from 'vitepress'
export default defineConfig({

  title: "NicoNotFind",
  description: "一个不知名的小网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/abme' }
    ],
    sidebar: [
      {
        text: '关于',
        items: [
          { text: '个人', link: '/abme' },
          { text: '个人项目', link: '/abmezp' },
          { text: '友情链接', link: '/link' },

        ]
      },
      {
        text: '服务器相关教程',
        items: [
          { text: '如何搭建一个我的世界服务器', link: '/howtosetupnewmcservers' }
        ]
      }
    ],
    footer: {
      message: '闽ICP<a href="https://beiancx.miit.gov.cn/">备2025115232号-1</a>',
      copyright: 'Copyright © 2025-现在 <a href="https://github.com/Nico6719">By：Nico6719</a>'
    }
  }
})

import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

export default defineConfig({
  vite: {
    // ↓↓↓↓↓
    plugins: [
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '👇公众号👇 ---👇 赞赏 👇' },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033',
            style: 'display: inline-block;width:46%;padding-right:6px'
          },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea',
            style: 'display: inline-block;width:46%;padding-left:6px'
          }
        ],
        footer: [
          {
            type: 'text',
            content: 'footer content'
          },
          {
            type: 'button',
            content: '作者博客',
            link: 'https://sugarat.top'
          },
          {
            type: 'button',
            content: '博客主题',
            link: 'https://theme.sugarat.top',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ]
    // ↑↑↑↑↑
  }
})
