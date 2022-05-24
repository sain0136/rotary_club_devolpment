<template>
  <!--  Site Admin view of districts-->
  <div class="district_admin-container">
    <br /><br />
    <h1>ALL DISTRICTS</h1>
    <br />
    <br />
    <DistrictsTable /> <br />
    <br />
    <span
      ><h1>Create a new District:</h1>
    </span>
    <br />
    <br />
    <div class="button-wrapper">
      <button
        name="create"
        class="plus"
        id="create-user"
        @click="
          () =>
            this.$router.push(
              '/admin/districts/create',
            )
        "
      ></button>
    </div>
    <br /><br />
  </div>
</template>

<script>
import DistrictsTable from '../../../../components/common/Tables/DistrictsTable.vue'

export default {
  name: 'SiteAdminAll_DistrictsView',
  components: {
    DistrictsTable,
  },
}
</script>

<style scoped>
/* District View Stylings */
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  text-align: center;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
