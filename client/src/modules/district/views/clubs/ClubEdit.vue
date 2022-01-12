<template>
  <div>
    <ClubForm isEditOrCreate="Edit" />
  </div>
</template>

<script>
import ClubForm from '../../components/ClubForm.vue'

export default {
  name: 'ClubEdit',
  components: {
    ClubForm,
  },
}
</script>
