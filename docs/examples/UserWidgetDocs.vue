<template>
  <div class="row">
    <div class="page-header">
      <h1>User Widget</h1>
    </div>

    <example-section :sourcecode="source">
      <user-widget
          username="Luca Faggianelli"
          image="https://secure.gravatar.com/avatar/4d72c9837d7a9c34942b049eed899fe6"
          backgroundImage="/static/img/user-widget-background.jpg"
          progress="75"></user-widget>
    </example-section>

    <props-section :props="props"></props-section>
  </div>
</template>

<script>
import { UserWidget } from '../../src/widgets'

export default {
  name: 'UserWidgetDocs',
  data: function () {
    return {
      props: UserWidget.props,
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
