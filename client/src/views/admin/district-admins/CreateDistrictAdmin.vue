<template>
  <div>
    <NewAdminForm
      isEditOrCreate="Create"
    />
  </div>
</template>

<script>
import NewAdminForm from '../../../components/forms/NewAdminForm.vue'

export default {
  name: 'CreateDistrictAdmin',
  components: {
    NewAdminForm,
  },
}
</script>
