<template>
  <div>
    <ClubForm isEditOrCreate="Edit" />
  </div>
</template>

<script>
import ClubForm from '../../../../components/common/Forms/ClubForm.vue'

export default {
  name: 'ClubEdit',
  components: {
    ClubForm,
  },
}
</script>
