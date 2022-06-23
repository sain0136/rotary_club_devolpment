<template>
  <div class="container">
    <ClubProjectForm
      v-if="projectTypeProp == 1"
      :editOrCreateProp="
        this.editOrCreateProp
      "
      :projectLabel="this.projectLabel"
    />
    <DistrictSimplifiedProjectForm
      v-else-if="projectTypeProp == 2"
      :isThisEditOrCreateProp="
        editOrCreateProp
      "
      isThisDistrictOrClubProp="Club"
    />
  </div>
</template>

<script>
import ClubProjectForm from '../../../../components/common/Forms/ClubProjectForm.vue'
import DistrictSimplifiedProjectForm from '../../../../components/common/Forms/DistrictSimplifiedProjectForm.vue'

export default {
  name: 'ClubProjectCreate',
  components: {
    ClubProjectForm,
    DistrictSimplifiedProjectForm,
  },
  props: {
    projectTypeProp: Number,
    editOrCreateProp: String,
    projectLabel: String,
  },
  created() {
    console.log(
      this.projectIdProp +
        this.editOrCreateProp,
    ) // => 2
  },
}
</script>

<style scoped>
.container {
  height: 60%;
}
</style>
