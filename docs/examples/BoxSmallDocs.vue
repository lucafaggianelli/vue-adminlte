<template>
  <div class="row">
    <h1>Small Box</h1>
    <div class="col-sm-offset-3 col-sm-6 col-xs-12">
      <box-small
          header="Header"
          tagline="Title"
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

export default {
  components: {

  },
  data: function () {
    return {
      props: [
        {
          'name': 'color',
          'type': 'Background color class',
          'default': 'bg-green',
          'description': ''
        }
      ]
    }
  }
}
</script>
