<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>Name</th>
      <th>Action</th>
      <tr 
        v-for="user in users"
        :key="user.user_id">
        <td>{{user.user_id}}</td>
        <td>{{user.fullName}}</td>
        <td>
          <button
            @click="deleteUser(user.user_id)">
            Delete
          </button>
          <button
            @click="goToEditUserPage(user.user_id)">
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../../store/index'
import { getAllClubMembers } from '../../../store/api-calls'
 
export default {
  name: 'ClubUsersTable',
  data() {
    return {
      users: Array
    }
  },
  methods: {
    async deleteUser(userId) {
      if(confirm(`Are you sure you want to delete user ${userId}?`)) {
        const res = await fetch(`/api/user/${userId}`, {
          method: 'DELETE'
        })
        this.users = await getAllClubMembers(this.$router.currentRoute.value.params.id)
      }
    },
    async goToEditUserPage(userId) {
      store.dispatch('changeCurrentUserIdToEdit', userId)
      this.$router.push(`${userId}/edit`)
    }
  },
  async created() {
    this.users = await getAllClubMembers(this.$router.currentRoute.value.params.id)
  }
}

</script>

<style scoped>

td {
  width: 25%;
}

table {
  margin: auto;
  font-size: 16px
}

</style>