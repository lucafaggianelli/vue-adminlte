import Hello from './Hello.vue'
import {
  Box,
  BoxSmall,
  InfoBox,
  ProgressBar,
  Timeline,
  TimelineItem,
  UserWidget
} from './widgets'

function plugin (Vue) {
  Vue.component('hello', Hello)
  Vue.component('box', Box)
  Vue.component('box-small', BoxSmall)
  Vue.component('info-box', InfoBox)
  Vue.component('progress-bar', ProgressBar)
  Vue.component('timeline', Timeline)
  Vue.component('timeline-item', TimelineItem)
  Vue.component('user-widget', UserWidget)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Hello,
  version
}

export {
  Box,
  BoxSmall,
  InfoBox,
  ProgressBar,
  Timeline,
  TimelineItem,
  UserWidget
}
