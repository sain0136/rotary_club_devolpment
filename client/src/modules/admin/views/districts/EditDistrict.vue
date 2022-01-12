<template>
  <div>
    <DistrictForm
      isEditOrCreate="Edit"
      pageAccessed="Admin"
    />
  </div>
</template>

<script>
import DistrictForm from '../../components/DistrictForm.vue'

export default {
  name: 'EditDistrict',
  components: {
    DistrictForm,
  },
}
</script>
