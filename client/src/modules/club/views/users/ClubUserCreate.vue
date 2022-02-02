<template>
  <div>
    <ClubUserForm 
      pageAccessed='Admin'
      isEditOrCreate='Create'/>
  </div>
</template>

<script>

import ClubUserForm from '../../components/ClubUserForm.vue'

export default {
  name: 'ClubUserCreate',
  components: {
    ClubUserForm
  }
}

</script>