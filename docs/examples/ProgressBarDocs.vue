<template>
  <div class="row">
    <div class="page-header">
      <h1>Progress Bar</h1>
    </div>

    <div class="col-sm-offset-3 col-sm-6 col-xs-12">
      <progress-bar
          value="35"
          size="xs"></progress-bar>
    </div>
    <div class="col-xs-12">
      <pre>
        &lt;progress-bar
            value="35"
            size="xs"&gt;&lt;/progress-bar&gt;
      </pre>
    </div>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import { ProgressBar } from '../../src/widgets'

export default {
  data: function () {
    return {
      props: ProgressBar.props
    }
  }
}
</script>
