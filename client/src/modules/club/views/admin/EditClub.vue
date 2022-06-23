<template>
  <div>
    <ClubForm
      isEditOrCreate="Edit"
      fromClubEditViewProp="true"
    />
  </div>
</template>

<script>
import ClubForm from '../../../../components/common/Forms/ClubForm.vue'

export default {
  name: 'EditClub',
  components: {
    ClubForm,
  },
}
</script>

<style scooped></style>
