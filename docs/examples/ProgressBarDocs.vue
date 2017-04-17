<template>
  <div class="row">
    <div class="page-header">
      <h1>Progress Bar</h1>
    </div>

    <example-section :sourcecode="source">
      <progress-bar
          progress="35"
          size="xs"></progress-bar>
    </example-section>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import { ProgressBar } from '../../src/widgets'

export default {
  name: 'ProgressBarDocs',
  data: function () {
    return {
      props: ProgressBar.props,
      source: `
<progress-bar
    progress="35"
    size="xs"></progress-bar>`
    }
  }
}
</script>
