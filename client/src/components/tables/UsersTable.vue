<template>
  <div class="container">
    <table>
      <th>Member ID</th>
      <th>Club ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Action</th>
      <tr
        v-for="user in users"
        :key="user.user_id">
        <td>{{user.membership_id}}</td>
        <td>{{user.club_id}}</td>
        <td>{{user.firstname}}</td>
        <td>{{user.lastname}}</td>
        <td>{{user.address}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>
          <button @click="deleteUser(user.user_id)">Delete</button>
          <button>Update</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersTable',
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const res = await fetch('/api/user', {method: 'GET'})
      const data = await res.json()
      return data.allUsers
    },
    async deleteUser(userId) {
      const userDeleteVar = await fetch(`/api/user/${userId}`, {method: 'DELETE'})
      this.users = await this.fetchUsers()
    }
  },
  async created() {
    this.users = await this.fetchUsers()
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