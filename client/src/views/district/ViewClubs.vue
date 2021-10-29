<template>
  <div>
    <button
        v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
        @click="() => {
          this.$router.push('createclub')
        }">
        Create District
      </button>
      <br><br>
    <DistrictClubsTable/>
  </div>
</template>

<script>

import DistrictClubsTable from '../../components/tables/DistrictClubsTable.vue'

export default {
  name: 'DistrictClubs',
  components: {
    DistrictClubsTable
  }
}
</script>

<style scoped>

button {
  margin-left: 48%;
}

</style>