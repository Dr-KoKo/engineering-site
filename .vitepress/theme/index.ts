import DefaultTheme from 'vitepress/theme'
import ImageGrid from './components/ImageGrid.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ImageGrid', ImageGrid)
  },
} satisfies Theme
