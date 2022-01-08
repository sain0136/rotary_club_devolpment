<template>
  <div>
    <h1>Your Projects</h1> <br>
    <ProjectsTable pageToDisplay='User'/>
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