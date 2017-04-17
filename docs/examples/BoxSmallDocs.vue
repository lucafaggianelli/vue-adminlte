<template>
  <div class="row">
    <div class="page-header">
      <h1>Small Box</h1>
    </div>

    <example-section :sourcecode="source">
      <box-small
          header="3000"
          tagline="Pictures"
          icon="camera"
          color="bg-green"></box-small>
    </example-section>

    <props-section :props="props"></props-section>

  </div>
</template>

<script>
import { BoxSmall } from '../../src/widgets'

export default {
  name: 'BoxSmallDocs',
  data: function () {
    return {
      props: BoxSmall.props,
      source: `<box-small
    header="3000"
    tagline="Pictures"
    icon="camera"
    color="bg-green"></box-small>`
    }
  }
}
</script>
