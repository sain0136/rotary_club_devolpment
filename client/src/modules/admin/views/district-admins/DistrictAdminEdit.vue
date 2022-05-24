<template>
  <div>
    <DistrictAdminForm
      isEditOrCreate="Edit"
    />
  </div>
</template>

<script>
import DistrictAdminForm from '../../../../components/common/Forms/DistrictAdminForm.vue'

export default {
  name: 'DistrictAdminEdit',
  components: {
    DistrictAdminForm,
  },
}
</script>
