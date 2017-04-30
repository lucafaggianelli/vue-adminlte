<template>
  <div class="box box-widget">
    <div class="box-header with-border">
      <div class="user-block">
        <img class="img-circle" :src="userImage" alt="User Image">
        <span class="username">{{ username }}</span>
        <span class="description">{{ description }} - {{ date }}</span>
      </div>
      <!-- /.user-block -->

      <div class="box-tools">
        <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="" data-original-title="Mark as read">
          <i class="fa fa-circle-o"></i></button>
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
      <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->

    <div class="box-body">
      <slot></slot>
      <span class="pull-right text-muted">127 likes - 3 comments</span>
    </div>
    <!-- /.box-body -->
  </div>
</template>
<script>
export default {
  props: {
    userImage: String,
    username: String,
    description: String,
    date: [String, Date]
  }
}
</script>
