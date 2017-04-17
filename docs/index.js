import Vue from 'vue'

import DocsLayout from './DocsLayout.vue'

Vue.config.devtools = true
Vue.config.debug = true

new Vue({
  el: '#main-content',
  components: {
    DocsLayout
  }
})
