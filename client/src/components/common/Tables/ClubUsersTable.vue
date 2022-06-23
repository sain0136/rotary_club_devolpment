<template>
  <!-- All Users for this club table -->
  <div class="club-users-wrapper">
    <table v-if="clubUsers.length != 0">
      <th>User Name</th>
      <th>User Role</th>
      <th>User Email</th>
      <tr
        id="clubUsers-info"
        v-for="users in clubUsers"
        :key="users"
      >
        <td>
          {{ users.firstname }}
          {{ users.lastname }}
        </td>
        <td>
          {{ users.role[0].club_role }}
        </td>
        <td>
          {{ users.email }}
        </td>
      </tr>
    </table>

    <h1 v-else>No Club Members</h1>
  </div>
</template>

<script>
import clubUserApi from '../../../api-factory/club_user'
export default {
  name: 'ClubUsersTable',
  data() {
    return {
      clubUsers: [],
    }
  },
  props: {
    clubIdProp: String,
  },
  async created() {
    this.clubUsers = await clubUserApi.index(
      this.clubIdProp,
    )
  },
  methods: {},
}
</script>

<style scoped>
/* table styling */
table {
  margin-bottom: 3rem;
}
tr:nth-child(even) {
  background-color: #40688227;
}

th,
td {
  border: 1px solid #4068823b;
}
h1 {
  text-align: center;
}
</style>
