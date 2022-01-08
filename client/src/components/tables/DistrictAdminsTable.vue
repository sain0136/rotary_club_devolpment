<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>District ID</th>
      <th>Admin Name</th>
      <th>Action</th>
      <tr 
        v-for="admin in admins"
        :key="admin.user_id">
        <td>{{admin.user_id}}</td>
        <td>{{admin.district_id}}</td>
        <td>{{admin.firstname + ' ' + admin.lastname}}</td>
        <td>
          <button
            @click="deleteAdmin(admin.user_id)">
            Delete
          </button>
          <button
            @click="goToEditDistrictAdminPage(admin.user_id)">
            Edit
          </button>
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
      const res = await fetch('/api/user', { method: 'GET'})
      const data = await res.json()

      const allUsers = await data.allUsers
      // const districtAdmins = await allUsers.filter(user => user.role_type == 1)

      return data.allUsers
    },
    async deleteAdmin(userId) {
      if(confirm(`Are you sure you want to delete admin ${userId}?`)) {
        const res = await fetch(`/api/user/${userId}`, {
          method: 'DELETE'
        })
        this.admins = await this.fetchAdmins()
      }
    },
    async goToEditDistrictAdminPage(userId) {
      store.dispatch('changeCurrentUserIdToEdit', userId)
      this.$router.push('edit')
    }
  },
  async created() {
    // console.log(await this.fetchClubs()) 
    this.admins = await this.fetchAdmins()
  }
}

</script>

<style scoped>
/* 
table {
  margin-left: auto;
} */

td {
  width: 25%;
}

table {
  margin: auto;
}

</style>