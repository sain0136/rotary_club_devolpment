<template>
  <div>
    Club {{ this.clubName }} Home
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ClubHome',
  data() {
    return {
      clubName: store.state.currentClubId
    }
  },
  async created() {
    const res = await fetch(
      `/api/districts/${store.state.currentDistrictId}/clubs/${store.state.currentClubId}`,
      { method: 'GET'}
    )
    const data = await res.json()
    this.clubName = data.name
    console.log('Club name: ', this.clubName)
  }
}

</script>