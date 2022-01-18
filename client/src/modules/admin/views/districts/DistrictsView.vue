<template>
  <div>
    <br /><br />
    <DistrictsTable /> <br> <br>
    <button
      name="create"
      class="plus"
      id="create-user"
      @click="() => this.$router.push('/admin/districts/create')">
    </button>
  </div>
</template>

<script>
import DistrictsTable from '../../components/DistrictsTable.vue'

export default {
  name: 'DistrictsView',
  components: {
    DistrictsTable,
  },
}
</script>

<style scoped>
button {
  margin-left: 50%;
}
</style>
