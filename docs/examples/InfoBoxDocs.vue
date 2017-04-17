<template>
  <div class="row">
    <div class="page-header">
      <h1>Info Box</h1>
    </div>

    <example-section :sourcecode="source">
      <info-box
          title="Issues"
          value="43"
          icon="bomb"
          description="3 less than last week"
          progress="75"
          color="bg-blue-gradient"></info-box>
    </example-section>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import { InfoBox } from '../../src/widgets'

export default {
  name: 'InfoBoxDocs',
  data: function () {
    return {
      props: InfoBox.props,
      source: `<info-box
    title="Issues"
    value="43"
    icon="bomb"
    description="3 less than last week"
    progress="75"
    color="bg-blue-gradient"></info-box>`
    }
  }
}
</script>
