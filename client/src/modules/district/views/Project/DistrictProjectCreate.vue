<template>
  <div  class="container">

<DistrictOrClubProjectForm v-if="projectTypeProp == 1"
    :editOrCreateProp="this.editOrCreateProp"
    :projectLabel="this.projectLabel"
/>
  </div>
</template>

<script>
import DistrictOrClubProjectForm from '../../../../components/common/DistrictOrClubProjectForm.vue'
export default {
  name: "ProjectCreateView",
  components:{
  DistrictOrClubProjectForm,
  },
  props:{
    projectTypeProp:Number,
    editOrCreateProp:String,
    projectLabel:String
  }
,
 created() {
    
    console.log(this.projectIdProp + this.editOrCreateProp) // => 2
  }

}
</script>

<style scoped>
.container{
    height: 60%;
}

</style>