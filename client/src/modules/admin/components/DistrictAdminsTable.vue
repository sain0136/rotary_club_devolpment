<template>
  <div class="admin-container">
    <table v-if="admins.length != 0">
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
            title="Edit Admin"
            class="crud-buttons"
            id="edit"
            @click="goToEditDistrictAdminPage(admin.user_id)">
            <font-awesome-icon
              class="social-icon" icon="edit"></font-awesome-icon>
          </button>
          <button
            title="Delete Admin"
            class="crud-buttons"
            id="delete"
            @click="deleteAdmin(admin.user_id)">
            <font-awesome-icon
            class="social-icon" icon="trash-alt"></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>
    <legend class="table-title" v-else>No district admin to display!</legend>
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
        try {
          await district_admin.delete(userId)
        } catch(err) {
          alert(err)
        }
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

tr:nth-child(even) {
  background-color: #40688227;
}

th, td {
  border: 1px solid #4068823b;
}

</style>