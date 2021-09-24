<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>Club Name</th>
      <th>Action</th>
      <tr 
        v-for="club in clubs"
        :key="club.id">
        <td>{{club.id}}</td>  
        <td>{{club.name}}</td>
        <td>
          <router-link 
            :to="`/club/${club.id}/home`" 
            @click="$store.dispatch('changeCurrentClub', club.id)">
          Go</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'DistrictClubsTable',
  data() {
    return {
      clubs: Array
    }
  },
  methods: {
    async fetchClubs() {
      const res = await fetch(
        `/api/districts/${store.state.currentDistrictId}/clubs`, 
        { method: 'GET'}
      )
      const data = await res.json()
      return data
    }
  },
  async created() {
    console.log(await this.fetchClubs()) 
    this.clubs = await this.fetchClubs()
  }
}

</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 25%;
}

</style>