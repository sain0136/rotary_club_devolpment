<template>
  <div>
    <ClubUserForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import ClubUserForm from '../../components/ClubUserForm.vue'

export default {
  name: 'ClubUserEdit',
  components: {
    ClubUserForm
  }
}

</script>