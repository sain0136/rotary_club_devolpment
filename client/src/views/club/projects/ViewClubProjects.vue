<template>
  <div>
    <h1>Our Projects</h1>
    <br />
    <ProjectsTable
      pageToDisplay="Club"
    />
  </div>
</template>

<script>
import ProjectsTable from '../../../components/tables/ProjectsTable.vue'

export default {
  name: 'ViewClubProjects',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped></style>
