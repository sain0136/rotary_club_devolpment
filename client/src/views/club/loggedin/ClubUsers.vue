<template>
  <div>
    <button
        v-if="$store.state.isSiteAdminLoggedIn || $store.state.isClubAdminLoggedIn"
        @click="() => {
          this.$router.push('createclubuser')
        }">
        Create User
      </button>
      <br><br>
    <ClubUsersTable/>
  </div>
</template>

<script>

import ClubUsersTable from '../../../components/tables/ClubUsersTable.vue'

export default {
  name: 'ClubUsers',
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