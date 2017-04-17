<template>
  <div class="progress" :class="sizeClass">
    <div class="progress-bar" :class="color"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: progress + '%'}">
      <span class="sr-only">{{ progress }}%</span>
    </div>
  </div>
</template>
<script>
let SIZES = ['sm', 'xs', 'xxs']

export default {
  props: {
    progress: {
      type: [Number, String],
      default: 0,
      description: 'Number between 0 and 100 of the bar progress'
    },
    color: {
      type: String,
      description: 'A progress bar color class like progress-bar-green. Can also use -striped.'
    },
    size: {
      type: String,
      validator: function (val) {
        return !val || SIZES.indexOf(val) >= 0
      },
      description: `Size of the bar, one of ${SIZES.join(', ')}.
Omit the prop for normal size.`
    }
  },
  computed: {
    sizeClass: function () {
      if (this.size) return 'progress-' + this.size
    }
  }
}
</script>
