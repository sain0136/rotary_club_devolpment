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
        <td>Actions</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ClubsTable',
  data() {
    return {
      clubs: this.fetchClubs()
    }
  },
  methods: {
    async fetchClubs() {
      const res = await fetch('/api/club', {method: 'GET'})
      const data = await res.json()
      return data.clubs
    },
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