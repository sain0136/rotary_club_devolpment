<template>
  <div>
    <ClubForm isEditOrCreate="Create" />
  </div>
</template>

<script>
import ClubForm from '../../components/ClubForm.vue'

export default {
  name: 'ClubCreate',
  components: {
    ClubForm,
  },
}
</script>
