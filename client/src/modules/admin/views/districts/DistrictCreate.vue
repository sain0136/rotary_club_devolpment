<template>
  <div>
    <DistrictForm
      isEditOrCreate="Create"
      pageAccessed="Admin"
    />
  </div>
</template>

<script>
import DistrictForm from '../../../../components/common/Forms/DistrictForm.vue'

export default {
  name: 'DistrictCreate',
  components: {
    DistrictForm,
  },
}
</script>
