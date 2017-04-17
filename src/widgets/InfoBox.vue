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
    title: null,
    value: null,
    description: null,
    icon: String,
    color: null,
    progress: Number,
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
