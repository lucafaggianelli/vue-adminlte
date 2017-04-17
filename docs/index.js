import Vue from 'vue'
import AdminLTE from '../src'

import DocsLayout from './DocsLayout.vue'

import PropsSection from './PropsSection.vue'

Vue.component('props-section', PropsSection)

Vue.config.devtools = true
Vue.config.debug = true
Vue.use(AdminLTE)

new Vue({
  el: '#main-content',
  components: {
    DocsLayout
  }
})
