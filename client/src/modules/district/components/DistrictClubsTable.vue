<template>
  <div class="container">
    <table>
      <th>ID</th>
      <th>Club Name</th>
      <th>Action</th>
      <tr
        v-for="club in clubs"
        :key="club.id"
      >
        <td>{{ club.club_id }}</td>
        <td>{{ club.club_name }}</td>
        <td>
          <button
            title="View Club"
            class="crud-buttons"
            @click="
              () =>
                this.$router.push(
                  `/club/${club.club_id}/home`,
                )
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="external-link-alt"
            ></font-awesome-icon>
          </button>
          <button
            title="Edit Club"
            class="crud-buttons"
            v-if="
              $store.state
                .isSiteAdminLoggedIn ||
              $store.state
                .isDistrictAdminLoggedIn
            "
            @click="
              () =>
                this.$router.push(
                  `${club.club_id}/edit`,
                )
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="edit"
            ></font-awesome-icon>
          </button>
          <button
            title="Delete Club"
            class="crud-buttons"
            v-if="
              $store.state
                .isSiteAdminLoggedIn ||
              $store.state
                .isDistrictAdminLoggedIn
            "
            @click="
              deleteClub(club.club_id)
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="trash-alt"
            ></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import store from '../../../store/index'
import club from '../../../api-factory/club'

export default {
  name: 'DistrictClubsTable',
  data() {
    return {
      clubs: Array,
    }
  },
  async created() {
    this.clubs = await this.getClubs()
  },
  methods: {
    async getClubs() {
      return await club.index(
        this.$router.currentRoute.value
          .params.id,
      )
    },

    async deleteClub(clubId) {
      if (
        confirm(
          `Are you sure you want to delete club ${clubId}?`,
        )
      ) {
        await club.delete(clubId)
        this.clubs = await this.getClubs()
      }
    },
  },
}
</script>

<style scoped>
td,
th {
  border: 1px solid #b2b2b294;
}
</style>
