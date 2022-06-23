<template>
  <div class="app">
    <div class="auto-container">
      <!-- title -->
      <section class="title">
        <h2>
          Club Memebers
        </h2>
        <hr />
      </section>
      <!--  -->
      <ClubUsersTable
        :clubIdProp="clubIdProp"
      />
      <hr />
      <ClubUserForm
        :clubIdProp="clubIdProp"
        isEditOrCreate="Create"
      />
    </div>
  </div>
</template>

<script>
import ClubUserForm from '../../../../components/common/Forms/ClubUserForm.vue'
import ClubUsersTable from '../../../../components/common/Tables/ClubUsersTable.vue'
export default {
  name: 'userEditApp',
  components: {
    ClubUsersTable,
    ClubUserForm,
  },
  props: {
    clubIdProp: Number,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
/* title */
.title {
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
hr {
  border: 0.1em solid #ffb607;
}
.app {
  min-height: 25rem;
}
</style>
