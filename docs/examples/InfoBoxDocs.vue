<template>
  <div class="row">
    <div class="page-header">
      <h1>Info Box</h1>
    </div>

    <div class="col-sm-offset-3 col-sm-6 col-xs-12">
      <info-box
          title="Issues"
          value="43"
          icon="bomb"
          description="3 less than last week"
          progress="75"
          color="bg-blue-gradient"></info-box>
    </div>
    <div class="col-xs-12">
      <pre>
        &lt;info-box
            title="Issues"
            value="43"
            icon="bomb"
            description="3 less than last week"
            progress="75"
            color="bg-blue-gradient"&gt;&lt;/info-box&gt;
      </pre>
    </div>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import { InfoBox } from '../../src/widgets'

export default {
  components: {

  },
  data: function () {
    return {
      props: InfoBox.props
    }
  }
}
</script>
