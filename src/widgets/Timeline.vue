<template>
  <ul class="timeline">
    <!-- timeline time label -->
    <li class="time-label">
        <span :class="dateColor">
            {{ date }}
        </span>
    </li>

    <!-- Timeline items -->
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    date: null,
    dateColor: null
  }
}
</script>
