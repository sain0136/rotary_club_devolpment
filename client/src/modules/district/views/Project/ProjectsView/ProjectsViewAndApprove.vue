<template>
  <div class="container">
    <ClubProjectForm
      v-if="
        projectTypeProp ==
          'Club Project'
      "
      :editOrCreateProp="
        this.editOrCreateProp
      "
      :projectLabel="this.projectLabel"
      :projectIdProp="
        this.projectIdProp
      "
    />
    <DistrictSimplifiedProjectForm
      v-else-if="
        projectTypeProp ==
          'District Simplified Project'
      "
      :isThisEditOrCreateProp="
        this.editOrCreateProp
      "
      :isThisDistrictOrClubProp="
        this.projectLabel
      "
      :projectIdProp="
        this.projectIdProp
      "
    />
    <DistrictMatchingProjectForm
      v-else-if="
        projectTypeProp ==
          'District Matching Project'
      "
      :isThisEditOrCreateProp="
        this.editOrCreateProp
      "
      :isThisDistrictOrClubProp="
        this.projectLabel
      "
      :projectIdProp="
        this.projectIdProp
      "
    />
  </div>
</template>

<script>
import DistrictSimplifiedProjectForm from '../../../../../components/common/Forms/DistrictSimplifiedProjectForm.vue'
import ClubProjectForm from '../../../../../components/common/Forms/ClubProjectForm.vue'
import DistrictMatchingProjectForm from '../../../../../components/common/Forms/DistrictMatchingProjectForm.vue'

export default {
  name: 'ProjectsViewAndApprove',
  components: {
    DistrictMatchingProjectForm,
    ClubProjectForm,
    DistrictSimplifiedProjectForm,
  },
  props: {
    //dtermine v-if for the proper project type
    projectTypeProp: String,
    //determine what project it is by id
    projectIdProp: Number,
    //edit or create explict
    editOrCreateProp: String,
    //label
    projectLabel: String,
  },
}
</script>

<style scoped></style>
