<template>
  <div>
    <NewAdminForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import NewAdminForm from '../../../components/forms/NewAdminForm.vue'

export default {
  name: 'EditDistrictAdmin',
  components: {
    NewAdminForm
  }
}

</script>