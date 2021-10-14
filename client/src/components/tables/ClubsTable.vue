<template>
  <div class="container">
    <table>
      <th>Club ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Description</th>
      <th>Actions</th>
      <tr
        v-for="club in clubs"
        :key="club.club_id">
        <td>{{club.club_id}}</td>
        <td>{{club.club_name}}</td>
        <td>{{club.club_address}}</td>
        <td>{{club.club_phone}}</td>
        <td>{{club.club_email}}</td>
        <td>{{club.club_description}}</td>
        <td>
          <button @click="deleteClub(club.club_id)">Delete</button>
          <button>Update</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ClubsTable',
  data() {
    return {
      clubs: []
    }
  },
  methods: {
    async fetchClubs() {
      const res = await fetch('/api/club', {method: 'GET'})
      const data = await res.json()
      return data.clubs
    },
    async deleteClub(clubId) {
      const clubDeleteVal = await fetch(`/api/club/${clubId}`, {method: 'DELETE'})
      this.clubs = await this.fetchClubs()
    }
  },
  async created() {
    this.clubs = await this.fetchClubs()
    console.log(this.users)
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