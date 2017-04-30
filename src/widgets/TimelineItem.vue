<template>
  <li>
      <!-- timeline icon -->
      <i class="fa" :class="['fa-'+icon, iconColor]"></i>
      <div class="timeline-item">
          <span class="time"><i class="fa fa-clock-o"></i> {{ time }}</span>

          <h3 class="timeline-header"><a href="#">{{ title }}</a></h3>

          <div class="timeline-body">
            <slot></slot>
          </div>

          <div class="timeline-footer" v-if="$slots.footer">
              <slot name="footer"></slot>
          </div>
      </div>
  </li>
</template>
<script>
export default {
  props: {
    icon: null,
    iconColor: null,
    time: null,
    title: String
  }
}
</script>
