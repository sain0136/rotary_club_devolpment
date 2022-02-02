<template>
  <div>
    <ClubUserForm 
      pageAccessed='Profile'
      isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import ClubUserForm from '../../components/ClubUserForm.vue'

export default {
  name: 'ClubUserProfile',
  components: {
    ClubUserForm
  }
}

</script>