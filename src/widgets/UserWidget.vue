<template>
  <div class="box box-widget widget-user">
    <div class="widget-user-header" :class="color"
        :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <h3 class="widget-user-username" v-if="username">
        <router-link :to="link" v-if="link">
          {{ username }}
        </router-link>
        <template v-else>{{ username }}</template>
      </h3>
      <h5 class="widget-user-desc" v-if="description">{{ description }}</h5>
    </div>
    <div class="widget-user-image">
      <img class="img-circle" :src="image">
    </div>
    <div class="box-footer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserWidget',
  props: {
    color: {
      type: String,
      default: 'bg-aqua-active'
    },
    backgroundImage: {
      type: String,
      description: 'URL to a picture'
    },
    image: {
      type: String,
      description: 'URL to a picture'
    },
    username: {
      type: null,
      description: 'Header text'
    },
    description: {
      type: null,
      description: 'Text below header'
    },
    link: {
      type: [String, Object],
      description: 'An argument for router-link "to" prop'
    }
  }
}
</script>

<style>
.widget-user-header {
  background-position: center center;
  background-size: cover;
}
</style>
