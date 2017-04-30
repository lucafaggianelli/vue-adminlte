<template>
  <div class="row">

    <div class="example-wrapper">
      <div class="col-sm-offset-3 col-sm-6 col-xs-12">
        <slot></slot>
      </div>
    </div>

    <div class="col-xs-12 source-wrapper">
      <pre v-highlightjs="sourcecode"><code class="html"></code></pre>
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
<style>
.example-wrapper {
  border: 1px solid #f0f0f0;
  background-color: #f8f8f8;
  margin: 0 15px;
  padding-top: 1em;
}
.example-wrapper:after {
  content:'';
  display:block;
  clear: both;
}

.source-wrapper pre {
  border: none;
  border-radius: 0;
  padding: 0;
}
.source-wrapper pre code {
  padding: 2em 3em;
}
</style>
