<template>
  <router-view></router-view>
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