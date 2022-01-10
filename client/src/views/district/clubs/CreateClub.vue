<template>
  <div>
    <ClubForm isEditOrCreate="Create" />
  </div>
</template>

<script>
import ClubForm from '../../../components/forms/ClubForm.vue'

export default {
  name: 'CreateClub',
  components: {
    ClubForm,
  },
}
</script>
