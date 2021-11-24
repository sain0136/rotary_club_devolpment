<template>
  <div>
    <NewClubUserForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import NewClubUserForm from '../../../components/forms/NewClubUserForm.vue'

export default {
  name: 'EditClubUser',
  components: {
    NewClubUserForm
  }
}

</script>