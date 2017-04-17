<template>
  <div class="small-box" :class="color">
    <div class="inner">
      <h3>{{ header }}</h3>
      <p>{{ tagline }}</p>
    </div>
    <div class="icon">
      <i class="fa" :class="'fa-' + icon"></i>
    </div>
    <a href="#"
        class="small-box-footer">
        More info <i class="fa fa-arrow-circle-right"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'BoxSmall',
  props: ['header', 'tagline', 'icon', 'color']
}
</script>
