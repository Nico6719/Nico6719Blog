// www/.vitepress/config.mts
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// ============================================================
// VitePress + Teek 主题配置
// 官方文档: https://vp.teek.top/
// GitHub: https://github.com/Kele-Bingtang/vitepress-theme-teek
// ============================================================

export default withMermaid(
  defineConfig({
    // ============================================================
    // 站点基础配置
    // ============================================================
    
    title: "NicoNotFind",
    description: "一个不知名的小网站 - 分享技术教程与个人项目",
    lang: 'zh-CN',
    
    // 站点图标（将图标放在 public 文件夹）
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content: 'Nico6719' }],
      ['meta', { name: 'keywords', content: 'VitePress, 博客, 技术文章, Teek主题' }],
    ],
    
    // 开启纯净链接
    cleanUrls: true,
    
    // 最后更新时间
    lastUpdated: true,
    
    // Markdown 配置
    markdown: {
      lineNumbers: true,
      image: {
        lazyLoading: true
      }
    },

    // ============================================================
    // 主题配置
    // ============================================================
    
    themeConfig: {
      // ============================================================
      // Teek 主题专属配置
      // ============================================================
      
      // 网站 Logo
      logo: '/logo.png',
      
      // 站点标题
      siteTitle: 'NicoNotFind',
      
      // ============================================================
      // 首页配置（Teek 主题特性）
      // ============================================================
      home: {
        // 首页风格: 'card' | 'blog' | 'doc'
        style: 'card',
        
        // Banner 配置
        banner: {
          // Banner 类型: 'wave' | 'particle' | 'image'
          type: 'wave',
          // 背景图片（如果 type 为 'image'）
          bgImage: '/banner-bg.jpg',
          // Banner 高度
          height: '400px',
          // 标题
          title: '欢迎来到 NicoNotFind',
          // 副标题
          subtitle: '一个专注于技术分享的个人博客',
          // 按钮配置
          buttons: [
            {
              text: '开始阅读',
              link: '/abme',
              type: 'primary'
            },
            {
              text: '查看项目',
              link: '/abmezp',
              type: 'default'
            }
          ]
        },
        
        // 特性展示
        features: [
          {
            icon: '🎮',
            title: '游戏服务器',
            details: '我的世界服务器搭建教程',
            link: '/howtosetupnewmcservers'
          },
          {
            icon: '💻',
            title: '技术分享',
            details: '分享编程技术和开发经验',
            link: '/abme'
          },
          {
            icon: '🔗',
            title: '友情链接',
            details: '我的朋友们',
            link: '/link'
          }
        ]
      },

      // ============================================================
      // 文章配置（Teek 主题特性）
      // ============================================================
      post: {
        // 是否显示阅读时间
        readingTime: true,
        // 是否显示字数统计
        wordCount: true,
        // 是否显示目录
        catalog: true,
        // 文章封面默认图片
        defaultCover: '/default-cover.jpg',
        // 作者信息
        author: {
          name: 'Nico6719',
          avatar: '/avatar.jpg',
          link: 'https://github.com/Nico6719'
        }
      },

      // ============================================================
      // 主题样式配置
      // ============================================================
      themeStyle: {
        // 主题风格: 'default' | 'elegant' | 'tech'
        style: 'elegant',
        // 主题颜色
        primaryColor: '#1890ff',
        // 是否显示背景动画
        backgroundAnimation: true
      },

      // ============================================================
      // 评论系统配置（可选）
      // ============================================================
      comment: {
        // 评论系统类型: 'giscus' | 'waline' | 'twikoo'
        type: 'giscus',
        // Giscus 配置（需要先在 GitHub 上配置）
        options: {
          repo: 'Nico6719/Nico6719Blog',
          repoId: 'YOUR_REPO_ID',
          category: 'Announcements',
          categoryId: 'YOUR_CATEGORY_ID'
        }
      },

      // ============================================================
      // 导航栏配置
      // ============================================================
      nav: [
        { 
          text: '🏠 主页', 
          link: '/' 
        },
        { 
          text: '👤 关于', 
          link: '/abme' 
        },
        {
          text: '📚 教程',
          items: [
            { text: '服务器教程', link: '/howtosetupnewmcservers' }
          ]
        }
      ],
      
      // ============================================================
      // 侧边栏配置
      // ============================================================
      sidebar: [
        {
          text: '📖 关于',
          items: [
            { text: '个人介绍', link: '/abme' },
            { text: '个人项目', link: '/abmezp' },
            { text: '友情链接', link: '/link' }
          ]
        },
        {
          text: '🎮 服务器相关教程',
          items: [
            { text: '如何搭建一个我的世界服务器', link: '/howtosetupnewmcservers' }
          ]
        }
      ],
      
      // ============================================================
      // 页脚配置
      // ============================================================
      footer: {
        message: '闽ICP<a href="https://beian.miit.gov.cn/" target="_blank">备2025115232号-1</a>',
        copyright: 'Copyright © 2025-present <a href="https://github.com/Nico6719" target="_blank">Nico6719</a>'
      },
      
      // ============================================================
      // 社交链接
      // ============================================================
      socialLinks: [
        { 
          icon: 'github', 
          link: 'https://github.com/Nico6719' 
        }
      ],
      
      // ============================================================
      // 其他配置
      // ============================================================
      
      // 编辑链接
      editLink: {
        pattern: 'https://github.com/Nico6719/Nico6719Blog/edit/main/docs/:path',
        text: '✏️ 在 GitHub 上编辑'
      },
      
      // 最后更新时间
      lastUpdated: {
        text: '📅 最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'short'
        }
      },
      
      // 本地搜索
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      },
      
      // 大纲配置
      outline: {
        level: [2, 3],
        label: '📑 目录'
      }
    }
  })
)
