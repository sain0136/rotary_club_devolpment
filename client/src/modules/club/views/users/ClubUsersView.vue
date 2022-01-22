<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Club Users
      </h1>
    </div> <br> <br>
    <ClubUsersTable/> <br>
    <button
      class="plus"
      id="plus-clubs"
      v-if="$store.state.isSiteAdminLoggedIn || 
            $store.state.isClubAdminLoggedIn ||
            $store.state.isDistrictAdminLoggedIn"
      @click="() => this.$router.push('create')">
    </button>
  </div>
</template>

<script>

import ClubUsersTable from '../../components/ClubUsersTable.vue'

export default {
  name: 'ClubUsersView',
  components: {
    ClubUsersTable
  }
}

</script>

<style scoped>

button {
  margin-left: 48%;
}

#plus-clubs {
  background-color: #ffb607;
  color: white;
}

</style>