<template>
  <div class="container">
    <DistrictOrClubProjectForm
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
      :isThisDistrictOrClubProp="projectLabel"
    />
  </div>
</template>

<script>
import DistrictOrClubProjectForm from '../../../../components/common/Forms/ClubProjectForm.vue'
import DistrictSimplifiedProjectForm from '../../../../components/common/Forms/DistrictSimplifiedProjectForm.vue'
export default {
  name: 'DistrictProjectCreateView',
  components: {
    DistrictOrClubProjectForm,
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
