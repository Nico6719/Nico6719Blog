import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
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
    plugins: [
        ],
        footer: [
          message: '闽ICP<a href="https://beiancx.miit.gov.cn/">备2025115232号-1</a>',
          copyright: 'Copyright © 2025-现在 <a href="https://github.com/Nico6719">By：Nico6719</a>'  
    ]
    // ↑↑↑↑↑
  }
})



