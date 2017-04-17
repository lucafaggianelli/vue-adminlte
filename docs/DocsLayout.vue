<template>
  <div class="container">
    <h1>Hello docs</h1>

    <box-docs></box-docs>
    <box-small-docs></box-small-docs>
    <info-box-docs></info-box-docs>
    <progress-bar-docs></progress-bar-docs>
    <user-widget-docs></user-widget-docs>
  </div>
</template>

<script>
import BoxDocs from './examples/BoxDocs.vue'
import BoxSmallDocs from './examples/BoxSmallDocs.vue'
import InfoBoxDocs from './examples/InfoBoxDocs.vue'
import ProgressBarDocs from './examples/ProgressBarDocs.vue'
import UserWidgetDocs from './examples/UserWidgetDocs.vue'

export default {
  components: {
    BoxDocs,
    BoxSmallDocs,
    InfoBoxDocs,
    ProgressBarDocs,
    UserWidgetDocs
  }
}
</script>
