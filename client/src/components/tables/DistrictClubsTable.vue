<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>Club Name</th>
      <th>Action</th>
      <tr v-for="club in clubs" :key="club.id">
        <td>{{ club.club_id }}</td>
        <td>{{ club.club_name }}</td>
        <td>
          <button
            @click="goToClubPage(club.club_id)">
            View
          </button>
          <button
            v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
            @click="deleteClub(club.club_id)">
            Delete
          </button>
          <button
            v-if="$store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn"
            @click="goToEditClubPage(club.club_id)">
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import store from "../../store/index";

export default {
  name: "DistrictClubsTable",
  data() {
    return {
      clubs: Array,
    };
  },
  methods: {
    async fetchClubs() {
      const res = await fetch(`/api/club`, { method: "GET" });
      const data = await res.json();
      const clubs = data.clubs.filter(
        (club) => club.district_id == store.state.currentDistrictId
      );
      return clubs;
    },
    goToClubPage(clubId) {
      store.dispatch('changeCurrentClub', clubId)
      this.$router.push(`/club`)
    },
    goToEditClubPage(clubId) {
      store.dispatch('changeCurrentClub', clubId)
      this.$router.push(`${clubId}/edit`)
    },
    async deleteClub(clubId) {
      if(confirm(`Are you sure you want to delete club ${clubId}?`)) {
        const res = await fetch(`/api/club/${clubId}`, {
          method: 'DELETE'
        })
        this.clubs = await this.fetchClubs()
      }
    }
  },
  async created() {
    console.log(await this.fetchClubs());
    this.clubs = await this.fetchClubs();
  },
};
</script>

<style scoped>
table {
  margin: auto;
}

td {
  width: 25%;
}
</style>
