<template>
  <div>
    <DistrictAdminForm
      isEditOrCreate="Create"
    />
  </div>
</template>

<script>
import DistrictAdminForm from '../../components/DistrictAdminForm.vue'

export default {
  name: 'DistrictAdminCreate',
  components: {
    DistrictAdminForm,
  },
}
</script>
