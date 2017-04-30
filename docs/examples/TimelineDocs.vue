<template>
  <div class="row">
    <div class="page-header">
      <h1>Timeline</h1>
    </div>

    <example-section :sourcecode="source">
      <timeline
          date="12 Jul, 2017"
          dateColor="bg-red">

        <timeline-item
            icon="camera"
            iconColor="bg-purple"
            time="12:35"
            title="Project status">
          <p>
            Hey there!
          </p>
        </timeline-item>

      </timeline>
    </example-section>

    <props-section :props="props"></props-section>

  </div>
</template>

<script>
import { Timeline, TimelineItem } from '../../src/widgets'

export default {
  name: 'TimelineDocs',
  data: function () {
    return {
      props: Timeline.props,
      source: `<timeline
    date="12 Jul, 2017"
    dateColor="bg-red">`
    }
  }
}
</script>
