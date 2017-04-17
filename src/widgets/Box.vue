<template>
  <div class="box box-solid" :class="color">
    <div class="box-header with-border" v-if="title">
      <i class="fa" :class="'fa-' + icon"></i>
      <h3 class="box-title">{{ title }}</h3>

      <div class="pull-right box-tools"  v-if="$slots.toolbox">
        <slot name="toolbox"></slot>
      </div>
    </div>

    <div class="box-body">
      <slot></slot>
    </div>

    <div class="box-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: null,
      default: null,
      description: 'Title for the box header, if null hide the header'
    },
    icon: String,
    color: {
      type: [String, Object],
      description: 'One of box-warning, box-success, box-danger'
    }
  }
}
</script>
