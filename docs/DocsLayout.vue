<template>
  <div class="container">
    <h1>Hello docs</h1>

    <box-small-docs></box-small-docs>
    <info-box-docs></info-box-docs>
    <progress-bar-docs></progress-bar-docs>
  </div>
</template>

<script>
import BoxSmallDocs from './examples/BoxSmallDocs.vue'
import InfoBoxDocs from './examples/InfoBoxDocs.vue'
import ProgressBarDocs from './examples/ProgressBarDocs.vue'

export default {
  components: {
    BoxSmallDocs,
    InfoBoxDocs,
    ProgressBarDocs
  }
}
</script>
