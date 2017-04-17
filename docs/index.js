import Vue from 'vue'

import BodyDocs from './BodyDocs.vue'

Vue.config.devtools = true
Vue.config.debug = true

new Vue({
  el: '#main-content',
  components: {
    BodyDocs
  }
})
