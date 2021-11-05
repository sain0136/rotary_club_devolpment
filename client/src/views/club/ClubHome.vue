<template>
  <div>
    <h1>Club {{ this.clubName }} Home</h1>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ClubHome',
  data() {
    return {
      clubName: '',
    }
  },
  async created() {
    const clubInfo = await this.fetchClubInfo()
    this.clubName = await clubInfo.club_name
  },
  methods: {
    async fetchClubInfo() {
      const res = await fetch(`/api/club/${store.state.currentClubId}`, { 
        method: 'GET'
      })
      const data = await res.json()
      return await data.clubsById
    }
  }
}

</script>