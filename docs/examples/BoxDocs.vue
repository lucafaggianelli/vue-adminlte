<template>
  <div class="row">
    <div class="page-header">
      <h1>Box</h1>
    </div>

    <example-section :sourcecode="source">
      <box
          title="Box Title"
          color="box-success"
          icon="info">
        <h2>Content here</h2>
        <ol>
          <li>Hello</li>
        </ol>
      </box>
    </example-section>

    <props-section :props="props"></props-section>

  </div>
</template>

<script>
import { Box } from '../../src/widgets'

export default {
  name: 'BoxDocs',
  data: function () {
    return {
      props: Box.props,
      source: `<box
    title="Box Title"
    color="box-success"
    icon="info">`
    }
  }
}
</script>
