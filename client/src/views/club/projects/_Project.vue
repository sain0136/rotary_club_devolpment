<template>
  <router-view></router-view>
</template>

<script>

import store from '../../../store/index'

export default {
  name: 'Project',
  components: {
  },
  created() {
    store.dispatch('changeCurrentProjectData', this.$router.currentRoute.value.params.projectid)
  }
}

</script>

<style scoped>



</style>