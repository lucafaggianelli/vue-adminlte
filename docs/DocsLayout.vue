<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <component v-for="(item, i) in allComponents" :is="item" :id="getItemName(item)" :key="i"></component>
      </div>

      <div class="col-sm-3">
        <div data-spy="affix" data-offset-top="0">
          <h3>Vue-AdminLTE</h3>
          <nav id="docs-menu">
            <ul class="nav nav-pills nav-stacked">
              <li v-for="item in allComponents"><a :href="'#'+getItemName(item)">{{ getItemName(item) }}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxDocs from './examples/BoxDocs.vue'
import BoxSmallDocs from './examples/BoxSmallDocs.vue'
import InfoBoxDocs from './examples/InfoBoxDocs.vue'
import ProgressBarDocs from './examples/ProgressBarDocs.vue'
import TimelineDocs from './examples/TimelineDocs.vue'
import UserWidgetDocs from './examples/UserWidgetDocs.vue'

const ALL_COMPONENTS = {
  BoxDocs,
  BoxSmallDocs,
  InfoBoxDocs,
  ProgressBarDocs,
  TimelineDocs,
  UserWidgetDocs
}

export default {
  components: ALL_COMPONENTS,
  data: function () {
    return {
      allComponents: ALL_COMPONENTS
    }
  },
  methods: {
    getItemName: function (item) {
      return item.name.slice(0, -4)
    }
  },
  mounted: function () {
  }
}
</script>
