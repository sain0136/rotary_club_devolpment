<template>
  <div class="auto-container">
    <h2>
      Club Members
    </h2>
    <hr />
    <br />
    <div>
      <ClubUsersTable
        :clubIdProp="clubId"
      />
    </div>

    <hr />
    <ClubUserForm
      :clubIdProp="clubId"
      isEditOrCreate="Create"
    />
  </div>
</template>

<script>
import ClubUserForm from '../../../../components/common/Forms/ClubUserForm.vue'
import store from '../../../../store/index'
import ClubUsersTable from '../../../../components/common/Tables/ClubUsersTable.vue'
export default {
  name: 'ClubMembers',
  components: {
    ClubUsersTable,
    ClubUserForm,
  },
  data() {
    return {
      clubId: 0,
    }
  },
  created() {
    this.clubId =
      store.state.currentClubData.club_id
  },
}
</script>

<style scoped>
h2 {
  padding-top: 2rem;
  text-transform: capitalize;
  text-align: center;
}
hr {
  border: 0.1em solid #ffb607;
}
</style>
