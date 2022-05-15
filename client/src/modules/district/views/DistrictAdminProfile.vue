<template>
<div  class="container">
  
    <DistrictAdminForm
      isEditOrCreate="Edit"
      districtAdminVieWandEdit = "t"
      :district_idDistrictView ="district_idDistrictView"
    />
  
</div>
</template>

<script>
import DistrictAdminForm from '../../admin/components/DistrictAdminForm.vue'

export default {
  name: 'DistrictAdminProfile',
  components: {
        DistrictAdminForm,

  },
  data() {
    return {
    district_idDistrictView: this.$store.state.loggedInDistrictId,
    }
    }
}
</script>

<style scoped>
.container{
    height: 100%;
}
</style>