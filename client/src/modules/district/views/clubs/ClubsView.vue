<template>
  <div>
    <br><br>
    <DistrictClubsTable/> <br><br>
    <button
      class="plus"
      id="plus-districts"
      v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
      @click="() => {this.$router.push('create')}">
    </button>
  </div>
</template>

<script>
import DistrictClubsTable from '../../components/DistrictClubsTable.vue'

export default {
  name: 'DistrictClubs',
  components: {
    DistrictClubsTable,
  },
}
</script>

<style scoped>

button {
  margin-left: 48%;
}

#plus-districts {
  background-color: #27282d;
  color: #fbefdf;
    margin-top: 3em;
  margin-bottom: 3.5em;
}

</style>
