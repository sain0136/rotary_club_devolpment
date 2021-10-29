<template>
  <div>
    <ClubForm isEditOrCreate='Edit'/>
  </div>
</template>

<script>

import ClubForm from '../../../components/forms/ClubForm.vue'

export default {
  name: 'EditClub',
  components: {
    ClubForm
  }
}

</script>