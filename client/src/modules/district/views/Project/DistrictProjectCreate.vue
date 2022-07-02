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
      :isThisDistrictOrClubProp="
        projectLabel
      "
    />
    <DistrictMatchingProjectForm
      v-else-if="projectTypeProp == 3"
      :isThisEditOrCreateProp="
        editOrCreateProp
      "
      :isThisDistrictOrClubProp="
        projectLabel
      "
    />
  </div>
</template>

<script>
import ClubProjectForm from '../../../../components/common/Forms/ClubProjectForm.vue'
import DistrictSimplifiedProjectForm from '../../../../components/common/Forms/DistrictSimplifiedProjectForm.vue'
import DistrictMatchingProjectForm from '../../../../components/common/Forms/DistrictMatchingProjectForm.vue'
export default {
  name: 'DistrictProjectCreateView',
  components: {
    ClubProjectForm,
    DistrictSimplifiedProjectForm,
    DistrictMatchingProjectForm,
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
