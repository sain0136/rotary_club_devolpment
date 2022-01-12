<template>
  <div>
    <DistrictAdminForm
      isEditOrCreate="Edit"
    />
  </div>
</template>

<script>
import DistrictAdminForm from '../../components/DistrictAdminForm.vue'

export default {
  name: 'EditDistrictAdmin',
  components: {
    DistrictAdminForm,
  },
}
</script>
