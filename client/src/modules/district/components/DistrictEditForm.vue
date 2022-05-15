<template>
  <div>
    <DistrictForm
      isEditOrCreate="Edit"
      pageAccessed="District"
   
    />
    </div>
</template>

<script>
import DistrictForm from '../../../components/common/DistrictForm.vue'
export default {
 name: 'DistrictAdminEditForm',
  components: {
    DistrictForm,
  },
}
</script>

<style scoped>

</style>