<template>
  <div  class="container">
    
 
<DistrictOrClubProjectForm v-if="projectTypeProp == 1 "
    :editOrCreateProp='this.editOrCreateProp'
    :projectLabel="this.projectLabel"
    :projectIdProp="this.projectIdProp"
    
/> 

 </div>
</template>

<script>
import DistrictOrClubProjectForm from '../../../../components/common/Forms/ClubProjectForm.vue'

export default {
  
  name: "DistrictProjectEditView",
components:{
  DistrictOrClubProjectForm,
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