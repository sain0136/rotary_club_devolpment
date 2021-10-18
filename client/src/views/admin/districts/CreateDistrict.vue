<template>
  <div>
    <DistrictForm isEditOrCreate='Create'/>
  </div>
</template>

<script>

import DistrictForm from '../../../components/forms/DistrictForm.vue'

export default {
  name: 'NewDistrict',
  components: {
    DistrictForm
  }
}

</script>