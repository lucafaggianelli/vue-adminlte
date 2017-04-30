<template>
  <div class="row">
    <div class="page-header">
      <h1>UserPost</h1>
    </div>

    <example-section :sourcecode="source">
      <user-post
          username="Luca Faggianelli"
          userImage="https://secure.gravatar.com/avatar/4d72c9837d7a9c34942b049eed899fe6"
          description="Project status update"
          date="2017-04-30">
        <p>Content here</p>
      </user-post>
    </example-section>

    <props-section :props="props"></props-section>

  </div>
</template>

<script>
import { UserPost } from '../../src/widgets'

export default {
  name: 'UserPostDocs',
  data: function () {
    return {
      props: UserPost.props,
      source: `<user-post
    username="Luca Faggianelli"
    userImage="https://secure.gravatar.com/avatar/..."
    description="Project status update"
    date="2017-04-30">
  <p>Content here</p>
</user-post>`
    }
  }
}
</script>
