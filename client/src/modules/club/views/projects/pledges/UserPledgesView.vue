<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Pledges made by you (
          {{ 
            $store.state.currentClubUserData.user_id
          }}
        )
      </h1>
    </div>
    <br> <br>
    <UserPledgesTable/>
  </div>
</template>

<script>

import UserPledgesTable from '../../../components/UserPledgesTable.vue'

export default {
  name: 'PledgesView',
  components: {
    UserPledgesTable
  },
}
</script>

<style scoped>

</style>
