<template>
  <div>
    <NewClubUserForm isEditOrCreate='Create'/>
  </div>
</template>

<script>

import NewClubUserForm from '../../../components/forms/NewClubUserForm.vue'

export default {
  name: 'CreateClubUser',
  components: {
    NewClubUserForm
  }
}

</script>