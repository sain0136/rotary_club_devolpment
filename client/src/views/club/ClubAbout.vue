<template>
  <div>
    <h1>About the Club</h1>
    
    {{ this.clubDescription }}
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ClubAbout',
  data() {
    return {
      clubName: '',
      clubDescription: ''
    }
  },
  async created() {
    const clubInfo = await this.fetchClubInfo()
    this.clubDescription = await clubInfo.club_description
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

<style scoped>

div {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
  margin: auto;
}

</style>