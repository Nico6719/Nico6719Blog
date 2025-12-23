import DefaultTheme from 'vitepress/theme'
import TeekTheme from 'vitepress-theme-teek'

// 之前确认过这个包里没有 style.css，所以我们继续注释掉它
// 如果你发现页面没样式，稍后我们用别的方法补救
// import 'vitepress-theme-teek/style.css'

export default {
  ...DefaultTheme,
  ...TeekTheme,
  enhanceApp(ctx) {
    // 调用默认主题和第三方主题的增强函数
    DefaultTheme.enhanceApp?.(ctx)
    TeekTheme.enhanceApp?.(ctx)
  }
}
