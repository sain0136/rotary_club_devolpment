<template>
  <div>
    <button
      @click="
        () => {
          this.$router.push(
            '/admin/districts/create',
          )
        }
      "
    >
      Create District
    </button>
    <br /><br />
    <DistrictsTable />
  </div>
</template>

<script>
import DistrictsTable from '../../../components/tables/DistrictsTable.vue'

export default {
  name: 'ViewDistricts',
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
