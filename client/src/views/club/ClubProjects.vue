<template>
  <div>
    <h1>Our Projects</h1> <br>
    <ProjectsTable/>
  </div>
</template>

<script>

import ProjectsTable from '../../components/tables/ProjectsTable.vue'

export default {
  name: 'ClubProjects',
  components: {
    ProjectsTable
  }
}

</script>

<style scoped>



</style>