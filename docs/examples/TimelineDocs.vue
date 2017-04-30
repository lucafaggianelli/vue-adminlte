<template>
  <div class="row">
    <div class="page-header">
      <h1>Timeline</h1>
    </div>

    <example-section :sourcecode="source">
      <timeline
          date="Apr, 2017"
          dateColor="bg-red">

        <timeline-item
            iconColor="bg-purple"
            icon="thumbs-o-up"
            :date="new Date('2017-04-29')"
            title="Project status">
          <p>Project is running fine</p>
        </timeline-item>

        <timeline-item
            title="An author post"
            :author="author"
            :date="new Date('2017-04-28')"
            icon="camera"
            iconColor="bg-green">
          <p>It was a great weekend, check my pics</p>
          <img class="img-responsive" src="/static/img/user-widget-background.jpg"/>
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
      author: {
        name: 'Luca Faggianelli',
        image: 'https://secure.gravatar.com/avatar/4d72c9837d7a9c34942b049eed899fe6'
      },
      source: `<timeline
    date="Apr, 2017"
    dateColor="bg-red">

  <timeline-item
      iconColor="bg-purple"
      icon="thumbs-o-up"
      :date="new Date('2017-04-29')"
      title="Project status">
    <p>Project is running fine</p>
  </timeline-item>

  <timeline-item
      title="An author post"
      :author="author"
      :date="new Date('2017-04-28')"
      icon="camera"
      iconColor="bg-green">
    <p>It was a great weekend, check my pics</p>
    <img class="img-responsive" src="/static/img/user-widget-background.jpg"/>
  </timeline-item>

</timeline>`
    }
  }
}
</script>
