<template>
  <div>
    Edit District
    <DistrictForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import DistrictForm from '../../../components/forms/DistrictForm.vue'

export default {
  name: 'EditDistrict',
  components: {
    DistrictForm
  }
}

</script>