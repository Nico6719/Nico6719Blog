// 修改导入方式，避免触发 VitePress 内部路径 Bug
import { Layout } from 'vitepress/theme' 
import TeekTheme from 'vitepress-theme-teek'

// 确保这行被注释掉，因为之前确认过包里没这个文件
// import 'vitepress-theme-teek/style.css'

export default {
  // 不再使用 extends DefaultTheme，直接使用 Teek 提供的扩展
  ...TeekTheme,
  Layout: TeekTheme.Layout || Layout, // 优先使用主题的布局，没有则用默认
  enhanceApp({ app, router, siteData }) {
    TeekTheme.enhanceApp?.({ app, router, siteData })
  }
}
