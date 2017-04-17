<template>
  <div class="info-box" :class="color">
    <span class="info-box-icon">
      <i class="fa" :class="['fa-' + icon, {'fa-spin': loading}]"></i>
    </span>

    <div class="info-box-content">
      <span class="info-box-text">{{ title }}</span>
      <span class="info-box-number">{{ value }}</span>

      <div class="progress">
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
      </div>
      <span class="progress-description">{{ description }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: null,
      description: 'Upper text'
    },
    value: {
      type: null,
      description: 'Central bold text'
    },
    description: {
      type: null,
      description: 'Bottom text'
    },
    icon: String,
    color: null,
    progress: {
      type: [Number, String],
      default: 0,
      description: 'Number between 0 and 100 for the progress bar'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
