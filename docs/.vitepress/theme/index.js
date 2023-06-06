import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './index.css'
export default {
  ...DefaultTheme,
  Layout: MyLayout
}