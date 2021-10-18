<template>
  <div>
    <UserForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import UserForm from '../../../components/forms/UserForm.vue'

export default {
  name: 'EditDistrictAdmin',
  components: {
    UserForm
  }
}

</script>