// www/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import TeekTheme from 'vitepress-theme-teek'
import 'vitepress-theme-teek/style.css'

export default {
  extends: DefaultTheme,
  ...TeekTheme
}
