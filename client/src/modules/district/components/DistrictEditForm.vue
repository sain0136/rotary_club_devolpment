<template>
  <div class="containers">
    <DistrictForm
      isEditOrCreate="Edit"
      pageAccessed="District"
   
    />
    </div>
</template>

<script>
import DistrictForm from '../../../components/common/Forms/DistrictForm.vue'
export default {
 name: 'DistrictAdminEditForm',
  components: {
    DistrictForm,
  },
}
</script>

<style scoped>
.containers{
      position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
}
</style>