<template>
  <div>
    <br /><br />
    <DistrictClubsTable /> <br /><br />
    <div class="button-wrapper">
      <button
        class="plus"
        id="plus-districts"
        v-if="
          $store.state
            .isSiteAdminLoggedIn ||
            $store.state
              .isDistrictAdminLoggedIn
        "
        @click="
          () => {
            this.$router.push('create')
          }
        "
      ></button>
    </div>
  </div>
</template>

<script>
import DistrictClubsTable from '../../components/DistrictClubsTable.vue'

export default {
  name: 'DistrictClubs',
  components: {
    DistrictClubsTable,
  },
}
</script>

<style scoped>
/* Plus button styling  */
.button-wrapper {
  margin-bottom: 5rem;
}
button {
  margin-left: 48%;
}

#plus-districts {
  background-color: #27282d;
  color: #fbefdf;
  margin-top: 3em;
  margin-bottom: 3.5em;
}
</style>
