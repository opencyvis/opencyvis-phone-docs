import DefaultTheme from 'vitepress/theme'
import CardGrid from './components/CardGrid.vue'
import Card from './components/Card.vue'
import Columns from './components/Columns.vue'
import Callout from './components/Callout.vue'
import './style/vars.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CardGrid', CardGrid)
    app.component('Card', Card)
    app.component('Columns', Columns)
    app.component('Callout', Callout)
  },
}
