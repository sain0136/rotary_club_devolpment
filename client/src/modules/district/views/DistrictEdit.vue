<template>
  <div>
    <DistrictForm
      isEditOrCreate="Edit"
    />
  </div>
</template>

<script>
import DistrictForm from '../../../components/common/DistrictForm.vue'

export default {
  name: 'DistrictEdit',
  components: {
    DistrictForm,
  },
}
</script>
