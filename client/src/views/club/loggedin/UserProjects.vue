<template>
  <div>
    <h1>Your Projects</h1> <br>
    <ProjectsTable isClubOrUserProjects = 'User'/>
  </div>
</template>

<script>

import ProjectsTable from '../../../components/tables/ProjectsTable.vue'

export default {
  name: 'UserProjects',
  components: {
    ProjectsTable
  }
}

</script>

<style scoped>



</style>