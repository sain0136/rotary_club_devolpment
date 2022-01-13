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

import district_admin from '../../../api-factory/district_admin'

export default {
  name: 'DistrictAdminsTable',
  data() {
    return {
      admins: []
    }
  },
  async created() {
    this.admins = await district_admin.index()
  },
  methods: {
    async deleteAdmin(userId) {
      if(confirm(`Are you sure you want to delete admin ${userId}?`)) {
        await district_admin.delete(userId)
        this.admins = await district_admin.index()
      }
    },
    async goToEditDistrictAdminPage(userId) {
      this.$router.push(`${userId}/edit`)
    }
  },
  
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