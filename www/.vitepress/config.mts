import { defineConfig } from 'vitepress'
import { announcement } from 'vitepress-plugin-announcement'

export default defineConfig({
  title: "NicoNotFind",
  description: "一个不知名的小网站",
  
  // 添加插件配置
  plugins: [
    announcement({
      // 公告栏标题
      title: '🎉 公告',
      
      // 公告内容
      content: '欢迎访问我的个人博客！',
      
      // 公告栏样式配置
      style: {
        // 背景颜色
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        // 文字颜色
        color: '#fff',
        // 圆角
        borderRadius: '8px',
        // 边框
        border: 'none',
        // 阴影
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      
      // 关闭按钮样式
      closeStyle: {
        color: '#fff',
        background: 'rgba(255, 255, 255, 0.2)',
      },
      
      // 公告位置：'top' 或 'bottom'
      position: 'top',
      
      // 是否显示图标
      showIcon: true,
      
      // 自动关闭时间（毫秒），不设置则不会自动关闭
      // autoClose: 5000,
      
      // 关闭后保存到本地存储，避免重复显示
      storageKey: 'announcement-closed',
      
      // 显示条件（可选）
      condition: () => {
        // 可以在这里添加显示条件
        return true // 总是显示
        // return window.location.pathname === '/' // 只在首页显示
      }
    })
  ],

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
    },
    
    // 可以添加社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nico6719' }
    ],
    
    // 可以添加编辑链接
    editLink: {
      pattern: 'https://github.com/Nico6719/Nico6719Blog/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
