<template>
  <div  class="container">
    
 
<DistrictOrClubProjectForm v-if="projectTypeProp == 1 "
    :editOrCreateProp='this.editOrCreateProp'
    :projectLabel="this.projectLabel"
    :projectIdProp="this.projectIdProp"
    
/> 
<DistrictSimplifiedProjectForm v-else-if="projectTypeProp == 2 "
    :isThisEditOrCreateProp='this.editOrCreateProp'
    :isThisDistrictOrClubProp="this.projectLabel"
    :projectIdProp="this.projectIdProp"
    
/> 
 </div>
</template>

<script>
import DistrictOrClubProjectForm from '../../../../components/common/Forms/ClubProjectForm.vue'
import DistrictSimplifiedProjectForm from '../../../../components/common/Forms/DistrictSimplifiedProjectForm.vue'

export default {
  
  name: "DistrictProjectEditView",
  
components:{
  DistrictOrClubProjectForm,
  DistrictSimplifiedProjectForm
  },
  props:{
    //dtermine v-if for the proper project type
    projectTypeProp:Number,
    //determine what project it is by id
    projectIdProp:Number,
    //edit or create explict 
    editOrCreateProp:String,
    //label
    projectLabel:String,
  }
,

}
</script>

<style scoped>
.container{
    height: 60%;
}
</style>