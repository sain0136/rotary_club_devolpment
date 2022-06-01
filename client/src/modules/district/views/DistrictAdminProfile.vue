<template>
  <div class="district-page-head">
    <h1 class="district-page-title">
      My Profile
    </h1>
  </div>
  <div class="container">
    <DistrictAdminForm
      isEditOrCreate="Edit"
      districtAdminVieWandEdit="t"
      :district_idDistrictView="
        district_idDistrictView
      "
    />
  </div>
</template>

<script>
import DistrictAdminForm from '../../../components/common/Forms/DistrictAdminForm.vue'

export default {
  name: 'DistrictAdminProfile',
  components: {
    DistrictAdminForm,
  },
  data() {
    return {
      district_idDistrictView: this
        .$store.state
        .loggedInDistrictId,
    }
  },
}
</script>

<style scoped>
.container {
  height: 100%;
}
.district-page-head {
  text-align: center;
  background-color: #27282d;
  padding: 50px;
  text-transform: uppercase;
}
.district-page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: whitesmoke;
}
</style>
