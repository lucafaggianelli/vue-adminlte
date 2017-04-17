<template>
  <div class="row">
    <div class="page-header">
      <h1>Small Box</h1>
    </div>

    <div class="col-sm-offset-3 col-sm-6 col-xs-12">
      <box-small
          header="3000"
          tagline="Pictures"
          icon="camera"
          color="bg-green"></box-small>
    </div>
    <div class="col-xs-12">
      <pre>
        &lt;box-small
            header="Heaer"
            tagline="Title"
            icon="camera"
            color="bg-green"&gt;&lt;/box-small&gt;
      </pre>
    </div>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import BoxSmall from '../../src/widgets'

export default {
  data: function () {
    return {
      props: BoxSmall.props
    }
  }
}
</script>
