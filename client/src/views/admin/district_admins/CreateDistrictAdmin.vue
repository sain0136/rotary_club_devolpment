<template>
  <div>
    <UserForm isEditOrCreate='Create'/>
  </div>
</template>

<script>

import UserForm from '../../../components/forms/UserForm.vue'

export default {
  name: 'CreateDistrictAdmin',
  components: {
    UserForm
  }
}

</script>