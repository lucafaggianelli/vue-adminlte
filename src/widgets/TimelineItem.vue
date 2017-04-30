<template>
  <li>
      <!-- timeline icon -->
      <i class="fa" :class="['fa-'+icon, iconColor]"></i>
      <div class="timeline-item">
          <span class="time" :title="dateFull"><i class="fa fa-clock-o"></i>
            {{ dateFromNow }}</span>

          <div class="timeline-header" v-if="author">
            <div class="user-block">
              <img class="img-circle" :src="author.image" alt="User Image">
              <span class="username"><a href="#">{{ title }}</a></span>
              <span class="description">{{ author.name }}</span>
            </div>
          </div>
          <h3 class="timeline-header" v-else><a href="#">{{ title }}</a></h3>

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
import moment from 'moment'

export default {
  props: {
    icon: null,
    iconColor: null,
    date: [String, Date],
    title: String,
    author: Object
  },
  computed: {
    dateFromNow: function () {
      return moment(this.date).fromNow()
    },
    dateFull: function () {
      return moment(this.date).format('LLL')
    }
  }
}
</script>
