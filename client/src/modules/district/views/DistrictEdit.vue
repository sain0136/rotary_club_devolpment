<template>
  <div>
    <DistrictForm
      isEditOrCreate="Edit"
      pageAccessed="District"
    />
  </div>
</template>

<script>
import DistrictForm from '../../../components/common/Forms/DistrictForm.vue'

export default {
  name: 'DistrictEdit',
  components: {
    DistrictForm,
  },
}
</script>
