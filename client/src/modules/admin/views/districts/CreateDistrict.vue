<template>
  <div>
    <DistrictForm
      isEditOrCreate="Create"
      pageAccessed="Admin"
    />
  </div>
</template>

<script>
import DistrictForm from '../../components/DistrictForm.vue'

export default {
  name: 'NewDistrict',
  components: {
    DistrictForm,
  },
}
</script>
