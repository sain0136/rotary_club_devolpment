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
import ProjectsTable from '../../../../components/common/ProjectsTable.vue'

export default {
  name: 'ClubProjectsView',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped></style>
