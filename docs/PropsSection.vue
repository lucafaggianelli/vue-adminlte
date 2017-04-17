<template>
  <div class="col-xs-12">
    <h2>Props</h2>
    <table class="table table-bordered table-striped js-options-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prop, name) in props">
          <td>{{ name }}</td>
          <td>{{ getTypes(prop.type) }}</td>
          <td>{{ prop.default }}</td>
          <td>{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    props: null
  },
  methods: {
    getTypes: function (types) {
      if (!types) {
        return 'Any'
      } else if (types instanceof Array) {
        let ret = []
        for (let type of types) {
          ret.push(type.name)
        }
        return ret.join(', ')
      } else {
        return types.name
      }
    }
  }
}
</script>
