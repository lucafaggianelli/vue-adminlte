import Vue from 'vue'
import AdminLTE from '../src'
import VueHighlightJS from 'vue-highlightjs'

import DocsLayout from './DocsLayout.vue'
import PropsSection from './PropsSection.vue'
import ExampleSection from './ExampleSection.vue'

Vue.component('props-section', PropsSection)
Vue.component('example-section', ExampleSection)

Vue.config.devtools = true
Vue.config.debug = true
Vue.use(VueHighlightJS)
Vue.use(AdminLTE)

new Vue({
  el: '#main-content',
  components: {
    DocsLayout,
    ExampleSection
  }
})
