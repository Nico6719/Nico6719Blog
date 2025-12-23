import DefaultTheme from 'vitepress/theme'
import TeekTheme from 'vitepress-theme-teek'

// 如果构建还报样式错误，请尝试注释掉下面这一行
// import 'vitepress-theme-teek/style.css' 

export default {
  extends: DefaultTheme,
  ...TeekTheme
}
