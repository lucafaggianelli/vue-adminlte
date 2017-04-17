<template>
  <div class="progress" :class="sizeClass">
    <div class="progress-bar" :class="color"
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: value + '%'}">
      <span class="sr-only">{{ value }}%</span>
    </div>
  </div>
</template>
<script>
let SIZES = ['sm', 'xs', 'xxs']

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    color: String,
    size: {
      validator: function (val) {
        return !val || SIZES.indexOf(val) >= 0
      }
    }
  },
  computed: {
    sizeClass: function () {
      if (this.size) return 'progress-' + this.size
    }
  }
}
</script>
