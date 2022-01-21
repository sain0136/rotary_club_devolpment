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
            class="crud-buttons"
            @click="goToEditUserPage(user.user_id)">
            <font-awesome-icon
              class="social-icon" icon="edit"></font-awesome-icon>
          </button>
          <button
            class="crud-buttons"
            @click="deleteUser(user.user_id)">
            <font-awesome-icon
              class="social-icon" icon="trash-alt"></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../../store/index'

import user from '../../../api-factory/user'
import club_user from '../../../api-factory/club_user'
 
export default {
  name: 'ClubUsersTable',
  data() {
    return {
      users: Array
    }
  },
  async created() {
    this.users = await club_user.index(this.$router.currentRoute.value.params.id)
  },
  methods: {
    async deleteUser(userId) {
      if(confirm(`Are you sure you want to delete user ${userId}?`)) {
        await user.delete(userId)
        this.users = await await club_user.index(this.$router.currentRoute.value.params.id)
      }
    },
    async goToEditUserPage(userId) {
      store.dispatch('changeCurrentUserIdToEdit', userId)
      this.$router.push(`${userId}/edit`)
    }
  },
}

</script>

<style scoped>

table {
  border: 1px solid #b2b2b259;
}

th {
  border: 1px solid #b2b2b2c5;
}

td {
  border: 1px solid #b2b2b294;
  font-family: 'Lato', sans-serif;
  padding: 5px;
}

table {
  margin: auto;
}

th {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
}

td {
  width: 25%;
}

tr:nth-child(even) {
  background-color: #b2b2b249;
}

</style>