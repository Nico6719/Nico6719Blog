// 1. 尝试修改默认主题的导入路径
import Theme from 'vitepress/theme'
import TeekTheme from 'vitepress-theme-teek'

// 暂时先不要引入 style.css，等构建通过了再说
// import 'vitepress-theme-teek/style.css'

export default {
  ...Theme,      // 使用解构直接覆盖
  ...TeekTheme,
  enhanceApp({ app, router, siteData }) {
    // 如果主题有其他的插件注册，可以在这里写
    TeekTheme.enhanceApp?.({ app, router, siteData })
  }
}
