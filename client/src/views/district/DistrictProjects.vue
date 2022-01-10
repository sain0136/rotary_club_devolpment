<template>
  <div>
    <h1>All Projects</h1>
    <br />
    <ProjectsTable
      pageToDisplay="District"
    />
  </div>
</template>

<script>
import ProjectsTable from '../../components/tables/ProjectsTable.vue'

export default {
  name: 'DistrictProjects',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
