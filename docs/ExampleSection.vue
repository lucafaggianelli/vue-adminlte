<template>
  <div class="row">

    <div class="col-sm-offset-3 col-sm-6 col-xs-12">
      <slot></slot>
    </div>

    <div class="col-xs-12">
      <pre v-highlightjs="sourcecode">
        <code class="html"></code>
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    sourcecode: String
  }
}
</script>
