<template>
  <div class="container">
    <h1>Hello docs</h1>

    <box-small-docs></box-small-docs>
    <info-box-docs></info-box-docs>
  </div>
</template>

<script>
import BoxSmallDocs from './examples/BoxSmallDocs.vue'
import InfoBoxDocs from './examples/InfoBoxDocs.vue'

export default {
  components: {
    BoxSmallDocs,
    InfoBoxDocs
  }
}
</script>
