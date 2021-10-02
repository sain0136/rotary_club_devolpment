<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table key="$store.state.currentDistrictId">
      <th>ID</th>
      <th>District ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Password</th>
      <th>Action</th>
      <tr 
        v-for="admin in admins"
        :key="admin.id">
        <!-- <td>{{admin.districtId}}</td>   -->
        <td>{{admin.id}}</td>
        <td>{{$store.state.currentDistrictId}}</td>
        <td>{{admin.name}}</td>
        <td>{{admin.username}}</td>
        <td>{{admin.password}}</td>

        <td>
          <!-- <router-link 
            :to="`/club/${club.id}/home`" 
            @click="$store.dispatch('changeCurrentClub', club.id)">
          Delete</router-link> -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'DistrictAdminsTable',
  data() {
    return {
      admins: this.fetchAdmins()
    }
  },
  methods: {
    async fetchAdmins() {
      const res = await fetch(
        `/api/districts/${store.state.currentDistrictId}/users`, 
        { method: 'GET'}
      )
      console.log('Fetching: ', store.state.currentDistrictId)
      const data = await res.json()
      return data
    }
  },
  async created() {
    // console.log(await this.fetchClubs()) 
    this.admins = await this.fetchAdmins()
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