import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

export default defineConfig({
  // 网站标题
  title: "NicoNotFind",
  
  // 网站描述（用于 SEO）
  description: "一个不知名的小网站",
  
  // Vite 配置
  vite: {
    // 插件配置 - 注意：插件应该放在 vite.plugins 中，而不是顶层 plugins
    plugins: [
      AnnouncementPlugin({
        // 公告栏标题
        title: '🎉 欢迎访问',
        
        // 公告内容主体 - 使用 body 数组格式
        body: [
          {
            type: 'text',
            content: '欢迎访问我的个人博客！这里分享技术文章和个人项目。',
            style: 'font-size: 16px; margin-bottom: 10px;'
          },
          {
            type: 'text',
            content: '🚀 网站持续更新中，敬请期待更多精彩内容！',
            style: 'color: #1890ff; font-weight: bold;'
          }
        ],
        
        // 底部操作区（可选）
        footer: [
          {
            type: 'button',
            content: '了解更多',
            link: '/abme',
            props: {
              type: 'primary' // 按钮类型：primary, success, warning, danger
            }
          }
        ],
        
        // 显示时长配置
        // duration: 0      // 0 = 不自动关闭
        // duration: 5000   // 5000 = 5秒后自动关闭
        // duration: -1     // -1 = 只显示一次（关闭后不再显示）
        duration: 0,
        
        // 是否允许重新打开公告（关闭后可通过按钮重新打开）
        reopen: true,
        
        // 移动端是否自动最小化
        mobileMinify: true,
        
        // 是否启用闪烁提示效果（吸引注意力）
        twinkle: false,
        
        // 是否只在客户端渲染（避免 SSR 问题）
        clientOnly: false,
      })
    ]
  },
  
  // 主题配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/abme' }
    ],
    
    // 侧边栏配置
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
    
    // 页脚配置
    footer: {
      message: '闽ICP<a href="https://beian.miit.gov.cn/">备2025115232号-1</a>',
      copyright: 'Copyright © 2025-现在 <a href="https://github.com/Nico6719">By：Nico6719</a>'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nico6719' }
    ],
    
    // 编辑链接配置
    editLink: {
      pattern: 'https://github.com/Nico6719/Nico6719Blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    // 最后更新时间显示
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 搜索配置（可选）
    search: {
      provider: 'local'
    },
    
    // 大纲配置（右侧目录）
    outline: {
      level: [2, 3], // 显示 h2 和 h3 标题
      label: '页面导航'
    }
  }
})
