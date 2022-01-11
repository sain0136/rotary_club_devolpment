<template>
  <div>
    <h1>
      {{
        $store.state.currentProjectData
          .project_name
      }}
    </h1>
    {{
      $store.state.currentProjectData
        .project_theme
    }}
    <br />
    <button
      @click="
        () =>
          this.$router.push(
            'pledges/view',
          )
      "
    >
      View Pledges
    </button>
  </div>
</template>

<script>

export default {
  name: 'ViewProject',
  data() {
    return {}
  },
  async created() {},
  methods: {},
}
</script>

<style scoped>
div {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
  margin: auto;
}

button {
  font-size: 24px;
}
</style>
