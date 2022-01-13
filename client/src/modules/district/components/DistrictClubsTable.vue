<template>
  <div class="container">
    <table>
      <th>ID</th>
      <th>Club Name</th>
      <th>Action</th>
      <tr v-for="club in clubs" :key="club.id">
        <td>{{ club.club_id }}</td>
        <td>{{ club.club_name }}</td>
        <td>
          <button
            @click="() => this.$router.push(`/club/${club.club_id}/home`)">
            View
          </button>
          <button
            v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
            @click="deleteClub(club.club_id)">
            Delete
          </button>
          <button
            v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
            @click="() => this.$router.push(`${club.club_id}/edit`)">
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from "../../../store/index"
import club from '../../../api-factory/club'

export default {
  name: "DistrictClubsTable",
  data() {
    return {
      clubs: Array,
    };
  },
  async created() {
    this.clubs = await this.getClubs()
  },
  methods: {
    async getClubs() {
      return await club.index(store.state.currentDistrictData.district_id)
    },

    async deleteClub(clubId) {
      if(confirm(`Are you sure you want to delete club ${clubId}?`)) {
        club.delete(clubId)
        this.clubs = await this.getClubs()
      }
    },
  },
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
