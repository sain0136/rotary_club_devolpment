<template>
  <div>
    <button
        v-if="$store.state.isSiteAdminLoggedIn || $store.state.isClubAdminLoggedIn"
        @click="() => {
          this.$router.push('create')
        }">
        Create User
      </button>
      <br><br>
    <ClubUsersTable/>
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
  font-size: 14px;
  margin-left: auto;
}

</style>